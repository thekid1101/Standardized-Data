import express from 'express';
import { prisma } from '../../index';

const router = express.Router();

// Get plays by game and team
router.get('/game/:gameKey/team/:teamCode', async (req, res) => {
  try {
    const { gameKey, teamCode } = req.params;
    const plays = await prisma.play.findMany({
      where: {
        gameKey,
        offTeam: teamCode
      },
      include: {
        playPlayers: {
          include: {
            player: true
          }
        }
      }
    });
    
    res.status(200).json(plays);
  } catch (error) {
    console.error('Error fetching plays:', error);
    res.status(500).json({ error: 'Failed to fetch plays' });
  }
});

// Get plays by specific player
router.get('/player/:playerId/season/:season', async (req, res) => {
  try {
    const { playerId, season } = req.params;
    const plays = await prisma.play.findMany({
      where: {
        playPlayers: {
          some: {
            playerId
          }
        },
        game: {
          season: parseInt(season, 10)
        }
      },
      include: {
        playPlayers: {
          where: {
            playerId
          },
          include: {
            player: true
          }
        },
        game: true
      }
    });
    
    res.status(200).json(plays);
  } catch (error) {
    console.error('Error fetching player plays:', error);
    res.status(500).json({ error: 'Failed to fetch player plays' });
  }
});

// Get play detail by ID
router.get('/:playId', async (req, res) => {
  try {
    const { playId } = req.params;
    const play = await prisma.play.findUnique({
      where: { id: playId },
      include: {
        playPlayers: {
          include: {
            player: true
          }
        },
        game: true,
        offTeamRel: true,
        defTeamRel: true
      }
    });
    
    if (!play) {
      return res.status(404).json({ error: 'Play not found' });
    }
    
    res.status(200).json(play);
  } catch (error) {
    console.error('Error fetching play details:', error);
    res.status(500).json({ error: 'Failed to fetch play details' });
  }
});

// Get plays by down and distance
router.get('/situation/down/:down/distance/:distance', async (req, res) => {
  try {
    const { down, distance } = req.params;
    const plays = await prisma.play.findMany({
      where: {
        down: parseInt(down, 10),
        yardsToGo: parseInt(distance, 10)
      },
      include: {
        playPlayers: {
          include: {
            player: true
          }
        },
        game: true
      }
    });
    
    res.status(200).json(plays);
  } catch (error) {
    console.error('Error fetching situational plays:', error);
    res.status(500).json({ error: 'Failed to fetch situational plays' });
  }
});

export default router;