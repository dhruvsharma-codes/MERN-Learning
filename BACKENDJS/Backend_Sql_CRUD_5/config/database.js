const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("backend_sql_crud", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
});
module.exports = sequelize;
