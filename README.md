# Battleship Game API

This is a simple one-sided battleship game where a player can target and shoot coordinates to try and sink ships.

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd battleship-game
   ```
2. Run `npm install` to install dependencies.
3. **Database Creation**: The database will be automatically created on the first run. When you start the server, Sequelize ORM will initialize an SQLite database (`database.sqlite`) and create the required tables.
4. Run `npm start` to start the server.
5. The server will run on `http://localhost:3000`.

## API Endpoints

### Start a new game
- `POST /api/start-game`
  - Starts a new game and places ships randomly on the grid.

### Fire at a coordinate
- `POST /api/fire`
  - Body: `{ "gameId": 1, "coordinate": "A5" }`
  - Fires at the given coordinate and returns the result (Hit, Miss, or Sunk).

### Get game status
- `GET /api/status?gameId=1`
  - Retrieves the current status of the game, including remaining ships and shot history.
