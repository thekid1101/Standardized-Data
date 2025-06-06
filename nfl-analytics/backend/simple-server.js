const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API test endpoint
app.get('/api/test', (req, res) => {
  console.log('Test endpoint hit:', new Date().toISOString());
  
  res.status(200).json({
    status: 'ok',
    message: 'API is accessible in simple mode',
    timestamp: new Date().toISOString(),
    note: 'This is a simplified server without database access'
  });
});

// Debug endpoints with mock data
app.get('/api/debug/team-tendencies/:teamCode/:season', (req, res) => {
  const { teamCode, season } = req.params;
  
  console.log(`Team tendencies request for: team=${teamCode}, season=${season}`);
  
  // Team-specific data to make it clear the endpoint is working correctly
  const teamData = {
    'KC': {
      name: 'Kansas City Chiefs',
      passPlays: 621,
      runPlays: 403,
      passPercentage: 60.6,
      runPercentage: 39.4,
      successRate: 52.3,
    },
    'SF': {
      name: 'San Francisco 49ers',
      passPlays: 512,
      runPlays: 488,
      passPercentage: 51.2,
      runPercentage: 48.8,
      successRate: 55.7,
    },
    'BAL': {
      name: 'Baltimore Ravens',
      passPlays: 480,
      runPlays: 530,
      passPercentage: 47.5,
      runPercentage: 52.5,
      successRate: 58.1,
    },
    'DET': {
      name: 'Detroit Lions',
      passPlays: 550,
      runPlays: 470,
      passPercentage: 53.9,
      runPercentage: 46.1,
      successRate: 54.3,
    },
    'DAL': {
      name: 'Dallas Cowboys',
      passPlays: 580,
      runPlays: 420,
      passPercentage: 58.0,
      runPercentage: 42.0,
      successRate: 50.5,
    }
  };
  
  // Season-specific data
  const seasonData = {
    '2020': { multiplier: 0.9, descriptor: 'Covid Season' },
    '2021': { multiplier: 0.95, descriptor: 'Recovery Season' },
    '2022': { multiplier: 1.0, descriptor: 'Normal Season' },
    '2023': { multiplier: 1.05, descriptor: 'Record-Breaking Season' },
    '2024': { multiplier: 1.1, descriptor: 'Current Season' },
  };
  
  // Get the team-specific data or use KC as fallback
  const team = teamData[teamCode] || teamData['KC'];
  // Get the season-specific data or use 2023 as fallback
  const seasonInfo = seasonData[season] || seasonData['2023'];
  
  // Create a response with team and season specific data
  const sampleResponse = {
    teamCode: teamCode,
    teamName: team.name,
    season: parseInt(season),
    seasonInfo: seasonInfo.descriptor,
    overview: {
      totalPlays: Math.round((team.passPlays + team.runPlays) * seasonInfo.multiplier),
      passPlays: Math.round(team.passPlays * seasonInfo.multiplier),
      runPlays: Math.round(team.runPlays * seasonInfo.multiplier),
      passPlayPercentage: team.passPercentage,
      runPlayPercentage: team.runPercentage,
      successRate: team.successRate,
      averageYardsPerPlay: 5.8,
      averageYardsPerPass: 7.2,
      averageYardsPerRun: 4.1,
      passSuccessRate: 48.4,
      runSuccessRate: 44.7
    },
    firstDown: {
      totalPlays: Math.round(389 * seasonInfo.multiplier),
      passPlays: Math.round(208 * seasonInfo.multiplier),
      runPlays: Math.round(181 * seasonInfo.multiplier),
      passPlayPercentage: Math.min(100, Math.round(team.passPercentage - 5)),
      runPlayPercentage: Math.min(100, Math.round(team.runPercentage + 5)),
      successRate: 49.1
    },
    thirdDown: {
      totalPlays: Math.round(192 * seasonInfo.multiplier),
      passPlays: Math.round(154 * seasonInfo.multiplier),
      runPlays: Math.round(38 * seasonInfo.multiplier),
      passPlayPercentage: Math.min(100, Math.round(team.passPercentage + 20)),
      runPlayPercentage: Math.max(0, Math.round(team.runPercentage - 20)),
      successRate: 41.7
    },
    redZone: {
      plays: Math.round(102 * seasonInfo.multiplier),
      touchdowns: Math.round(61 * seasonInfo.multiplier),
      fieldGoals: Math.round(22 * seasonInfo.multiplier),
      successRate: team.successRate + 25
    }
  };
  
  console.log(`Returning ${teamCode} (${team.name}) tendencies for ${season} season`);
  res.status(200).json(sampleResponse);
});

