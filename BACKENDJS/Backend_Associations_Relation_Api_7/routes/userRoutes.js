const express = require("express");
const router = express.Router();
const userMiddleware = require("../middleware/userMiddleware.js");
const {
  testApi,
  getCompanies,
  getUsers,
  createUser,
} = require("../controllers/userController.js");
const { createCompany } = require("../controllers/companyController.js");

router.get("/user/test", userMiddleware, testApi);
router.get("/companies", userMiddleware, getCompanies);
router.get("/users", userMiddleware, getUsers);
router.post("/createCompany", createCompany);
router.post("/createUser", createUser);
module.exports = router;
