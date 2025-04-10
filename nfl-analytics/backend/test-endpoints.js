// Test script to verify all API endpoints
const http = require('http');

// Configuration
const BASE_URL = 'localhost';
const PORT = 3001;
const SAMPLE_PLAYER_ID = '00-0028118'; // Real player ID from database
const SAMPLE_TEAM_CODE = 'KC'; // Kansas City Chiefs
const SAMPLE_SEASON = 2023;
const SAMPLE_WEEK = 1;
const SAMPLE_GAME_KEY = '2023_01__1'; // Real game key from database
const SAMPLE_POSITION = 'QB';
const SAMPLE_STAT = 'passYards';

// Define the endpoints to test
const endpoints = [
  // Health endpoint
  { path: '/health', name: 'Health Check' },
  
  // Player endpoints
  { path: '/api/players', name: 'All Players' },
  { path: `/api/players/${SAMPLE_PLAYER_ID}`, name: 'Player by ID' },
  { path: `/api/players/team/${SAMPLE_TEAM_CODE}`, name: 'Players by Team' },
  
  // Team endpoints
  { path: '/api/teams', name: 'All Teams' },
  { path: `/api/teams/${SAMPLE_TEAM_CODE}`, name: 'Team by Code' },
  
  // Games endpoints
  { path: '/api/games', name: 'All Games' },
  // { path: `/api/games/season/${SAMPLE_SEASON}/week/${SAMPLE_WEEK}`, name: 'Games by Season/Week' },
  { path: `/api/games/season/${SAMPLE_SEASON}`, name: 'Games by Season' },
  { path: `/api/games/${SAMPLE_GAME_KEY}`, name: 'Game by Key' },
  
  // Game Stats endpoints
  { path: `/api/stats/player/${SAMPLE_PLAYER_ID}`, name: 'Player Stats' },
  { path: `/api/stats/game/${SAMPLE_GAME_KEY}`, name: 'Game Stats' },
  
  // These endpoints aren't available in the server.ts file
  /*
  { path: `/api/stats/top/${SAMPLE_POSITION}/${SAMPLE_SEASON}/${SAMPLE_STAT}`, name: 'Top Players by Stat' },
  { path: `/api/stats/trend/${SAMPLE_PLAYER_ID}/${SAMPLE_SEASON}/${SAMPLE_STAT}`, name: 'Player Stat Trend' },
  { path: `/api/stats/tendencies/team/${SAMPLE_TEAM_CODE}/${SAMPLE_SEASON}`, name: 'Team Tendencies' },
  { path: `/api/stats/correlation/team/${SAMPLE_POSITION}/${SAMPLE_SEASON}`, name: 'Position Correlation' },
  { path: `/api/stats/situational/${SAMPLE_PLAYER_ID}/${SAMPLE_SEASON}`, name: 'Situational Analysis' },
  */
  
  // Main dashboard endpoints (these replace the debug endpoints)
  { path: `/api/team-tendencies/${SAMPLE_TEAM_CODE}/${SAMPLE_SEASON}`, name: 'Team Tendencies (Dashboard)' },
  { path: `/api/correlation/team/${SAMPLE_POSITION}/${SAMPLE_SEASON}`, name: 'Position Correlation (Dashboard)' },
  { path: `/api/situational/${SAMPLE_PLAYER_ID}/${SAMPLE_SEASON}`, name: 'Situational Analysis (Dashboard)' }
];

// Function to make HTTP request and check response
function testEndpoint(endpoint) {
  return new Promise((resolve, reject) => {
    console.log(`Testing: ${endpoint.name} (${endpoint.path})`);
    
    const options = {
      hostname: BASE_URL,
      port: PORT,
      path: endpoint.path,
      method: 'GET',
      timeout: 10000 // 10 second timeout
    };
    
    const req = http.request(options, (res) => {
      const statusCode = res.statusCode;
      let responseBody = '';
      
      res.on('data', (chunk) => {
        responseBody += chunk;
      });
      
      res.on('end', () => {
        let result = {
          endpoint: endpoint.name,
          path: endpoint.path,
          statusCode,
          success: statusCode >= 200 && statusCode < 300,
          contentLength: responseBody.length,
          hasData: false,
          error: null
        };
        
        try {
          if (responseBody) {
            const data = JSON.parse(responseBody);
            // Check if response has actual data
            result.hasData = checkForData(data);
            
            // Don't include the full response body, it could be very large
            // Just include a sample or summary
            if (Array.isArray(data)) {
              result.dataType = 'array';
              result.count = data.length;
              result.sample = data.length > 0 ? summarizeObject(data[0]) : null;
            } else {
              result.dataType = 'object';
              result.keys = Object.keys(data);
              result.sample = summarizeObject(data);
            }
          }
        } catch (error) {
          result.error = `Error parsing response: ${error.message}`;
          result.rawResponseSample = responseBody.substring(0, 200) + '...';
        }
        
        resolve(result);
      });
    });
    
    req.on('error', (error) => {
      resolve({
        endpoint: endpoint.name,
        path: endpoint.path,
        success: false,
        error: `Request error: ${error.message}`
      });
    });
    
    req.on('timeout', () => {
      req.destroy();
      resolve({
        endpoint: endpoint.name,
        path: endpoint.path,
        success: false,
        error: 'Request timed out after 10 seconds'
      });
    });
    
    req.end();
  });
}

