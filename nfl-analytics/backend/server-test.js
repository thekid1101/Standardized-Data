// Simple server test script
const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Simple health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'Test server is running'
  });
});

// Simple API endpoint
app.get('/api/test', (req, res) => {
  res.status(200).json({
    message: 'API test endpoint is working',
    timestamp: new Date().toISOString()
  });
});

// Start server
console.log(`Attempting to start test server on port ${port}...`);

// Try binding to all interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`Test server running on 0.0.0.0:${port}`);
  console.log(`Try accessing: http://localhost:${port}/health`);
});