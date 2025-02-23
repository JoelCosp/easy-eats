const express = require('express');
const Receta = require('../models/Receta');
const router = express.Router();

// Obtener todas las recetas
router.get('/', async (req, res) => {
    try {
        const recetas = await Receta.findAll();
        res.json(recetas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener recetas' });
    }
});

// Crear una nueva receta
router.post('/', async (req, res) => {
    try {
        const { nombre } = req.body;
        const nuevaReceta = await Receta.create({ nombre });
        res.json(nuevaReceta);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear receta' });
    }
});

module.exports = router;
