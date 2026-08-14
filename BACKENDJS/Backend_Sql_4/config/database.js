const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "training_backend_db_1",       
    "root",          
    "", 
    {
        host: "localhost",
        dialect: "mysql",
        logging: console.log
    }
);

module.exports = sequelize;