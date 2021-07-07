const db  = require('./models');
require('dotenv').config();
const express = require('express')
const app = express();
const port = process.env.SERVER_PORT;
const { general, admin, api } =  require('./router');
var device = require('express-device');
const cookieParser = require('cookie-parser')
const middleware = require('./middleware');
const fileUpload = require('express-fileupload');

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

app.use(fileUpload());

app.set("view engine", "pug");
app.use(express.static(__dirname + '/public'));

app.use('/', general);
app.use('/admin', admin);
app.use('/api', api);

db.sequelize.sync({force: false}).then(()=>{
    app.listen(port, function(){
    console.log("Сервер ожидает подключения...", port);
  });
}).catch(err=>console.log(err));

