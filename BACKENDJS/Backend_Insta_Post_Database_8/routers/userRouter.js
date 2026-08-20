const express = require("express");
const router = express.Router();
const { testApi, createUser, createUserProfile, createUserPosts, createUserComments, createReplies } = require("../controllers/userController.js");
const userMiddleware = require("../middleware/userMiddleware.js");

router.get("/test", userMiddleware, testApi);
router.post("/createUser", userMiddleware, createUser);
router.post("/createUserProfile", userMiddleware, createUserProfile);
router.post("/createUserPosts", userMiddleware, createUserPosts);
router.post("/createUserComments", userMiddleware, createUserComments);
router.post("/createReplies", userMiddleware, createReplies);

module.exports = router;