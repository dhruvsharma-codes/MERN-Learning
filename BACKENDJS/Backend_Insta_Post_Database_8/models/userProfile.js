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
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique:true,
      references: {
        model: "Users",
        key: "id",
      },
    },
  });
  userProfile.associate = (models) => {
    userProfile.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "users",
    });
  };
  return userProfile;
};
