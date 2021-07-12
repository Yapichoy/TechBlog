const {STATUS} = require('../../helpers/Constants')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("meta", {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          name: {
            type: DataTypes.STRING(30),
            allowNull: true
          },
          slug: {
            type: DataTypes.STRING(30),
            allowNull: true
          },
          status: {
            type: DataTypes.INTEGER(2),
            defaultValue: STATUS.ACTIVE
          }
    });
}