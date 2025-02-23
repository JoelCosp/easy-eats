// server.js
const app = require('./app');
const sequelize = require('./db'); // Importar la conexión de la base de datos

// Sincronizar la base de datos
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
