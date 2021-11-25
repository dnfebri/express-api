module.exports = (sequelize, DataTypes) => {
    const Produck = sequelize.define('Produck', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updateAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'producks'
    });

    return Produck;
}