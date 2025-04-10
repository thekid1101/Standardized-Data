export interface Player {
  id: string;
  name: string;
  position?: string | null;
  dob?: string | null; // Assuming DateTime is represented as string (ISO 8601)
}

export interface Team {
  code: string;
  name?: string | null;
  conference?: string | null;
  division?: string | null;
}

export interface Game {
  key: string;
  week: number;
  season: number;
  gameDate: string; // Assuming DateTime is represented as string (ISO 8601)
  homeTeam: string; // References Team code
  awayTeam: string; // References Team code
  homeScore?: number | null;
  awayScore?: number | null;
  stadium?: string | null;
  surface?: string | null;
  weather?: string | null;
}

export interface WeeklyRoster {
  id: number;
  playerId: string; // References Player id
  week: number;
  season: number;
  team: string; // References Team code
  jerseyNumber?: number | null;
  position?: string | null;
}

export interface PlayerGameStat {
  id: number;
  playerId: string; // References Player id
  gameKey: string; // References Game key
  team: string; // References Team code
  position?: string | null;
  snaps?: number | null;
  snapShare?: number | null;
  fantasyPoints?: number | null;
  passAttempts?: number | null;
  completions?: number | null;
  passYards?: number | null;
  passTDs?: number | null;
  interceptions?: number | null;
  carries?: number | null;
  rushYards?: number | null;
  rushTDs?: number | null;
  targets?: number | null;
  receptions?: number | null;
  receivingYards?: number | null;
  receivingTDs?: number | null;
  airYards?: number | null;
  scrimmageYards?: number | null;
  totalTDs?: number | null;
  totalTouches?: number | null;
  opportunities?: number | null;
  evadedTackles?: number | null;
  yardsCreated?: number | null;
  yardsPerCarry?: number | null;
  yardsPerTarget?: number | null;
  yardsPerReception?: number | null;
}

export interface Play {
  id: string;
  gameKey: string; // References Game key
  week: number;
  quarter?: number | null;
  minutes?: number | null;
  seconds?: number | null;
  down?: number | null;
  yardsToGo?: number | null;
  offTeam: string; // References Team code
  defTeam: string; // References Team code
  playType?: string | null;
  yardsGained?: number | null;
  isFirstDown?: boolean | null;
  redZone?: boolean | null;
  passPlay?: boolean | null;
  runPlay?: boolean | null;
  touchdown?: boolean | null;
  turnover?: boolean | null;
}

export interface PlayPlayer {
  id: number;
  playId: string; // References Play id
  playerId: string; // References Player id
  role: string;
  airYards?: number | null;
  yardsGained?: number | null;
  targeted?: boolean | null;
  completed?: boolean | null;
  routeType?: string | null;
  coverage?: string | null;
  cushion?: number | null;
}

// --- API Specific Response Types (Examples - add more as needed) ---

export interface PlayerDetails extends Player {
  playerGameStats?: PlayerGameStat[]; // Assuming recent game stats are included
}

export interface TeamDetails extends Team {
  // Add fields for recent games if needed based on API response
} 