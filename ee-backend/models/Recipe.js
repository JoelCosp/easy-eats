const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Definir el modelo 'Recipe' que representa la tabla en la base de datos
const Recipe = sequelize.define('Recipe', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false // Deshabilitar los campos `createdAt` y `updatedAt` si no los necesitas
});

module.exports = Recipe;
