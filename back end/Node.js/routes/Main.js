const { Router } = require('express');
const { ControllerMain } = require('../controller')

const Route = Router();

Route.get('/allNews/:type', ControllerMain.AllNews );

Route.get('/News/:type/:slug', ControllerMain.News );

module.exports = Route;