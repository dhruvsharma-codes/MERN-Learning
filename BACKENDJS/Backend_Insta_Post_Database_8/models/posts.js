"use strict";

module.exports = (Sequelize, DataTypes) => {
  const Posts = Sequelize.define("Posts", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    caption: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.String,
      allowNull: false,
    },
    videoUrl: {
      type: DataTypes.String,
      allowNull,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Posts;
};
