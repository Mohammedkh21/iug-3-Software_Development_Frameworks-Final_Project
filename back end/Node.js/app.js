const express = require('express');
const Routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

Routes(app);







module.exports = app;
