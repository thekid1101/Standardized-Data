const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
require('dotenv').config();

// Initialize Prisma client differently to avoid initialization issues
let prisma;
try {
  const { PrismaClient } = require('@prisma/client');
  prisma = new PrismaClient({
    log: ['warn', 'error'],
    errorFormat: 'pretty',
  });
  console.log('Prisma client initialized successfully');
} catch (error) {
  console.error('Failed to initialize Prisma client:', error);
  process.exit(1);
}

// Constants - use environment variable with fallback
// Detect platform and use appropriate path
const isWindows = process.platform === 'win32';
const DATA_DIR = process.env.DATA_DIR || 
  (isWindows 
    ? path.resolve('C:\\Users\\johnn\\Documents\\Standardized Data')
    : path.resolve('/mnt/c/Users/johnn/Documents/Standardized Data'));

console.log('Platform detected:', process.platform);
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE || '100', 10); // Process this many rows before committing

// Configure CSV file patterns
const FILE_PATTERNS = {
  gameLog: /(\d{4})-Advanced-Gamelog-Standardized\.csv/,
  pbp: /(\d{4})-Advanced-PBP-Data-Standardized\.csv/,
  roster: /(\d{4})-Weekly-Roster-Key-Standardized\.csv/
};

// Helper function to read a CSV file and return the rows
async function readCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    
    // Check if file exists first
    if (!fs.existsSync(filePath)) {
      return reject(new Error(`File not found: ${filePath}`));
    }
    
    fs.createReadStream(filePath, { encoding: 'utf8' })
      .on('error', (error) => {
        console.error(`Error reading file ${filePath}:`, error);
        reject(error);
      })
      .pipe(csv({ 
        strict: true,
        mapHeaders: ({ header }) => header.trim().toLowerCase()
      }))
      .on('data', (data) => {
        // Basic validation - ensure object has keys
        if (Object.keys(data).length > 0) {
          results.push(data);
        } else {
          console.warn('Skipping empty row in CSV');
        }
      })
      .on('end', () => {
        console.log(`Successfully read ${results.length} rows from ${path.basename(filePath)}`);
        resolve(results);
      })
      .on('error', (error) => {
        console.error(`Error parsing CSV ${filePath}:`, error);
        reject(error);
      });
  });
}

// Helper function to safely parse numeric values
function safeParseInt(value, defaultValue = null) {
  if (value === undefined || value === null || value === '') return defaultValue;
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
}

function safeParseFloat(value, defaultValue = null) {
  if (value === undefined || value === null || value === '') return defaultValue;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? defaultValue : parsed;
}

// Helper function to safely parse boolean values
function safeParseBoolean(value) {
  if (value === undefined || value === null) return null;
  return value === 'true' || value === '1' || value === 'yes' || value === 'y' || value === true;
}

// Process team data from game logs
async function processTeams() {
  console.log('Processing teams...');
  
  // Find all game log files
  const files = fs.readdirSync(DATA_DIR)
    .filter(file => FILE_PATTERNS.gameLog.test(file))
    .map(file => path.join(DATA_DIR, file));
  
  if (files.length === 0) {
    console.log('No game log files found');
    return;
  }

  const teams = new Set();
  
  // Process each file
  for (const file of files) {
    console.log(`Reading teams from ${path.basename(file)}`);
    const rows = await readCSV(file);
    
    // Extract unique team codes
    rows.forEach(row => {
      if (row.home_team) teams.add(row.home_team);
      if (row.away_team) teams.add(row.away_team);
    });
  }
  
  console.log(`Found ${teams.size} unique teams`);
  
  // Insert teams in batches
  const teamArray = Array.from(teams).map(code => ({ 
    code,
    name: null,
    conference: null,
    division: null
  }));
  
  // Use batching to avoid long transactions
  for (let i = 0; i < teamArray.length; i += BATCH_SIZE) {
    const batch = teamArray.slice(i, i + BATCH_SIZE);
    try {
      console.log(`Inserting team batch ${i + 1} to ${i + batch.length} of ${teamArray.length}`);
      
      await prisma.$transaction(
        batch.map(team => 
          prisma.team.upsert({
            where: { code: team.code },
            update: {},
            create: team
          })
        )
      );
      
      console.log(`Successfully inserted batch ${i + 1} to ${i + batch.length}`);
    } catch (error) {
      console.error(`Error inserting team batch ${i + 1} to ${i + batch.length}:`, error);
    }
  }
  
  console.log('Team processing complete');
}

