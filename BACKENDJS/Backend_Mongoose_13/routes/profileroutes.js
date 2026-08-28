const express = require("express");
const { createProfile } = require("../controllers/userProfileController.js");
const profileRouter = express.Router();

profileRouter.post("/user/create-profile", createProfile);
// postRouter.get("/user/get-post", getPost);
module.exports = profileRouter;
