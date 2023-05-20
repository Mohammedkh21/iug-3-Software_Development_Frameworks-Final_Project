const express = require('express')
const createError = require('http-errors')
const jwt = require('jsonwebtoken')


module.exports = {
  global : (app)=>{
    // app.use((req, res, next) => {
    //   next();
    // })
  
    app.use(express.json());
  },

  auth : (req, res, next) => {
    const authHeader = req.get('Authorization');

    if (!authHeader) {
        return next(createError(401))
    }

    const token = authHeader
    const SECRET_KEY = "74108520";
    try {
        const decode = jwt.verify(token, SECRET_KEY)
        req.auth = decode
        next()
    } catch (err) {
        return next(createError(401))
    }
  }
}













