// Simple test script to verify Prisma is working
const { PrismaClient } = require('../src/generated/prisma');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Initialize constants
const DATA_DIR = process.env.DATA_DIR;

async function main() {
  console.log('Starting simple import test...');
  console.log(`Using data directory: ${DATA_DIR}`);
  
  try {
    // Initialize Prisma client
    const prisma = new PrismaClient();
    console.log('Prisma client initialized successfully');
    
    // Test connection
    await prisma.$connect();
    console.log('Connected to database');
    
    // Check if data directory exists
    if (!fs.existsSync(DATA_DIR)) {
      console.error(`Data directory not found: ${DATA_DIR}`);
      return;
    }
    
    // List files in the data directory
    const files = fs.readdirSync(DATA_DIR);
    console.log(`Found ${files.length} files in the data directory:`);
    files.forEach(file => console.log(`- ${file}`));
    
    // Try to create a test team
    const team = await prisma.team.upsert({
      where: { code: 'TEST' },
      update: {},
      create: {
        code: 'TEST',
        name: 'Test Team',
        conference: 'TEST',
        division: 'TEST'
      }
    });
    
    console.log('Created test team:', team);
    
    // Count entities
    const teamCount = await prisma.team.count();
    console.log(`Team count: ${teamCount}`);
    
    console.log('Test completed successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

main()
  .catch(e => {
    console.error('Fatal error:', e);
    process.exit(1);
  });