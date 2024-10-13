const db = require('../models');

function generateRandomCoords(size) {
    const isHorizontal = Math.random() < 0.5;
    let x = Math.floor(Math.random() * (10 - (isHorizontal ? size : 1)));
    let y = Math.floor(Math.random() * (10 - (isHorizontal ? 1 : size)));
    const coordinates = [];
    for (let i = 0; i < size; i++) {
        coordinates.push(isHorizontal ? `${x + i},${y}` : `${x},${y + i}`);
    }
    return coordinates;
}

function convertToNumericCoordinate(coordinate) {
    const letter = coordinate[0].toUpperCase();
    const number = parseInt(coordinate.slice(1), 10) - 1;
    const x = letter.charCodeAt(0) - 'A'.charCodeAt(0);
    return `${x},${number}`;
}

function generateBoard(gameId) {
    return [
        { gameId, type: 'Battleship', size: 5, coordinates: generateRandomCoords(5) },
        { gameId, type: 'Destroyer', size: 4, coordinates: generateRandomCoords(4) },
        { gameId, type: 'Destroyer', size: 4, coordinates: generateRandomCoords(4) }
    ];
}

async function fireShot(gameId, coordinate) {
    try {
        const numericCoordinate = convertToNumericCoordinate(coordinate);
        const shot = await db.Shot.create({ gameId, coordinate, result: "Miss" });
        const ships = await db.Ship.findAll({ where: { gameId } });
        
        for (let ship of ships) {
            if (ship.coordinates.includes(numericCoordinate)) {
                ship.hits += 1;
                await ship.save();
                shot.result = ship.hits === ship.size ? "Sunk" : "Hit";
                await shot.save();
                return { result: shot.result };
            }
        }

        await shot.save();
        return { result: "Miss" };
    } catch (error) {
        console.error(`Error processing shot: ${error.message}`);
        throw error;
    }
}

module.exports = { generateBoard, fireShot };
