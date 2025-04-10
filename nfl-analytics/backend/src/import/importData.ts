import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const prisma = new PrismaClient();

// Detect the platform
const isWindows = process.platform === 'win32';

// Use appropriate path based on platform
const DATA_DIR = process.env.DATA_DIR || 
  (isWindows 
    ? 'C:\\Users\\johnn\\Documents\\Standardized Data'
    : '/mnt/c/Users/johnn/Documents/Standardized Data');

console.log('Data directory:', DATA_DIR);
console.log('Platform:', process.platform);

// Helper function to try multiple path variations
function findFile(filename: string): string | null {
  // Create base paths using path.join for proper platform-specific separators
  const possiblePaths = [
    path.join(DATA_DIR, filename),
    // Try alternative locations
    path.join(process.cwd(), '..', filename),
    // Include both Windows and Unix style paths to maximize compatibility
    isWindows ? path.join('C:\\Users\\johnn\\Documents\\Standardized Data', filename) : null,
    !isWindows ? path.join('/mnt/c/Users/johnn/Documents/Standardized Data', filename) : null,
    // Try more variations with different casing and folders
    path.join(DATA_DIR, '..', filename),
    path.join(DATA_DIR, 'nfl-analytics', filename),
    path.join(DATA_DIR, 'NFL', filename),
  ].filter(Boolean); // Remove null values
  
  console.log('Searching for file:', filename);
  console.log('Possible paths:');
  
  for (const p of possiblePaths) {
    console.log(` - ${p} (exists: ${fs.existsSync(p)})`);
    if (fs.existsSync(p)) {
      return p;
    }
  }
  
  return null;
}
const SEASONS = [2020, 2021, 2022, 2023, 2024];

type TeamData = {
  code: string;
  name: string;
  conference: string;
  division: string;
};

// NFL teams data
const TEAMS: TeamData[] = [
  { code: 'ARI', name: 'Arizona Cardinals', conference: 'NFC', division: 'West' },
  { code: 'ATL', name: 'Atlanta Falcons', conference: 'NFC', division: 'South' },
  { code: 'BAL', name: 'Baltimore Ravens', conference: 'AFC', division: 'North' },
  { code: 'BUF', name: 'Buffalo Bills', conference: 'AFC', division: 'East' },
  { code: 'CAR', name: 'Carolina Panthers', conference: 'NFC', division: 'South' },
  { code: 'CHI', name: 'Chicago Bears', conference: 'NFC', division: 'North' },
  { code: 'CIN', name: 'Cincinnati Bengals', conference: 'AFC', division: 'North' },
  { code: 'CLE', name: 'Cleveland Browns', conference: 'AFC', division: 'North' },
  { code: 'DAL', name: 'Dallas Cowboys', conference: 'NFC', division: 'East' },
  { code: 'DEN', name: 'Denver Broncos', conference: 'AFC', division: 'West' },
  { code: 'DET', name: 'Detroit Lions', conference: 'NFC', division: 'North' },
  { code: 'GB', name: 'Green Bay Packers', conference: 'NFC', division: 'North' },
  { code: 'HOU', name: 'Houston Texans', conference: 'AFC', division: 'South' },
  { code: 'IND', name: 'Indianapolis Colts', conference: 'AFC', division: 'South' },
  { code: 'JAX', name: 'Jacksonville Jaguars', conference: 'AFC', division: 'South' },
  { code: 'KC', name: 'Kansas City Chiefs', conference: 'AFC', division: 'West' },
  { code: 'LV', name: 'Las Vegas Raiders', conference: 'AFC', division: 'West' },
  { code: 'LAC', name: 'Los Angeles Chargers', conference: 'AFC', division: 'West' },
  { code: 'LAR', name: 'Los Angeles Rams', conference: 'NFC', division: 'West' },
  { code: 'MIA', name: 'Miami Dolphins', conference: 'AFC', division: 'East' },
  { code: 'MIN', name: 'Minnesota Vikings', conference: 'NFC', division: 'North' },
  { code: 'NE', name: 'New England Patriots', conference: 'AFC', division: 'East' },
  { code: 'NO', name: 'New Orleans Saints', conference: 'NFC', division: 'South' },
  { code: 'NYG', name: 'New York Giants', conference: 'NFC', division: 'East' },
  { code: 'NYJ', name: 'New York Jets', conference: 'AFC', division: 'East' },
  { code: 'PHI', name: 'Philadelphia Eagles', conference: 'NFC', division: 'East' },
  { code: 'PIT', name: 'Pittsburgh Steelers', conference: 'AFC', division: 'North' },
  { code: 'SF', name: 'San Francisco 49ers', conference: 'NFC', division: 'West' },
  { code: 'SEA', name: 'Seattle Seahawks', conference: 'NFC', division: 'West' },
  { code: 'TB', name: 'Tampa Bay Buccaneers', conference: 'NFC', division: 'South' },
  { code: 'TEN', name: 'Tennessee Titans', conference: 'AFC', division: 'South' },
  { code: 'WAS', name: 'Washington Commanders', conference: 'NFC', division: 'East' },
];

