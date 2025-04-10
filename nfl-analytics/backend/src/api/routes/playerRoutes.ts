import express from 'express';
import { prisma } from '../../index';

const router = express.Router();

// Get all players
router.get('/', async (req, res) => {
  try {
    const players = await prisma.player.findMany({
      take: 100 // Limit to prevent overwhelming response
    });
    res.status(200).json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).json({ error: 'Failed to fetch players' });
  }
});

// Get player by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const player = await prisma.player.findUnique({
      where: { id },
      include: {
        playerGameStats: {
          take: 20,
          orderBy: {
            gameKey: 'desc'
          }
        }
      }
    });
    
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    
    res.status(200).json(player);
  } catch (error) {
    console.error('Error fetching player:', error);
    res.status(500).json({ error: 'Failed to fetch player' });
  }
});

// Get player stats by season
router.get('/:id/stats/:season', async (req, res) => {
  try {
    const { id, season } = req.params;
    const stats = await prisma.playerGameStat.findMany({
      where: {
        playerId: id,
        game: {
          season: parseInt(season, 10)
        }
      },
      orderBy: {
        gameKey: 'asc'
      },
      include: {
        game: true
      }
    });
    
    res.status(200).json(stats);
  } catch (error) {
    console.error('Error fetching player stats:', error);
    res.status(500).json({ error: 'Failed to fetch player stats' });
  }
});

// Search players by name
router.get('/search/:query', async (req, res) => {
  try {
    const { query } = req.params;
    const players = await prisma.player.findMany({
      where: {
        name: {
          contains: query
        }
      },
      take: 20
    });
    
    res.status(200).json(players);
  } catch (error) {
    console.error('Error searching players:', error);
    res.status(500).json({ error: 'Failed to search players' });
  }
});

