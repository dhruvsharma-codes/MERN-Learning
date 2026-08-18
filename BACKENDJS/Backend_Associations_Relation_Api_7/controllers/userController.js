const { User, Company } = require("../models/index.js");

const testApi = (req, res) => {
  res.status(200).json({
    status: true,
    message: "Test Api Fetched Successfully",
  });
};

const createUser = async (req, res) => {
  try {
    const { name, email, companyId } = req.body;

    if (!name || !email || !companyId) {
      return res.status(400).json({
        status: false,
        message: "Name, email and companyId are required",
      });
    }

    const user = await User.create({
      name,
      email,
      companyId,
    });

    res.status(201).json({
      status: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Failed to create user",
      error: error.message,
    });
  }
};

const getCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll({
      include: {
        model: User,
        as: "users",
      },
    });
    res.status(200).json({
      status: true,
      message: "Companies fetched Successfully",
      data: companies,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Failed to fetch companies",
      error: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: {
        model: Company,
        as: "company",
      },
    });

    res.status(200).json({
      status: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};

module.exports = { testApi, getCompanies, getUsers, createUser };
