// Script to analyze game keys in different data files
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
require('dotenv').config();

const DATA_DIR = process.env.DATA_DIR || "C:/Users/johnn/Documents/Standardized Data";

// Patterns for file types
const FILE_PATTERNS = {
  gameLog: /(\d{4})-Advanced-Gamelog-Standardized\.csv/,
  pbp: /(\d{4})-Advanced-PBP-Data-Standardized\.csv/
};

// Read CSV file
function readCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath, { encoding: 'utf8' })
      .on('error', reject)
      .pipe(csv())
      .on('data', data => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}

// Extract unique game keys from a dataset
function extractGameKeys(rows, keyField) {
  const keys = new Set();
  for (const row of rows) {
    const key = row[keyField];
    if (key) {
      keys.add(key);
    }
  }
  return Array.from(keys);
}

// Analyze game key formats and generate sample mappings
async function analyzeGameKeys() {
  console.log('Analyzing game key formats in different data files...');
  
  // Find files of each type
  const gameLogFiles = fs.readdirSync(DATA_DIR)
    .filter(file => FILE_PATTERNS.gameLog.test(file))
    .map(file => path.join(DATA_DIR, file));
  
  const pbpFiles = fs.readdirSync(DATA_DIR)
    .filter(file => FILE_PATTERNS.pbp.test(file))
    .map(file => path.join(DATA_DIR, file));
  
  // Sample game log file
  const sampleGameLogFile = gameLogFiles[0];
  if (sampleGameLogFile) {
    console.log(`\nAnalyzing game log file: ${path.basename(sampleGameLogFile)}`);
    try {
      const rows = await readCSV(sampleGameLogFile);
      
      // Check various possible game key fields
      const possibleKeyFields = ['game_key', 'game'];
      
      for (const field of possibleKeyFields) {
        if (rows[0] && field in rows[0]) {
          console.log(`\nFound game key field: ${field}`);
          const gameKeys = extractGameKeys(rows, field);
          console.log(`Number of unique keys: ${gameKeys.length}`);
          console.log('Sample keys:');
          gameKeys.slice(0, 5).forEach(key => console.log(`  ${key}`));
          
          // Extract game info fields that might help construct keys
          const sampleRows = rows.slice(0, 5);
          console.log('\nSample row data for key construction:');
          sampleRows.forEach(row => {
            console.log(`  ${field}: ${row[field]}`);
            console.log(`    season: ${row.season}`);
            console.log(`    week: ${row.week}`);
            console.log(`    team: ${row.team}`);
            console.log(`    opponent: ${row.opponent}`);
          });
        }
      }
      
      // Try to discover key construction pattern
      console.log('\nAttempting to discover key construction pattern...');
      const sampleRows = rows.slice(0, 10);
      for (const row of sampleRows) {
        if (row.game_key || row.game) {
          const key = row.game_key || row.game;
          console.log(`Key: ${key}`);
          
          // Try to extract season, week, teams from key
          const match = key.match(/(\d{4})-(\d+)-(.+)/);
          if (match) {
            console.log(`  Parsed: Season=${match[1]}, Week=${match[2]}, Teams=${match[3]}`);
          } else {
            console.log('  No pattern match');
          }
        }
      }
    } catch (error) {
      console.error(`Error analyzing game log file: ${error}`);
    }
  }
  
  // Sample PBP file
  const samplePbpFile = pbpFiles[0];
  if (samplePbpFile) {
    console.log(`\nAnalyzing PBP file: ${path.basename(samplePbpFile)}`);
    try {
      const rows = await readCSV(samplePbpFile);
      
      // Check for game_key field
      if (rows[0] && 'game_key' in rows[0]) {
        console.log('\nFound game key field: game_key');
        const gameKeys = extractGameKeys(rows, 'game_key');
        console.log(`Number of unique keys: ${gameKeys.length}`);
        console.log('Sample keys:');
        gameKeys.slice(0, 5).forEach(key => console.log(`  ${key}`));
        
        // Extract relevant fields to help construct keys
        const sampleRows = rows.slice(0, 5);
        console.log('\nSample row data for key construction:');
        sampleRows.forEach(row => {
          console.log(`  game_key: ${row.game_key}`);
          console.log(`    week: ${row.week}`);
          console.log(`    off_team: ${row.off_team}`);
          console.log(`    def_team: ${row.def_team}`);
          console.log(`    home_team: ${row.home_team}`);
          console.log(`    away_team: ${row.away_team}`);
          console.log(`    game_date: ${row.game_date}`);
          console.log(`    game: ${row.game}`);
        });
      }
      
      // Try to discover key construction pattern
      console.log('\nAttempting to discover key construction pattern...');
      const sampleRows = rows.slice(0, 10);
      for (const row of sampleRows) {
        if (row.game_key) {
          console.log(`Key: ${row.game_key}`);
          
          // Try to extract date and teams from key
          const match = row.game_key.match(/(\d{4}-\d{2}-\d{2})(.+)/);
          if (match) {
            console.log(`  Parsed: Date=${match[1]}, Teams=${match[2]}`);
          } else {
            console.log('  No date pattern match');
          }
        }
      }
    } catch (error) {
      console.error(`Error analyzing PBP file: ${error}`);
    }
  }
  
  // Analyze examples from both formats to develop a mapping strategy
  if (sampleGameLogFile && samplePbpFile) {
    try {
      const gameLogRows = await readCSV(sampleGameLogFile);
      const pbpRows = await readCSV(samplePbpFile);
      
      console.log('\n\nComparing game keys between file types:');
      console.log('Let\'s attempt to find a common game from both datasets');
      
      // Find games from the same week/season
      const gameLogWeeks = new Map();
      for (const row of gameLogRows.slice(0, 200)) {
        const season = row.season;
        const week = row.week;
        const teams = `${row.team}_${row.opponent}`;
        
        if (season && week) {
          const key = `${season}-${week}`;
          if (!gameLogWeeks.has(key)) {
            gameLogWeeks.set(key, []);
          }
          gameLogWeeks.get(key).push({
            gameKey: row.game_key || row.game,
            teams
          });
        }
      }
      
      const pbpWeeks = new Map();
      for (const row of pbpRows.slice(0, 200)) {
        const week = row.week;
        if (week && row.game_key) {
          // Extract season from game_key if possible
          const match = row.game_key.match(/^(\d{4})-/);
          const season = match ? match[1] : null;
          
          if (season) {
            const key = `${season}-${week}`;
            if (!pbpWeeks.has(key)) {
              pbpWeeks.set(key, []);
            }
            
            pbpWeeks.get(key).push({
              gameKey: row.game_key,
              teams: row.game || `${row.home_team}_${row.away_team}`
            });
          }
        }
      }
      
      // Find common season-weeks
      for (const [key, gameLogGames] of gameLogWeeks.entries()) {
        if (pbpWeeks.has(key)) {
          console.log(`\nFound common season-week: ${key}`);
          console.log('Game log format games:');
          gameLogGames.slice(0, 3).forEach(game => {
            console.log(`  ${game.gameKey} (${game.teams})`);
          });
          
          console.log('PBP format games:');
          pbpWeeks.get(key).slice(0, 3).forEach(game => {
            console.log(`  ${game.gameKey} (${game.teams})`);
          });
        }
      }
      
      // Suggest mapping strategy
      console.log('\nRecommended Mapping Strategy:');
      if (gameLogRows[0] && (gameLogRows[0].game_key || gameLogRows[0].game)) {
        // Use season, week, team, opponent from gamelog to construct a key that matches PBP
        console.log('1. Create a mapping function that transforms game log keys to PBP keys.');
        console.log('2. For game logs, construct keys using: season, week, team, opponent');
        console.log('   Format: "{season}-{week}-{team}_at_{opponent}"');
        console.log('3. For PBP, use the existing game_key field directly');
      } else {
        console.log('Game log format is unclear. More analysis needed.');
      }
      
    } catch (error) {
      console.error(`Error comparing file formats: ${error}`);
    }
  }
}

analyzeGameKeys().catch(error => {
  console.error('Unhandled error:', error);
});