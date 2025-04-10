const http = require('http');

// Configure the request
const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/players',
  method: 'GET'
};

console.log(`Testing ${options.path} endpoint...`);

// Make the request
const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  
  let data = '';
  
  // Collect data chunks
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  // When all data is received
  res.on('end', () => {
    try {
      // Try to parse as JSON
      const jsonData = JSON.parse(data);
      
      if (Array.isArray(jsonData)) {
        console.log(`Response is an array with ${jsonData.length} items`);
        if (jsonData.length > 0) {
          console.log(`First item sample:`, jsonData[0]);
        }
      } else if (jsonData.data && Array.isArray(jsonData.data)) {
        console.log(`Response is a paginated object with ${jsonData.data.length} items`);
        console.log(`Pagination info:`, jsonData.pagination);
        if (jsonData.data.length > 0) {
          console.log(`First item sample:`, jsonData.data[0]);
        }
      } else {
        console.log(`Response structure:`, Object.keys(jsonData));
      }
    } catch (e) {
      console.error('Failed to parse JSON response:', e);
      // Print first 200 characters of response for debugging
      console.log('Response preview:', data.substring(0, 200));
    }
  });
});

// Handle errors
req.on('error', (error) => {
  console.error(`Request error: ${error.message}`);
});

// Send the request
req.end();