const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  dialect: "mysql",
  host: process.env.DB_HOST
});

let db = {};

db.Session = require(__dirname + "/Session/session.js")(sequelize, DataTypes);
db.Quotes = require(__dirname + "/Quotes")(sequelize, DataTypes);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;