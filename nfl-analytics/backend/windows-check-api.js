// Windows-compatible API testing script
const http = require('http');

// URL parts
const HOST = 'localhost';
const PORT = 3001;
const BASE_PATH = '/api';
const HEALTH_PATH = '/health';

function makeRequest(path, description) {
  return new Promise((resolve, reject) => {
    console.log(`Checking ${description}...`);
    
    const options = {
      hostname: HOST,
      port: PORT,
      path: path,
      method: 'GET',
    };

    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`✅ SUCCESS: ${description}`);
          console.log(`   Status: ${res.statusCode}`);
          try {
            const parsedData = JSON.parse(data);
            console.log(`   Response: ${JSON.stringify(parsedData).substring(0, 200)}${JSON.stringify(parsedData).length > 200 ? '...' : ''}`);
            resolve({ success: true, data: parsedData });
          } catch (e) {
            console.log(`   Response: (Not JSON) ${data.substring(0, 100)}${data.length > 100 ? '...' : ''}`);
            resolve({ success: true, data });
          }
        } else {
          console.log(`❌ FAILED: ${description}`);
          console.log(`   Status: ${res.statusCode}`);
          reject(new Error(`Status ${res.statusCode}`));
        }
      });
    });
    
    req.on('error', (error) => {
      console.log(`❌ FAILED: ${description}`);
      console.log(`   Error: ${error.message}`);
      reject(error);
    });
    
    req.end();
  });
}

async function runTests() {
  console.log('\n========== API ENDPOINT TESTS ==========\n');
  
  console.log('\n----- BASIC ENDPOINTS -----\n');
  
  try {
    // Test health endpoint
    await makeRequest(HEALTH_PATH, 'Health Check');
    
    // Test teams endpoint
    await makeRequest(`${BASE_PATH}/teams`, 'Teams List');
    
    // Test players endpoint
    await makeRequest(`${BASE_PATH}/players`, 'Players List');
    
    // Test games endpoint
    await makeRequest(`${BASE_PATH}/games`, 'Games List');
    
    console.log('\n----- ANALYTICS ENDPOINTS -----\n');
    
    // Test stats endpoint
    await makeRequest(`${BASE_PATH}/stats`, 'Stats Overview');
    
  } catch (error) {
    console.error('Error running tests:', error.message);
  }
  
  console.log('\n=============== TESTS COMPLETED ===============\n');
}

// Run the tests
runTests();