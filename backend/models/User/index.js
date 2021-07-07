module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          logo: {
            type: DataTypes.STRING,
            allowNull: true
          },
          email: {
            type: DataTypes.STRING,
            allowNull: true
          },
          password: {
            type: DataTypes.STRING,
            allowNull: true
          },
          username: {
            type: DataTypes.STRING,
            allowNull: true
          }
    });
}