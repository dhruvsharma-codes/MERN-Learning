const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

const sequelize = require("./config/database.js");

const { User, Company, CompanyProfile } = require("./models/index.js");

app.use(express.json());

// company -> users hasMany()
app.get("/api/getcompanies", async (req, res) => {
  try {
    const companies = await Company.findAll({
      include: {
        model: User,
        as: "users",
      },
    });
    res.status(200).json({
      message: "Companies fetched successfully",
      status: true,
      data: companies,
    });
  } catch (error) {
    res.status(500).json({
      message: "Users fetched failed",
      status: false,
      error: error.message,
    });
  }
});

// company -> company Profile hasOne()
app.get("/api/getcompaniesprofile", async (req, res) => {
  try {
    const companies = await Company.findAll({
      include: {
        model: CompanyProfile,
        as: "profile",
      },
    });
    res.status(200).json({
      message: "Comapnies Profile fetched successfully",
      status: true,
      data: companies,
    });
  } catch (error) {
    res.status(500).json({
      message: "Users fetched failed",
      status: false,
      error: error.message,
    });
  }
});

// user -> company belongsTo()
app.get("/api/getusers", async (req, res) => {
  try {
    const users = await User.findAll({
      include: {
        model: Company,
        as: "company",
      },
    });

    res.status(200).json({
      message: "Users fetched successfully",
      status: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Users fetched failed",
      status: false,
      error: error.message,
    });
  }
});

// Profile -> Company belongsTo()
app.get("/api/getprofiles", async (req, res) => {
  try {
    const profiles = await CompanyProfile.findAll({
      include: {
        model: Company,
        as: "company",
      },
    });

    res.status(200).json({
      message: "Profiles fetched successfully",
      status: true,
      data: profiles,
    });
  } catch (error) {
    res.status(500).json({
      message: "Profiles fetched failed",
      status: false,
      error: error.message,
    });
  }
});

// Start Server
const startServer = async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Database Connected Successfully");

    await sequelize.sync();
    console.log("Tables Created Successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Database Connection Failed:", error);
  }
};

startServer();