// Helper function to check if response has meaningful data
function checkForData(data) {
  if (!data) return false;
  
  if (Array.isArray(data)) {
    return data.length > 0;
  }
  
  if (typeof data === 'object') {
    // Check if object has any non-empty arrays or objects
    for (const key in data) {
      const value = data[key];
      
      if (Array.isArray(value) && value.length > 0) {
        return true;
      }
      
      if (typeof value === 'object' && value !== null && Object.keys(value).length > 0) {
        return true;
      }
    }
    
    // Check if object has any truthy primitive values
    return Object.values(data).some(v => !!v);
  }
  
  return !!data;
}

// Helper function to summarize object for display
function summarizeObject(obj) {
  if (!obj) return null;
  
  // Create a summary with just the first few keys
  const summary = {};
  const keys = Object.keys(obj).slice(0, 5);
  
  for (const key of keys) {
    const value = obj[key];
    if (Array.isArray(value)) {
      summary[key] = `Array(${value.length})`;
    } else if (typeof value === 'object' && value !== null) {
      summary[key] = 'Object';
    } else {
      summary[key] = value;
    }
  }
  
  if (Object.keys(obj).length > 5) {
    summary['...'] = `+${Object.keys(obj).length - 5} more fields`;
  }
  
  return summary;
}

// Run all the tests
async function runTests() {
  console.log('Starting endpoint tests...');
  console.log(`Base URL: http://${BASE_URL}:${PORT}`);
  console.log('-----------------------------------');
  
  const results = [];
  
  for (const endpoint of endpoints) {
    try {
      const result = await testEndpoint(endpoint);
      results.push(result);
      
      // Print immediate results
      console.log(`\n${result.endpoint} (${result.path}):`);
      console.log(`  Status: ${result.success ? 'SUCCESS' : 'FAILED'} (${result.statusCode || 'No response'})`);
      
      if (result.hasData === false && result.success) {
        console.log('  WARNING: Endpoint returned successfully but no meaningful data was found');
      }
      
      if (result.error) {
        console.log(`  Error: ${result.error}`);
      }
      
      if (result.dataType) {
        console.log(`  Data Type: ${result.dataType}`);
        if (result.dataType === 'array') {
          console.log(`  Count: ${result.count}`);
        }
        if (result.keys) {
          console.log(`  Keys: ${result.keys.join(', ')}`);
        }
      }
      
      console.log('-----------------------------------');
    } catch (error) {
      console.error(`Error testing ${endpoint.name}: ${error.message}`);
    }
  }
  
  // Summary
  console.log('\nTEST SUMMARY:');
  console.log('-----------------------------------');
  console.log(`Total Endpoints: ${results.length}`);
  
  const successful = results.filter(r => r.success);
  console.log(`Successful: ${successful.length}`);
  
  const failed = results.filter(r => !r.success);
  console.log(`Failed: ${failed.length}`);
  
  if (failed.length > 0) {
    console.log('\nFailed Endpoints:');
    failed.forEach(f => {
      console.log(`  - ${f.endpoint} (${f.path}): ${f.error || f.statusCode}`);
    });
  }
  
  const emptyResponses = results.filter(r => r.success && r.hasData === false);
  if (emptyResponses.length > 0) {
    console.log('\nSuccessful but Empty Responses:');
    emptyResponses.forEach(e => {
      console.log(`  - ${e.endpoint} (${e.path})`);
    });
  }
  
  console.log('\nTest run completed.');
}

// Run the tests
runTests();