// Helper function to read a CSV file
async function readCsvFile<T>(filePath: string): Promise<T[]> {
  console.log(`Attempting to read CSV file at: ${filePath}`);
  console.log(`File exists: ${fs.existsSync(filePath)}`);
  
  return new Promise((resolve, reject) => {
    const results: T[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data as T))
      .on('end', () => {
        console.log(`Successfully read ${results.length} rows from ${filePath}`);
        resolve(results);
      })
      .on('error', (error) => {
        console.error(`Error reading ${filePath}:`, error);
        reject(error);
      });
  });
}

// Import teams
async function importTeams() {
  console.log('Importing teams...');
  for (const team of TEAMS) {
    await prisma.team.upsert({
      where: { code: team.code },
      update: team,
      create: team,
    });
  }
  console.log('Teams imported successfully');
}

// Import players and weekly rosters
async function importRosters() {
  console.log('Importing rosters...');
  
  const players = new Map<string, { id: string; name: string; position?: string }>();
  const weeklyRosters = [];
  
  for (const season of SEASONS) {
    try {
      const rosterFileName = `${season}-Weekly-Roster-Key-Standardized.csv`;
      const rosterFile = findFile(rosterFileName);
      
      if (!rosterFile) {
        console.log(`Roster file for ${season} not found, skipping`);
        continue;
      }
      
      const rosters = await readCsvFile<any>(rosterFile);
      
      for (const roster of rosters) {
        // Add player if not exists
        if (!players.has(roster.player_id)) {
          // Make sure we have a name for the player
          const playerName = roster.player_name || `Player ${roster.player_id}`;
          players.set(roster.player_id, {
            id: roster.player_id,
            name: playerName,
            position: roster.position || null,
          });
        }
        
        // Save weekly roster for later insertion
        weeklyRosters.push({
          playerId: roster.player_id,
          week: parseInt(roster.week, 10),
          season: season,
          team: roster.team,
          jerseyNumber: roster.jersey_number ? parseInt(roster.jersey_number, 10) : null,
          position: roster.position,
        });
      }
      
      console.log(`Processed rosters for ${season}`);
    } catch (error) {
      console.error(`Error processing rosters for ${season}:`, error);
    }
  }
  
  // First import all players
  console.log(`Importing ${players.size} players...`);
  for (const player of players.values()) {
    try {
      await prisma.player.upsert({
        where: { id: player.id },
        update: player,
        create: player,
      });
    } catch (error) {
      console.error(`Error importing player ${player.id}:`, error);
    }
  }
  console.log('Players imported successfully');
  
  // Now import weekly rosters
  console.log(`Importing ${weeklyRosters.length} weekly rosters...`);
  let count = 0;
  for (const roster of weeklyRosters) {
    try {
      await prisma.weeklyRoster.upsert({
        where: {
          playerId_week_season_team: {
            playerId: roster.playerId,
            week: roster.week,
            season: roster.season,
            team: roster.team,
          },
        },
        update: {
          jerseyNumber: roster.jerseyNumber,
          position: roster.position,
        },
        create: roster,
      });
      
      count++;
      if (count % 1000 === 0) {
        console.log(`Imported ${count}/${weeklyRosters.length} rosters...`);
      }
    } catch (error) {
      console.error(`Error importing roster for player ${roster.playerId}, week ${roster.week}, season ${roster.season}:`, error);
    }
  }
  
  console.log('Weekly rosters imported successfully');
}