app.get('/api/debug/correlation/team/:position/:season', (req, res) => {
  const { position, season } = req.params;
  
  console.log(`Position correlation request for: position=${position}, season=${season}`);
  
  // Position-specific data
  const positionData = {
    'QB': {
      impact: 'High',
      yardsPerGame: 280,
      tdsPerGame: 2.1,
      importance: 90,
      correlation: 0.82
    },
    'RB': {
      impact: 'Medium',
      yardsPerGame: 120,
      tdsPerGame: 1.2,
      importance: 70,
      correlation: 0.65
    },
    'WR': {
      impact: 'Medium-High',
      yardsPerGame: 80,
      tdsPerGame: 0.8,
      importance: 75,
      correlation: 0.68
    },
    'TE': {
      impact: 'Medium-Low',
      yardsPerGame: 50,
      tdsPerGame: 0.5,
      importance: 60,
      correlation: 0.55
    },
    'DEF': {
      impact: 'High',
      yardsPerGame: 0,
      tdsPerGame: 0.2,
      importance: 85,
      correlation: 0.75
    }
  };
  
  // Season-specific data
  const seasonData = {
    '2020': { multiplier: 0.9, descriptor: 'Covid Season' },
    '2021': { multiplier: 0.95, descriptor: 'Recovery Season' },
    '2022': { multiplier: 1.0, descriptor: 'Normal Season' },
    '2023': { multiplier: 1.05, descriptor: 'Record-Breaking Season' },
    '2024': { multiplier: 1.1, descriptor: 'Current Season' },
  };
  
  // Get the position-specific data or use QB as fallback
  const posInfo = positionData[position] || positionData['QB'];
  // Get the season-specific data or use 2023 as fallback
  const seasonInfo = seasonData[season] || seasonData['2023'];
  
  // Adjust values based on season
  const yardsPerGame = Math.round(posInfo.yardsPerGame * seasonInfo.multiplier);
  const tdsPerGame = Math.round(posInfo.tdsPerGame * seasonInfo.multiplier * 10) / 10;
  
  // Create a sample position correlation response matching what the frontend expects
  const sampleResponse = {
    position: position,
    positionInfo: posInfo.impact,
    season: parseInt(season),
    seasonInfo: seasonInfo.descriptor,
    summary: {
      totalGames: Math.round(24 * seasonInfo.multiplier),
      winsWithTopPerformers: Math.round(18 * seasonInfo.multiplier),
      lossesWithTopPerformers: Math.round(6 * seasonInfo.multiplier),
      avgYardsInWins: Math.round(yardsPerGame * 1.1),
      avgYardsInLosses: Math.round(yardsPerGame * 0.7),
      yardsDifference: Math.round(yardsPerGame * 0.4)
    },
    correlationData: [
      { team: 'KC', opponent: 'SF', won: true, positionYards: Math.round(yardsPerGame * 1.05), positionTDs: Math.round(tdsPerGame * 1.4), points: 31 },
      { team: 'BAL', opponent: 'CIN', won: true, positionYards: Math.round(yardsPerGame * 0.92), positionTDs: Math.round(tdsPerGame * 0.95), points: 27 },
      { team: 'DET', opponent: 'GB', won: true, positionYards: Math.round(yardsPerGame * 1.08), positionTDs: Math.round(tdsPerGame * 1.9), points: 34 },
      { team: 'DAL', opponent: 'PHI', won: false, positionYards: Math.round(yardsPerGame * 0.68), positionTDs: Math.round(tdsPerGame * 0.48), points: 17 },
      { team: 'BUF', opponent: 'NYJ', won: true, positionYards: Math.round(yardsPerGame * 0.95), positionTDs: Math.round(tdsPerGame * 0.95), points: 24 }
    ],
    teamRankings: [
      { team: 'KC', teamName: 'Kansas City Chiefs', totalYards: Math.round(yardsPerGame * 17 * 1.03), totalTDs: Math.round(tdsPerGame * 17 * 1.15), wins: 14, losses: 3, avgYards: Math.round(yardsPerGame * 1.03), avgTDs: Math.round(tdsPerGame * 1.15 * 10) / 10, winRate: 82 },
      { team: 'DET', teamName: 'Detroit Lions', totalYards: Math.round(yardsPerGame * 17 * 0.99), totalTDs: Math.round(tdsPerGame * 17 * 1.05), wins: 12, losses: 5, avgYards: Math.round(yardsPerGame * 0.99), avgTDs: Math.round(tdsPerGame * 1.05 * 10) / 10, winRate: 71 },
      { team: 'BAL', teamName: 'Baltimore Ravens', totalYards: Math.round(yardsPerGame * 17 * 0.97), totalTDs: Math.round(tdsPerGame * 17 * 1.0), wins: 13, losses: 4, avgYards: Math.round(yardsPerGame * 0.97), avgTDs: Math.round(tdsPerGame * 1.0 * 10) / 10, winRate: 76 },
      { team: 'SF', teamName: 'San Francisco 49ers', totalYards: Math.round(yardsPerGame * 17 * 0.95), totalTDs: Math.round(tdsPerGame * 17 * 0.9), wins: 12, losses: 5, avgYards: Math.round(yardsPerGame * 0.95), avgTDs: Math.round(tdsPerGame * 0.9 * 10) / 10, winRate: 71 },
      { team: 'DAL', teamName: 'Dallas Cowboys', totalYards: Math.round(yardsPerGame * 17 * 0.92), totalTDs: Math.round(tdsPerGame * 17 * 0.85), wins: 11, losses: 6, avgYards: Math.round(yardsPerGame * 0.92), avgTDs: Math.round(tdsPerGame * 0.85 * 10) / 10, winRate: 65 }
    ]
  };
  
  console.log(`Returning ${position} correlation for ${season} season`);
  res.status(200).json(sampleResponse);
});

