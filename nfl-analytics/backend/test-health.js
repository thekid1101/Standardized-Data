// Simple HTTP client to test the server health endpoint
const http = require('http');

// Define options
const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/health',
  method: 'GET'
};

// Make the request
const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  
  let data = '';
  
  // A chunk of data has been received
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  // The whole response has been received
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(data);
      console.log('Response Data:');
      console.log(JSON.stringify(parsedData, null, 2));
    } catch (e) {
      console.error('Error parsing JSON:', e);
      console.log('Raw data:', data);
    }
  });
});

// Handle request errors
req.on('error', (error) => {
  console.error(`Request error: ${error.message}`);
});

// End the request
req.end();

console.log('Sending health check request to http://localhost:3001/health...');