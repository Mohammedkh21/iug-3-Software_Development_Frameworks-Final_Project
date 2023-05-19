const { dbConnection } = require("../config");
const { userValidator } = require("../validator");
const { hashSync, compareSync } = require('bcryptjs')
const createError = require("http-errors");
const { error } = require("../validator/user");

class User {
  constructor(userData) {
    this.userData = userData;
  }

  save(cb) {
    
    dbConnection("users", async (db) => {
      try{
        this.userData.password = hashSync(this.userData.password)
        await db.insertOne(this.userData).then((result) => {
          cb({
            status: true,
          });
        });
      }catch (err) {
        cb({
            status: false,
            message: err.message
        })
      }
      
    });
    
  }

  static validate(userData) {
    try {
      return userValidator.validate(userData);
    } catch (err) {
      return false;
    }
  }

  isExist() {
    return new Promise((resolve, reject) => {
      try { 
        dbConnection("users", async (db) => {
          const user = await db.findOne({
            '$or': [
                {name: this.userData.name},
                {email: this.userData.email}
            ]
          })
          
          if (user) {
            if (user.name === this.userData.name) {
              resolve({
                check: true,
                message: "The name is already used",
              });
            }
            if (user.email === this.userData.email) {
              resolve({
                check: true,
                message: "The email is already used",
              });
            }
          } else {
            resolve({
              check: false,
            });
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  }


  static login(loginData){
    return new Promise((resolve , reject)=>{
      
      // const validation = userValidator.validate(loginData);
      // if(validation.error){ 
      //   const error = new Error(validation.error.message)
      //   error.status = 400 
      //   return resolve(error); 
      // }
      
      dbConnection('users',async (users)=>{
        try{
          const user = await users.findOne({email:loginData.email}); 
          if(user && compareSync( loginData.password ,user.password )){
            resolve(user)
          }else{
            resolve({
              status : false,
              message : "user not found"
            }) 
          }
        }catch(err){
          reject(err)
        }
        
      })
      
    })
    
    

    


  }









}

module.exports = User;

// const u = new User({
//   name: "ali2",
//   email: "ali2@gmail.com",
//   password: "wwWW2434trg45g",
// });
