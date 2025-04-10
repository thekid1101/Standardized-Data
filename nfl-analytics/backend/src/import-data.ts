import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
// Detect if running on Windows or WSL
const isWindows = process.platform === 'win32';

// Set appropriate base directory
const DATA_DIR = process.env.DATA_DIR || 
  (isWindows 
    ? 'C:\\Users\\johnn\\Documents\\Standardized Data'
    : '/mnt/c/Users/johnn/Documents/Standardized Data');

// Create direct paths based on platform
const DIRECT_PATH = {
  roster: path.join(DATA_DIR, '2023-Weekly-Roster-Key-Standardized.csv'),
  pbp: path.join(DATA_DIR, '2023-Advanced-PBP-Data-Standardized.csv'),
  gamelog: path.join(DATA_DIR, '2023-Advanced-Gamelog-Standardized.csv')
};

console.log('Data directory:', DATA_DIR);

// NFL teams data
const TEAMS = [
  { code: 'ARI', name: 'Arizona Cardinals', conference: 'NFC', division: 'West' },
  { code: 'ATL', name: 'Atlanta Falcons', conference: 'NFC', division: 'South' },
  { code: 'BAL', name: 'Baltimore Ravens', conference: 'AFC', division: 'North' },
  { code: 'BUF', name: 'Buffalo Bills', conference: 'AFC', division: 'East' },
  { code: 'CAR', name: 'Carolina Panthers', conference: 'NFC', division: 'South' },
  { code: 'CHI', name: 'Chicago Bears', conference: 'NFC', division: 'North' },
  { code: 'CIN', name: 'Cincinnati Bengals', conference: 'AFC', division: 'North' },
  { code: 'CLE', name: 'Cleveland Browns', conference: 'AFC', division: 'North' },
  { code: 'DAL', name: 'Dallas Cowboys', conference: 'NFC', division: 'East' },
  { code: 'DEN', name: 'Denver Broncos', conference: 'AFC', division: 'West' },
  { code: 'DET', name: 'Detroit Lions', conference: 'NFC', division: 'North' },
  { code: 'GB', name: 'Green Bay Packers', conference: 'NFC', division: 'North' },
  { code: 'HOU', name: 'Houston Texans', conference: 'AFC', division: 'South' },
  { code: 'IND', name: 'Indianapolis Colts', conference: 'AFC', division: 'South' },
  { code: 'JAX', name: 'Jacksonville Jaguars', conference: 'AFC', division: 'South' },
  { code: 'KC', name: 'Kansas City Chiefs', conference: 'AFC', division: 'West' },
  { code: 'LV', name: 'Las Vegas Raiders', conference: 'AFC', division: 'West' },
  { code: 'LAC', name: 'Los Angeles Chargers', conference: 'AFC', division: 'West' },
  { code: 'LAR', name: 'Los Angeles Rams', conference: 'NFC', division: 'West' },
  { code: 'MIA', name: 'Miami Dolphins', conference: 'AFC', division: 'East' },
  { code: 'MIN', name: 'Minnesota Vikings', conference: 'NFC', division: 'North' },
  { code: 'NE', name: 'New England Patriots', conference: 'AFC', division: 'East' },
  { code: 'NO', name: 'New Orleans Saints', conference: 'NFC', division: 'South' },
  { code: 'NYG', name: 'New York Giants', conference: 'NFC', division: 'East' },
  { code: 'NYJ', name: 'New York Jets', conference: 'AFC', division: 'East' },
  { code: 'PHI', name: 'Philadelphia Eagles', conference: 'NFC', division: 'East' },
  { code: 'PIT', name: 'Pittsburgh Steelers', conference: 'AFC', division: 'North' },
  { code: 'SF', name: 'San Francisco 49ers', conference: 'NFC', division: 'West' },
  { code: 'SEA', name: 'Seattle Seahawks', conference: 'NFC', division: 'West' },
  { code: 'TB', name: 'Tampa Bay Buccaneers', conference: 'NFC', division: 'South' },
  { code: 'TEN', name: 'Tennessee Titans', conference: 'AFC', division: 'South' },
  { code: 'WAS', name: 'Washington Commanders', conference: 'NFC', division: 'East' },
];

