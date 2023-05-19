const { Router } = require('express');
const { ControllerAuth } = require('../controller')

const Route = Router();

Route.post('/signup', ControllerAuth.signup );

Route.post('/login', ControllerAuth.login );




module.exports = Route;