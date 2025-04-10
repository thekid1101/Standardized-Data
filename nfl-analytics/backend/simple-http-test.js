// Simple Node.js HTTP test without external dependencies
const http = require('http');

// URLs to test with varying approaches
const tests = [
  { url: 'http://localhost:3001/health', name: 'Health (localhost)' },
  { url: 'http://127.0.0.1:3001/health', name: 'Health (127.0.0.1)' },
  { url: 'http://localhost:3001/api/test', name: 'API Test (localhost)' },
  { url: 'http://127.0.0.1:3001/api/test', name: 'API Test (127.0.0.1)' },
  // Test with direct socket options as well
  { 
    options: {
      hostname: 'localhost',
      port: 3001,
      path: '/health',
      method: 'GET',
    }, 
    name: 'Health (direct socket)'
  },
  { 
    options: {
      hostname: '127.0.0.1',
      port: 3001,
      path: '/api/test',
      method: 'GET',
    }, 
    name: 'API Test (direct socket)' 
  }
];

// Run each test sequentially
async function runTests() {
  console.log('Starting simple HTTP tests...\n');
  
  for (const test of tests) {
    await new Promise(resolve => {
      console.log(`Testing: ${test.name}`);
      
      const req = test.url 
        ? http.get(test.url) 
        : http.request(test.options);
      
      // Set timeout
      req.setTimeout(5000, () => {
        console.log(`  ❌ TIMEOUT: ${test.name}`);
        req.destroy();
        resolve();
      });
      
      req.on('response', (res) => {
        console.log(`  ✅ CONNECTED: ${test.name} (Status: ${res.statusCode})`);
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          try {
            const parsedData = JSON.parse(data);
            console.log(`  Response: ${JSON.stringify(parsedData).substring(0, 150)}...`);
          } catch (e) {
            console.log(`  Response: ${data.substring(0, 150)}...`);
          }
          console.log();
          resolve();
        });
      });
      
      req.on('error', (error) => {
        console.log(`  ❌ ERROR: ${test.name} - ${error.message}`);
        console.log();
        resolve();
      });
      
      req.end();
    });
  }
  
  console.log('All tests completed');
}

// Run the tests
runTests();