// Maps for different file types
const HEADER_MAPS = {
  roster: {
    '_0': 'player_id',
    '_1': 'name',
    '_2': 'week',
    '_3': 'team',
    '_4': 'number',
    '_5': 'position',
    '_6': 'dob'
  },
  gamelog: {
    '_0': 'player',
    '_1': 'name',
    '_2': 'position',
    '_3': 'season',
    '_4': 'week',
    '_5': 'team',
    '_6': 'opponent',
    '_7': 'is_home',
    '_8': 'pass_attempts',
    '_9': 'completions',
    '_10': 'pass_yards',
    '_11': 'pass_touchdowns',
    '_12': 'interceptions',
    '_13': 'carries',
    '_14': 'rush_yards',
    '_15': 'rush_touchdowns',
    '_16': 'targets',
    '_17': 'receptions',
    '_18': 'receiving_yards',
    '_19': 'receiving_touchdowns'
  },
  pbp: {
    '_0': 'game_key',
    '_1': 'week',
    '_2': 'game_date',
    '_3': 'home_team',
    '_4': 'away_team',
    '_5': 'final_home_score',
    '_6': 'final_away_score',
    '_7': 'quarter',
    '_8': 'minutes',
    '_9': 'seconds',
    '_10': 'off_team',
    '_11': 'def_team',
    '_12': 'type', // play type
    '_13': 'down'
  }
};

// Read CSV file
function readCsv(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const results: any[] = [];
    
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      resolve([]);
      return;
    }
    
    console.log(`Reading file: ${filePath}`);
    console.log(`File size: ${(fs.statSync(filePath).size / 1024 / 1024).toFixed(2)} MB`);
    
    // Determine file type to use appropriate header map
    let headerMap = {};
    if (filePath.includes('Roster')) {
      headerMap = HEADER_MAPS.roster;
    } else if (filePath.includes('Gamelog')) {
      headerMap = HEADER_MAPS.gamelog;
    } else if (filePath.includes('PBP')) {
      headerMap = HEADER_MAPS.pbp;
    }
    
    fs.createReadStream(filePath)
      .pipe(csv({ 
        separator: ',',
        headers: true,
        mapHeaders: ({ header }) => {
          return headerMap[header] || header;
        }
      }))
      .on('data', (data) => {
        // Log first few records to debug
        if (results.length < 5) {
          console.log('Sample record:', data);
        }
        results.push(data);
      })
      .on('end', () => {
        console.log(`Read ${results.length} records from ${filePath}`);
        resolve(results);
      })
      .on('error', (error) => {
        console.error(`Error reading ${filePath}:`, error);
        reject(error);
      });
  });
}

// Find a file in the DATA_DIR
function findFile(filename: string): string | null {
  // Try with the exact path first
  const filePath = path.join(DATA_DIR, filename);
  if (fs.existsSync(filePath)) {
    console.log(`Found file at: ${filePath}`);
    return filePath;
  }
  
  // Try searching for the file with a case-insensitive approach
  try {
    const files = fs.readdirSync(DATA_DIR);
    const targetFile = files.find(file => file.toLowerCase() === filename.toLowerCase());
    
    if (targetFile) {
      const matchedPath = path.join(DATA_DIR, targetFile);
      console.log(`Found file (case-insensitive match) at: ${matchedPath}`);
      return matchedPath;
    }
  } catch (err) {
    console.error(`Error looking for ${filename}:`, err);
  }
  
  // Try different path variations with both Windows and Unix-style paths
  const variations = [
    path.join(DATA_DIR, '..', filename),
    path.join(DATA_DIR, 'nfl-analytics', filename),
    path.join(DATA_DIR, 'NFL', filename),
    path.join(DATA_DIR, 'nfl', filename),
    path.join(DATA_DIR, 'NFL Data', filename),
    path.join(DATA_DIR, 'data', filename),
    // Windows specific paths
    `C:\\Users\\johnn\\Documents\\Standardized Data\\${filename}`,
    // WSL specific paths
    `/mnt/c/Users/johnn/Documents/Standardized Data/${filename}`
  ];
  
  for (const variant of variations) {
    if (fs.existsSync(variant)) {
      console.log(`Found file at alternative path: ${variant}`);
      return variant;
    }
  }
  
  console.log(`Could not find file: ${filename} at ${filePath}`);
  return null;
}

