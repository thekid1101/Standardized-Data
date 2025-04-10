import axios from 'axios';
import { 
  Player, 
  PlayerDetails, 
  Team, 
  TeamDetails, 
  Game, 
  PlayerGameStat, 
  Play, 
  PlayPlayer,
  WeeklyRoster
} from '../types';

// Use Vite's way of accessing environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptors for request/response handling if needed later
// apiClient.interceptors.request.use(...);
// apiClient.interceptors.response.use(...);

export default apiClient;

// ===== PLAYERS API =====

/**
 * Fetch all players with optional pagination
 */
export const fetchPlayers = async (page?: number, limit?: number): Promise<{ data: Player[], metadata?: any }> => {
  try {
    const params = page && limit ? { page, limit } : {};
    const response = await apiClient.get<Player[] | { data: Player[], metadata: any }>('/players', { params });
    
    // Handle both paginated and non-paginated responses
    if (Array.isArray(response.data)) {
      return { data: response.data };
    } else {
      return response.data;
    }
  } catch (error) {
    console.error('Error fetching players:', error);
    return { data: [] };
  }
};

/**
 * Fetch detailed player information by ID
 */
export const fetchPlayerDetails = async (playerId: string): Promise<PlayerDetails | null> => {
  if (!playerId) {
    console.error('Error: Player ID is required for fetchPlayerDetails.');
    return null;
  }
  try {
    const response = await apiClient.get<PlayerDetails>(`/players/${playerId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for player ${playerId}:`, error);
    return null;
  }
};

/**
 * Fetch player stats for a specific season
 */
export const fetchPlayerSeasonStats = async (playerId: string, season: number): Promise<PlayerGameStat[]> => {
  if (!playerId || !season) {
    console.error('Error: Player ID and season are required for fetchPlayerSeasonStats.');
    return [];
  }
  try {
    const response = await apiClient.get<PlayerGameStat[]>(`/players/${playerId}/stats/${season}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching season stats for player ${playerId}:`, error);
    return [];
  }
};

/**
 * Search for players by name
 */
export const searchPlayers = async (query: string): Promise<Player[]> => {
  if (!query) {
    console.error('Error: Search query is required for searchPlayers.');
    return [];
  }
  try {
    const response = await apiClient.get<Player[]>(`/players/search/${query}`);
    return response.data;
  } catch (error) {
    console.error(`Error searching for players with query "${query}":`, error);
    return [];
  }
};

/**
 * Compare two players for a specific season
 */
export const comparePlayers = async (player1Id: string, player2Id: string, season: number): Promise<any> => {
  if (!player1Id || !player2Id || !season) {
    console.error('Error: Both player IDs and season are required for comparePlayers.');
    return null;
  }
  try {
    const response = await apiClient.get(`/players/compare/${player1Id}/${player2Id}/${season}`);
    return response.data;
  } catch (error) {
    console.error(`Error comparing players ${player1Id} and ${player2Id}:`, error);
    return null;
  }
};

/**
 * Get players by position
 */
