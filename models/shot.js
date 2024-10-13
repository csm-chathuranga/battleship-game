module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Shot', {
        gameId: { type: DataTypes.INTEGER, allowNull: false },
        coordinate: { type: DataTypes.STRING, allowNull: false },
        result: { type: DataTypes.STRING, allowNull: false },
    });
};
