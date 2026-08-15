const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Name is required",
      },
      len: {
        args: [3, 100],
        msg: "Name must be between 3 and 100 characters",
      },
    },
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: {
      msg: "Email already exists",
    },
    validate: {
      isEmail: {
        msg: "Please provide a valid email",
      },
    },
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      len: {
        args: [6, 255],
        msg: "Password must be at least 6 characters",
      },
    },
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: {
        args: [18],
        msg: "Age must be at least 18",
      },
    },
  },
});

module.exports = User;
