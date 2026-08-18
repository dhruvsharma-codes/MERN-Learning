const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("backend_association_api", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
});
module.exports = sequelize;
