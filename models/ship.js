module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Ship', {
        gameId: { type: DataTypes.INTEGER, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        size: { type: DataTypes.INTEGER, allowNull: false },
        coordinates: { type: DataTypes.JSON, allowNull: false },
        hits: { type: DataTypes.INTEGER, defaultValue: 0 }
    });
};