// Process players and weekly roster data
async function processRosterFiles() {
  console.log('Processing roster files...');
  
  // Find all roster files
  const files = fs.readdirSync(DATA_DIR)
    .filter(file => FILE_PATTERNS.roster.test(file))
    .map(file => path.join(DATA_DIR, file));
  
  if (files.length === 0) {
    console.log('No roster files found');
    return;
  }
  
  const players = new Map();
  const rosters = [];
  
  // Process each file
  for (const file of files) {
    const season = parseInt(path.basename(file).match(FILE_PATTERNS.roster)[1], 10);
    console.log(`Reading roster data for season ${season} from ${path.basename(file)}`);
    
    const rows = await readCSV(file);
    
    // Process in smaller batches to avoid long transactions
    for (let batchStart = 0; batchStart < rows.length; batchStart += BATCH_SIZE) {
      try {
        const batchEnd = Math.min(batchStart + BATCH_SIZE, rows.length);
        console.log(`Processing batch ${batchStart + 1} to ${batchEnd} of ${rows.length}`);
        
        // Process rows in this batch
        const batchRows = rows.slice(batchStart, batchEnd);
        
        for (const row of batchRows) {
          // Extract player info
          const playerId = row.player_id;
          
          if (!playerId) {
            console.warn('Found row without player_id, skipping');
            continue;
          }
          
          // Add to players map if not already there
          if (!players.has(playerId)) {
            players.set(playerId, {
              id: playerId,
              name: row.player_name || 'Unknown',
              position: row.position || null,
              dob: null, // Date of birth not in data
            });
          }
          
          // Create roster entry
          rosters.push({
            playerId,
            week: parseInt(row.week || '0', 10),
            season,
            team: row.team,
            jerseyNumber: row.jersey_number ? parseInt(row.jersey_number, 10) : null,
            position: row.position || null
          });
        }
      } catch (error) {
        console.error(`Error processing roster batch ${batchStart + 1} to ${batchStart + BATCH_SIZE}:`, error);
      }
    }
  }
  
  console.log(`Found ${players.size} unique players and ${rosters.length} roster entries`);
  
  // Insert players in batches
  const playerArray = Array.from(players.values());
  
  for (let i = 0; i < playerArray.length; i += BATCH_SIZE) {
    const batch = playerArray.slice(i, i + BATCH_SIZE);
    try {
      console.log(`Inserting player batch ${i + 1} to ${i + batch.length} of ${playerArray.length}`);
      
      await prisma.$transaction(
        batch.map(player => 
          prisma.player.upsert({
            where: { id: player.id },
            update: {},
            create: player
          })
        )
      );
      
      console.log(`Successfully inserted player batch ${i + 1} to ${i + batch.length}`);
    } catch (error) {
      console.error(`Error inserting player batch ${i + 1} to ${i + batch.length}:`, error);
    }
  }
  
  // Insert roster entries in batches
  for (let i = 0; i < rosters.length; i += BATCH_SIZE) {
    const batch = rosters.slice(i, i + BATCH_SIZE);
    try {
      console.log(`Inserting roster batch ${i + 1} to ${i + batch.length} of ${rosters.length}`);
      
      // For each roster entry, do an upsert to handle potential duplicates
      await prisma.$transaction(
        batch.map(roster => 
          prisma.weeklyRoster.upsert({
            where: {
              playerId_week_season_team: {
                playerId: roster.playerId,
                week: roster.week,
                season: roster.season,
                team: roster.team
              }
            },
            update: {
              jerseyNumber: roster.jerseyNumber,
              position: roster.position
            },
            create: roster
          })
        )
      );
      
      console.log(`Successfully inserted roster batch ${i + 1} to ${i + batch.length}`);
    } catch (error) {
      console.error(`Error inserting roster batch ${i + 1} to ${i + batch.length}:`, error);
    }
  }
  
  console.log('Roster processing complete');
}

