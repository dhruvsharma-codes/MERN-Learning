const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const router = require("./routes/userAuthenticateRoutes.js");
const PORT = process.env.PORT;


app.use("/api",router);

app.listen(PORT, () => {
  try {
    console.log(`Server is Running on Port ${PORT}`);
  } catch (error) {
    console.log("Failed to Load Server", error);
  }
});
