const express = require("express");
const { createPost, getPost } = require("../controllers/postControler.js");
const postRouter = express.Router();

postRouter.post("/user/create-post", createPost);
postRouter.get("/user/get-post", getPost);
module.exports = postRouter;
