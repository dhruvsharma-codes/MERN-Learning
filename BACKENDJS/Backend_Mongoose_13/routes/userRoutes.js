const express = require("express");
const { createUser } = require("../controllers/userContorller.js");
const router = express.Router();

router.post("/user/create-user", createUser);
module.exports = router;
