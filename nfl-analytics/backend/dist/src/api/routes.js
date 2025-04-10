"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const playerRoutes_1 = __importDefault(require("./routes/playerRoutes"));
const teamRoutes_1 = __importDefault(require("./routes/teamRoutes"));
const gameRoutes_1 = __importDefault(require("./routes/gameRoutes"));
const statsRoutes_1 = __importDefault(require("./routes/statsRoutes"));
const playRoutes_1 = __importDefault(require("./routes/playRoutes"));
const router = express_1.default.Router();
// Mount route groups
router.use('/players', playerRoutes_1.default);
router.use('/teams', teamRoutes_1.default);
router.use('/games', gameRoutes_1.default);
router.use('/stats', statsRoutes_1.default);
router.use('/plays', playRoutes_1.default);
exports.default = router;
