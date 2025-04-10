@echo off
echo Running manual setup for NFL Analytics Backend...
echo.

echo Step 1: Cleaning up old Prisma files...
rmdir /s /q node_modules\.prisma 2>nul
rmdir /s /q node_modules\@prisma 2>nul

echo Step 2: Installing or reinstalling dependencies...
call npm install

echo Step 3: Generating Prisma client without Linux binaries...
call npx prisma generate

echo Step 4: Creating SQLite database...
echo CREATE TABLE IF NOT EXISTS teams (code TEXT PRIMARY KEY, name TEXT NOT NULL, conference TEXT, division TEXT); > create_db.sql
echo CREATE TABLE IF NOT EXISTS players (id TEXT PRIMARY KEY, name TEXT NOT NULL, position TEXT, team TEXT); >> create_db.sql
echo CREATE TABLE IF NOT EXISTS games (id INTEGER PRIMARY KEY AUTOINCREMENT, key TEXT UNIQUE NOT NULL, season INTEGER NOT NULL, week INTEGER NOT NULL, gameDate TEXT NOT NULL, homeTeam TEXT NOT NULL, awayTeam TEXT NOT NULL, homeScore INTEGER, awayScore INTEGER); >> create_db.sql
echo CREATE TABLE IF NOT EXISTS game_stats (id INTEGER PRIMARY KEY AUTOINCREMENT, gameKey TEXT NOT NULL, playerId TEXT NOT NULL, team TEXT NOT NULL, position TEXT, passAttempts INTEGER, completions INTEGER, passYards INTEGER, passTDs INTEGER, interceptions INTEGER, carries INTEGER, rushYards INTEGER, rushTDs INTEGER, targets INTEGER, receptions INTEGER, receivingYards INTEGER, receivingTDs INTEGER, UNIQUE(gameKey, playerId)); >> create_db.sql

echo.
echo Manual setup complete!
echo.
echo Next steps:
echo 1. Run manual-import.bat to import data
echo 2. Run start.bat to start the server
echo.

pause