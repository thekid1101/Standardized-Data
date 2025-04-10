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
// Get basic stats overview
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get counts for basic entities
        const [playerCount, gameCount, teamCount, playerGameStatCount] = yield Promise.all([
            prisma.player.count(),
            prisma.game.count(),
            prisma.team.count(),
            prisma.playerGameStat.count()
        ]);
        // Get top fantasy performers this season
        const latestSeason = yield prisma.game.findFirst({
            select: { season: true },
            orderBy: { season: 'desc' }
        });
        const topPerformers = yield prisma.playerGameStat.findMany({
            where: {
                game: {
                    season: (latestSeason === null || latestSeason === void 0 ? void 0 : latestSeason.season) || 2023
                }
            },
            select: {
                player: {
                    select: { id: true, name: true, position: true }
                },
                fantasyPoints: true,
                game: {
                    select: { week: true, season: true }
                }
            },
            orderBy: { fantasyPoints: 'desc' },
            take: 10
        });
        res.status(200).json({
            overview: {
                playerCount,
                gameCount,
                teamCount,
                playerGameStatCount
            },
            topPerformers,
            latestSeason: (latestSeason === null || latestSeason === void 0 ? void 0 : latestSeason.season) || 2023
        });
    }
    catch (error) {
        console.error('Error fetching stats overview:', error);
        res.status(500).json({ error: 'Failed to fetch stats overview' });
    }
}));
// Get top players by position for a specific season and stat
router.get('/top/:position/:season/:stat', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { position, season, stat } = req.params;
        // Validate stat parameter to prevent injection
        const validStats = ['fantasyPoints', 'passYards', 'rushYards', 'receivingYards',
            'receptions', 'targets', 'passTDs', 'rushTDs', 'receivingTDs'];
        if (!validStats.includes(stat)) {
            return res.status(400).json({ error: 'Invalid stat parameter' });
        }
        // Use raw SQL for more control
        const statQuery = `
      SELECT 
        p.id as "playerId", 
        p.name, 
        p.position,
        SUM(pgs."${stat}") as stat_total
      FROM "player_game_stats" pgs
      JOIN "players" p ON pgs."playerId" = p.id
      JOIN "games" g ON pgs."gameKey" = g.key
      WHERE p.position = $1
        AND g.season = $2
      GROUP BY p.id, p.name, p.position
      ORDER BY stat_total DESC
      LIMIT 20
    `;
        const rawResult = yield prisma.$queryRawUnsafe(statQuery, position, parseInt(season, 10));
        // Convert any BigInt values to regular numbers to avoid serialization issues
        const result = rawResult.map((item) => ({
            playerId: item.playerId,
            name: item.name,
            position: item.position,
            stat_total: typeof item.stat_total === 'bigint' ? Number(item.stat_total) : item.stat_total
        }));
        res.status(200).json(result);
    }
    catch (error) {
        console.error('Error fetching top players:', error);
        res.status(500).json({ error: 'Failed to fetch top players' });
    }
}));
// Get player comparison (WR1 vs WR2, RB1 vs RB2, etc.)
router.get('/compare/:position/:role1/:role2/:season', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { position, role1, role2, season } = req.params;
        // Query the database for plays
        const plays = yield prisma.play.findMany({
            where: {
                game: {
                    season: parseInt(season, 10)
                }
            },
            include: {
                playPlayers: {
                    where: {
                        OR: [
                            { role: role1 },
                            { role: role2 }
                        ]
                    },
                    include: {
                        player: true
                    }
                }
            },
            take: 1000
        });
        // Filter plays that have both roles
        const playsWithBothRoles = plays.filter(play => {
            const roles = play.playPlayers.map(pp => pp.role);
            return roles.includes(role1) && roles.includes(role2);
        });
        // Extract metrics for comparison
        const comparison = {
            totalPlays: playsWithBothRoles.length,
            role1Stats: {
                targets: playsWithBothRoles.filter(p => p.playPlayers.some(pp => pp.role === role1 && pp.targeted)).length,
                completions: playsWithBothRoles.filter(p => p.playPlayers.some(pp => pp.role === role1 && pp.completed)).length,
                totalYards: playsWithBothRoles.reduce((sum, p) => {
                    const playerPlay = p.playPlayers.find(pp => pp.role === role1);
                    return sum + ((playerPlay === null || playerPlay === void 0 ? void 0 : playerPlay.yardsGained) || 0);
                }, 0)
            },
            role2Stats: {
                targets: playsWithBothRoles.filter(p => p.playPlayers.some(pp => pp.role === role2 && pp.targeted)).length,
                completions: playsWithBothRoles.filter(p => p.playPlayers.some(pp => pp.role === role2 && pp.completed)).length,
                totalYards: playsWithBothRoles.reduce((sum, p) => {
                    const playerPlay = p.playPlayers.find(pp => pp.role === role2);
                    return sum + ((playerPlay === null || playerPlay === void 0 ? void 0 : playerPlay.yardsGained) || 0);
                }, 0)
            }
        };
        res.status(200).json(comparison);
    }
    catch (error) {
        console.error('Error comparing player roles:', error);
        res.status(500).json({ error: 'Failed to compare player roles' });
    }
}));
// Get weekly trend analysis for a specific player stat
router.get('/trend/:playerId/:season/:stat', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { playerId, season, stat } = req.params;
        // Validate stat parameter
        const validStats = ['fantasyPoints', 'passYards', 'rushYards', 'receivingYards',
            'receptions', 'targets', 'passTDs', 'rushTDs', 'receivingTDs'];
        if (!validStats.includes(stat)) {
            return res.status(400).json({ error: 'Invalid stat parameter' });
        }
        const playerStats = yield prisma.playerGameStat.findMany({
            where: {
                playerId,
                game: {
                    season: parseInt(season, 10)
                }
            },
            include: {
                game: true
            },
            orderBy: {
                game: {
                    week: 'asc'
                }
            }
        });
        // Extract trend data
        const trendData = playerStats.map(gameStat => ({
            week: gameStat.game.week,
            statValue: gameStat[stat] || 0,
            opponent: gameStat.game.homeTeam === gameStat.team ?
                gameStat.game.awayTeam : gameStat.game.homeTeam
        }));
        res.status(200).json(trendData);
    }
    catch (error) {
        console.error('Error fetching trend data:', error);
        res.status(500).json({ error: 'Failed to fetch trend data' });
    }
}));
// Get team tendencies (pass vs run, formations, etc.)
router.get('/tendencies/team/:teamCode/:season', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teamCode, season } = req.params;
        // Calculate offensive play-calling tendencies
        const plays = yield prisma.play.findMany({
            where: {
                offTeam: teamCode,
                game: {
                    season: parseInt(season, 10)
                }
            }
        });
        // Calculate basic tendencies
        const totalPlays = plays.length;
        const passPlays = plays.filter(p => p.passPlay).length;
        const runPlays = plays.filter(p => p.runPlay).length;
        const redZonePlays = plays.filter(p => p.redZone).length;
        const redZonePassPlays = plays.filter(p => p.redZone && p.passPlay).length;
        const redZoneRunPlays = plays.filter(p => p.redZone && p.runPlay).length;
        const firstDownPlays = plays.filter(p => p.down === 1).length;
        const firstDownPassPlays = plays.filter(p => p.down === 1 && p.passPlay).length;
        const firstDownRunPlays = plays.filter(p => p.down === 1 && p.runPlay).length;
        // Calculate success rates
        const successfulPlays = plays.filter(p => (p.yardsGained || 0) >= (p.down === 1 ? 4 : p.down === 2 ? 4 : 3)).length;
        const successfulPassPlays = plays.filter(p => p.passPlay && (p.yardsGained || 0) >= (p.down === 1 ? 4 : p.down === 2 ? 4 : 3)).length;
        const successfulRunPlays = plays.filter(p => p.runPlay && (p.yardsGained || 0) >= (p.down === 1 ? 4 : p.down === 2 ? 4 : 3)).length;
        // Calculate average yards per play
        const totalYards = plays.reduce((sum, p) => sum + (p.yardsGained || 0), 0);
        const passYards = plays.filter(p => p.passPlay).reduce((sum, p) => sum + (p.yardsGained || 0), 0);
        const runYards = plays.filter(p => p.runPlay).reduce((sum, p) => sum + (p.yardsGained || 0), 0);
        // Calculate play distribution by down
        const playsByDown = {
            first: plays.filter(p => p.down === 1).length,
            second: plays.filter(p => p.down === 2).length,
            third: plays.filter(p => p.down === 3).length,
            fourth: plays.filter(p => p.down === 4).length
        };
        // Calculate pass/run ratio by down
        const passRunRatioByDown = {
            first: {
                pass: plays.filter(p => p.down === 1 && p.passPlay).length,
                run: plays.filter(p => p.down === 1 && p.runPlay).length
            },
            second: {
                pass: plays.filter(p => p.down === 2 && p.passPlay).length,
                run: plays.filter(p => p.down === 2 && p.runPlay).length
            },
            third: {
                pass: plays.filter(p => p.down === 3 && p.passPlay).length,
                run: plays.filter(p => p.down === 3 && p.runPlay).length
            },
            fourth: {
                pass: plays.filter(p => p.down === 4 && p.passPlay).length,
                run: plays.filter(p => p.down === 4 && p.runPlay).length
            }
        };
        // Calculate play distribution by quarter
        const playsByQuarter = {
            first: plays.filter(p => p.quarter === 1).length,
            second: plays.filter(p => p.quarter === 2).length,
            third: plays.filter(p => p.quarter === 3).length,
            fourth: plays.filter(p => p.quarter === 4).length
        };
        // Calculate pass/run ratio by quarter
        const passRunRatioByQuarter = {
            first: {
                pass: plays.filter(p => p.quarter === 1 && p.passPlay).length,
                run: plays.filter(p => p.quarter === 1 && p.runPlay).length
            },
            second: {
                pass: plays.filter(p => p.quarter === 2 && p.passPlay).length,
                run: plays.filter(p => p.quarter === 2 && p.runPlay).length
            },
            third: {
                pass: plays.filter(p => p.quarter === 3 && p.passPlay).length,
                run: plays.filter(p => p.quarter === 3 && p.runPlay).length
            },
            fourth: {
                pass: plays.filter(p => p.quarter === 4 && p.passPlay).length,
                run: plays.filter(p => p.quarter === 4 && p.runPlay).length
            }
        };
        res.status(200).json({
            teamCode,
            season: parseInt(season, 10),
            overview: {
                totalPlays,
                passPlays,
                runPlays,
                passPlayPercentage: totalPlays > 0 ? (passPlays / totalPlays) * 100 : 0,
                runPlayPercentage: totalPlays > 0 ? (runPlays / totalPlays) * 100 : 0,
                averageYardsPerPlay: totalPlays > 0 ? totalYards / totalPlays : 0,
                averageYardsPerPass: passPlays > 0 ? passYards / passPlays : 0,
                averageYardsPerRun: runPlays > 0 ? runYards / runPlays : 0,
                successRate: totalPlays > 0 ? (successfulPlays / totalPlays) * 100 : 0,
                passSuccessRate: passPlays > 0 ? (successfulPassPlays / passPlays) * 100 : 0,
                runSuccessRate: runPlays > 0 ? (successfulRunPlays / runPlays) * 100 : 0
            },
            redZone: {
                plays: redZonePlays,
                passPlays: redZonePassPlays,
                runPlays: redZoneRunPlays,
                passPlayPercentage: redZonePlays > 0 ? (redZonePassPlays / redZonePlays) * 100 : 0,
                runPlayPercentage: redZonePlays > 0 ? (redZoneRunPlays / redZonePlays) * 100 : 0
            },
            firstDown: {
                plays: firstDownPlays,
                passPlays: firstDownPassPlays,
                runPlays: firstDownRunPlays,
                passPlayPercentage: firstDownPlays > 0 ? (firstDownPassPlays / firstDownPlays) * 100 : 0,
                runPlayPercentage: firstDownPlays > 0 ? (firstDownRunPlays / firstDownPlays) * 100 : 0
            },
            byDown: {
                playDistribution: playsByDown,
                passRunRatio: passRunRatioByDown
            },
            byQuarter: {
                playDistribution: playsByQuarter,
                passRunRatio: passRunRatioByQuarter
            }
        });
    }
    catch (error) {
        console.error('Error fetching team tendencies:', error);
        res.status(500).json({ error: 'Failed to fetch team tendencies' });
    }
}));
// Get position correlation data (how position performance relates to team success)
router.get('/correlation/team/:position/:season', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { position, season } = req.params;
        // Get all games for the season
        const games = yield prisma.game.findMany({
            where: {
                season: parseInt(season, 10)
            },
            include: {
                playerGameStats: {
                    where: {
                        position
                    },
                    include: {
                        player: true
                    }
                },
                homeTeamRel: true,
                awayTeamRel: true
            }
        });
        // Process each game to find correlation data
        const correlationData = games.map(game => {
            // Determine game outcome for each team
            const homeWin = (game.homeScore || 0) > (game.awayScore || 0);
            const awayWin = (game.awayScore || 0) > (game.homeScore || 0);
            // Filter player stats by team
            const homePlayerStats = game.playerGameStats.filter(stat => stat.team === game.homeTeam);
            const awayPlayerStats = game.playerGameStats.filter(stat => stat.team === game.awayTeam);
            // Calculate home team position stats
            const homePositionYards = homePlayerStats.reduce((sum, stat) => {
                if (position === 'QB')
                    return sum + (stat.passYards || 0);
                if (position === 'RB')
                    return sum + (stat.rushYards || 0);
                if (['WR', 'TE'].includes(position))
                    return sum + (stat.receivingYards || 0);
                return sum;
            }, 0);
            const homePositionTDs = homePlayerStats.reduce((sum, stat) => {
                if (position === 'QB')
                    return sum + (stat.passTDs || 0);
                if (position === 'RB')
                    return sum + (stat.rushTDs || 0);
                if (['WR', 'TE'].includes(position))
                    return sum + (stat.receivingTDs || 0);
                return sum;
            }, 0);
            // Calculate away team position stats
            const awayPositionYards = awayPlayerStats.reduce((sum, stat) => {
                if (position === 'QB')
                    return sum + (stat.passYards || 0);
                if (position === 'RB')
                    return sum + (stat.rushYards || 0);
                if (['WR', 'TE'].includes(position))
                    return sum + (stat.receivingYards || 0);
                return sum;
            }, 0);
            const awayPositionTDs = awayPlayerStats.reduce((sum, stat) => {
                if (position === 'QB')
                    return sum + (stat.passTDs || 0);
                if (position === 'RB')
                    return sum + (stat.rushTDs || 0);
                if (['WR', 'TE'].includes(position))
                    return sum + (stat.receivingTDs || 0);
                return sum;
            }, 0);
            return [
                {
                    team: game.homeTeam,
                    teamName: game.homeTeamRel.name,
                    opponent: game.awayTeam,
                    won: homeWin,
                    positionYards: homePositionYards,
                    positionTDs: homePositionTDs,
                    points: game.homeScore || 0
                },
                {
                    team: game.awayTeam,
                    teamName: game.awayTeamRel.name,
                    opponent: game.homeTeam,
                    won: awayWin,
                    positionYards: awayPositionYards,
                    positionTDs: awayPositionTDs,
                    points: game.awayScore || 0
                }
            ];
        }).flat();
        // Calculate some basic correlation stats
        const winningTeamsData = correlationData.filter(d => d.won);
        const losingTeamsData = correlationData.filter(d => !d.won);
        const avgYardsWinning = winningTeamsData.reduce((sum, d) => sum + d.positionYards, 0) / (winningTeamsData.length || 1);
        const avgYardsLosing = losingTeamsData.reduce((sum, d) => sum + d.positionYards, 0) / (losingTeamsData.length || 1);
        const avgTDsWinning = winningTeamsData.reduce((sum, d) => sum + d.positionTDs, 0) / (winningTeamsData.length || 1);
        const avgTDsLosing = losingTeamsData.reduce((sum, d) => sum + d.positionTDs, 0) / (losingTeamsData.length || 1);
        // Group data by team for team-specific analysis
        const teamData = {};
        correlationData.forEach(d => {
            if (!teamData[d.team]) {
                teamData[d.team] = {
                    team: d.team,
                    teamName: d.teamName,
                    games: [],
                    totalYards: 0,
                    totalTDs: 0,
                    wins: 0,
                    losses: 0
                };
            }
            teamData[d.team].games.push({
                opponent: d.opponent,
                won: d.won,
                positionYards: d.positionYards,
                positionTDs: d.positionTDs,
                points: d.points
            });
            teamData[d.team].totalYards += d.positionYards;
            teamData[d.team].totalTDs += d.positionTDs;
            if (d.won)
                teamData[d.team].wins++;
            else
                teamData[d.team].losses++;
        });
        // Calculate team averages and win rate
        Object.values(teamData).forEach(team => {
            const gamesPlayed = team.games.length;
            team.avgYards = gamesPlayed > 0 ? team.totalYards / gamesPlayed : 0;
            team.avgTDs = gamesPlayed > 0 ? team.totalTDs / gamesPlayed : 0;
            team.winRate = gamesPlayed > 0 ? (team.wins / gamesPlayed) * 100 : 0;
        });
        // Sort teams by win rate for ranking
        const sortedTeams = Object.values(teamData).sort((a, b) => (b.winRate || 0) - (a.winRate || 0));
        res.status(200).json({
            position,
            season: parseInt(season, 10),
            summary: {
                avgYardsWinning,
                avgYardsLosing,
                avgTDsWinning,
                avgTDsLosing,
                yardsDifference: avgYardsWinning - avgYardsLosing,
                tdsDifference: avgTDsWinning - avgTDsLosing
            },
            teamRankings: sortedTeams.map((team, index) => ({
                rank: index + 1,
                team: team.team,
                teamName: team.teamName,
                winRate: team.winRate || 0,
                avgYards: team.avgYards || 0,
                avgTDs: team.avgTDs || 0
            })),
            correlationData
        });
    }
    catch (error) {
        console.error('Error fetching position correlation data:', error);
        res.status(500).json({ error: 'Failed to fetch position correlation data' });
    }
}));
// Get situational analysis data
router.get('/situational/:playerId/:season', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { playerId, season } = req.params;
        // Get the player's position
        const player = yield prisma.player.findUnique({
            where: { id: playerId }
        });
        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }
        // Get all plays involving the player in the specified season
        const playerPlays = yield prisma.playPlayer.findMany({
            where: {
                playerId,
                play: {
                    game: {
                        season: parseInt(season, 10)
                    }
                }
            },
            include: {
                play: true
            }
        });
        // Categorize plays by situation
        const redZonePlays = playerPlays.filter(pp => pp.play.redZone);
        const thirdDownPlays = playerPlays.filter(pp => pp.play.down === 3);
        const fourthQuarterPlays = playerPlays.filter(pp => pp.play.quarter === 4);
        const firstDownPlays = playerPlays.filter(pp => pp.play.down === 1);
        // Calculate targeted/completed stats based on position
        const calculateStats = plays => {
            const targeted = plays.filter(pp => pp.targeted).length;
            const completed = plays.filter(pp => pp.completed).length;
            const yards = plays.reduce((sum, pp) => sum + (pp.yardsGained || 0), 0);
            return {
                plays: plays.length,
                targeted,
                completed,
                yards,
                yardsPerPlay: plays.length > 0 ? yards / plays.length : 0,
                completionRate: targeted > 0 ? (completed / targeted) * 100 : 0
            };
        };
        // Calculate overall stats
        const overallStats = calculateStats(playerPlays);
        const redZoneStats = calculateStats(redZonePlays);
        const thirdDownStats = calculateStats(thirdDownPlays);
        const fourthQuarterStats = calculateStats(fourthQuarterPlays);
        const firstDownStats = calculateStats(firstDownPlays);
        res.status(200).json({
            playerId,
            playerName: player.name,
            position: player.position,
            season: parseInt(season, 10),
            situationalData: {
                overall: overallStats,
                redZone: redZoneStats,
                thirdDown: thirdDownStats,
                fourthQuarter: fourthQuarterStats,
                firstDown: firstDownStats
            }
        });
    }
    catch (error) {
        console.error('Error fetching situational data:', error);
        res.status(500).json({ error: 'Failed to fetch situational data' });
    }
}));
exports.default = router;