export const getPlayersByPosition = async (position: string, page = 1, limit = 50): Promise<{
  players: Player[];
  metadata: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}> => {
  try {
    if (!position) {
      throw new Error('Position is required');
    }
    const response = await apiClient.get<{ players: Player[]; metadata: { total: number; page: number; limit: number; totalPages: number; } }>(`/players/position/${position}`, {
      params: { page, limit }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching players by position:', error);
    throw error;
  }
};

// ===== TEAMS API =====

/**
 * Fetch all teams
 */
export const fetchTeams = async (): Promise<Team[]> => {
  try {
    const response = await apiClient.get<Team[]>('/teams');
    return response.data;
  } catch (error) {
    console.error('Error fetching teams:', error);
    return [];
  }
};

/**
 * Fetch detailed team information by team code
 */
export const fetchTeamDetails = async (teamCode: string): Promise<TeamDetails | null> => {
  if (!teamCode) {
    console.error('Error: Team code is required for fetchTeamDetails.');
    return null;
  }
  try {
    const response = await apiClient.get<TeamDetails>(`/teams/${teamCode}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for team ${teamCode}:`, error);
    return null;
  }
};

/**
 * Fetch team roster for a specific week and season
 */
export const fetchTeamRoster = async (teamCode: string, season: number, week: number): Promise<WeeklyRoster[]> => {
  if (!teamCode || !season || !week) {
    console.error('Error: Team code, season, and week are required for fetchTeamRoster.');
    return [];
  }
  try {
    const response = await apiClient.get<WeeklyRoster[]>(`/teams/${teamCode}/roster/${season}/${week}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching roster for team ${teamCode}:`, error);
    return [];
  }
};

/**
 * Fetch current roster for a team
 */
export const fetchCurrentTeamRoster = async (teamCode: string): Promise<any> => {
  if (!teamCode) {
    console.error('Error: Team code is required for fetchCurrentTeamRoster.');
    return null;
  }
  try {
    const response = await apiClient.get(`/teams/${teamCode}/current-roster`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching current roster for team ${teamCode}:`, error);
    return null;
  }
};

/**
 * Fetch team stats for a specific season
 */
export const fetchTeamSeasonStats = async (teamCode: string, season: number): Promise<any> => {
  if (!teamCode || !season) {
    console.error('Error: Team code and season are required for fetchTeamSeasonStats.');
    return null;
  }
  try {
    const response = await apiClient.get(`/teams/${teamCode}/stats/${season}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching season stats for team ${teamCode}:`, error);
    return null;
  }
};

/**
 * Fetch team position analysis for a specific season
 */
export const fetchTeamPositionAnalysis = async (teamCode: string, season: number): Promise<any> => {
  if (!teamCode || !season) {
    console.error('Error: Team code and season are required for fetchTeamPositionAnalysis.');
    return null;
  }
  try {
    const response = await apiClient.get(`/teams/${teamCode}/position-analysis/${season}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching position analysis for team ${teamCode}:`, error);
    return null;
  }
};

// ===== GAMES API =====

/**
 * Fetch all games with optional pagination
 */
export const fetchGames = async (page?: number, limit?: number): Promise<{ data: Game[], metadata?: any }> => {
  try {
    const params = page && limit ? { page, limit } : {};
    const response = await apiClient.get<Game[] | { data: Game[], metadata: any }>('/games', { params });
    
    // Handle both paginated and non-paginated responses
    if (Array.isArray(response.data)) {
      return { data: response.data };
    } else {
      return response.data;
    }
  } catch (error) {
    console.error('Error fetching games:', error);
    return { data: [] };
  }
};

/**
 * Fetch games for a specific season and week
 */
export const fetchGamesBySeasonAndWeek = async (season: number, week: number): Promise<Game[]> => {
  if (!season || !week) {
    console.error('Error: Season and week are required for fetchGamesBySeasonAndWeek.');
    return [];
  }
  try {
    const response = await apiClient.get<Game[]>(`/games/season/${season}/week/${week}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching games for season ${season} week ${week}:`, error);
    return [];
  }
};

/**
 * Fetch detailed game information by game key
 */
export const fetchGameDetails = async (gameKey: string): Promise<Game | null> => {
  if (!gameKey) {
    console.error('Error: Game key is required for fetchGameDetails.');
    return null;
  }
  try {
    const response = await apiClient.get<Game>(`/games/${gameKey}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for game ${gameKey}:`, error);
    return null;
  }
};

/**
 * Fetch player statistics for a specific game
 */
export const fetchGamePlayerStats = async (gameKey: string): Promise<PlayerGameStat[]> => {
  if (!gameKey) {
    console.error('Error: Game key is required for fetchGamePlayerStats.');
    return [];
  }
  try {
    const response = await apiClient.get<PlayerGameStat[]>(`/games/${gameKey}/players`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching player stats for game ${gameKey}:`, error);
    return [];
  }
};

/**
 * Fetch play-by-play data for a specific game
 */
export const fetchGamePlays = async (gameKey: string): Promise<Play[]> => {
  if (!gameKey) {
    console.error('Error: Game key is required for fetchGamePlays.');
    return [];
  }
  try {
    const response = await apiClient.get<Play[]>(`/games/${gameKey}/plays`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching plays for game ${gameKey}:`, error);
    return [];
  }
};

// ===== PLAYS API =====

/**
 * Fetch plays for a specific game and team
 */
export const fetchPlaysByGameAndTeam = async (gameKey: string, teamCode: string): Promise<Play[]> => {
  if (!gameKey || !teamCode) {
    console.error('Error: Game key and team code are required for fetchPlaysByGameAndTeam.');
    return [];
  }
  try {
    const response = await apiClient.get<Play[]>(`/plays/game/${gameKey}/team/${teamCode}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching plays for game ${gameKey} and team ${teamCode}:`, error);
    return [];
  }
};

/**
 * Fetch plays involving a specific player in a given season
 */
export const fetchPlaysByPlayerAndSeason = async (playerId: string, season: number): Promise<Play[]> => {
  if (!playerId || !season) {
    console.error('Error: Player ID and season are required for fetchPlaysByPlayerAndSeason.');
    return [];
  }
  try {
    const response = await apiClient.get<Play[]>(`/plays/player/${playerId}/season/${season}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching plays for player ${playerId} in season ${season}:`, error);
    return [];
  }
};

/**
 * Fetch detailed information for a specific play
 */
export const fetchPlayDetails = async (playId: string): Promise<Play | null> => {
  if (!playId) {
    console.error('Error: Play ID is required for fetchPlayDetails.');
    return null;
  }
  try {
    const response = await apiClient.get<Play>(`/plays/${playId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for play ${playId}:`, error);
    return null;
  }
};

/**
 * Fetch plays filtered by down and distance
 */
export const fetchPlaysBySituation = async (down: number, distance: number): Promise<Play[]> => {
  if (!down || !distance) {
    console.error('Error: Down and distance are required for fetchPlaysBySituation.');
    return [];
  }
  try {
    const response = await apiClient.get<Play[]>(`/plays/situation/down/${down}/distance/${distance}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching plays for down ${down} and distance ${distance}:`, error);
    return [];
  }
};

// ===== STATS AND ANALYTICS API =====

/**
 * Fetch all game stats for a specific player
 */
export const fetchPlayerStats = async (playerId: string): Promise<PlayerGameStat[]> => {
  if (!playerId) {
    console.error('Error: Player ID is required for fetchPlayerStats.');
    return [];
  }
  try {
    const response = await apiClient.get<PlayerGameStat[]>(`/stats/player/${playerId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching stats for player ${playerId}:`, error);
    return [];
  }
};

/**
 * Fetch all player game stats for a specific game
 */
export const fetchGameStats = async (gameKey: string): Promise<PlayerGameStat[]> => {
  if (!gameKey) {
    console.error('Error: Game key is required for fetchGameStats.');
    return [];
  }
  try {
    const response = await apiClient.get<PlayerGameStat[]>(`/stats/game/${gameKey}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching stats for game ${gameKey}:`, error);
    return [];
  }
};

/**
 * Fetch team play-calling tendencies
 */
export const fetchTeamTendencies = async (teamCode: string, season: number): Promise<any> => {
  if (!teamCode || !season) {
    console.error('Error: Team code and season are required for fetchTeamTendencies.');
    return null;
  }
  try {
    const response = await apiClient.get(`/team-tendencies/${teamCode}/${season}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching tendencies for team ${teamCode}:`, error);
    return null;
  }
};

/**
 * Fetch position performance correlation with team success
 */
export const fetchPositionCorrelation = async (position: string, season: number): Promise<any> => {
  if (!position || !season) {
    console.error('Error: Position and season are required for fetchPositionCorrelation.');
    return null;
  }
  try {
    const response = await apiClient.get(`/correlation/team/${position}/${season}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching correlation for position ${position}:`, error);
    return null;
  }
};

/**
 * Fetch situational analysis for a player
 */
export const fetchSituationalAnalysis = async (playerId: string, season: number): Promise<any> => {
  if (!playerId || !season) {
    console.error('Error: Player ID and season are required for fetchSituationalAnalysis.');
    return null;
  }
  try {
    const response = await apiClient.get(`/situational/${playerId}/${season}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching situational analysis for player ${playerId}:`, error);
    return null;
  }
};

// ===== UTILITY ENDPOINTS =====

/**
 * Check server version
 */
export const checkServerVersion = async (): Promise<any> => {
  try {
    const response = await apiClient.get('/debug-version');
    return response.data;
  } catch (error) {
    console.error('Error checking server version:', error);
    return null;
  }
};

/**
 * Check server health
 */
export const checkServerHealth = async (): Promise<any> => {
  try {
    const response = await apiClient.get('/health');
    return response.data;
  } catch (error) {
    console.error('Error checking server health:', error);
    return null;
  }
}; 