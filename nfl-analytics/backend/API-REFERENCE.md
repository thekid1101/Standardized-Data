# NFL Analytics API Reference

This document provides a comprehensive overview of all API endpoints available in the NFL Analytics backend, along with the data they return.

## Base URL
All API requests should be made to: `http://localhost:3001`

## Standard Endpoints

### Players API

#### `GET /api/players`
Returns all players in the system.
- **Data fields**: id, name, position, team
- **Pagination**: Supports optional pagination with query parameters:
  - `?page=1&limit=50` returns paginated results with metadata
  - Without pagination parameters, returns all players

#### `GET /api/players/:id`
Returns detailed player information by ID.
- **Data fields**: player details plus recent game stats (up to 20 games)
- **Includes**: 
  - playerGameStats: gameKey, team, position, snaps, snapShare, fantasyPoints, passAttempts, completions, passYards, passTDs, interceptions, carries, rushYards, rushTDs, targets, receptions, receivingYards, receivingTDs, airYards, scrimmageYards, totalTDs, totalTouches, yardsPerCarry, yardsPerTarget, yardsPerReception

#### `GET /api/players/:id/stats/:season`
Returns all game stats for a specific player in a given season.
- **Data fields**: Complete game-by-game statistics for the player
- **Includes**: Same player game stats as above, plus associated game information

#### `GET /api/players/search/:query`
Searches for players by name.
- **Data fields**: id, name, position, dob for matching players

#### `GET /api/players/compare/:player1Id/:player2Id/:season`
Compares two players for a specific season.
- **Data fields**: 
  - Player details for both players
  - Aggregate season totals and averages for both players
  - Statistical differences between the players
  - Week-by-week comparison data

#### `GET /api/players/position/:position`
Returns players filtered by position.
- **Data fields**: id, name, position, dob for players of the specified position

### Teams API

#### `GET /api/teams`
Returns a list of all teams.
- **Data fields**: code, name, conference, division

#### `GET /api/teams/:code`
Returns detailed team information by team code.
- **Data fields**: code, name, conference, division
- **Includes**: Recent home and away games (up to 5 each)

#### `GET /api/teams/:code/roster/:season/:week`
Returns the team roster for a specific week and season.
- **Data fields**: 
  - Player information: id, name, position
  - Roster details: week, season, jerseyNumber, position

#### `GET /api/teams/:code/current-roster`
Returns the most recent roster for a team.
- **Data fields**: 
  - Team information
  - Current roster organized by position
  - Individual player details similar to roster endpoint above

#### `GET /api/teams/:code/stats/:season`
Returns team game statistics for a specific season.
- **Data fields**: All game details for the specified team's season

#### `GET /api/teams/:code/position-analysis/:season`
Returns detailed analysis of team performance by position groups.
- **Data fields**: 
  - Team record for the season
  - Game-by-game results with position group statistics
  - Season totals and averages by position group
  - Statistical performance in wins vs. losses

### Games API

#### `GET /api/games`
Returns all games or a paginated list of games.
- **Data fields**: 
  - Game details: id, key, week, season, gameDate, homeTeam, awayTeam, homeScore, awayScore
- **Pagination**: Supports optional pagination with query parameters:
  - `?page=1&limit=50` returns paginated results with metadata
  - Without pagination parameters, returns all games
- **Sorting**: Games are sorted by season (descending)

#### `GET /api/games/season/:season/week/:week`
Returns games for a specific season and week.
- **Data fields**: Similar to the games endpoint above, filtered by season and week

#### `GET /api/games/:key`
Returns detailed information for a specific game.
- **Data fields**: Complete game information including home and away team details

#### `GET /api/games/:key/players`
Returns player statistics for a specific game.
- **Data fields**: Complete player game statistics for all players in the game, sorted by fantasy points

#### `GET /api/games/:key/plays`
Returns play-by-play data for a specific game (limited to 100 plays).
- **Data fields**: Play-by-play details

### Plays API

#### `GET /api/plays/game/:gameKey/team/:teamCode`
Returns plays for a specific game and team.
- **Data fields**: 
  - Play information: id, gameKey, down, yardsToGo, playType, yardsGained, etc.
  - Player participation details

#### `GET /api/plays/player/:playerId/season/:season`
Returns plays involving a specific player in a given season.
- **Data fields**: 
  - Play information
  - Player-specific participation details
  - Associated game information

#### `GET /api/plays/:playId`
Returns detailed information for a specific play.
- **Data fields**: 
  - Complete play details
  - All player participation
  - Team information
  - Game context

#### `GET /api/plays/situation/down/:down/distance/:distance`
Returns plays filtered by down and distance.
- **Data fields**: 
  - Play information matching the down and distance criteria
  - Player participation
  - Game context

### Stats and Analytics API

#### `GET /api/stats/player/:playerId`
Returns all game stats for a specific player.
- **Data fields**: Complete game statistics for the player across all games
- **Includes**: passAttempts, completions, passYards, passTDs, interceptions, carries, rushYards, rushTDs, targets, receptions, receivingYards, receivingTDs

#### `GET /api/stats/game/:gameKey`
Returns all player game stats for a specific game.
- **Data fields**: Game statistics for all players who participated in the specified game

#### `GET /api/team-tendencies/:teamCode/:season`
Returns team play-calling tendencies based on real data.
- **Data fields**: 
  - Pass/run ratio overview
  - First down tendencies
  - Third down tendencies
  - Red zone tendencies
  - Calculated success rates and yardage statistics

#### `GET /api/correlation/team/:position/:season`
Returns position performance correlation with team success based on real data.
- **Data fields**: 
  - Statistical summary comparing wins vs. losses
  - Team rankings with win rates and average yards
  - Correlation data showing position impact

#### `GET /api/situational/:playerId/:season`
Returns situational analysis for a player based on real data.
- **Data fields**: 
  - Player information including name, position, team, games played
  - Situational performance metrics broken down by:
    - Red zone
    - Third down
    - First down
    - Fourth quarter
    - Overall stats

## Utility Endpoints

#### `GET /debug-version`
Displays the current version of the server code.
- **Data fields**: 
  - version: Current version identifier
  - timestamp: Server time when the request was made
  - message: Informational message about the server

#### `GET /health`
Health check endpoint with database connectivity status.
- **Data fields**: 
  - status: Server status
  - timestamp: Current server time
  - counts: Database entity counts (players, teams, games, gameStats)

## Data Models

### Player
- id: string
- name: string
- position: string (nullable)
- team: string (nullable)

### Team
- code: string
- name: string
- conference: string (nullable)
- division: string (nullable)

### Game
- id: number (auto-generated)
- key: string
- week: number
- season: number
- gameDate: DateTime
- homeTeam: string (references Team)
- awayTeam: string (references Team)
- homeScore: number (nullable)
- awayScore: number (nullable)

### GameStat
- id: number (auto-generated)
- gameKey: string (references Game)
- playerId: string (references Player)
- team: string (references Team)
- position: string (nullable)
- passAttempts: number (nullable)
- completions: number (nullable)
- passYards: number (nullable)
- passTDs: number (nullable)
- interceptions: number (nullable)
- carries: number (nullable)
- rushYards: number (nullable)
- rushTDs: number (nullable)
- targets: number (nullable)
- receptions: number (nullable)
- receivingYards: number (nullable)
- receivingTDs: number (nullable)