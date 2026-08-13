const express = require("express");
const app = express();

const userMiddleware = app.use((req,res,next)=>{
    console.log("Middleware Executed");
    console.log("Method:", req.method);
    console.log("Url:",req.url);
    next();
});

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Data feteched Successfully",
        status:true
    });
});

app.get("/test",(req,res)=>{
    res.status(200).json({
        message:"Test Api Running Successfully",
        status:true
    });
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});