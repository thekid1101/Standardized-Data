// Import data script with proper column mapping
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

// Process team data from game logs and PBP data
async function processTeams() {
  console.log('Processing teams...');
  
  const teams = new Set();
  
  // Step 1: Find teams from game logs
  const gameLogFiles = fs.readdirSync(DATA_DIR)
    .filter(file => FILE_PATTERNS.gameLog.test(file))
    .map(file => path.join(DATA_DIR, file));
  
  for (const file of gameLogFiles) {
    try {
      console.log(`Reading teams from ${path.basename(file)}`);
      const rows = await readCSV(file);
      
      // Extract unique team codes from team and opponent columns
      rows.forEach(row => {
        if (row.team) teams.add(row.team);
        if (row.opponent) teams.add(row.opponent);
      });
    } catch (error) {
      console.error(`Error processing game log file ${file}:`, error);
    }
  }
  
  // Step 2: Find teams from PBP data
  const pbpFiles = fs.readdirSync(DATA_DIR)
    .filter(file => FILE_PATTERNS.pbp.test(file))
    .map(file => path.join(DATA_DIR, file));
  
  for (const file of pbpFiles) {
    try {
      console.log(`Reading teams from ${path.basename(file)}`);
      const rows = await readCSV(file);
      
      // Extract unique team codes from off_team and def_team columns
      rows.forEach(row => {
        if (row.off_team) teams.add(row.off_team);
        if (row.def_team) teams.add(row.def_team);
        if (row.home_team) teams.add(row.home_team);
        if (row.away_team) teams.add(row.away_team);
      });
    } catch (error) {
      console.error(`Error processing PBP file ${file}:`, error);
    }
  }
  
  // Step 3: Find teams from roster data
  const rosterFiles = fs.readdirSync(DATA_DIR)
    .filter(file => FILE_PATTERNS.roster.test(file))
    .map(file => path.join(DATA_DIR, file));
  
  for (const file of rosterFiles) {
    try {
      console.log(`Reading teams from ${path.basename(file)}`);
      const rows = await readCSV(file);
      
      // Extract unique team codes from team column
      rows.forEach(row => {
        if (row.team) teams.add(row.team);
      });
    } catch (error) {
      console.error(`Error processing roster file ${file}:`, error);
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
  
  // Step 1: Extract players from game logs
  const gameLogFiles = fs.readdirSync(DATA_DIR)
    .filter(file => FILE_PATTERNS.gameLog.test(file))
    .map(file => path.join(DATA_DIR, file));
  
  for (const file of gameLogFiles) {
    try {
      console.log(`Reading players from ${path.basename(file)}`);
      const rows = await readCSV(file);
      
      rows.forEach(row => {
        const playerId = row.player;
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
      console.error(`Error processing game log file for players ${file}:`, error);
    }
  }
  
  // Step 2: Extract players from roster data
  const rosterFiles = fs.readdirSync(DATA_DIR)
    .filter(file => FILE_PATTERNS.roster.test(file))
    .map(file => path.join(DATA_DIR, file));
  
  for (const file of rosterFiles) {
    try {
      console.log(`Reading players from ${path.basename(file)}`);
      const rows = await readCSV(file);
      
      rows.forEach(row => {
        const playerId = row.player_id;
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
      console.error(`Error processing roster file for players ${file}:`, error);
    }
  }
  
  console.log(`Found ${players.size} unique players`);
  
  // Insert players in batches to improve performance
  const playerArray = Array.from(players.values());
  const batchSize = BATCH_SIZE;
  
  for (let i = 0; i < playerArray.length; i += batchSize) {
    try {
      const batch = playerArray.slice(i, Math.min(i + batchSize, playerArray.length));
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
      console.error(`Error inserting player batch ${i+1} to ${i+batchSize}:`, error);
    }
  }
  
  console.log('Player processing complete');
}

// Process games data from PBP files
async function processGames() {
  console.log('Processing games...');
  
  const games = new Map();
  
  // Extract games from PBP data (contains more complete game info)
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
      
      // Process the first row from each unique game
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
          // Validate date is valid
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
        games.set(gameKey, {
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
        });
      }
    } catch (error) {
      console.error(`Error processing PBP file for games ${file}:`, error);
    }
  }
  
  console.log(`Found ${games.size} unique games`);
  
  // Insert games in batches
  const gameArray = Array.from(games.values());
  const batchSize = BATCH_SIZE;
  
  for (let i = 0; i < gameArray.length; i += batchSize) {
    try {
      const batch = gameArray.slice(i, Math.min(i + batchSize, gameArray.length));
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
      console.error(`Error inserting game batch ${i+1} to ${i+batchSize}:`, error);
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
      
      // Use create many for better performance with large datasets
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
  
  // Extract game stats from game logs
  const gameLogFiles = fs.readdirSync(DATA_DIR)
    .filter(file => FILE_PATTERNS.gameLog.test(file))
    .map(file => path.join(DATA_DIR, file));
  
  for (const file of gameLogFiles) {
    try {
      console.log(`Reading game stats from ${path.basename(file)}`);
      const rows = await readCSV(file);
      
      for (const row of rows) {
        const playerId = row.player;
        // Game key is a combination of season, week, and teams
        // If game_key is not in the data, we construct one
        let gameKey = row.game_key;
        
        if (!gameKey && row.season && row.week && row.team && row.opponent) {
          gameKey = `${row.season}-${row.week}-${row.team}_at_${row.opponent}`;
        }
        
        // Skip if missing required fields
        if (!playerId || !gameKey || !row.team) continue;
        
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
    } catch (error) {
      console.error(`Error processing game log file for stats ${file}:`, error);
    }
  }
  
  console.log(`Found ${stats.length} player game stats`);
  
  // Insert stats in batches
  const batchSize = BATCH_SIZE;
  
  for (let i = 0; i < stats.length; i += batchSize) {
    try {
      const batch = stats.slice(i, Math.min(i + batchSize, stats.length));
      console.log(`Inserting game stats batch ${i+1} to ${i+batch.length} of ${stats.length}`);
      
      // Use create many for better performance with large datasets
      await prisma.playerGameStat.createMany({
        data: batch,
        skipDuplicates: true
      });
      
      console.log(`Successfully inserted game stats batch ${i+1} to ${i+batch.length}`);
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
  
  try {
    // Connect to the database
    await prisma.$connect();
    console.log('Connected to database');
    
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
    
    // 6. Play-by-play data can be added later if needed
    // await processPlays();
    
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