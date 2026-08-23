const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController.js");

router.post("/user/registerUser", registerUser);
router.post("/user/loginUser", loginUser);

module.exports = router;
