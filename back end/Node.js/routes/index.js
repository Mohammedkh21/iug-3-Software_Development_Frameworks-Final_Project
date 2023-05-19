const RouteMain = require('./Main');
const RouteUser = require('./User');

module.exports = (app)=>{


  app.use('/',RouteMain);
  app.use('/auth',RouteUser);
  
}