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
// Get all games with pagination
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit) : 50;
        const offset = (page - 1) * limit;
        const games = yield prisma.game.findMany({
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
        const total = yield prisma.game.count();
        res.status(200).json({
            data: games,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalItems: total,
                itemsPerPage: limit
            }
        });
    }
    catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).json({ error: 'Failed to fetch games' });
    }
}));
// Get games by season and week
router.get('/season/:season/week/:week', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { season, week } = req.params;
        const games = yield prisma.game.findMany({
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
    }
    catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).json({ error: 'Failed to fetch games' });
    }
}));
// Get game by ID
router.get('/:key', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { key } = req.params;
        const game = yield prisma.game.findUnique({
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
    }
    catch (error) {
        console.error('Error fetching game:', error);
        res.status(500).json({ error: 'Failed to fetch game' });
    }
}));
// Get player stats for a specific game
router.get('/:key/players', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { key } = req.params;
        const playerStats = yield prisma.playerGameStat.findMany({
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
    }
    catch (error) {
        console.error('Error fetching game player stats:', error);
        res.status(500).json({ error: 'Failed to fetch game player stats' });
    }
}));
// Get plays for a specific game
router.get('/:key/plays', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { key } = req.params;
        const plays = yield prisma.play.findMany({
            where: {
                gameKey: key
            },
            orderBy: {
                id: 'asc'
            },
            take: 100 // Limit because there can be hundreds of plays
        });
        res.status(200).json(plays);
    }
    catch (error) {
        console.error('Error fetching game plays:', error);
        res.status(500).json({ error: 'Failed to fetch game plays' });
    }
}));
exports.default = router;
