const http = require('http');

// Test the debug-version endpoint
const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/debug-version',
  method: 'GET'
};

console.log(`Testing ${options.path} endpoint...`);

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    try {
      const jsonData = JSON.parse(data);
      console.log('Debug response:', jsonData);
    } catch (e) {
      console.error('Failed to parse JSON response:', e);
      console.log('Response preview:', data.substring(0, 200));
    }
  });
});

req.on('error', (error) => {
  console.error(`Request error: ${error.message}`);
});

req.end();