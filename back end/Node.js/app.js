const express = require('express');
const Routes = require('./routes');
const cors = require('cors');
const Error = require('http-errors');
const middleware = require('./middleware')
const {dbConnection} = require('./config')

const app = express();



middleware(app);

app.use(cors());

Routes(app);




app.use((req,res,next)=>{
  next(Error(404));
})

app.use((err,req,res,next)=>{
  res.json({
    status : err.statusCode,
    message : err.message
  })
});









module.exports = app;
