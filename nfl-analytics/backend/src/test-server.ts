import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3001;

// Initialize Prisma client
const prisma = new PrismaClient();

// Add BigInt serialization support to JSON
(BigInt.prototype as any).toJSON = function() {
  return Number(this);
};

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', async (req, res) => {
  console.log('Health check endpoint hit:', new Date().toISOString());
  
  try {
    // Get counts for basic entities
    const [playerCount, gameCount, teamCount] = await Promise.all([
      prisma.player.count(),
      prisma.game.count(),
      prisma.team.count()
    ]);
    
    const response = { 
      status: 'ok', 
      message: 'Server is running',
      timestamp: new Date().toISOString(),
      dbStats: {
        playerCount,
        gameCount,
        teamCount,
        dbStatus: 'connected'
      }
    };
    
    console.log('Health check response:', JSON.stringify(response));
    res.status(200).json(response);
  } catch (error) {
    console.error('Error checking database:', error);
    const errorResponse = { 
      status: 'degraded', 
      message: 'Server is running but database check failed',
      timestamp: new Date().toISOString(),
      error: String(error)
    };
    console.log('Health check error response:', JSON.stringify(errorResponse));
    res.status(200).json(errorResponse);
  }
});

// Simple endpoint to get teams
app.get('/api/teams', async (req, res) => {
  try {
    const teams = await prisma.team.findMany();
    res.status(200).json(teams);
  } catch (error) {
    console.error('Error fetching teams:', error);
    res.status(500).json({ error: 'Failed to fetch teams' });
  }
});

// Start server
const numericPort = typeof port === 'string' ? parseInt(port, 10) : port;
app.listen(numericPort, '0.0.0.0', () => {
  console.log(`Test server running on 0.0.0.0:${numericPort}`);
  console.log(`Try accessing: http://localhost:${numericPort}/health`);
});

// Handle graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Disconnected from database');
  process.exit(0);
});