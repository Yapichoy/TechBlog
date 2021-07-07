const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("session", {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          ip_address: {
            type: DataTypes.STRING(16),
            allowNull: true
          },
          country: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          device_type: {
            type: DataTypes.STRING(50),
            allowNull: true
          }
    });
}