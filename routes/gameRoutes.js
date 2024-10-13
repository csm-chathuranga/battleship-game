const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/start-game', gameController.startGame);
router.post('/fire', gameController.fire);
router.get('/status', gameController.status);

module.exports = router;
