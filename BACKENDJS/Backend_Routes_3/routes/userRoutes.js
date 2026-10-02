const express = require("express");
const router = express.Router();

const userMiddleware = require("../middleware/userMiddleware.js");
const { getHome,getUser } = require("../controllers/userController.js");

router.get("/user", userMiddleware, getHome);
router.get("/user/test", userMiddleware, getUser);

module.exports = router;
