const express = require("express");
require("dotenv").config();
const app = express();
const sequelize = require("./config/database.js");
const router = require("./routes/userRoute.js");
require("./models/userModel.js");
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api", router);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connected Successfully");

    await sequelize.sync();
    console.log("Tables Created Successfully");

    app.listen(PORT, () => {
      console.log(`Server is Running on Port ${PORT}`);
    });
  } catch (error) {
    console.log("Database Connection Failed", error);
  }
};
startServer();
