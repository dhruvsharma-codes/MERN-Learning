"use strict";

module.exports = (Sequelize, DataTypes) => {
  const userProfile = Sequelize.define("userProfile", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.String(200),
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.String,
      allowNull: false,
    },
    website: {
      type: DataTypes.String(100),
      allowNull: false,
    },
    gender: {
      type: DataTypes.String(10),
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return userProfile;
};
