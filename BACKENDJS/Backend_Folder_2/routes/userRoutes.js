const express = require("express");
const router = express.Router();

const UserMiddleware = require("../middlewares/userMiddleware.js");
const {getHome,getTest} = require("../controllers/userController.js")

router.get("/api/user/", UserMiddleware, getHome);
router.get("/api/user/test", UserMiddleware, getTest);

module.exports = router;