// Import games and player game stats
async function importGamelogs() {
  console.log('Importing game logs...');
  
  const allGames = new Map<string, any>();
  const playerGameStats = [];
  
  for (const season of SEASONS) {
    try {
      const gamelogFileName = `${season}-Advanced-Gamelog-Standardized.csv`;
      const gamelogFile = findFile(gamelogFileName);
      
      if (!gamelogFile) {
        console.log(`Gamelog file for ${season} not found, skipping`);
        continue;
      }
      
      const gamelogs = await readCsvFile<any>(gamelogFile);
      
      for (const gamelog of gamelogs) {
        // Extract game info
        const gameKey = gamelog.game_id;
        if (!allGames.has(gameKey)) {
          allGames.set(gameKey, {
            key: gameKey,
            week: parseInt(gamelog.week, 10),
            season: season,
            gameDate: new Date(gamelog.game_date),
            homeTeam: gamelog.home_team,
            awayTeam: gamelog.away_team,
            homeScore: gamelog.home_score ? parseInt(gamelog.home_score, 10) : null,
            awayScore: gamelog.away_score ? parseInt(gamelog.away_score, 10) : null,
          });
        }
        
        // Store player game stat for later insertion
        if (gamelog.player_id) {
          playerGameStats.push({
            playerId: gamelog.player_id,
            gameKey: gameKey,
            team: gamelog.team,
            position: gamelog.position,
            snaps: gamelog.snaps ? parseInt(gamelog.snaps, 10) : null,
            snapShare: gamelog.snap_share ? parseFloat(gamelog.snap_share) : null,
            fantasyPoints: gamelog.fantasy_points ? parseFloat(gamelog.fantasy_points) : null,
            passAttempts: gamelog.pass_attempts ? parseInt(gamelog.pass_attempts, 10) : null,
            completions: gamelog.completions ? parseInt(gamelog.completions, 10) : null,
            passYards: gamelog.pass_yards ? parseInt(gamelog.pass_yards, 10) : null,
            passTDs: gamelog.pass_tds ? parseInt(gamelog.pass_tds, 10) : null,
            interceptions: gamelog.interceptions ? parseInt(gamelog.interceptions, 10) : null,
            carries: gamelog.carries ? parseInt(gamelog.carries, 10) : null,
            rushYards: gamelog.rush_yards ? parseInt(gamelog.rush_yards, 10) : null,
            rushTDs: gamelog.rush_tds ? parseInt(gamelog.rush_tds, 10) : null,
            targets: gamelog.targets ? parseInt(gamelog.targets, 10) : null,
            receptions: gamelog.receptions ? parseInt(gamelog.receptions, 10) : null,
            receivingYards: gamelog.receiving_yards ? parseInt(gamelog.receiving_yards, 10) : null,
            receivingTDs: gamelog.receiving_tds ? parseInt(gamelog.receiving_tds, 10) : null,
            airYards: gamelog.air_yards ? parseInt(gamelog.air_yards, 10) : null,
            yardsPerCarry: gamelog.yards_per_carry ? parseFloat(gamelog.yards_per_carry) : null,
            yardsPerTarget: gamelog.yards_per_target ? parseFloat(gamelog.yards_per_target) : null,
            yardsPerReception: gamelog.yards_per_reception ? parseFloat(gamelog.yards_per_reception) : null,
          });
        }
      }
      
      console.log(`Processed game logs for ${season}`);
    } catch (error) {
      console.error(`Error processing game logs for ${season}:`, error);
    }
  }
  
  // First import all games
  console.log(`Importing ${allGames.size} games...`);
  for (const game of allGames.values()) {
    try {
      await prisma.game.upsert({
        where: { key: game.key },
        update: game,
        create: game,
      });
    } catch (error) {
      console.error(`Error importing game ${game.key}:`, error);
    }
  }
  console.log('Games imported successfully');
  
  // Now import player game stats
  console.log(`Importing ${playerGameStats.length} player game stats...`);
  let count = 0;
  for (const stat of playerGameStats) {
    try {
      await prisma.playerGameStat.upsert({
        where: {
          playerId_gameKey: {
            playerId: stat.playerId,
            gameKey: stat.gameKey,
          },
        },
        update: stat,
        create: stat,
      });
      
      count++;
      if (count % 1000 === 0) {
        console.log(`Imported ${count}/${playerGameStats.length} player game stats...`);
      }
    } catch (error) {
      console.error(`Error importing game stat for player ${stat.playerId}, game ${stat.gameKey}:`, error);
    }
  }
  
  console.log('Player game stats imported successfully');
}

