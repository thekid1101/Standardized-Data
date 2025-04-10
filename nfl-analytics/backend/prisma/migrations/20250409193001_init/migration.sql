-- CreateTable
CREATE TABLE "players" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "position" TEXT,
    "team" TEXT
);

-- CreateTable
CREATE TABLE "teams" (
    "code" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "conference" TEXT,
    "division" TEXT
);

-- CreateTable
CREATE TABLE "games" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "season" INTEGER NOT NULL,
    "week" INTEGER NOT NULL,
    "gameDate" DATETIME NOT NULL,
    "homeTeam" TEXT NOT NULL,
    "awayTeam" TEXT NOT NULL,
    "homeScore" INTEGER,
    "awayScore" INTEGER
);

-- CreateTable
CREATE TABLE "game_stats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gameKey" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "position" TEXT,
    "passAttempts" INTEGER,
    "completions" INTEGER,
    "passYards" INTEGER,
    "passTDs" INTEGER,
    "interceptions" INTEGER,
    "carries" INTEGER,
    "rushYards" INTEGER,
    "rushTDs" INTEGER,
    "targets" INTEGER,
    "receptions" INTEGER,
    "receivingYards" INTEGER,
    "receivingTDs" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "games_key_key" ON "games"("key");

-- CreateIndex
CREATE UNIQUE INDEX "game_stats_gameKey_playerId_key" ON "game_stats"("gameKey", "playerId");