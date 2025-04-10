# NFL Analytics Backend

A simplified backend server for NFL analytics data processing and API.

## Quick Start (Windows)

1. Run `setup.bat` to set up the database
2. Run `import.bat` to import data
3. Run `start.bat` to start the server
4. Visit `http://localhost:3001/health` to check if the server is running

## Setup Instructions (Manual)

### Prerequisites

- Node.js v14+ and npm
- CSV data files (in the parent directory)

### Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Set up the database:
   ```
   npm run setup
   ```

3. Import data:
   ```
   npm run import
   ```

### Running the Server

```
npm run dev
```

## API Endpoints

### Teams
- `GET /api/teams` - Get all teams
- `GET /api/teams/:code` - Get team by code

### Players
- `GET /api/players` - Get all players (limited to 100)
- `GET /api/players/:id` - Get player by ID
- `GET /api/players/team/:teamCode` - Get players by team

### Games
- `GET /api/games` - Get all games (limited to 100)
- `GET /api/games/:key` - Get game by key
- `GET /api/games/season/:season` - Get games by season

### Stats
- `GET /api/stats/player/:playerId` - Get stats for a player
- `GET /api/stats/game/:gameKey` - Get stats for a game

### Dashboard Endpoints
- `GET /api/team-tendencies/:teamCode/:season` - Get team tendencies data
- `GET /api/correlation/team/:position/:season` - Get position correlation data
- `GET /api/situational/:playerId/:season` - Get situational data for a player

## Data Structure

The backend uses SQLite with the following main entities:
- Teams
- Players
- Games
- GameStats

## Utility Scripts

- `npm run setup` - Set up database schema
- `npm run import` - Import data from CSV files
- `npm run reset` - Reset the database (clears all data)
- `npm run prisma:studio` - Open Prisma Studio to view database