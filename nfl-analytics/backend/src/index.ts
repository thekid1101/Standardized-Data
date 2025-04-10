import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import routes from './api/routes';

// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3001;

// Initialize Prisma client
export const prisma = new PrismaClient();

// Add BigInt serialization support to JSON
// This fixes "TypeError: Do not know how to serialize a BigInt" errors
(BigInt.prototype as any).toJSON = function() {
  return Number(this);
};

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api', routes);

// Simple test endpoint that doesn't need database access
app.get('/api/test', (req, res) => {
  console.log('Test endpoint hit:', new Date().toISOString());
  console.log('Request headers:', req.headers);
  console.log('Request IP:', req.ip);
  
  res.status(200).json({
    status: 'ok',
    message: 'API is accessible',
    timestamp: new Date().toISOString(),
    requestInfo: {
      ip: req.ip,
      method: req.method,
      path: req.path,
      userAgent: req.get('user-agent')
    }
  });
});


// Health check endpoint with enhanced diagnostics
app.get('/health', async (req, res) => {
  console.log('Health check endpoint hit:', new Date().toISOString());
  console.log('Request headers:', req.headers);
  console.log('Request IP:', req.ip);
  
  try {
    // Get counts for basic entities
    const [playerCount, gameCount, teamCount, playerGameStatCount] = await Promise.all([
      prisma.player.count(),
      prisma.game.count(),
      prisma.team.count(),
      prisma.playerGameStat.count()
    ]);
    
    const response = { 
      status: 'ok', 
      message: 'Server is running',
      timestamp: new Date().toISOString(),
      requestInfo: {
        ip: req.ip,
        method: req.method,
        path: req.path,
        userAgent: req.get('user-agent')
      },
      dbStats: {
        playerCount,
        gameCount,
        teamCount,
        playerGameStatCount,
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
      requestInfo: {
        ip: req.ip,
        method: req.method,
        path: req.path,
        userAgent: req.get('user-agent')
      },
      error: String(error)
    };
    console.log('Health check error response:', JSON.stringify(errorResponse));
    res.status(200).json(errorResponse);
  }
});

// Start server with more detailed logging
console.log(`Attempting to start server on port ${port}...`);
console.log(`Environment: PORT=${process.env.PORT}`);

// Try binding to specific addresses (fix type error by ensuring port is a number)
const numericPort = typeof port === 'string' ? parseInt(port, 10) : port;

// List all interfaces we're binding to for debugging
console.log('Binding to multiple interfaces for better connectivity:');

// Start the server on all interfaces (0.0.0.0)
app.listen(numericPort, '0.0.0.0', () => {
  console.log(`Server running on 0.0.0.0:${numericPort}`);
  console.log(`Try accessing: http://localhost:${numericPort}/health from Windows`);
  console.log(`Try accessing: http://127.0.0.1:${numericPort}/health from Windows`);
});

// Handle graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Disconnected from database');
  process.exit(0);
});