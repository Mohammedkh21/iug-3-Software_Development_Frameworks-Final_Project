const { User } = require('../model')
const createError = require('http-errors')

const signup = (req,res,next)=>{
  
  const userData = req.body;
  console.log(userData);
  const validation = User.validate(userData)
  if (validation.error) {
    const error = createError(400, validation.error.message)
    return next(error)
  }
  
  const user = new User(userData);
  
  user.isExist().then((result)=>{
    if(result.check){
      return next(createError(409,result.message)) 
    }
    user.save((cb)=>{
      if(cb){ 
        res.json({
          status:true,
          message : "added"
        })
        
      }else{
        createError(500,cb.message)
      }
    });


  }).catch((err)=>{
    next(createError(500,err.message))
  })
}

const login = (req,res,next)=>{
  User.login(req.body).
    then(result => { 
      if (result instanceof Error) {
          return  next(createError(result.status, result.message))
      }
      res.json(result)
    })
    .catch(err => {
        next(createError(err.statusCode, err.message))
    })
  
}

module.exports = {
  signup,
  login

}