module.exports = (sequelize, DataTypes) => {
    return sequelize.define("quotes", {
        quote_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          logo: {
            type: DataTypes.STRING,
            allowNull: true
          },
          header: {
            type: DataTypes.STRING,
            allowNull: true
          },
          click_url: {
            type: DataTypes.STRING,
            allowNull: true
          },
          list: {
            type: DataTypes.TEXT,
            get() {
                return JSON.parse(this.getDataValue('list'));
            },
            set(value) {
                this.setDataValue('list', JSON.stringify(value));
            },
          }
    });
}