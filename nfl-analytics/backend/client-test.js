// Simple client test script
const axios = require('axios');

// URLs to test
const urls = [
  'http://localhost:3001/health',
  'http://127.0.0.1:3001/health',
  'http://0.0.0.0:3001/health',
  'http://localhost:3001/api/test',
  'http://127.0.0.1:3001/api/test',
  'http://0.0.0.0:3001/api/test'
];

async function testUrls() {
  console.log('Starting URL connectivity tests...\n');
  
  for (const url of urls) {
    try {
      console.log(`Testing URL: ${url}`);
      const startTime = Date.now();
      const response = await axios.get(url, { timeout: 3000 });
      const endTime = Date.now();
      
      console.log(`✅ SUCCESS: ${url}`);
      console.log(`   Status: ${response.status}`);
      console.log(`   Time: ${endTime - startTime}ms`);
      console.log(`   Response: ${JSON.stringify(response.data)}\n`);
    } catch (error) {
      console.log(`❌ FAILED: ${url}`);
      if (error.code) {
        console.log(`   Error Code: ${error.code}`);
      }
      console.log(`   Error Message: ${error.message}\n`);
    }
  }
}

testUrls().catch(error => {
  console.error('Test failed with error:', error);
});