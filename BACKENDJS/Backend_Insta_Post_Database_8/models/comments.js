"use strict";

module.exports = (Sequelize, DataTypes) => {
  const Comments = Sequelize.define("Comments", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    commentText: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Posts",
        key: "id",
      },
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

  Comments.associate = (models) => {
    Comments.belongsTo(models.Posts, {
      foreignKey: "postId",
      as: "posts",
    });
    Comments.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "users",
    });
    Comments.hasMany(models.Replies, {
      foreignKey: "commentId",
      as: "replies",
    });
  };
  return Comments;
};
