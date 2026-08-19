"use strict";

module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      alowwNull: false,
    },
    username: {
      type: DataTypes.String(200),
      alowwNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.String(200),
      unique: true,
      alowwNull: false,
    },
    password: {
      type: DataTypes.String(16),
      alowwNull: false,
    },
  });
  return User;
};
