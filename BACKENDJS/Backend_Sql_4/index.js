const express = require("express");
const sequelize = require("./config/database");
const User = require("./models/User");
const userRouter = require("./routes/userRoutes");


const app = express();

app.use(express.json());

app.use("/", userRouter);

const PORT = 5000;

const startServer = async () => {
    try {
        await sequelize.authenticate();

        console.log("Database Connected Successfully");

        await sequelize.sync();

        console.log("Tables Created Successfully");

        app.listen(PORT, () => {
            console.log(`Server is Running on PORT ${PORT}`);
        });

    } catch (error) {
        console.log("Database Connection Failed:", error);
    }
};

startServer();