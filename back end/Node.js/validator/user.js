const joi = require('@hapi/joi');


const Check = joi.object({
  name: joi.string().required(),
  email : joi.string().required().email(),
  password : joi.string()
  .pattern(new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$'))
  .message('Password must be >= 8 digits and contains lower, upper and number digits')
  .required()
})




module.exports = Check;