// Import teams
async function importTeams() {
  console.log('Importing teams...');
  try {
    for (const team of TEAMS) {
      await prisma.team.upsert({
        where: { code: team.code },
        update: team,
        create: team,
      });
    }
    console.log('Teams imported successfully');
  } catch (error) {
    console.error('Error importing teams:', error);
  }
}

// Import players from roster files
async function importPlayers() {
  console.log('Importing players...');
  try {
    console.log('Using direct path for roster file:', DIRECT_PATH.roster);
    console.log(`File exists check: ${fs.existsSync(DIRECT_PATH.roster)}`);
    console.log(`Platform is: ${process.platform}`);
    
    // Try to find the roster file if the direct path doesn't work
    if (!fs.existsSync(DIRECT_PATH.roster)) {
      console.log('Direct path file not found, trying alternate locations...');
      
      // Try to find any Weekly-Roster-Key file
      const files = fs.readdirSync(DATA_DIR);
      console.log('Files in data directory:');
      files.forEach(file => console.log(`  - ${file}`));
      
      const rosterFile = files.find(file => file.includes('Weekly-Roster-Key'));
      if (rosterFile) {
        const fullPath = path.join(DATA_DIR, rosterFile);
        console.log(`Found potential roster file: ${fullPath}`);
        DIRECT_PATH.roster = fullPath;
      } else {
        await handleMissingDataFile('roster');
        return;
      }
    }
    
    // Try to read directly from CSV without using the csv parser
    // This is a fallback approach when the CSV parser has issues
    const fileContent = fs.readFileSync(DIRECT_PATH.roster, 'utf8');
    const lines = fileContent.split('\n');
    
    // Skip header line
    const dataLines = lines.slice(1);
    
    // Process raw CSV lines
    const playerMap = new Map();
    
    for (const line of dataLines) {
      if (!line.trim()) continue;
      
      const columns = line.split(',');
      if (columns.length < 4) continue;
      
      const playerId = columns[0].trim();
      if (!playerId) continue;
      
      const name = columns[1].trim();
      const team = columns[3].trim();
      const position = columns[5].trim();
      
      if (!playerMap.has(playerId)) {
        playerMap.set(playerId, {
          id: playerId,
          name,
          position,
          team
        });
      }
    }
    
    console.log(`Found ${playerMap.size} unique players from raw CSV`);
    
    if (playerMap.size === 0) {
      console.error('No players extracted from CSV file');
      await handleMissingDataFile('roster');
      return;
    }
    
    // Insert players in batches for better performance
    const players = Array.from(playerMap.values());
    const batchSize = 100;
    
    for (let i = 0; i < players.length; i += batchSize) {
      const batch = players.slice(i, i + batchSize);
      console.log(`Importing players ${i + 1} to ${i + batch.length}...`);
      
      await Promise.all(batch.map(async (player) => {
        try {
          await prisma.player.upsert({
            where: { id: player.id },
            update: player,
            create: player,
          });
        } catch (error) {
          console.error(`Error importing player ${player.id}:`, error);
        }
      }));
    }
    
    console.log('Players imported successfully');
  } catch (error) {
    console.error('Error importing players:', error);
    await handleMissingDataFile('roster');
  }
}

