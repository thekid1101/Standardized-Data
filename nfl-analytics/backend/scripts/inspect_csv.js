// Script to inspect CSV file structure
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
require('dotenv').config();

const DATA_DIR = process.env.DATA_DIR;

async function inspectCSV(filePath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath)) {
      return reject(new Error(`File not found: ${filePath}`));
    }
    
    // Read just the first row to get column names
    const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
    const parser = csv();
    let firstRow = null;
    
    parser.on('data', (data) => {
      if (!firstRow) {
        firstRow = data;
        // After we get the first row, destroy the stream to stop reading
        stream.destroy();
      }
    });
    
    parser.on('end', () => {
      if (firstRow) {
        console.log(`Column names in ${path.basename(filePath)}:`);
        console.log(Object.keys(firstRow));
        console.log('\nSample row data:');
        console.log(firstRow);
      } else {
        console.log(`No data found in ${path.basename(filePath)}`);
      }
      resolve();
    });
    
    parser.on('error', (error) => {
      console.error(`Error parsing CSV ${filePath}:`, error);
      reject(error);
    });
    
    stream.pipe(parser);
  });
}

async function main() {
  console.log('Inspecting CSV files...');
  
  try {
    // Get all CSV files
    const files = fs.readdirSync(DATA_DIR)
      .filter(file => file.endsWith('.csv'))
      .map(file => path.join(DATA_DIR, file));
    
    if (files.length === 0) {
      console.log('No CSV files found');
      return;
    }
    
    // Inspect the first gamelog file, first pbp file, and first roster file
    const gamelogFile = files.find(file => file.includes('Gamelog'));
    const pbpFile = files.find(file => file.includes('PBP'));
    const rosterFile = files.find(file => file.includes('Roster'));
    
    if (gamelogFile) {
      await inspectCSV(gamelogFile);
    }
    
    if (pbpFile) {
      await inspectCSV(pbpFile);
    }
    
    if (rosterFile) {
      await inspectCSV(rosterFile);
    }
    
  } catch (error) {
    console.error('Error:', error);
  }
}

main().catch(e => {
  console.error('Fatal error:', e);
  process.exit(1);
});