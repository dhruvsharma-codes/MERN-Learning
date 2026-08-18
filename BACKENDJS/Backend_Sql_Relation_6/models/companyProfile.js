const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const CompanyProfile = sequelize.define("companyProfile",{

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },

    description: {
        type: DataTypes.TEXT
    },

    website: {
        type: DataTypes.STRING
    }
});

module.exports = CompanyProfile;