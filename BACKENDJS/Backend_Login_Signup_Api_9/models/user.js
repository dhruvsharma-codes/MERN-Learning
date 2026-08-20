"use strict";

module.exports = ( Sequelize, DataTypes ) => {
    const Users = Sequelize.define("Users",{
        id : {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        username : {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        email : {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        password : {
            type : DataTypes.STRING(255),
            allowNull: false,
        },
    });
    return Users;
}