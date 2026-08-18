const express = require("express");
require("dotenv").config();
const app = express();
const sequelize = require("./config/database.js");
const { User, Company } = require("./models/index.js");
const router = require("./routes/userRoutes.js");
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", router);

const startServer = async () => {
  try {
    // await sequelize.authenticate();
    // console.log("Database Connected Successfully");

    // await sequelize.sync({force:true});
    // console.log("Tables Created Successfully");

    app.listen(PORT, () => {
      console.log(`Server is Running on Port ${PORT}`);
    });
  } catch (error) {
    console.log("Failed to Connect", error);
  }
};

startServer();
