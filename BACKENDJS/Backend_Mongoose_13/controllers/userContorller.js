const User = require("../models/user.js");

const createUser = async (req, res) => {
try {
    const {username, email, password} = req.body;

    const user = await User.create({
        username,
        email, 
        password
    });
    res.status(201).json({
        success:true,
        message:"User created successsfully",
        data:user
    })
} catch (error) {
    res.status(500).json({
        success:true,
        message:error.message
    });
}
};
module.exports = { createUser };