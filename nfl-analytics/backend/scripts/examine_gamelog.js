// Script to directly examine gamelog CSV format
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const DATA_DIR = process.env.DATA_DIR || "C:/Users/johnn/Documents/Standardized Data";

// Find a gamelog file
const gamelogFiles = fs.readdirSync(DATA_DIR)
  .filter(file => file.includes('Gamelog'))
  .map(file => path.join(DATA_DIR, file));

if (gamelogFiles.length === 0) {
  console.error('No gamelog files found');
  process.exit(1);
}

// Read the first few lines of the file directly
const gamelogFile = gamelogFiles[0];
console.log(`Reading file: ${path.basename(gamelogFile)}`);

const fileContent = fs.readFileSync(gamelogFile, 'utf8');
const lines = fileContent.split('\n').slice(0, 6);

console.log('\nFirst 5 lines of the file:');
lines.forEach((line, i) => {
  console.log(`${i+1}: ${line}`);
});

// Parse the header to get column names
const headers = lines[0].split(',');
console.log('\nHeaders (columns):');
headers.forEach((header, i) => {
  console.log(`${i+1}: ${header}`);
});

// Now look at the PBP files
const pbpFiles = fs.readdirSync(DATA_DIR)
  .filter(file => file.includes('PBP'))
  .map(file => path.join(DATA_DIR, file));

if (pbpFiles.length === 0) {
  console.error('No PBP files found');
  process.exit(1);
}

// Read the first few lines of a PBP file directly
const pbpFile = pbpFiles[0];
console.log(`\nReading PBP file: ${path.basename(pbpFile)}`);

const pbpContent = fs.readFileSync(pbpFile, 'utf8');
const pbpLines = pbpContent.split('\n').slice(0, 6);

console.log('\nFirst 5 lines of the PBP file:');
pbpLines.forEach((line, i) => {
  console.log(`${i+1}: ${line}`);
});

// Parse the header to get PBP column names
const pbpHeaders = pbpLines[0].split(',');
console.log('\nPBP Headers (columns):');
pbpHeaders.forEach((header, i) => {
  console.log(`${i+1}: ${header}`);
});