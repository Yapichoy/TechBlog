const {STATUS} = require('../../helpers/Constants')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("post", {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          preview: {
            type: DataTypes.STRING,
            allowNull: true
          },
          title: {
            type: DataTypes.STRING,
            allowNull: true
          },
          description: {
            type: DataTypes.TEXT('tiny'),
            allowNull: true
          },
          text: {
            type: DataTypes.TEXT('long'),
            allowNull: true
          },
          likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
          },
          status: {
            type: DataTypes.INTEGER,
            defaultValue: STATUS.DRAFT
          }
    });
}