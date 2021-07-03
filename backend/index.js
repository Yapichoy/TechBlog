const db  = require('./models');
require('dotenv').config();
const express = require('express')
const app = express();
const port = process.env.SERVER_PORT;
const { general, search, api } =  require('./router');
var device = require('express-device');
const cookieParser = require('cookie-parser')
const middleware = require('./middleware');
const Session = db.session;

async function connect (){
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
app.use(cookieParser(process.env.SECRET_KEY));
app.use(device.capture());
app.use(middleware.track);
app.use('/', general);
app.use('/search', search);
app.use('/api', api);

db.sequelize.sync().then(()=>{
  app.listen(port, function(){
    console.log("Сервер ожидает подключения...");
  });
}).catch(err=>console.log(err));