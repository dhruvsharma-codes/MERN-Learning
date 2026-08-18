const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const Company = sequelize.define("Company", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  companyName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});
module.exports = Company;
