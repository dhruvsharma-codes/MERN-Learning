const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const { sequelize } = require("./models")
const authRoutes = require("./routes/authRoutes.js");
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api",authRoutes);

const PORT = process.env.PORT;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log("Failed to connect database.", error.message);
        process.exit(1);
        
    }
};
startServer();