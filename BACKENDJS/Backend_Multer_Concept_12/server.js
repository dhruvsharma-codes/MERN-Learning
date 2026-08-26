const express = require("express");
const router = require("./router/multerRouter.js");
const app = express();
app.use(express.json());

// routes for multer
app.use("/multer",router);

app.listen(5000, () => {
    console.log("Server is running");
});