const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const router = require("./routers/userRouter.js");
const PORT = process.env.PORT;

app.use("/api/user",router);

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
});