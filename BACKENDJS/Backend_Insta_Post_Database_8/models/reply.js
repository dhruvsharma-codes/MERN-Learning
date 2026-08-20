"use strict";

module.exports = (Sequelize, DataTypes) => {
  const Replies = Sequelize.define("Replies", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    replyText: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Comments",
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
  Replies.associate = (models) => {
    Replies.belongsTo(models.Comments, {
      foreignKey: "commentId",
      as: "comments",
    });
    Replies.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "users",
    });
  };
  return Replies;
};