// Function to handle when a data file can't be found
async function handleMissingDataFile(fileType: string) {
  console.error(`ERROR: Required ${fileType} data file is missing. Real data is required for this application.`);
  console.error(`Please ensure the ${fileType} CSV file exists in the data directory and try again.`);
  
  // Provide more detailed instructions for finding files
  console.error('\nChecking the following locations:');
  const expectedPaths = [
    path.join(DATA_DIR, `2023-${fileType === 'roster' ? 'Weekly-Roster-Key' : fileType === 'play-by-play' ? 'Advanced-PBP-Data' : 'Advanced-Gamelog'}-Standardized.csv`),
    isWindows ? `C:\\Users\\johnn\\Documents\\Standardized Data\\2023-${fileType === 'roster' ? 'Weekly-Roster-Key' : fileType === 'play-by-play' ? 'Advanced-PBP-Data' : 'Advanced-Gamelog'}-Standardized.csv` : null,
    !isWindows ? `/mnt/c/Users/johnn/Documents/Standardized Data/2023-${fileType === 'roster' ? 'Weekly-Roster-Key' : fileType === 'play-by-play' ? 'Advanced-PBP-Data' : 'Advanced-Gamelog'}-Standardized.csv` : null
  ].filter(Boolean);
  
  expectedPaths.forEach(p => {
    if (p) console.error(`  - ${p} (exists: ${fs.existsSync(p)})`);
  });
  
  console.error('\nAvailable files in data directory:');
  try {
    const files = fs.readdirSync(DATA_DIR);
    files.forEach(file => {
      console.error(`  - ${file}`);
    });
  } catch (err) {
    console.error(`  Unable to read directory ${DATA_DIR}: ${err}`);
  }
  
  process.exit(1);
}

// Import games from PBP data
async function importGames() {
  console.log('Importing games...');
  try {
    console.log('Using direct path for PBP file:', DIRECT_PATH.pbp);
    console.log(`File exists check: ${fs.existsSync(DIRECT_PATH.pbp)}`);
    
    // Try to find the PBP file if the direct path doesn't work
    if (!fs.existsSync(DIRECT_PATH.pbp)) {
      console.log('Direct path file not found, trying alternate locations...');
      
      // Try to find any Advanced-PBP-Data file
      const files = fs.readdirSync(DATA_DIR);
      console.log('Files in data directory:');
      files.forEach(file => console.log(`  - ${file}`));
      
      const pbpFile = files.find(file => file.includes('Advanced-PBP-Data'));
      if (pbpFile) {
        const fullPath = path.join(DATA_DIR, pbpFile);
        console.log(`Found potential PBP file: ${fullPath}`);
        DIRECT_PATH.pbp = fullPath;
      } else {
        await handleMissingDataFile('play-by-play');
        return;
      }
    }
    
    try {
      // Try to read directly from the file without using the CSV parser
      const fileContent = fs.readFileSync(DIRECT_PATH.pbp, 'utf8');
      const lines = fileContent.split('\n');
      
      // Skip header line
      const dataLines = lines.slice(1);
      
      // Extract unique games
      const gameMap = new Map();
      
      for (const line of dataLines) {
        if (!line.trim()) continue;
        
        const columns = line.split(',');
        if (columns.length < 10) continue;
        
        // Try to construct a game key
        // If not present, generate one
        const gameKey = columns[0].trim() || `2023_${columns[1].trim().padStart(2, '0')}_${columns[3].trim()}_${columns[4].trim()}`;
        
        if (!gameKey) continue;
        
        // Only process each game once
        if (!gameMap.has(gameKey)) {
          const week = parseInt(columns[1].trim(), 10) || 0;
          const homeTeam = columns[3].trim();
          const awayTeam = columns[4].trim();
          const homeScore = parseInt(columns[5].trim(), 10) || 0;
          const awayScore = parseInt(columns[6].trim(), 10) || 0;
          
          // Extract season from gameKey format or use 2023 as default
          let season = 2023;
          if (gameKey.includes('_')) {
            const parts = gameKey.split('_');
            if (parts.length > 0 && !isNaN(parseInt(parts[0], 10))) {
              season = parseInt(parts[0], 10);
            }
          }
          
          gameMap.set(gameKey, {
            key: gameKey,
            season,
            week,
            gameDate: new Date(),
            homeTeam,
            awayTeam,
            homeScore,
            awayScore
          });
        }
      }
      
      console.log(`Found ${gameMap.size} unique games from raw CSV`);
      
      if (gameMap.size === 0) {
        console.error('No games extracted from CSV');
        await handleMissingDataFile('play-by-play');
        return;
      }
      
      // Insert games
      const games = Array.from(gameMap.values());
      
      for (const game of games) {
        try {
          await prisma.game.upsert({
            where: { key: game.key },
            update: game,
            create: game,
          });
        } catch (error) {
          console.error(`Error importing game ${game.key}:`, error);
        }
      }
      
      console.log('Games imported successfully');
    } catch (error) {
      console.error('Error processing PBP data manually:', error);
      await handleMissingDataFile('play-by-play');
    }
  } catch (error) {
    console.error('Error importing games:', error);
    await handleMissingDataFile('play-by-play');
  }
}


