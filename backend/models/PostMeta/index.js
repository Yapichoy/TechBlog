const {STATUS} = require('../../helpers/Constants')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("postmeta", {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          }
    }, {timestamps: false});
}