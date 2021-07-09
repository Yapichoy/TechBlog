module.exports = (sequelize, DataTypes) => {
    return sequelize.define("upload", {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          full_path: {
            type: DataTypes.STRING,
            allowNull: true
          },
          path: {
            type: DataTypes.STRING,
            allowNull: true
          },
          type: {
            type: DataTypes.INTEGER(2).UNSIGNED,
            allowNull: true
          },
          name: {
            type: DataTypes.STRING,
            allowNull: true
          }
    });
}