// Compare two players for a specific season
router.get('/compare/:player1Id/:player2Id/:season', async (req, res) => {
  try {
    const { player1Id, player2Id, season } = req.params;
    
    // Get both players' info
    const [player1, player2] = await Promise.all([
      prisma.player.findUnique({ where: { id: player1Id } }),
      prisma.player.findUnique({ where: { id: player2Id } })
    ]);
    
    if (!player1 || !player2) {
      return res.status(404).json({ error: 'One or both players not found' });
    }
    
    // Get season stats for both players
    const [player1Stats, player2Stats] = await Promise.all([
      prisma.playerGameStat.findMany({
        where: {
          playerId: player1Id,
          game: {
            season: parseInt(season, 10)
          }
        },
        include: {
          game: true
        }
      }),
      prisma.playerGameStat.findMany({
        where: {
          playerId: player2Id,
          game: {
            season: parseInt(season, 10)
          }
        },
        include: {
          game: true
        }
      })
    ]);
    
    // Calculate aggregated stats for player 1
    const player1Totals = {
      games: player1Stats.length,
      snaps: player1Stats.reduce((sum, stat) => sum + (stat.snaps || 0), 0),
      fantasyPoints: player1Stats.reduce((sum, stat) => sum + (stat.fantasyPoints || 0), 0),
      passAttempts: player1Stats.reduce((sum, stat) => sum + (stat.passAttempts || 0), 0),
      completions: player1Stats.reduce((sum, stat) => sum + (stat.completions || 0), 0),
      passYards: player1Stats.reduce((sum, stat) => sum + (stat.passYards || 0), 0),
      passTDs: player1Stats.reduce((sum, stat) => sum + (stat.passTDs || 0), 0),
      interceptions: player1Stats.reduce((sum, stat) => sum + (stat.interceptions || 0), 0),
      carries: player1Stats.reduce((sum, stat) => sum + (stat.carries || 0), 0),
      rushYards: player1Stats.reduce((sum, stat) => sum + (stat.rushYards || 0), 0),
      rushTDs: player1Stats.reduce((sum, stat) => sum + (stat.rushTDs || 0), 0),
      targets: player1Stats.reduce((sum, stat) => sum + (stat.targets || 0), 0),
      receptions: player1Stats.reduce((sum, stat) => sum + (stat.receptions || 0), 0),
      receivingYards: player1Stats.reduce((sum, stat) => sum + (stat.receivingYards || 0), 0),
      receivingTDs: player1Stats.reduce((sum, stat) => sum + (stat.receivingTDs || 0), 0),
      totalTDs: player1Stats.reduce((sum, stat) => sum + (stat.totalTDs || 0), 0),
      scrimmageYards: player1Stats.reduce((sum, stat) => sum + (stat.scrimmageYards || 0), 0)
    };
    
    // Calculate averages
    const player1Averages = {
      fantasyPoints: player1Totals.games > 0 ? player1Totals.fantasyPoints / player1Totals.games : 0,
      passYards: player1Totals.games > 0 ? player1Totals.passYards / player1Totals.games : 0,
      rushYards: player1Totals.games > 0 ? player1Totals.rushYards / player1Totals.games : 0,
      receivingYards: player1Totals.games > 0 ? player1Totals.receivingYards / player1Totals.games : 0,
      completionPercentage: player1Totals.passAttempts > 0 
        ? (player1Totals.completions / player1Totals.passAttempts) * 100
        : 0,
      yardsPerCarry: player1Totals.carries > 0 
        ? player1Totals.rushYards / player1Totals.carries
        : 0,
      yardsPerReception: player1Totals.receptions > 0
        ? player1Totals.receivingYards / player1Totals.receptions
        : 0,
      catchRate: player1Totals.targets > 0
        ? (player1Totals.receptions / player1Totals.targets) * 100
        : 0
    };
    
    // Calculate aggregated stats for player 2
    const player2Totals = {
      games: player2Stats.length,
      snaps: player2Stats.reduce((sum, stat) => sum + (stat.snaps || 0), 0),
      fantasyPoints: player2Stats.reduce((sum, stat) => sum + (stat.fantasyPoints || 0), 0),
      passAttempts: player2Stats.reduce((sum, stat) => sum + (stat.passAttempts || 0), 0),
      completions: player2Stats.reduce((sum, stat) => sum + (stat.completions || 0), 0),
      passYards: player2Stats.reduce((sum, stat) => sum + (stat.passYards || 0), 0),
      passTDs: player2Stats.reduce((sum, stat) => sum + (stat.passTDs || 0), 0),
      interceptions: player2Stats.reduce((sum, stat) => sum + (stat.interceptions || 0), 0),
      carries: player2Stats.reduce((sum, stat) => sum + (stat.carries || 0), 0),
      rushYards: player2Stats.reduce((sum, stat) => sum + (stat.rushYards || 0), 0),
      rushTDs: player2Stats.reduce((sum, stat) => sum + (stat.rushTDs || 0), 0),
      targets: player2Stats.reduce((sum, stat) => sum + (stat.targets || 0), 0),
      receptions: player2Stats.reduce((sum, stat) => sum + (stat.receptions || 0), 0),
      receivingYards: player2Stats.reduce((sum, stat) => sum + (stat.receivingYards || 0), 0),
      receivingTDs: player2Stats.reduce((sum, stat) => sum + (stat.receivingTDs || 0), 0),
      totalTDs: player2Stats.reduce((sum, stat) => sum + (stat.totalTDs || 0), 0),
      scrimmageYards: player2Stats.reduce((sum, stat) => sum + (stat.scrimmageYards || 0), 0)
    };
    
    // Calculate averages
    const player2Averages = {
      fantasyPoints: player2Totals.games > 0 ? player2Totals.fantasyPoints / player2Totals.games : 0,
      passYards: player2Totals.games > 0 ? player2Totals.passYards / player2Totals.games : 0,
      rushYards: player2Totals.games > 0 ? player2Totals.rushYards / player2Totals.games : 0,
      receivingYards: player2Totals.games > 0 ? player2Totals.receivingYards / player2Totals.games : 0,
      completionPercentage: player2Totals.passAttempts > 0 
        ? (player2Totals.completions / player2Totals.passAttempts) * 100
        : 0,
      yardsPerCarry: player2Totals.carries > 0 
        ? player2Totals.rushYards / player2Totals.carries
        : 0,
      yardsPerReception: player2Totals.receptions > 0
        ? player2Totals.receivingYards / player2Totals.receptions
        : 0,
      catchRate: player2Totals.targets > 0
        ? (player2Totals.receptions / player2Totals.targets) * 100
        : 0
    };
    
    // Calculate differences
    const calculateDifference = (val1, val2) => {
      return {
        raw: val1 - val2,
        percentage: val2 !== 0 ? ((val1 - val2) / val2) * 100 : (val1 > 0 ? 100 : 0)
      };
    };
    
    const differences = {
      games: calculateDifference(player1Totals.games, player2Totals.games),
      snaps: calculateDifference(player1Totals.snaps, player2Totals.snaps),
      fantasyPoints: calculateDifference(player1Totals.fantasyPoints, player2Totals.fantasyPoints),
      passYards: calculateDifference(player1Totals.passYards, player2Totals.passYards),
      passTDs: calculateDifference(player1Totals.passTDs, player2Totals.passTDs),
      rushYards: calculateDifference(player1Totals.rushYards, player2Totals.rushYards),
      rushTDs: calculateDifference(player1Totals.rushTDs, player2Totals.rushTDs),
      receptions: calculateDifference(player1Totals.receptions, player2Totals.receptions),
      targets: calculateDifference(player1Totals.targets, player2Totals.targets),
      receivingYards: calculateDifference(player1Totals.receivingYards, player2Totals.receivingYards),
      receivingTDs: calculateDifference(player1Totals.receivingTDs, player2Totals.receivingTDs),
      totalTDs: calculateDifference(player1Totals.totalTDs, player2Totals.totalTDs),
      scrimmageYards: calculateDifference(player1Totals.scrimmageYards, player2Totals.scrimmageYards),
      
      // Averages
      avgFantasyPoints: calculateDifference(player1Averages.fantasyPoints, player2Averages.fantasyPoints),
      avgPassYards: calculateDifference(player1Averages.passYards, player2Averages.passYards),
      avgRushYards: calculateDifference(player1Averages.rushYards, player2Averages.rushYards),
      avgReceivingYards: calculateDifference(player1Averages.receivingYards, player2Averages.receivingYards),
      completionPercentage: calculateDifference(player1Averages.completionPercentage, player2Averages.completionPercentage),
      yardsPerCarry: calculateDifference(player1Averages.yardsPerCarry, player2Averages.yardsPerCarry),
      yardsPerReception: calculateDifference(player1Averages.yardsPerReception, player2Averages.yardsPerReception),
      catchRate: calculateDifference(player1Averages.catchRate, player2Averages.catchRate)
    };
    
    res.status(200).json({
      season: parseInt(season, 10),
      player1: {
        id: player1.id,
        name: player1.name,
        position: player1.position,
        totals: player1Totals,
        averages: player1Averages
      },
      player2: {
        id: player2.id,
        name: player2.name,
        position: player2.position,
        totals: player2Totals,
        averages: player2Averages
      },
      differences,
      weeklyComparison: player1Stats.map(p1Game => {
        // Find matching week for player 2
        const p2Game = player2Stats.find(p2 => p2.game.week === p1Game.game.week);
        
        if (!p2Game) return null;
        
        return {
          week: p1Game.game.week,
          player1: {
            fantasyPoints: p1Game.fantasyPoints || 0,
            passYards: p1Game.passYards || 0,
            rushYards: p1Game.rushYards || 0,
            receivingYards: p1Game.receivingYards || 0,
            totalTDs: (p1Game.passTDs || 0) + (p1Game.rushTDs || 0) + (p1Game.receivingTDs || 0),
            team: p1Game.team,
            opponent: p1Game.game.homeTeam === p1Game.team 
              ? p1Game.game.awayTeam 
              : p1Game.game.homeTeam
          },
          player2: {
            fantasyPoints: p2Game.fantasyPoints || 0,
            passYards: p2Game.passYards || 0,
            rushYards: p2Game.rushYards || 0,
            receivingYards: p2Game.receivingYards || 0,
            totalTDs: (p2Game.passTDs || 0) + (p2Game.rushTDs || 0) + (p2Game.receivingTDs || 0),
            team: p2Game.team,
            opponent: p2Game.game.homeTeam === p2Game.team 
              ? p2Game.game.awayTeam 
              : p2Game.game.homeTeam
          }
        };
      }).filter(Boolean) // Remove null entries (no matching week)
    });
  } catch (error) {
    console.error('Error comparing players:', error);
    res.status(500).json({ error: 'Failed to compare players' });
  }
});

// Get players filtered by position
router.get('/position/:position', async (req, res) => {
  try {
    const { position } = req.params;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 50;
    const skip = (page - 1) * limit;

    // Validate position
    if (!position) {
      return res.status(400).json({ error: 'Position parameter is required' });
    }

    // Get total count for pagination
    const total = await prisma.player.count({
      where: { position }
    });

    // Get paginated players
    const players = await prisma.player.findMany({
      where: { position },
      skip,
      take: limit,
      orderBy: { name: 'asc' }
    });
    
    res.status(200).json({
      data: players,
      metadata: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching players by position:', error);
    res.status(500).json({ error: 'Failed to fetch players by position' });
  }
});

export default router;