const { Router } = require('express');
const { ControllerMain } = require('../controller')
const {auth} = require('../middleware')

const Route = Router();

Route.get('/allNews/:type',auth, ControllerMain.AllNews );

Route.get('/News/:type/:slug',auth, ControllerMain.News );

module.exports = Route;