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
// Get plays by game and team
router.get('/game/:gameKey/team/:teamCode', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gameKey, teamCode } = req.params;
        const plays = yield prisma.play.findMany({
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
            },
            take: 100
        });
        res.status(200).json(plays);
    }
    catch (error) {
        console.error('Error fetching plays:', error);
        res.status(500).json({ error: 'Failed to fetch plays' });
    }
}));
// Get plays by specific player
router.get('/player/:playerId/season/:season', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { playerId, season } = req.params;
        const plays = yield prisma.play.findMany({
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
            },
            take: 100
        });
        res.status(200).json(plays);
    }
    catch (error) {
        console.error('Error fetching player plays:', error);
        res.status(500).json({ error: 'Failed to fetch player plays' });
    }
}));
// Get play detail by ID
router.get('/:playId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { playId } = req.params;
        const play = yield prisma.play.findUnique({
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
    }
    catch (error) {
        console.error('Error fetching play details:', error);
        res.status(500).json({ error: 'Failed to fetch play details' });
    }
}));
// Get plays by down and distance
router.get('/situation/down/:down/distance/:distance', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { down, distance } = req.params;
        const plays = yield prisma.play.findMany({
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
            },
            take: 50
        });
        res.status(200).json(plays);
    }
    catch (error) {
        console.error('Error fetching situational plays:', error);
        res.status(500).json({ error: 'Failed to fetch situational plays' });
    }
}));
exports.default = router;