// Process game log data
async function processGameLogFiles() {
  console.log('Processing game log files...');
  
  // Find all game log files
  const files = fs.readdirSync(DATA_DIR)
    .filter(file => FILE_PATTERNS.gameLog.test(file))
    .map(file => path.join(DATA_DIR, file));
  
  if (files.length === 0) {
    console.log('No game log files found');
    return;
  }
  
  const games = new Map();
  const playerGameStats = [];
  
  // Process each file
  for (const file of files) {
    try {
      const match = path.basename(file).match(FILE_PATTERNS.gameLog);
      if (!match || !match[1]) {
        console.warn(`Invalid filename format: ${file}, skipping`);
        continue;
      }
      
      const season = parseInt(match[1], 10);
      if (isNaN(season)) {
        console.warn(`Invalid season in filename: ${file}, skipping`);
        continue;
      }
      
      console.log(`Reading game log data for season ${season} from ${path.basename(file)}`);
      let rows;
      
      try {
        rows = await readCSV(file);
      } catch (error) {
        console.error(`Error reading CSV file ${file}:`, error);
        continue; // Skip this file but continue with others
      }
      
      // Process in batches
      for (let batchStart = 0; batchStart < rows.length; batchStart += BATCH_SIZE) {
        try {
          const batchEnd = Math.min(batchStart + BATCH_SIZE, rows.length);
          console.log(`Processing batch ${batchStart + 1} to ${batchEnd} of ${rows.length}`);
          
          const batchRows = rows.slice(batchStart, batchEnd);
          
          for (const row of batchRows) {
            // Extract game info
            const gameKey = row.game_key;
            
            if (!gameKey) {
              console.warn('Found row without game_key, skipping');
              continue;
            }
            
            // Add to games map if not already there
            if (!games.has(gameKey)) {
              let gameDate;
              try {
                gameDate = row.game_date ? new Date(row.game_date) : new Date();
                // Validate the date is valid
                if (isNaN(gameDate.getTime())) {
                  console.warn(`Invalid date format for game ${gameKey}: ${row.game_date}, using current date`);
                  gameDate = new Date();
                }
              } catch (error) {
                console.warn(`Error parsing date for game ${gameKey}: ${error.message}, using current date`);
                gameDate = new Date();
              }
              
              games.set(gameKey, {
                key: gameKey,
                week: safeParseInt(row.week, 0),
                season,
                gameDate,
                homeTeam: row.home_team || 'UNK',
                awayTeam: row.away_team || 'UNK',
                homeScore: safeParseInt(row.home_score),
                awayScore: safeParseInt(row.away_score),
                stadium: row.stadium || null,
                surface: row.surface || null,
                weather: row.weather || null
              });
            }
            
            // Create player game stat entry
            const playerId = row.player_id;
            
            if (playerId) {
              playerGameStats.push({
                playerId,
                gameKey,
                team: row.team || 'UNK',
                position: row.position || null,
                snaps: safeParseInt(row.snaps),
                snapShare: safeParseFloat(row.snap_share),
                fantasyPoints: safeParseFloat(row.fantasy_points),
                
                // Pass stats
                passAttempts: safeParseInt(row.pass_attempts),
                completions: safeParseInt(row.completions),
                passYards: safeParseInt(row.pass_yards),
                passTDs: safeParseInt(row.pass_tds),
                interceptions: safeParseInt(row.interceptions),
                
                // Rush stats
                carries: safeParseInt(row.carries),
                rushYards: safeParseInt(row.rush_yards),
                rushTDs: safeParseInt(row.rush_tds),
                
                // Receiving stats
                targets: safeParseInt(row.targets),
                receptions: safeParseInt(row.receptions),
                receivingYards: safeParseInt(row.receiving_yards),
                receivingTDs: safeParseInt(row.receiving_tds),
                airYards: safeParseInt(row.air_yards),
                
                // Additional stats
                scrimmageYards: safeParseInt(row.scrimmage_yards),
                totalTDs: safeParseInt(row.total_tds),
                totalTouches: safeParseInt(row.total_touches),
                opportunities: safeParseInt(row.opportunities),
                evadedTackles: safeParseInt(row.evaded_tackles),
                yardsCreated: safeParseInt(row.yards_created),
                
                // Efficiency metrics
                yardsPerCarry: safeParseFloat(row.yards_per_carry),
                yardsPerTarget: safeParseFloat(row.yards_per_target),
                yardsPerReception: safeParseFloat(row.yards_per_reception),
              });
            }
          }
        } catch (error) {
          console.error(`Error processing game log batch ${batchStart + 1} to ${batchStart + BATCH_SIZE}:`, error);
        }
      }
    } catch (error) {
      console.error(`Error processing file ${file}:`, error);
    }
  }
  
  console.log(`Found ${games.size} unique games and ${playerGameStats.length} player game stats`);
  
  // Insert games in batches
  const gameArray = Array.from(games.values());
  
  for (let i = 0; i < gameArray.length; i += BATCH_SIZE) {
    const batch = gameArray.slice(i, i + BATCH_SIZE);
    try {
      console.log(`Inserting game batch ${i + 1} to ${i + batch.length} of ${gameArray.length}`);
      
      await prisma.$transaction(
        batch.map(game => 
          prisma.game.upsert({
            where: { key: game.key },
            update: {},
            create: game
          })
        )
      );
      
      console.log(`Successfully inserted game batch ${i + 1} to ${i + batch.length}`);
    } catch (error) {
      console.error(`Error inserting game batch ${i + 1} to ${i + batch.length}:`, error);
    }
  }
  
  // Insert player game stats in batches
  for (let i = 0; i < playerGameStats.length; i += BATCH_SIZE) {
    const batch = playerGameStats.slice(i, i + BATCH_SIZE);
    try {
      console.log(`Inserting player game stats batch ${i + 1} to ${i + batch.length} of ${playerGameStats.length}`);
      
      await prisma.$transaction(
        batch.map(stat => 
          prisma.playerGameStat.upsert({
            where: {
              playerId_gameKey: {
                playerId: stat.playerId,
                gameKey: stat.gameKey
              }
            },
            update: {
              team: stat.team,
              position: stat.position,
              snaps: stat.snaps,
              snapShare: stat.snapShare,
              fantasyPoints: stat.fantasyPoints,
              passAttempts: stat.passAttempts,
              completions: stat.completions,
              passYards: stat.passYards,
              passTDs: stat.passTDs,
              interceptions: stat.interceptions,
              carries: stat.carries,
              rushYards: stat.rushYards,
              rushTDs: stat.rushTDs,
              targets: stat.targets,
              receptions: stat.receptions,
              receivingYards: stat.receivingYards,
              receivingTDs: stat.receivingTDs,
              airYards: stat.airYards,
              scrimmageYards: stat.scrimmageYards,
              totalTDs: stat.totalTDs,
              totalTouches: stat.totalTouches,
              opportunities: stat.opportunities,
              evadedTackles: stat.evadedTackles,
              yardsCreated: stat.yardsCreated,
              yardsPerCarry: stat.yardsPerCarry,
              yardsPerTarget: stat.yardsPerTarget,
              yardsPerReception: stat.yardsPerReception
            },
            create: stat
          })
        )
      );
      
      console.log(`Successfully inserted player game stats batch ${i + 1} to ${i + batch.length}`);
    } catch (error) {
      console.error(`Error inserting player game stats batch ${i + 1} to ${i + batch.length}:`, error);
    }
  }
  
  console.log('Game log processing complete');
}

