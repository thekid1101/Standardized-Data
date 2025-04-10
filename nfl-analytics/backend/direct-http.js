// Direct HTTP request without using browser
const http = require('http');

// Simple helper function to make HTTP requests
function makeRequest(options, path) {
  return new Promise((resolve, reject) => {
    console.log(`Testing: ${options.protocol}//${options.hostname}:${options.port}${path}`);
    
    const req = http.request(
      {
        hostname: options.hostname,
        port: options.port,
        path: path,
        method: 'GET',
        timeout: 5000,
        headers: {
          'User-Agent': 'Node.js HTTP Client',
          'Connection': 'close'
        }
      },
      (res) => {
        console.log(`  Status: ${res.statusCode}`);
        console.log(`  Headers: ${JSON.stringify(res.headers)}`);
        
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          try {
            if (data.trim().startsWith('{')) {
              // Try to parse as JSON
              const parsedData = JSON.parse(data);
              console.log(`  Response (JSON): ${JSON.stringify(parsedData, null, 2)}`);
            } else {
              console.log(`  Response (raw): ${data}`);
            }
          } catch (e) {
            console.log(`  Response (raw): ${data}`);
          }
          resolve(true);
        });
      }
    );
    
    req.on('error', (error) => {
      console.log(`  ❌ ERROR: ${error.message}`);
      reject(error);
    });
    
    req.on('timeout', () => {
      console.log('  ❌ Request timed out');
      req.destroy();
      reject(new Error('Request timed out'));
    });
    
    req.end();
  });
}

async function testEndpoints() {
  console.log('\n======== Direct HTTP Tests ========\n');
  
  const options = {
    hostname: 'localhost',
    port: 3001,
    protocol: 'http:'
  };
  
  try {
    // Try health endpoint
    await makeRequest(options, '/health');
  } catch (e) {
    // Ignore error, we'll try with the IP address instead
  }
  
  try {
    // Try with 127.0.0.1
    const options2 = {
      hostname: '127.0.0.1',
      port: 3001,
      protocol: 'http:'
    };
    
    await makeRequest(options2, '/health');
  } catch (e) {
    // Ignore error, we'll try the API endpoint
  }
  
  try {
    // Try API test endpoint
    await makeRequest(options, '/api/test');
  } catch (e) {
    // Ignore error
  }
  
  // Done with tests
  console.log('\n======== Tests Complete ========\n');
}

// Run the tests
testEndpoints().catch(console.error);