// Import game stats from gamelog
async function importGameStats() {
  console.log('Importing game stats...');
  try {
    console.log('Using direct path for gamelog file:', DIRECT_PATH.gamelog);
    console.log(`File exists check: ${fs.existsSync(DIRECT_PATH.gamelog)}`);
    
    // Try to find the gamelog file if the direct path doesn't work
    if (!fs.existsSync(DIRECT_PATH.gamelog)) {
      console.log('Direct path file not found, trying alternate locations...');
      
      // Try to find any Advanced-Gamelog file
      const files = fs.readdirSync(DATA_DIR);
      console.log('Files in data directory:');
      files.forEach(file => console.log(`  - ${file}`));
      
      const gamelogFile = files.find(file => file.includes('Advanced-Gamelog'));
      if (gamelogFile) {
        const fullPath = path.join(DATA_DIR, gamelogFile);
        console.log(`Found potential gamelog file: ${fullPath}`);
        DIRECT_PATH.gamelog = fullPath;
      } else {
        await handleMissingDataFile('gamelog');
        return;
      }
    }
    
    try {
      // Try to read directly from the file without using the CSV parser
      const fileContent = fs.readFileSync(DIRECT_PATH.gamelog, 'utf8');
      const lines = fileContent.split('\n');
      
      // Skip header line
      const dataLines = lines.slice(1);
      
      // Process stats from raw CSV lines
      const statsCount = await processGameStats(dataLines);
      
      if (statsCount === 0) {
        console.error('No game stats extracted from CSV');
        await handleMissingDataFile('gamelog');
        return;
      }
      
      console.log('Game stats imported successfully');
    } catch (error) {
      console.error('Error processing gamelog data manually:', error);
      await handleMissingDataFile('gamelog');
    }
  } catch (error) {
    console.error('Error importing game stats:', error);
    await handleMissingDataFile('gamelog');
  }
}