// Import play-by-play data
async function importPlays() {
  console.log('Importing play-by-play data...');
  
  const plays = [];
  const playPlayers = [];
  
  for (const season of SEASONS) {
    try {
      const pbpFileName = `${season}-Advanced-PBP-Data-Standardized.csv`;
      const pbpFile = findFile(pbpFileName);
      
      if (!pbpFile) {
        console.log(`PBP file for ${season} not found, skipping`);
        continue;
      }
      
      const pbpData = await readCsvFile<any>(pbpFile);
      
      for (const play of pbpData) {
        const playId = `${play.game_id}_${play.play_id}`;
        
        // Store play data
        plays.push({
          id: playId,
          gameKey: play.game_id,
          week: parseInt(play.week, 10),
          quarter: play.quarter ? parseInt(play.quarter, 10) : null,
          minutes: play.minutes ? parseInt(play.minutes, 10) : null,
          seconds: play.seconds ? parseInt(play.seconds, 10) : null,
          down: play.down ? parseInt(play.down, 10) : null,
          yardsToGo: play.yards_to_go ? parseInt(play.yards_to_go, 10) : null,
          offTeam: play.offense_team,
          defTeam: play.defense_team,
          playType: play.play_type,
          yardsGained: play.yards_gained ? parseInt(play.yards_gained, 10) : null,
          isFirstDown: play.is_first_down === '1',
          redZone: play.red_zone === '1',
          passPlay: play.pass_play === '1',
          runPlay: play.run_play === '1',
          touchdown: play.touchdown === '1',
          turnover: play.turnover === '1',
        });
        
        // Store player involvement data
        if (play.qb_player_id) {
          playPlayers.push({
            playId: playId,
            playerId: play.qb_player_id,
            role: 'qb'
          });
        }
        
        if (play.ball_carrier_id) {
          playPlayers.push({
            playId: playId,
            playerId: play.ball_carrier_id,
            role: 'ball_carrier',
            yardsGained: play.yards_gained ? parseInt(play.yards_gained, 10) : null
          });
        }
        
        if (play.receiver_id) {
          playPlayers.push({
            playId: playId,
            playerId: play.receiver_id,
            role: 'receiver',
            targeted: true,
            completed: play.complete_pass === '1',
            airYards: play.air_yards ? parseInt(play.air_yards, 10) : null,
            yardsGained: play.yards_gained ? parseInt(play.yards_gained, 10) : null
          });
        }
      }
      
      console.log(`Processed play-by-play data for ${season}`);
    } catch (error) {
      console.error(`Error processing play-by-play data for ${season}:`, error);
    }
  }
  
  // First import all plays
  console.log(`Importing ${plays.length} plays...`);
  let count = 0;
  for (const play of plays) {
    try {
      await prisma.play.upsert({
        where: { id: play.id },
        update: play,
        create: play,
      });
      
      count++;
      if (count % 1000 === 0) {
        console.log(`Imported ${count}/${plays.length} plays...`);
      }
    } catch (error) {
      console.error(`Error importing play ${play.id}:`, error);
    }
  }
  console.log('Plays imported successfully');
  
  // Now import play players
  console.log(`Importing ${playPlayers.length} play players...`);
  count = 0;
  for (const playPlayer of playPlayers) {
    try {
      await prisma.playPlayer.upsert({
        where: {
          playId_playerId_role: {
            playId: playPlayer.playId,
            playerId: playPlayer.playerId,
            role: playPlayer.role,
          },
        },
        update: playPlayer,
        create: playPlayer,
      });
      
      count++;
      if (count % 1000 === 0) {
        console.log(`Imported ${count}/${playPlayers.length} play players...`);
      }
    } catch (error) {
      console.error(`Error importing play player for play ${playPlayer.playId}, player ${playPlayer.playerId}, role ${playPlayer.role}:`, error);
    }
  }
  
  console.log('Play players imported successfully');
}

// Main import function
export async function importAll() {
  try {
    console.log('Starting data import...');
    
    // Import in the correct order to satisfy foreign key constraints
    await importTeams();
    
    // Import all real data
    await importRosters();
    await importGamelogs();
    await importPlays();
    
    console.log('Data import completed successfully');
  } catch (error) {
    console.error('Error during data import:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the import if this is the main module
if (require.main === module) {
  importAll()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Import failed:', error);
      process.exit(1);
    });
}