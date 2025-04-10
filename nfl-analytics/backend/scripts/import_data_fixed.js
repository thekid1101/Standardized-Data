// Import data script with proper game key handling
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
require('dotenv').config();

// Import Prisma from the generated path
const { PrismaClient } = require('../src/generated/prisma');
const prisma = new PrismaClient({
  log: ['error', 'warn'],
});

// Constants
const DATA_DIR = process.env.DATA_DIR;
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE || '100', 10);

// Configure CSV file patterns
const FILE_PATTERNS = {
  gameLog: /(\d{4})-Advanced-Gamelog-Standardized\.csv/,
  pbp: /(\d{4})-Advanced-PBP-Data-Standardized\.csv/,
  roster: /(\d{4})-Weekly-Roster-Key-Standardized\.csv/
};

// Store game mappings for later reference
const gameKeyMappings = new Map();

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
      .pipe(csv())
      .on('data', (data) => {
        results.push(data);
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

// Process teams data from all files
async function processTeams() {
  console.log('Processing teams...');
  
  const teams = new Set();
  
  // Extract teams from all file types
  const allFiles = fs.readdirSync(DATA_DIR)
    .filter(file => 
      FILE_PATTERNS.gameLog.test(file) || 
      FILE_PATTERNS.pbp.test(file) || 
      FILE_PATTERNS.roster.test(file)
    )
    .map(file => path.join(DATA_DIR, file));
  
  for (const file of allFiles) {
    try {
      console.log(`Reading teams from ${path.basename(file)}`);
      const rows = await readCSV(file);
      
      rows.forEach(row => {
        // Check for team info in different files
        if (row.team) teams.add(row.team);
        if (row.opponent) teams.add(row.opponent);
        if (row.off_team) teams.add(row.off_team);
        if (row.def_team) teams.add(row.def_team);
        if (row.home_team) teams.add(row.home_team);
        if (row.away_team) teams.add(row.away_team);
      });
    } catch (error) {
      console.error(`Error processing file for teams ${file}:`, error);
    }
  }
  
  console.log(`Found ${teams.size} unique teams`);
  
  // Insert teams
  for (const teamCode of teams) {
    try {
      // Skip empty or invalid team codes
      if (!teamCode || teamCode === '' || teamCode === '_') continue;
      
      await prisma.team.upsert({
        where: { code: teamCode },
        update: {},
        create: {
          code: teamCode,
          name: null,
          conference: null,
          division: null
        }
      });
      console.log(`Inserted team: ${teamCode}`);
    } catch (error) {
      console.error(`Error inserting team ${teamCode}:`, error);
    }
  }
  
  console.log('Team processing complete');
}

// Process player data from all files
async function processPlayers() {
  console.log('Processing players...');
  
  const players = new Map();
  
  // Process all files
  const allFiles = fs.readdirSync(DATA_DIR)
    .filter(file => 
      FILE_PATTERNS.gameLog.test(file) || 
      FILE_PATTERNS.roster.test(file)
    )
    .map(file => path.join(DATA_DIR, file));
  
  for (const file of allFiles) {
    try {
      console.log(`Reading players from ${path.basename(file)}`);
      const rows = await readCSV(file);
      
      rows.forEach(row => {
        // Extract player ID based on file type
        let playerId = null;
        
        if (FILE_PATTERNS.gameLog.test(path.basename(file))) {
          playerId = row.player;
        } else if (FILE_PATTERNS.roster.test(path.basename(file))) {
          playerId = row.player_id;
        }
        
        if (playerId && playerId !== '') {
          // Add to players map if not already there
          if (!players.has(playerId)) {
            players.set(playerId, {
              id: playerId,
              name: row.name || 'Unknown',
              position: row.position || null,
              dob: null // Date of birth not available in the data
            });
          }
        }
      });
    } catch (error) {
      console.error(`Error processing file for players ${file}:`, error);
    }
  }
  
  console.log(`Found ${players.size} unique players`);
  
  // Insert players in batches
  const playerArray = Array.from(players.values());
  
  for (let i = 0; i < playerArray.length; i += BATCH_SIZE) {
    try {
      const batch = playerArray.slice(i, Math.min(i + BATCH_SIZE, playerArray.length));
      console.log(`Inserting player batch ${i+1} to ${i+batch.length} of ${playerArray.length}`);
      
      await prisma.$transaction(
        batch.map(player => 
          prisma.player.upsert({
            where: { id: player.id },
            update: {
              name: player.name,
              position: player.position
            },
            create: player
          })
        )
      );
      
      console.log(`Successfully inserted player batch ${i+1} to ${i+batch.length}`);
    } catch (error) {
      console.error(`Error inserting player batch ${i+1} to ${i+BATCH_SIZE}:`, error);
    }
  }
  
  console.log('Player processing complete');
}

// Process games data from PBP files
async function processGames() {
  console.log('Processing games...');
  
  const games = new Map();
  
  // Extract games from PBP data
  const pbpFiles = fs.readdirSync(DATA_DIR)
    .filter(file => FILE_PATTERNS.pbp.test(file))
    .map(file => path.join(DATA_DIR, file));
  
  for (const file of pbpFiles) {
    try {
      const match = path.basename(file).match(FILE_PATTERNS.pbp);
      if (!match || !match[1]) {
        console.warn(`Invalid filename format: ${file}, skipping`);
        continue;
      }
      
      const season = parseInt(match[1], 10);
      console.log(`Reading games from ${path.basename(file)}`);
      const rows = await readCSV(file);
      
      // Process each unique game
      const uniqueGameKeys = new Set();
      for (const row of rows) {
        const gameKey = row.game_key;
        if (!gameKey || uniqueGameKeys.has(gameKey)) continue;
        uniqueGameKeys.add(gameKey);
        
        // Parse week and date
        const week = safeParseInt(row.week, 1);
        let gameDate;
        try {
          gameDate = row.game_date ? new Date(row.game_date) : null;
          if (gameDate && isNaN(gameDate.getTime())) {
            console.warn(`Invalid date for game ${gameKey}: ${row.game_date}`);
            gameDate = null;
          }
        } catch (error) {
          console.warn(`Error parsing date for game ${gameKey}: ${error.message}`);
          gameDate = null;
        }
        
        // Default to current date if not available
        if (!gameDate) {
          gameDate = new Date();
        }
        
        // Create game object
        const gameData = {
          key: gameKey,
          week,
          season,
          gameDate,
          homeTeam: row.home_team || 'UNK',
          awayTeam: row.away_team || 'UNK',
          homeScore: safeParseInt(row.final_home_score),
          awayScore: safeParseInt(row.final_away_score),
          stadium: row.stadium || null,
          surface: row.surface || null,
          weather: null // Weather not in data
        };
        
        games.set(gameKey, gameData);
        
        // Create game key mapping for stats
        // Normalize format for game keys - we'll need this for the game stats
        // Store all possible formats for lookup
        
        // Format 1: {season}-{week}-{away}_at_{home}
        const format1 = `${season}-${week}-${row.away_team}_at_${row.home_team}`;
        gameKeyMappings.set(format1, gameKey);
        
        // Format 2: {season}-{week}-{home}_vs_{away}
        const format2 = `${season}-${week}-${row.home_team}_vs_${row.away_team}`;
        gameKeyMappings.set(format2, gameKey);
        
        // Also store simple team combos for that week/season
        const teamPair1 = `${season}-${week}-${row.away_team}-${row.home_team}`;
        gameKeyMappings.set(teamPair1, gameKey);
        
        const teamPair2 = `${season}-${week}-${row.home_team}-${row.away_team}`;
        gameKeyMappings.set(teamPair2, gameKey);
      }
    } catch (error) {
      console.error(`Error processing PBP file for games ${file}:`, error);
    }
  }
  
  console.log(`Found ${games.size} unique games`);
  console.log(`Created ${gameKeyMappings.size} game key mappings`);
  
  // Insert games in batches
  const gameArray = Array.from(games.values());
  
  for (let i = 0; i < gameArray.length; i += BATCH_SIZE) {
    try {
      const batch = gameArray.slice(i, Math.min(i + BATCH_SIZE, gameArray.length));
      console.log(`Inserting game batch ${i+1} to ${i+batch.length} of ${gameArray.length}`);
      
      await prisma.$transaction(
        batch.map(game => 
          prisma.game.upsert({
            where: { key: game.key },
            update: {
              homeScore: game.homeScore,
              awayScore: game.awayScore
            },
            create: game
          })
        )
      );
      
      console.log(`Successfully inserted game batch ${i+1} to ${i+batch.length}`);
    } catch (error) {
      console.error(`Error inserting game batch ${i+1} to ${i+BATCH_SIZE}:`, error);
    }
  }
  
  console.log('Game processing complete');
}

// Process weekly roster data
async function processRosters() {
  console.log('Processing weekly rosters...');
  
  const rosters = [];
  const processedKeys = new Set();
  
  // Extract roster data
  const rosterFiles = fs.readdirSync(DATA_DIR)
    .filter(file => FILE_PATTERNS.roster.test(file))
    .map(file => path.join(DATA_DIR, file));
  
  for (const file of rosterFiles) {
    try {
      const match = path.basename(file).match(FILE_PATTERNS.roster);
      if (!match || !match[1]) {
        console.warn(`Invalid filename format: ${file}, skipping`);
        continue;
      }
      
      const season = parseInt(match[1], 10);
      console.log(`Reading roster data from ${path.basename(file)}`);
      const rows = await readCSV(file);
      
      for (const row of rows) {
        const playerId = row.player_id;
        const week = safeParseInt(row.week);
        const team = row.team;
        
        if (!playerId || !week || !team) continue;
        
        // Create a unique key to avoid duplicates
        const key = `${playerId}_${week}_${season}_${team}`;
        if (processedKeys.has(key)) continue;
        processedKeys.add(key);
        
        rosters.push({
          playerId,
          week,
          season,
          team,
          jerseyNumber: safeParseInt(row.number),
          position: row.position || null
        });
      }
    } catch (error) {
      console.error(`Error processing roster file ${file}:`, error);
    }
  }
  
  console.log(`Found ${rosters.length} weekly roster entries`);
  
  // Insert rosters in batches
  const batchSize = BATCH_SIZE;
  
  for (let i = 0; i < rosters.length; i += batchSize) {
    try {
      const batch = rosters.slice(i, Math.min(i + batchSize, rosters.length));
      console.log(`Inserting roster batch ${i+1} to ${i+batch.length} of ${rosters.length}`);
      
      // Use createMany for better performance
      await prisma.weeklyRoster.createMany({
        data: batch,
        skipDuplicates: true
      });
      
      console.log(`Successfully inserted roster batch ${i+1} to ${i+batch.length}`);
    } catch (error) {
      console.error(`Error inserting roster batch ${i+1} to ${i+batchSize}:`, error);
    }
  }
  
  console.log('Weekly roster processing complete');
}

// Process player game statistics
async function processGameStats() {
  console.log('Processing player game statistics...');
  
  const stats = [];
  const processedKeys = new Set();
  const missingGameKeys = new Set();
  
  // Extract game stats from game logs
  const gameLogFiles = fs.readdirSync(DATA_DIR)
    .filter(file => FILE_PATTERNS.gameLog.test(file))
    .map(file => path.join(DATA_DIR, file));
  
  for (const file of gameLogFiles) {
    try {
      const match = path.basename(file).match(FILE_PATTERNS.gameLog);
      if (!match || !match[1]) {
        console.warn(`Invalid filename format: ${file}, skipping`);
        continue;
      }
      
      const season = parseInt(match[1], 10);
      console.log(`Reading game stats from ${path.basename(file)}`);
      const rows = await readCSV(file);
      
      for (const row of rows) {
        const playerId = row.player;
        
        // Skip if missing required fields
        if (!playerId || !row.team || !row.season || !row.week || !row.opponent) continue;
        
        // We need to construct a game key that will match the ones from PBP files
        const constructedKey = `${row.season}-${safeParseInt(row.week)}-${row.team}-${row.opponent}`;
        
        // Look up the actual game key from our mapping
        const gameKey = gameKeyMappings.get(constructedKey);
        
        if (!gameKey) {
          // Also try reversing team order
          const alternateKey = `${row.season}-${safeParseInt(row.week)}-${row.opponent}-${row.team}`;
          const altGameKey = gameKeyMappings.get(alternateKey);
          
          if (!altGameKey) {
            if (!missingGameKeys.has(constructedKey)) {
              missingGameKeys.add(constructedKey);
              console.warn(`Could not find matching game key for: ${constructedKey}`);
            }
            continue;
          } else {
            // Found with alternate key
            const uniqueKey = `${playerId}_${altGameKey}`;
            if (processedKeys.has(uniqueKey)) continue;
            processedKeys.add(uniqueKey);
            
            stats.push({
              playerId,
              gameKey: altGameKey,
              team: row.team,
              position: row.position || null,
              snaps: safeParseInt(row.snaps),
              snapShare: safeParseFloat(row.snap_share),
              fantasyPoints: safeParseFloat(row.fantasy_points),
              
              // Pass stats
              passAttempts: safeParseInt(row.pass_attempts),
              completions: safeParseInt(row.completions),
              passYards: safeParseInt(row.passing_yards),
              passTDs: safeParseInt(row.pass_touchdowns),
              interceptions: safeParseInt(row.interceptions),
              
              // Rush stats
              carries: safeParseInt(row.carries),
              rushYards: safeParseInt(row.rush_yards),
              rushTDs: safeParseInt(row.rush_touchdowns),
              
              // Receiving stats
              targets: safeParseInt(row.targets),
              receptions: safeParseInt(row.receptions),
              receivingYards: safeParseInt(row.receiving_yards),
              receivingTDs: safeParseInt(row.receiving_touchdowns),
              airYards: safeParseInt(row.air_yards),
              
              // Additional stats
              scrimmageYards: safeParseInt(row.total_yards),
              totalTDs: safeParseInt(row.total_touchdowns),
              totalTouches: safeParseInt(row.total_touches),
              
              // Efficiency metrics
              yardsPerCarry: safeParseFloat(row.yards_per_carry),
              yardsPerTarget: safeParseFloat(row.yards_per_target),
              yardsPerReception: safeParseFloat(row.yards_per_reception),
            });
          }
        } else {
          // Create a unique key to avoid duplicates
          const uniqueKey = `${playerId}_${gameKey}`;
          if (processedKeys.has(uniqueKey)) continue;
          processedKeys.add(uniqueKey);
          
          stats.push({
            playerId,
            gameKey,
            team: row.team,
            position: row.position || null,
            snaps: safeParseInt(row.snaps),
            snapShare: safeParseFloat(row.snap_share),
            fantasyPoints: safeParseFloat(row.fantasy_points),
            
            // Pass stats
            passAttempts: safeParseInt(row.pass_attempts),
            completions: safeParseInt(row.completions),
            passYards: safeParseInt(row.passing_yards),
            passTDs: safeParseInt(row.pass_touchdowns),
            interceptions: safeParseInt(row.interceptions),
            
            // Rush stats
            carries: safeParseInt(row.carries),
            rushYards: safeParseInt(row.rush_yards),
            rushTDs: safeParseInt(row.rush_touchdowns),
            
            // Receiving stats
            targets: safeParseInt(row.targets),
            receptions: safeParseInt(row.receptions),
            receivingYards: safeParseInt(row.receiving_yards),
            receivingTDs: safeParseInt(row.receiving_touchdowns),
            airYards: safeParseInt(row.air_yards),
            
            // Additional stats
            scrimmageYards: safeParseInt(row.total_yards),
            totalTDs: safeParseInt(row.total_touchdowns),
            totalTouches: safeParseInt(row.total_touches),
            
            // Efficiency metrics
            yardsPerCarry: safeParseFloat(row.yards_per_carry),
            yardsPerTarget: safeParseFloat(row.yards_per_target),
            yardsPerReception: safeParseFloat(row.yards_per_reception),
          });
        }
      }
    } catch (error) {
      console.error(`Error processing game log file for stats ${file}:`, error);
    }
  }
  
  console.log(`Found ${stats.length} player game stats`);
  console.log(`Could not find mappings for ${missingGameKeys.size} game keys`);
  
  // Insert stats in batches
  const batchSize = BATCH_SIZE;
  
  for (let i = 0; i < stats.length; i += batchSize) {
    try {
      const batch = stats.slice(i, Math.min(i + batchSize, stats.length));
      console.log(`Inserting game stats batch ${i+1} to ${i+batch.length} of ${stats.length}`);
      
      // Use individual transactions in case any records fail
      for (const stat of batch) {
        try {
          await prisma.playerGameStat.upsert({
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
              yardsPerCarry: stat.yardsPerCarry,
              yardsPerTarget: stat.yardsPerTarget,
              yardsPerReception: stat.yardsPerReception
            },
            create: stat
          });
        } catch (error) {
          console.error(`Error inserting specific player game stat: ${error.message}`);
        }
      }
      
      console.log(`Successfully processed game stats batch ${i+1} to ${i+batch.length}`);
    } catch (error) {
      console.error(`Error inserting game stats batch ${i+1} to ${i+batchSize}:`, error);
    }
  }
  
  console.log('Game statistics processing complete');
}

// Main function to run all data import processes
async function importData() {
  console.log('Starting data import process...');
  console.log(`Using data directory: ${DATA_DIR}`);
  
  if (!DATA_DIR) {
    console.error("ERROR: DATA_DIR environment variable is not set!");
    console.log("Please set DATA_DIR to point to the directory containing your CSV files.");
    console.log("Example: DATA_DIR=/path/to/csv/files node scripts/import_data_fixed.js");
    process.exit(1);
  }

  // Check if the DATA_DIR exists and is accessible
  if (!fs.existsSync(DATA_DIR)) {
    console.error(`ERROR: Data directory does not exist or is not accessible: ${DATA_DIR}`);
    process.exit(1);
  }

  // List all files in the data directory for debugging
  console.log("Files in the data directory:");
  fs.readdirSync(DATA_DIR).forEach(file => {
    console.log(`- ${file}`);
  });

  // Count CSV files of each type
  const fileCount = {
    gameLog: 0,
    pbp: 0,
    roster: 0
  };

  fs.readdirSync(DATA_DIR).forEach(file => {
    if (FILE_PATTERNS.gameLog.test(file)) fileCount.gameLog++;
    if (FILE_PATTERNS.pbp.test(file)) fileCount.pbp++;
    if (FILE_PATTERNS.roster.test(file)) fileCount.roster++;
  });

  console.log(`Found ${fileCount.gameLog} game log files, ${fileCount.pbp} PBP files, and ${fileCount.roster} roster files`);
  
  try {
    // Connect to the database
    await prisma.$connect();
    console.log('Connected to database');

    // Check if the database already has data
    const existingCount = await prisma.player.count();
    if (existingCount > 0) {
      console.log(`NOTICE: Database already contains ${existingCount} players. This import will add to or update existing data.`);
    }
    
    // 1. Process teams first (for foreign key relationships)
    await processTeams();
    
    // 2. Process players (for foreign key relationships)
    await processPlayers();
    
    // 3. Process games (for foreign key relationships)
    await processGames();
    
    // 4. Process weekly rosters
    await processRosters();
    
    // 5. Process player game statistics
    await processGameStats();

    // Log summary of import
    const [teamCount, playerCount, gameCount, rosterCount, statCount] = await Promise.all([
      prisma.team.count(),
      prisma.player.count(),
      prisma.game.count(),
      prisma.weeklyRoster.count(),
      prisma.playerGameStat.count()
    ]);

    console.log("===== IMPORT SUMMARY =====");
    console.log(`Teams: ${teamCount}`);
    console.log(`Players: ${playerCount}`);
    console.log(`Games: ${gameCount}`);
    console.log(`Weekly Rosters: ${rosterCount}`);
    console.log(`Player Game Stats: ${statCount}`);
    console.log("==========================");
    
    console.log('Data import completed successfully');
  } catch (error) {
    console.error('Error during data import:', error);
  } finally {
    await prisma.$disconnect();
    console.log('Disconnected from database');
  }
}

// Run the import process
importData().catch(e => {
  console.error('Unhandled error in import process:', e);
  prisma.$disconnect();
  process.exit(1);
});