// routes/recipes.js
const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe'); // Importar el modelo de recetas

// Ruta para obtener todas las recetas
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.findAll(); // Obtener todas las recetas de la base de datos
    res.json(recipes); // Devolver las recetas como respuesta
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send('Error fetching recipes');
  }
});

// Ruta para obtener una receta específica por ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id); // Obtener receta por ID
    if (!recipe) return res.status(404).send('Recipe not found');
    res.json(recipe); // Devolver la receta como respuesta
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).send('Error fetching recipe');
  }
});

module.exports = router;
