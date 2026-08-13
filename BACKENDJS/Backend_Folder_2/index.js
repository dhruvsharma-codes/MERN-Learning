const express = require("express");
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/userRoutes.js")

app.use(express.json());
const PORT = process.env.PORT;
console.log(PORT);

app.use("/",userRoutes);

app.listen(PORT,()=>{
    console.log(`Server is Running on Port ${process.env.PORT}`);
});