app.get('/api/debug/situational/:playerId/:season', (req, res) => {
  const { playerId, season } = req.params;
  
  // Create a sample situational data response matching what the frontend expects
  const sampleResponse = {
    playerId: playerId,
    season: parseInt(season),
    playerName: "Patrick Mahomes",
    position: "QB",
    team: "KC",
    situationalData: {
      redZone: {
        plays: 102,
        completions: 68,
        attempts: 89,
        yards: 421,
        touchdowns: 31,
        interceptions: 2,
        completionRate: 76.4,
        yardsPerPlay: 4.1
      },
      thirdDown: {
        plays: 185,
        completions: 152,
        attempts: 185,
        yards: 1780,
        touchdowns: 14,
        interceptions: 3,
        completionRate: 82.2,
        yardsPerPlay: 9.6
      },
      firstDown: {
        plays: 342,
        completions: 232,
        attempts: 342,
        yards: 2480,
        touchdowns: 12,
        interceptions: 4,
        completionRate: 67.8,
        yardsPerPlay: 7.3
      },
      fourthQuarter: {
        plays: 229,
        completions: 215,
        attempts: 229,
        yards: 2240,
        touchdowns: 18,
        interceptions: 5,
        completionRate: 93.9,
        yardsPerPlay: 9.8
      },
      overall: {
        plays: 1024,
        completions: 894,
        attempts: 1024,
        yards: 9542,
        touchdowns: 68,
        interceptions: 12,
        completionRate: 87.3,
        yardsPerPlay: 9.3
      }
    }
  };
  
  console.log('Returning sample situational data');
  res.status(200).json(sampleResponse);
});

// Health check endpoint
app.get('/health', (req, res) => {
  console.log('Health check endpoint hit:', new Date().toISOString());
  
  const response = { 
    status: 'ok', 
    message: 'Simple server is running',
    timestamp: new Date().toISOString(),
    mode: 'simple (no database)',
    endpoints: [
      '/api/test',
      '/api/debug/team-tendencies/:teamCode/:season',
      '/api/debug/correlation/team/:position/:season',
      '/api/debug/situational/:playerId/:season',
      '/health'
    ]
  };
  
  console.log('Health check response');
  res.status(200).json(response);
});

// Start server
console.log(`Starting simple server on port ${port}...`);
app.listen(port, '0.0.0.0', () => {
  console.log(`\n====================================`);
  console.log(`🚀 Simple server running on port ${port}`);
  console.log(`====================================`);
  console.log(`\nEndpoints available:`);
  console.log(`- http://localhost:${port}/api/test`);
  console.log(`- http://localhost:${port}/api/debug/team-tendencies/KC/2023`);
  console.log(`- http://localhost:${port}/api/debug/correlation/team/QB/2023`);
  console.log(`- http://localhost:${port}/api/debug/situational/12345/2023`);
  console.log(`- http://localhost:${port}/health`);
  console.log(`\nNo database connection required`);
});