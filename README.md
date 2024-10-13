# Battleship Game API

This is a simple one-sided battleship game where a player can target and shoot coordinates to try and sink ships.

## Setup Instructions

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `nnpm start` to start the server
4. Server will run on `http://localhost:3000`

## API Endpoints

### Start a new game
- `POST /api/start-game`
  - Starts a new game and places ships.

### Fire at a coordinate
- `POST /api/fire`
  - Body: `{ "gameId": 1, "coordinate": "A5" }`
  - Fires at the given coordinate.

### Get game status
- `GET /api/status?gameId=1`
  - Retrieves the current status of the game.
