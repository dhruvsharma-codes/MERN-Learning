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
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    videoUrl: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
  });
  Posts.associate = (models) => {
    Posts.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "users",
    });
    Posts.hasMany(models.Comments, {
      foreignKey: "postId",
      as: "comments",
    });
  };
  return Posts;
};
