// Minimal Express server without Prisma
const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  console.log('Health check hit:', new Date().toISOString());
  res.status(200).json({ 
    status: 'ok', 
    message: 'Minimal Express server is running',
    timestamp: new Date().toISOString()
  });
});

// Simple API test endpoint
app.get('/api/test', (req, res) => {
  console.log('API test hit:', new Date().toISOString());
  res.status(200).json({
    message: 'Minimal Express API is working',
    timestamp: new Date().toISOString()
  });
});

// Start server
console.log(`Attempting to start minimal Express server on port ${port}...`);

// Try binding to all interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`Minimal Express server running on http://localhost:${port}`);
  console.log(`Try accessing: http://localhost:${port}/health`);
  console.log(`Try accessing: http://localhost:${port}/api/test`);
});