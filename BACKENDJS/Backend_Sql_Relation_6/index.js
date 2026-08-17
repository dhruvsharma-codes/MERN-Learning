const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

const sequelize = require("./config/database.js");

const { User, Company } = require("./models/index.js");

app.use(express.json());

app.get("/api/getcompanies", async (req, res) => {
  try {
    const companies = await Company.findAll({
      include: {
        model: User,
        as: "users",
      },
    });
    res.status(200).json({
      message: "Users fetched successfully",
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
