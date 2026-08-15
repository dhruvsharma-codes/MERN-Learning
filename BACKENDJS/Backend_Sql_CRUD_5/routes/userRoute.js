const express = require("express");
const router = express.Router();
const userMiddleware = require("../middlewares/userMiddleware.js");
const {
  getTest,
  createUser,
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers/userController.js");

// test user
router.get("/user/test", userMiddleware, getTest);
// create user
router.post("/user/add", userMiddleware, createUser);
// fetch users
router.get("/user/getusers", userMiddleware, getUsers);
// delete user
router.delete("/user/delete/:id", userMiddleware, deleteUser);
// update user
router.put("/user/update/:id", userMiddleware, updateUser);

module.exports = router;
