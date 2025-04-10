import express from 'express';
import { prisma } from '../../index';

const router = express.Router();

// Get all games with pagination
router.get('/', async (req, res) => {
  try {
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 50;
    const offset = (page - 1) * limit;
    
    const games = await prisma.game.findMany({
      skip: offset,
      take: limit,
      orderBy: [
        { season: 'desc' },
        { week: 'desc' }
      ],
      include: {
        homeTeamRel: true,
        awayTeamRel: true
      }
    });
    
    const total = await prisma.game.count();
    
    res.status(200).json({
      data: games,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        itemsPerPage: limit
      }
    });
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ error: 'Failed to fetch games' });
  }
});

// Get games by season and week
router.get('/season/:season/week/:week', async (req, res) => {
  try {
    const { season, week } = req.params;
    const games = await prisma.game.findMany({
      where: {
        season: parseInt(season, 10),
        week: parseInt(week, 10)
      },
      include: {
        homeTeamRel: true,
        awayTeamRel: true
      }
    });
    
    res.status(200).json(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ error: 'Failed to fetch games' });
  }
});

// Get game by ID
router.get('/:key', async (req, res) => {
  try {
    const { key } = req.params;
    const game = await prisma.game.findUnique({
      where: { key },
      include: {
        homeTeamRel: true,
        awayTeamRel: true
      }
    });
    
    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }
    
    res.status(200).json(game);
  } catch (error) {
    console.error('Error fetching game:', error);
    res.status(500).json({ error: 'Failed to fetch game' });
  }
});

// Get player stats for a specific game
router.get('/:key/players', async (req, res) => {
  try {
    const { key } = req.params;
    const playerStats = await prisma.playerGameStat.findMany({
      where: {
        gameKey: key
      },
      include: {
        player: true,
        teamRel: true
      },
      orderBy: {
        fantasyPoints: 'desc'
      }
    });
    
    res.status(200).json(playerStats);
  } catch (error) {
    console.error('Error fetching game player stats:', error);
    res.status(500).json({ error: 'Failed to fetch game player stats' });
  }
});

// Get plays for a specific game
router.get('/:key/plays', async (req, res) => {
  try {
    const { key } = req.params;
    const plays = await prisma.play.findMany({
      where: {
        gameKey: key
      },
      orderBy: {
        id: 'asc'
      },
      take: 100 // Limit because there can be hundreds of plays
    });
    
    res.status(200).json(plays);
  } catch (error) {
    console.error('Error fetching game plays:', error);
    res.status(500).json({ error: 'Failed to fetch game plays' });
  }
});

export default router;