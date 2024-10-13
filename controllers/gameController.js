const db = require('../models');
const { generateBoard, fireShot } = require('../utils/gameLogic');

exports.startGame = async (req, res) => {
    try {
        const game = await db.Game.create({ status: 'active' });
        const ships = generateBoard(game.id);
        await db.Ship.bulkCreate(ships);
        res.json({ message: "Game started!", gameId: game.id });
    } catch (error) {
        res.status(500).json({ error: "Failed to start game" });
    }
};

exports.fire = async (req, res) => {
    const { gameId, coordinate } = req.body;
    try {
        const result = await fireShot(gameId, coordinate);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.status = async (req, res) => {
    const { gameId } = req.query;
    try {
        const game = await db.Game.findByPk(gameId);
        const ships = await db.Ship.findAll({ where: { gameId } });
        res.json({ game, ships });
    } catch (error) {
        res.status(500).json({ error: "Failed to get game status" });
    }
};
