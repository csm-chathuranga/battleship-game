const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.Game = require('./game')(sequelize, DataTypes);
db.Ship = require('./ship')(sequelize, DataTypes);
db.Shot = require('./shot')(sequelize, DataTypes);

// Define relationships
db.Game.hasMany(db.Ship, { foreignKey: 'gameId' });
db.Game.hasMany(db.Shot, { foreignKey: 'gameId' });

module.exports = db;
