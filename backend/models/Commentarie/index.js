module.exports = (sequelize, DataTypes) => {
    return sequelize.define("commentarie", {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          commentarie: {
            type: DataTypes.TEXT,
            allowNull: true
          }
    });
}