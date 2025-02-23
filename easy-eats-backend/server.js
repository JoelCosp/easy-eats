const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Permitir peticiones desde el frontend
app.use(express.json()); // Leer JSON en requests

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Servidor Express funcionando!');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const sequelize = require('./db');
const Receta = require('./models/Receta');

sequelize.sync()
    .then(() => console.log("✅ Base de datos sincronizada"))
    .catch(error => console.error("❌ Error al sincronizar la base de datos:", error));


const recetaRoutes = require('./routes/Recetas');
app.use('/api/recetas', recetaRoutes);


