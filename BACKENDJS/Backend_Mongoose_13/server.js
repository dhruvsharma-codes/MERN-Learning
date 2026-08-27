const express = require("express");
require("dotenv").config();
const connectDb = require("./config/db.js");
const router = require("./routes/userRoutes.js");
const postRouter = require("./routes/postRoutes.js");
const app = express();
app.use(express.json());
connectDb();
const PORT = process.env.PORT

app.use("/api",router);
app.use("/api",postRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});