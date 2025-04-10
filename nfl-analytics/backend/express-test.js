// Minimal Express server test
const express = require('express');

// Initialize Express app
const app = express();
const port = 3002; // Use a different port to avoid conflicts

// Health check endpoint
app.get('/health', (req, res) => {
  console.log('Health check hit');
  res.json({ status: 'ok', message: 'Express test server is running' });
});

// Start server
console.log(`Starting test Express server on port ${port}...`);

app.listen(port, '0.0.0.0', () => {
  console.log(`Test Express server running on 0.0.0.0:${port}`);
  console.log(`Try accessing: http://localhost:${port}/health`);
});