// Process play-by-play data
async function processPBPFiles() {
  console.log('Processing play-by-play files...');
  
  // Find all PBP files
  const files = fs.readdirSync(DATA_DIR)
    .filter(file => FILE_PATTERNS.pbp.test(file))
    .map(file => path.join(DATA_DIR, file));
  
  if (files.length === 0) {
    console.log('No play-by-play files found');
    return;
  }
  
  const plays = new Map();
  const playPlayers = [];
  
  // Process each file
  for (const file of files) {
    const season = parseInt(path.basename(file).match(FILE_PATTERNS.pbp)[1], 10);
    console.log(`Reading play-by-play data for season ${season} from ${path.basename(file)}`);
    
    const rows = await readCSV(file);
    
    // Process in batches
    for (let batchStart = 0; batchStart < rows.length; batchStart += BATCH_SIZE) {
      try {
        const batchEnd = Math.min(batchStart + BATCH_SIZE, rows.length);
        console.log(`Processing batch ${batchStart + 1} to ${batchEnd} of ${rows.length}`);
        
        const batchRows = rows.slice(batchStart, batchEnd);
        
        for (const row of batchRows) {
          // Extract play info
          const playId = row.play_id;
          const gameKey = row.game_key;
          
          if (!playId || !gameKey) {
            console.warn('Found row without play_id or game_key, skipping');
            continue;
          }
          
          // Add to plays map if not already there
          if (!plays.has(playId)) {
            plays.set(playId, {
              id: playId,
              gameKey,
              week: parseInt(row.week || '0', 10),
              quarter: row.quarter ? parseInt(row.quarter, 10) : null,
              minutes: row.minutes ? parseInt(row.minutes, 10) : null,
              seconds: row.seconds ? parseInt(row.seconds, 10) : null,
              down: row.down ? parseInt(row.down, 10) : null,
              yardsToGo: row.yards_to_go ? parseInt(row.yards_to_go, 10) : null,
              offTeam: row.off_team,
              defTeam: row.def_team,
              playType: row.play_type || null,
              
              // Play details
              yardsGained: row.yards_gained ? parseInt(row.yards_gained, 10) : null,
              isFirstDown: row.is_first_down === 'true' || row.is_first_down === '1',
              redZone: row.red_zone === 'true' || row.red_zone === '1',
              passPlay: row.pass_play === 'true' || row.pass_play === '1',
              runPlay: row.run_play === 'true' || row.run_play === '1',
              touchdown: row.touchdown === 'true' || row.touchdown === '1',
              turnover: row.turnover === 'true' || row.turnover === '1'
            });
          }
          
          // Add play players
          // Check for key players involved in the play
          const playerRoles = [
            { role: 'qb', id: row.qb_id },
            { role: 'rb1', id: row.rb1_id },
            { role: 'rb2', id: row.rb2_id },
            { role: 'wr1', id: row.wr1_id },
            { role: 'wr2', id: row.wr2_id },
            { role: 'wr3', id: row.wr3_id },
            { role: 'te1', id: row.te1_id },
            { role: 'te2', id: row.te2_id }
          ];
          
          // Add entries for each player involved
          for (const { role, id } of playerRoles) {
            if (id) {
              playPlayers.push({
                playId,
                playerId: id,
                role,
                
                // Role-specific stats - these would need to be mapped from the CSV
                airYards: row[`${role}_air_yards`] ? parseInt(row[`${role}_air_yards`], 10) : null,
                yardsGained: row[`${role}_yards_gained`] ? parseInt(row[`${role}_yards_gained`], 10) : null,
                targeted: row[`${role}_targeted`] === 'true' || row[`${role}_targeted`] === '1',
                completed: row[`${role}_completed`] === 'true' || row[`${role}_completed`] === '1',
                routeType: row[`${role}_route_type`] || null,
                coverage: row[`${role}_coverage`] || null,
                cushion: row[`${role}_cushion`] ? parseFloat(row[`${role}_cushion`]) : null
              });
            }
          }
        }
      } catch (error) {
        console.error(`Error processing PBP batch ${batchStart + 1} to ${batchStart + BATCH_SIZE}:`, error);
      }
    }
  }
  
  console.log(`Found ${plays.size} unique plays and ${playPlayers.length} play-player relationships`);
  
  // Insert plays in batches
  const playArray = Array.from(plays.values());
  
  for (let i = 0; i < playArray.length; i += BATCH_SIZE) {
    const batch = playArray.slice(i, i + BATCH_SIZE);
    try {
      console.log(`Inserting play batch ${i + 1} to ${i + batch.length} of ${playArray.length}`);
      
      await prisma.$transaction(
        batch.map(play => 
          prisma.play.upsert({
            where: { id: play.id },
            update: {},
            create: play
          })
        )
      );
      
      console.log(`Successfully inserted play batch ${i + 1} to ${i + batch.length}`);
    } catch (error) {
      console.error(`Error inserting play batch ${i + 1} to ${i + batch.length}:`, error);
    }
  }
  
  // Insert play-player relationships in batches
  for (let i = 0; i < playPlayers.length; i += BATCH_SIZE) {
    const batch = playPlayers.slice(i, i + BATCH_SIZE);
    try {
      console.log(`Inserting play-player batch ${i + 1} to ${i + batch.length} of ${playPlayers.length}`);
      
      await prisma.$transaction(
        batch.map(pp => 
          prisma.playPlayer.upsert({
            where: {
              playId_playerId_role: {
                playId: pp.playId,
                playerId: pp.playerId,
                role: pp.role
              }
            },
            update: {
              airYards: pp.airYards,
              yardsGained: pp.yardsGained,
              targeted: pp.targeted,
              completed: pp.completed,
              routeType: pp.routeType,
              coverage: pp.coverage,
              cushion: pp.cushion
            },
            create: pp
          })
        )
      );
      
      console.log(`Successfully inserted play-player batch ${i + 1} to ${i + batch.length}`);
    } catch (error) {
      console.error(`Error inserting play-player batch ${i + 1} to ${i + batch.length}:`, error);
    }
  }
  
  console.log('Play-by-play processing complete');
}

