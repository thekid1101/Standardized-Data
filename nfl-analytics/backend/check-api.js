// Comprehensive API endpoint testing
const axios = require('axios');

// Try different IP addresses
// Try connecting to all interfaces
const BASE_URL = 'http://localhost:3001/api';
// Also try the health endpoint on its own
const HEALTH_URL = 'http://localhost:3001/health';

// Also try these URLs if the above fails
const ALT_BASE_URL = 'http://0.0.0.0:3001/api';
const ALT_HEALTH_URL = 'http://0.0.0.0:3001/health';

async function checkEndpoint(endpoint, description) {
  try {
    console.log(`Checking ${description}...`);
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    console.log(`✅ SUCCESS: ${description}`);
    
    if (Array.isArray(response.data)) {
      console.log(`   Response: Array with ${response.data.length} items`);
      if (response.data.length > 0) {
        console.log('   First item sample:', JSON.stringify(response.data[0]).substring(0, 200) + '...');
      }
    } else if (typeof response.data === 'object' && response.data !== null) {
      console.log('   Response keys:', Object.keys(response.data));
      const sample = JSON.stringify(response.data).substring(0, 200) + '...';
      console.log('   Sample:', sample);
    }
    
    return { success: true, data: response.data };
  } catch (error) {
    console.log(`❌ FAILED: ${description}`);
    if (error.response) {
      console.log(`   Status: ${error.response.status}`);
      console.log(`   Message: ${error.message}`);
      if (error.response.data) {
        console.log(`   Response: ${JSON.stringify(error.response.data)}`);
      }
    } else {
      console.log(`   Error: ${error.message}`);
    }
    return { success: false, error };
  }
}

async function runTests() {
  console.log('\n========== API ENDPOINT TESTS ==========\n');
  
  console.log('\n----- BASIC ENDPOINTS -----\n');
  
  // Test health endpoint directly with multiple URLs
  try {
    console.log('Checking direct health endpoint (localhost)...');
    const healthResponse = await axios.get(HEALTH_URL);
    console.log('✅ SUCCESS: Direct Health Check (localhost)');
    console.log('   Response:', JSON.stringify(healthResponse.data));
  } catch (error) {
    console.log('❌ FAILED: Direct Health Check (localhost)');
    console.log('   Error:', error.message);
    
    // Try alternative URL
    try {
      console.log('Checking direct health endpoint (0.0.0.0)...');
      const altHealthResponse = await axios.get(ALT_HEALTH_URL);
      console.log('✅ SUCCESS: Direct Health Check (0.0.0.0)');
      console.log('   Response:', JSON.stringify(altHealthResponse.data));
    } catch (altError) {
      console.log('❌ FAILED: Direct Health Check (0.0.0.0)');
      console.log('   Error:', altError.message);
    }
  }
  
  // Test health through API
  await checkEndpoint('/health', 'Health Check via API');
  
  // Test teams endpoints
  const teamsResult = await checkEndpoint('/teams', 'Teams List');
  let teamCode = 'KC'; // Default
  if (teamsResult.success && teamsResult.data.length > 0) {
    teamCode = teamsResult.data[0].code;
    console.log(`   Using team code: ${teamCode} for further tests`);
  }
  
  await checkEndpoint(`/teams/${teamCode}`, 'Single Team');
  await checkEndpoint(`/teams/${teamCode}/current-roster`, 'Current Roster');
  await checkEndpoint(`/teams/${teamCode}/stats/2023`, 'Team Stats');
  await checkEndpoint(`/teams/${teamCode}/position-analysis/2023`, 'Team Position Analysis');
  await checkEndpoint(`/teams/${teamCode}/roster/2023/1`, 'Team Weekly Roster');
  
  // Test players endpoints
  const playersResult = await checkEndpoint('/players', 'Players List');
  let playerId = '';
  if (playersResult.success && playersResult.data.length > 0) {
    playerId = playersResult.data[0].id;
    console.log(`   Using player ID: ${playerId} for further tests`);
  }
  
  if (playerId) {
    await checkEndpoint(`/players/${playerId}`, 'Single Player');
    await checkEndpoint(`/players/${playerId}/stats/2023`, 'Player Stats');
    await checkEndpoint('/players/search/smith', 'Player Search');
    
    // If we have two players, test comparison
    if (playersResult.data.length > 1) {
      const player2Id = playersResult.data[1].id;
      await checkEndpoint(`/players/compare/${playerId}/${player2Id}/2023`, 'Player Comparison');
    }
    
    await checkEndpoint('/players/position/QB', 'Players by Position');
  }
  
  // Test games endpoints
  await checkEndpoint('/games', 'Games List');
  await checkEndpoint('/games/season/2023/week/1', 'Games by Week');
  
  const gamesResult = await checkEndpoint('/games', 'Get Game Key');
  let gameKey = '';
  if (gamesResult.success && gamesResult.data.data && gamesResult.data.data.length > 0) {
    gameKey = gamesResult.data.data[0].key;
    console.log(`   Using game key: ${gameKey} for further tests`);
  } else if (gamesResult.success && Array.isArray(gamesResult.data) && gamesResult.data.length > 0) {
    gameKey = gamesResult.data[0].key;
    console.log(`   Using game key: ${gameKey} for further tests`);
  }
  
  if (gameKey) {
    await checkEndpoint(`/games/${gameKey}`, 'Single Game');
    await checkEndpoint(`/games/${gameKey}/players`, 'Game Player Stats');
    await checkEndpoint(`/games/${gameKey}/plays`, 'Game Plays');
  }
  
  console.log('\n----- ANALYTICS ENDPOINTS -----\n');
  
  // Test stats endpoints
  await checkEndpoint('/stats', 'Stats Overview');
  await checkEndpoint('/stats/top/QB/2023/passYards', 'Top QBs');
  await checkEndpoint('/stats/top/WR/2023/receivingYards', 'Top WRs');
  await checkEndpoint('/stats/top/RB/2023/rushYards', 'Top RBs');
  
  // Position role comparison
  await checkEndpoint('/stats/compare/WR/WR1/WR2/2023', 'Position Role Comparison');
  
  // Player trend
  if (playerId) {
    await checkEndpoint(`/stats/trend/${playerId}/2023/fantasyPoints`, 'Player Trend');
  }
  
  // Key analytics endpoints we implemented
  await checkEndpoint(`/stats/tendencies/team/${teamCode}/2023`, 'Team Tendencies');
  await checkEndpoint('/stats/correlation/team/QB/2023', 'Position Correlation');
  
  if (playerId) {
    await checkEndpoint(`/stats/situational/${playerId}/2023`, 'Situational Analysis');
  }
  
  console.log('\n----- PLAYS ENDPOINTS -----\n');
  
  // Test plays endpoints
  if (gameKey && teamCode) {
    await checkEndpoint(`/plays/game/${gameKey}/team/${teamCode}`, 'Team Plays');
  }
  
  if (playerId) {
    await checkEndpoint(`/plays/player/${playerId}/season/2023`, 'Player Plays');
  }
  
  console.log('\n=============== TESTS COMPLETED ===============\n');
}

// Run all tests
runTests().catch(console.error);