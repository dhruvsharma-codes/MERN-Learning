"use strict";

module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      alowwNull: false,
    },
    username: {
      type: DataTypes.STRING(200),
      alowwNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(200),
      unique: true,
      alowwNull: false,
    },
    password: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
  });
  User.associate = (models) => {
    User.hasOne(models.userProfile, {
      foreignKey: "userId",
      as: "profile",
    });
    User.hasMany(models.Posts, {
      foreignKey: "userId",
      as: "posts",
    });
    User.hasMany(models.Comments, {
      foreignKey: "userId",
      as: "comments",
    });
    User.hasMany(models.Replies, {
      foreignKey: "userId",
      as: "replies",
    });
  };
  return User;
};
