const express = require("express");

const router = express.Router();

const {
    addUser,
    getUsers,
    updateUser,
    deleteUser
} = require("../controllers/userController");


// CREATE
router.post("/api/user", addUser);

// READ
router.get("/api/user", getUsers);

// UPDATE
router.put("/api/user/:id", updateUser);

// DELETE
router.delete("/api/user/:id", deleteUser);


module.exports = router;