// Validate environment and files before starting
async function validateEnvironment() {
  console.log('Validating environment...');
  
  // Check if data directory exists
  if (!fs.existsSync(DATA_DIR)) {
    throw new Error(`Data directory not found: ${DATA_DIR}`);
  }
  
  // Check for required files
  const files = fs.readdirSync(DATA_DIR);
  
  // Need at least one file of each type
  const hasGamelog = files.some(file => FILE_PATTERNS.gameLog.test(file));
  const hasPBP = files.some(file => FILE_PATTERNS.pbp.test(file));
  const hasRoster = files.some(file => FILE_PATTERNS.roster.test(file));
  
  if (!hasGamelog) {
    console.warn('WARNING: No gamelog files found matching pattern');
  }
  
  if (!hasPBP) {
    console.warn('WARNING: No play-by-play files found matching pattern');
  }
  
  if (!hasRoster) {
    console.warn('WARNING: No roster files found matching pattern');
  }
  
  // Check database connection
  try {
    await prisma.$connect();
    console.log('Successfully connected to database');
  } catch (error) {
    throw new Error(`Failed to connect to database: ${error.message}`);
  }
  
  console.log('Environment validation complete');
}

// Main function to run all data import processes
async function importData() {
  console.log('Starting data import process...');
  console.log(`Using data directory: ${DATA_DIR}`);
  console.log(`Batch size: ${BATCH_SIZE}`);
  
  try {
    // Validate environment first
    await validateEnvironment();
    
    // Create an array to store any errors that occur during processing
    const errors = [];
    
    // Process in a specific order to maintain referential integrity
    console.log('\n=== STEP 1: Processing teams ===');
    try {
      await processTeams();
    } catch (error) {
      errors.push(`Team processing error: ${error.message}`);
      console.error('Error during team processing:', error);
    }
    
    console.log('\n=== STEP 2: Processing players and rosters ===');
    try {
      await processRosterFiles();
    } catch (error) {
      errors.push(`Roster processing error: ${error.message}`);
      console.error('Error during roster processing:', error);
    }
    
    console.log('\n=== STEP 3: Processing game logs ===');
    try {
      await processGameLogFiles();
    } catch (error) {
      errors.push(`Game log processing error: ${error.message}`);
      console.error('Error during game log processing:', error);
    }
    
    console.log('\n=== STEP 4: Processing play-by-play data ===');
    try {
      await processPBPFiles();
    } catch (error) {
      errors.push(`Play-by-play processing error: ${error.message}`);
      console.error('Error during play-by-play processing:', error);
    }
    
    // Report results
    if (errors.length > 0) {
      console.log('\n=== IMPORT COMPLETED WITH ERRORS ===');
      console.log(`Encountered ${errors.length} errors during import:`);
      errors.forEach((err, i) => console.log(`${i + 1}. ${err}`));
    } else {
      console.log('\n=== IMPORT COMPLETED SUCCESSFULLY ===');
    }
    
    // Print database stats
    try {
      const [teamCount, playerCount, gameCount, playCount] = await Promise.all([
        prisma.team.count(),
        prisma.player.count(),
        prisma.game.count(),
        prisma.play.count()
      ]);
      
      console.log('\nDatabase statistics:');
      console.log(`- Teams: ${teamCount}`);
      console.log(`- Players: ${playerCount}`);
      console.log(`- Games: ${gameCount}`);
      console.log(`- Plays: ${playCount}`);
    } catch (error) {
      console.error('Error retrieving database statistics:', error);
    }
    
  } catch (error) {
    console.error('Fatal error during data import:', error);
  } finally {
    console.log('\nDisconnecting from database...');
    await prisma.$disconnect();
    console.log('Database connection closed');
  }
}

// Graceful shutdown handler
process.on('SIGINT', async () => {
  console.log('\nReceived SIGINT. Shutting down gracefully...');
  await prisma.$disconnect();
  process.exit(0);
});

// Run the import process
importData().catch(e => {
  console.error('Unhandled error in import process:', e);
  prisma.$disconnect();
  process.exit(1);
});