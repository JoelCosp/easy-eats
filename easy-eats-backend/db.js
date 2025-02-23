const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT
});

// Probar conexión
sequelize.authenticate()
    .then(() => console.log('✅ Conectado a la base de datos MySQL'))
    .catch(error => console.error('❌ Error al conectar:', error));

module.exports = sequelize;
