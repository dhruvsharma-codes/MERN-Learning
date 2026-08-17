const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("backend_sql_relation", "root", "",{
    host:"localhost",
    dialect:"mysql",
    logging:console.log
});

module.exports = sequelize;