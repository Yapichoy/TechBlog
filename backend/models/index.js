const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  dialect: "mysql",
  host: process.env.DB_HOST
});


const Session = require(__dirname + "/Session")(sequelize, DataTypes);
const User = require(__dirname + "/User")(sequelize, DataTypes);
const Post = require(__dirname + "/Post")(sequelize, DataTypes);
const Commentarie = require(__dirname + "/Commentarie")(sequelize, DataTypes);
const Upload = require(__dirname + "/Upload")(sequelize, DataTypes);
const Meta = require(__dirname + "/Meta")(sequelize, DataTypes);
const PostMeta = require(__dirname + "/PostMeta")(sequelize, DataTypes);

User.hasMany(Post);
User.hasMany(Commentarie);
Post.hasMany(Commentarie);

Post.belongsToMany(Meta, {through: PostMeta})
Meta.belongsToMany(Post, {through: PostMeta})

module.exports = {
  sequelize,
  Sequelize,
  Session,
  User,
  Post,
  Commentarie,
  Upload,
  Meta,
  PostMeta,
};