// Process game stats from raw CSV lines
async function processGameStats(dataLines: string[]): Promise<number> {
  // Process in smaller batches to avoid memory issues
  const batchSize = 100;
  let statsCount = 0;
  
  for (let i = 0; i < dataLines.length; i += batchSize) {
    const batch = dataLines.slice(i, Math.min(i + batchSize, dataLines.length));
    console.log(`Processing game stats ${i + 1} to ${i + batch.length}...`);
    
    for (const line of batch) {
      if (!line.trim()) continue;
      
      try {
        const columns = line.split(',');
        if (columns.length < 15) continue; // Need at least basic fields
        
        const playerId = columns[0].trim();
        if (!playerId) continue;
        
        const name = columns[1].trim();
        const position = columns[2].trim();
        const season = parseInt(columns[3].trim(), 10) || 2023;
        const week = parseInt(columns[4].trim(), 10) || 0;
        const team = columns[5].trim();
        const opponent = columns[6].trim();
        
        // Try to determine if home or away
        // This is a guess based on the columns we have
        const isHome = columns[7]?.trim()?.toLowerCase() === 'true' || 
                      columns[7]?.trim() === '1' || 
                      false;
        
        let homeTeam, awayTeam;
        if (isHome) {
          homeTeam = team;
          awayTeam = opponent;
        } else {
          homeTeam = opponent;
          awayTeam = team;
        }
        
        // Construct game key
        const gameKey = `${season}_${week.toString().padStart(2, '0')}_${homeTeam}_${awayTeam}`;
        
        // Extract stat fields
        const passAttempts = parseInt(columns[8]?.trim(), 10) || 0;
        const completions = parseInt(columns[9]?.trim(), 10) || 0;
        const passYards = parseInt(columns[10]?.trim(), 10) || 0;
        const passTDs = parseInt(columns[11]?.trim(), 10) || 0;
        const interceptions = parseInt(columns[12]?.trim(), 10) || 0;
        
        const carries = parseInt(columns[13]?.trim(), 10) || 0;
        const rushYards = parseInt(columns[14]?.trim(), 10) || 0;
        const rushTDs = parseInt(columns[15]?.trim(), 10) || 0;
        
        const targets = parseInt(columns[16]?.trim(), 10) || 0;
        const receptions = parseInt(columns[17]?.trim(), 10) || 0;
        const receivingYards = parseInt(columns[18]?.trim(), 10) || 0;
        const receivingTDs = parseInt(columns[19]?.trim(), 10) || 0;
        
        // Create game stat data object
        const gameStatData = {
          gameKey,
          playerId,
          team,
          position,
          
          // Pass stats
          passAttempts,
          completions,
          passYards,
          passTDs,
          interceptions,
          
          // Rush stats
          carries,
          rushYards,
          rushTDs,
          
          // Receiving stats
          targets,
          receptions,
          receivingYards,
          receivingTDs
        };
        
        // Check if game exists
        const gameExists = await prisma.game.findUnique({
          where: { key: gameKey }
        });
        
        if (!gameExists) {
          // Create a basic game record if it doesn't exist
          await prisma.game.create({
            data: {
              key: gameKey,
              season,
              week,
              gameDate: new Date(),
              homeTeam,
              awayTeam,
              homeScore: 0,
              awayScore: 0
            }
          });
        }
        
        // Check if player exists
        const playerExists = await prisma.player.findUnique({
          where: { id: playerId }
        });
        
        if (!playerExists) {
          await prisma.player.create({
            data: {
              id: playerId,
              name: name || 'Unknown Player',
              position,
              team
            }
          });
        }
        
        // Upsert game stat
        await prisma.gameStat.upsert({
          where: { 
            gameKey_playerId: {
              gameKey,
              playerId
            }
          },
          update: gameStatData,
          create: gameStatData,
        });
        
        statsCount++;
      } catch (error) {
        console.error('Error processing game stat line:', error);
      }
    }
  }
  
  return statsCount;
}


// Main import function
async function importAll() {
  try {
    console.log('Starting data import...');
    
    // Set timeout for each step to avoid overwhelm
    await importTeams();
    
    // Process players from roster data
    await importPlayers();
    
    // Process games from PBP data
    await importGames();
    
    // Process game stats from gamelog data
    await importGameStats();
    
    console.log('All data imported successfully!');
  } catch (error) {
    console.error('Error during import:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the import
importAll();