const User = require("../models/userModel.js");

// test api
const getTest = (req, res) => {
  res.status(200).json({
    message: "Test Api created Successfully",
    status: true,
  });
};

// add user
const createUser = async (req, res) => {
  try {
    const { name, email, password, age } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      age,
    });
    res.status(201).json({
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// get all user
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      message: "Users Fetched Successfully",
      status: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      status: false,
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        status: false,
      });
    }
    await user.destroy();
    res.status(200).json({
      message: "User deleted successfully",
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "failed to delete user",
      status: false,
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, age } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        status: false,
      });
    }
    await user.update({
      name,
      email,
      password,
      age,
    });
    res.status(200).json({
      message: "User updated successfully",
      status: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update user",
      status: false,
      error: error.message,
    });
  }
};

module.exports = { getTest, createUser, getUsers, deleteUser, updateUser };
