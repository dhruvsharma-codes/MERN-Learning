const express = require("express");
const router = express.Router();
const userTestMiddleware = require("../middleware/userTestMiddleware.js");
const { testUser } = require("../controllers/testUserController.js");
const { registerUser, loginUser } = require("../controllers/userAuthenticateController.js");

router.get("/user/test", userTestMiddleware, testUser);
router.post("/user/register", registerUser);
router.post("/user/login", loginUser);

module.exports = router;
