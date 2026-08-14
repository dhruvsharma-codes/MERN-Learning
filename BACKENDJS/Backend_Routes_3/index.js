const express = require("express");
const app = express();
require("dotenv").config();
const userRouter = require("./routes/userRoutes.js");

app.use(express.json());

const PORT = process.env.PORT;

app.use("/api", userRouter);

app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`);
});