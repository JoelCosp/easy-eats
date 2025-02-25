const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const recipesRouter = require('./routes/recipes'); // Importamos la nueva ruta para recetas

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Usamos las rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/recipes', recipesRouter); // Usamos la ruta de recetas

module.exports = app;
