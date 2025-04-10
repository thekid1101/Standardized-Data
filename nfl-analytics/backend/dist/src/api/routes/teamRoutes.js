"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
// Get all teams
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teams = yield prisma.team.findMany();
        res.status(200).json(teams);
    }
    catch (error) {
        console.error('Error fetching teams:', error);
        res.status(500).json({ error: 'Failed to fetch teams' });
    }
}));
// Get team by code
router.get('/:code', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.params;
        const team = yield prisma.team.findUnique({
            where: { code },
            include: {
                homeGames: {
                    take: 5,
                    orderBy: {
                        gameDate: 'desc'
                    }
                },
                awayGames: {
                    take: 5,
                    orderBy: {
                        gameDate: 'desc'
                    }
                }
            }
        });
        if (!team) {
            return res.status(404).json({ error: 'Team not found' });
        }
        res.status(200).json(team);
    }
    catch (error) {
        console.error('Error fetching team:', error);
        res.status(500).json({ error: 'Failed to fetch team' });
    }
}));
// Get team roster for a specific week and season
router.get('/:code/roster/:season/:week', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code, season, week } = req.params;
        const roster = yield prisma.weeklyRoster.findMany({
            where: {
                team: code,
                season: parseInt(season, 10),
                week: parseInt(week, 10)
            },
            include: {
                player: true
            }
        });
        res.status(200).json(roster);
    }
    catch (error) {
        console.error('Error fetching team roster:', error);
        res.status(500).json({ error: 'Failed to fetch team roster' });
    }
}));
// Get current roster (2024 season, most recent week)
router.get('/:code/current-roster', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.params;
        // Find the most recent week of 2024 season for this team
        const mostRecentRoster = yield prisma.weeklyRoster.findFirst({
            where: {
                team: code,
                season: 2024
            },
            orderBy: {
                week: 'desc'
            },
            select: {
                week: true
            }
        });
        if (!mostRecentRoster) {
            // Fallback to most recent season if 2024 not available
            const fallbackRoster = yield prisma.weeklyRoster.findFirst({
                where: {
                    team: code
                },
                orderBy: [
                    { season: 'desc' },
                    { week: 'desc' }
                ],
                select: {
                    season: true,
                    week: true
                }
            });
            if (!fallbackRoster) {
                return res.status(404).json({ error: 'No roster data found for this team' });
            }
            // Get the latest available roster
            const roster = yield prisma.weeklyRoster.findMany({
                where: {
                    team: code,
                    season: fallbackRoster.season,
                    week: fallbackRoster.week
                },
                include: {
                    player: true
                },
                orderBy: {
                    position: 'asc'
                }
            });
            // Group players by position
            const rosterByPosition = roster.reduce((grouped, player) => {
                const position = player.position || 'Unknown';
                if (!grouped[position]) {
                    grouped[position] = [];
                }
                grouped[position].push(player);
                return grouped;
            }, {});
            return res.status(200).json({
                team: code,
                season: fallbackRoster.season,
                week: fallbackRoster.week,
                isCurrentSeason: false,
                message: `Using latest available roster data (${fallbackRoster.season} season, week ${fallbackRoster.week})`,
                roster,
                rosterByPosition
            });
        }
        // Get the current season roster
        const roster = yield prisma.weeklyRoster.findMany({
            where: {
                team: code,
                season: 2024,
                week: mostRecentRoster.week
            },
            include: {
                player: true
            },
            orderBy: {
                position: 'asc'
            }
        });
        // Group players by position
        const rosterByPosition = roster.reduce((grouped, player) => {
            const position = player.position || 'Unknown';
            if (!grouped[position]) {
                grouped[position] = [];
            }
            grouped[position].push(player);
            return grouped;
        }, {});
        res.status(200).json({
            team: code,
            season: 2024,
            week: mostRecentRoster.week,
            isCurrentSeason: true,
            roster,
            rosterByPosition
        });
    }
    catch (error) {
        console.error('Error fetching current roster:', error);
        res.status(500).json({ error: 'Failed to fetch current roster' });
    }
}));
// Get team stats for a season
router.get('/:code/stats/:season', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code, season } = req.params;
        const games = yield prisma.game.findMany({
            where: {
                OR: [
                    { homeTeam: code },
                    { awayTeam: code }
                ],
                season: parseInt(season, 10)
            },
            orderBy: {
                gameDate: 'asc'
            }
        });
        res.status(200).json(games);
    }
    catch (error) {
        console.error('Error fetching team stats:', error);
        res.status(500).json({ error: 'Failed to fetch team stats' });
    }
}));
// Get team performance by position groups
router.get('/:code/position-analysis/:season', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code, season } = req.params;
        // Get all games for this team in the season
        const games = yield prisma.game.findMany({
            where: {
                OR: [
                    { homeTeam: code },
                    { awayTeam: code }
                ],
                season: parseInt(season, 10)
            },
            include: {
                playerGameStats: {
                    where: {
                        team: code
                    },
                    include: {
                        player: true
                    }
                }
            },
            orderBy: {
                gameDate: 'asc'
            }
        });
        const gameResults = games.map(game => {
            const isHomeTeam = game.homeTeam === code;
            const gameResult = {
                gameKey: game.key,
                week: game.week,
                opponent: isHomeTeam ? game.awayTeam : game.homeTeam,
                isHome: isHomeTeam,
                won: isHomeTeam
                    ? (game.homeScore || 0) > (game.awayScore || 0)
                    : (game.awayScore || 0) > (game.homeScore || 0),
                teamScore: isHomeTeam ? game.homeScore : game.awayScore,
                opponentScore: isHomeTeam ? game.awayScore : game.homeScore,
                positionGroups: {
                    QB: { passYards: 0, passTDs: 0, interceptions: 0 },
                    RB: { rushYards: 0, rushTDs: 0, receptions: 0, receivingYards: 0 },
                    WR: { receptions: 0, targets: 0, receivingYards: 0, receivingTDs: 0 },
                    TE: { receptions: 0, targets: 0, receivingYards: 0, receivingTDs: 0 }
                }
            };
            // Aggregate stats by position group
            game.playerGameStats.forEach(stat => {
                const position = stat.position;
                if (position === 'QB') {
                    gameResult.positionGroups.QB.passYards += (stat.passYards || 0);
                    gameResult.positionGroups.QB.passTDs += (stat.passTDs || 0);
                    gameResult.positionGroups.QB.interceptions += (stat.interceptions || 0);
                }
                else if (position === 'RB') {
                    gameResult.positionGroups.RB.rushYards += (stat.rushYards || 0);
                    gameResult.positionGroups.RB.rushTDs += (stat.rushTDs || 0);
                    gameResult.positionGroups.RB.receptions += (stat.receptions || 0);
                    gameResult.positionGroups.RB.receivingYards += (stat.receivingYards || 0);
                }
                else if (position === 'WR') {
                    gameResult.positionGroups.WR.receptions += (stat.receptions || 0);
                    gameResult.positionGroups.WR.targets += (stat.targets || 0);
                    gameResult.positionGroups.WR.receivingYards += (stat.receivingYards || 0);
                    gameResult.positionGroups.WR.receivingTDs += (stat.receivingTDs || 0);
                }
                else if (position === 'TE') {
                    gameResult.positionGroups.TE.receptions += (stat.receptions || 0);
                    gameResult.positionGroups.TE.targets += (stat.targets || 0);
                    gameResult.positionGroups.TE.receivingYards += (stat.receivingYards || 0);
                    gameResult.positionGroups.TE.receivingTDs += (stat.receivingTDs || 0);
                }
            });
            return gameResult;
        });
        // Calculate season totals and averages
        const wins = gameResults.filter(g => g.won).length;
        const losses = gameResults.filter(g => !g.won).length;
        // Totals for each position group
        const positionGroupTotals = {
            QB: { passYards: 0, passTDs: 0, interceptions: 0 },
            RB: { rushYards: 0, rushTDs: 0, receptions: 0, receivingYards: 0 },
            WR: { receptions: 0, targets: 0, receivingYards: 0, receivingTDs: 0 },
            TE: { receptions: 0, targets: 0, receivingYards: 0, receivingTDs: 0 }
        };
        // Calculate totals
        gameResults.forEach(game => {
            for (const position in game.positionGroups) {
                for (const stat in game.positionGroups[position]) {
                    positionGroupTotals[position][stat] += game.positionGroups[position][stat];
                }
            }
        });
        // Calculate averages
        const gameCount = gameResults.length;
        const positionGroupAverages = {
            QB: {},
            RB: {},
            WR: {},
            TE: {}
        };
        for (const position in positionGroupTotals) {
            for (const stat in positionGroupTotals[position]) {
                positionGroupAverages[position][stat] =
                    gameCount > 0 ? positionGroupTotals[position][stat] / gameCount : 0;
            }
        }
        // Calculate stats in wins vs. losses
        const statsInWins = {
            QB: { passYards: 0, passTDs: 0, interceptions: 0 },
            RB: { rushYards: 0, rushTDs: 0, receptions: 0, receivingYards: 0 },
            WR: { receptions: 0, targets: 0, receivingYards: 0, receivingTDs: 0 },
            TE: { receptions: 0, targets: 0, receivingYards: 0, receivingTDs: 0 }
        };
        const statsInLosses = {
            QB: { passYards: 0, passTDs: 0, interceptions: 0 },
            RB: { rushYards: 0, rushTDs: 0, receptions: 0, receivingYards: 0 },
            WR: { receptions: 0, targets: 0, receivingYards: 0, receivingTDs: 0 },
            TE: { receptions: 0, targets: 0, receivingYards: 0, receivingTDs: 0 }
        };
        // Calculate win/loss stats
        gameResults.filter(g => g.won).forEach(game => {
            for (const position in game.positionGroups) {
                for (const stat in game.positionGroups[position]) {
                    statsInWins[position][stat] += game.positionGroups[position][stat];
                }
            }
        });
        gameResults.filter(g => !g.won).forEach(game => {
            for (const position in game.positionGroups) {
                for (const stat in game.positionGroups[position]) {
                    statsInLosses[position][stat] += game.positionGroups[position][stat];
                }
            }
        });
        // Calculate averages
        const statsInWinsAvg = {
            QB: {},
            RB: {},
            WR: {},
            TE: {}
        };
        const statsInLossesAvg = {
            QB: {},
            RB: {},
            WR: {},
            TE: {}
        };
        for (const position in statsInWins) {
            for (const stat in statsInWins[position]) {
                statsInWinsAvg[position][stat] =
                    wins > 0 ? statsInWins[position][stat] / wins : 0;
                statsInLossesAvg[position][stat] =
                    losses > 0 ? statsInLosses[position][stat] / losses : 0;
            }
        }
        res.status(200).json({
            team: code,
            season: parseInt(season, 10),
            record: { wins, losses },
            gameResults,
            seasonTotals: positionGroupTotals,
            seasonAverages: positionGroupAverages,
            winsVsLosses: {
                wins: statsInWinsAvg,
                losses: statsInLossesAvg
            }
        });
    }
    catch (error) {
        console.error('Error fetching team position analysis:', error);
        res.status(500).json({ error: 'Failed to fetch team position analysis' });
    }
}));
exports.default = router;
