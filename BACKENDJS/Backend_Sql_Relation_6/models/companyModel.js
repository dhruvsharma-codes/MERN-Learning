const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const Company = sequelize.define("Company", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Company;
