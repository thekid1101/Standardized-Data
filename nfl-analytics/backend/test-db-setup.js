// Simple script to verify database access and the data directory
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Check platform
const isWindows = process.platform === 'win32';
console.log('Platform:', process.platform);

// Get data directory
const DATA_DIR = isWindows 
  ? (process.env.DATA_DIR || 'C:\\Users\\johnn\\Documents\\Standardized Data')
  : (process.env.DATA_DIR ? process.env.DATA_DIR : '/mnt/c/Users/johnn/Documents/Standardized Data');

console.log('Data directory from environment:', process.env.DATA_DIR);
console.log('Resolved data directory:', DATA_DIR);

// Check if directory exists
console.log('Directory exists:', fs.existsSync(DATA_DIR));

// List files in the directory
if (fs.existsSync(DATA_DIR)) {
  console.log('\nFiles in the data directory:');
  const files = fs.readdirSync(DATA_DIR);
  files.forEach(file => {
    console.log(`  - ${file}`);
  });
  
  // Find files matching expected patterns
  console.log('\nLooking for NFL data files:');
  const rosterFiles = files.filter(file => file.includes('Weekly-Roster-Key'));
  const gamelogFiles = files.filter(file => file.includes('Advanced-Gamelog'));
  const pbpFiles = files.filter(file => file.includes('Advanced-PBP-Data'));
  
  console.log(`Found ${rosterFiles.length} roster files:`, rosterFiles);
  console.log(`Found ${gamelogFiles.length} gamelog files:`, gamelogFiles);
  console.log(`Found ${pbpFiles.length} play-by-play files:`, pbpFiles);
  
  // Try to read a file to verify permissions
  if (rosterFiles.length > 0) {
    const testFile = path.join(DATA_DIR, rosterFiles[0]);
    try {
      const stats = fs.statSync(testFile);
      console.log(`\nTest file size: ${stats.size} bytes`);
      
      // Try to read the first few lines
      const data = fs.readFileSync(testFile, 'utf8').split('\n').slice(0, 5).join('\n');
      console.log('\nFirst few lines of test file:');
      console.log(data);
    } catch (err) {
      console.error('Error reading test file:', err);
    }
  }
}

// Try to initialize Prisma client
console.log('\nAttempting to connect to database...');
try {
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();
  
  // Immediately invoke an async function to use await with Prisma
  (async () => {
    try {
      await prisma.$connect();
      console.log('Successfully connected to database');
      
      // Check for existing data
      const teamCount = await prisma.team.count();
      const playerCount = await prisma.player.count();
      const gameCount = await prisma.game.count();
      
      console.log('\nCurrent database stats:');
      console.log(`- Teams: ${teamCount}`);
      console.log(`- Players: ${playerCount}`);
      console.log(`- Games: ${gameCount}`);
      
      console.log('\nDatabase connection test successful');
    } catch (error) {
      console.error('Database operation error:', error);
    } finally {
      await prisma.$disconnect();
      console.log('Database connection closed');
    }
  })();
} catch (error) {
  console.error('Failed to initialize Prisma client:', error);
}

console.log('\nTest script completed');