const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Receta = sequelize.define('Receta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'recetas',
    timestamps: false
});

module.exports = Receta;
