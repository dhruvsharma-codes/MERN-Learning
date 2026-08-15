const User = require("../models/User");

// ADD USER
const addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            message: "User added successfully",
            status: true,
            user
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to add user",
            status: false,
            error: error.message
        });
    }
};


// GET ALL USERS
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).json({
            message: "Users fetched successfully",
            status: true,
            users
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch users",
            status: false,
            error: error.message
        });
    }
};


// UPDATE USER
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                status: false
            });
        }

        await user.update({
            name,
            email,
            password
        });

        res.status(200).json({
            message: "User updated successfully",
            status: true,
            user
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update user",
            status: false,
            error: error.message
        });
    }
};


// DELETE USER
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                status: false
            });
        }

        await user.destroy();

        res.status(200).json({
            message: "User deleted successfully",
            status: true
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete user",
            status: false,
            error: error.message
        });
    }
};


module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
};