import express from 'express';
import playerRoutes from './routes/playerRoutes';
import teamRoutes from './routes/teamRoutes';
import gameRoutes from './routes/gameRoutes';
import statsRoutes from './routes/statsRoutes';
import playRoutes from './routes/playRoutes';

const router = express.Router();

// Mount route groups
router.use('/players', playerRoutes);
router.use('/teams', teamRoutes);
router.use('/games', gameRoutes);
router.use('/stats', statsRoutes);
router.use('/plays', playRoutes);

export default router;