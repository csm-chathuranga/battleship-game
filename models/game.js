module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Game', {
        status: { type: DataTypes.STRING, allowNull: false },
    });
};
