# NFL Analytics Platform

A data analysis application for NFL player and team performance metrics using standardized data from 2020-2024.

## Project Overview

This application provides a comprehensive platform for analyzing NFL player and team performance data. It includes:

- Player performance analysis
- Team statistics and trends
- Game-by-game breakdowns
- Play-by-play data analysis
- Position comparisons (WR1 vs WR2, RB1 vs RB2, etc.)
- Fantasy football insights

## Tech Stack

### Backend
- Node.js with Express
- TypeScript
- PostgreSQL database
- Prisma ORM

### Data Processing
- Python with pandas for ETL
- Jupyter notebooks for analysis

### Frontend
- React with TypeScript
- Material UI for components
- Recharts for data visualization
- React Router for navigation

## Project Structure

```
nfl-analytics/
├── backend/               # Express API server
│   ├── prisma/            # Database schema and migrations
│   └── src/               # Backend source code
│       ├── api/           # API routes and controllers
│       ├── db/            # Database connection
│       └── models/        # Data models
│
├── data_processing/       # Data import and analysis scripts
│   ├── scripts/           # Python ETL scripts
│   └── notebooks/         # Jupyter notebooks for analysis
│
└── frontend/              # React frontend application
    ├── public/            # Static assets
    └── src/               # Frontend source code
        ├── api/           # API service layer
        ├── components/    # Reusable UI components
        ├── pages/         # Application pages
        └── types/         # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL (v15+)
- Python (v3.8+)
- pandas, numpy, matplotlib, seaborn (for data processing)

### Database Setup

1. Install PostgreSQL and create a new database:

```sql
CREATE DATABASE nfl_analytics;
```

2. Update the `.env` file in the backend directory with your PostgreSQL connection details:

```
DATABASE_URL="postgresql://username:password@localhost:5432/nfl_analytics"
```

### Data Import

1. Navigate to the data processing directory:

```bash
cd data_processing/scripts
```

2. Run the import script to populate the database:

```bash
python import_data.py
```

This will import the CSV data into the PostgreSQL database according to the schema defined in Prisma.

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Generate the Prisma client:

```bash
npx prisma generate
```

4. Start the development server:

```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Access the application at http://localhost:3000

## API Endpoints

The backend provides the following API endpoints:

### Players
- `GET /api/players` - Get all players
- `GET /api/players/:id` - Get player by ID
- `GET /api/players/:id/stats/:season` - Get player stats by season
- `GET /api/players/search/:query` - Search players by name

### Teams
- `GET /api/teams` - Get all teams
- `GET /api/teams/:code` - Get team by code
- `GET /api/teams/:code/roster/:season/:week` - Get team roster for a specific week
- `GET /api/teams/:code/stats/:season` - Get team stats for a season

### Games
- `GET /api/games/season/:season/week/:week` - Get games by season and week
- `GET /api/games/:key` - Get game by ID
- `GET /api/games/:key/players` - Get player stats for a specific game
- `GET /api/games/:key/plays` - Get plays for a specific game

### Plays
- `GET /api/plays/game/:gameKey/team/:teamCode` - Get plays by game and team
- `GET /api/plays/player/:playerId/season/:season` - Get plays by specific player
- `GET /api/plays/:playId` - Get play detail by ID
- `GET /api/plays/situation/down/:down/distance/:distance` - Get plays by down and distance

### Stats
- `GET /api/stats/top/:position/:season/:stat` - Get top players by position and stat
- `GET /api/stats/compare/:position/:role1/:role2/:season` - Compare two position roles
- `GET /api/stats/trend/:playerId/:season/:stat` - Get weekly trend for a specific player stat

## Future Enhancements

- Add user authentication and saved filters/views
- Implement advanced machine learning models for performance prediction
- Create a mobile app version
- Add head-to-head comparison tools
- Integrate with live game data feeds
- Add player career trajectory visualization

## License

This project is licensed under the MIT License.