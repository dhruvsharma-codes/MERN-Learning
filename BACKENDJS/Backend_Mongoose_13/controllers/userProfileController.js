const userProfile = require("../models/userProfile.js");

const createProfile = async (req, res) => {
    try {
        const {fullName, email, bio, profileImage, userId} = req.body;

        const userprofile = await userProfile.create({
            fullName,
            email,
            bio,
            profileImage,
            user:userId
        });
        res.status(201).json({
            success:true,
            message:"Profile created",
            data:userprofile
        })
    } catch (error) {
         res.status(500).json({
        success:true,
        message:error.message
    });
    }
}
module.exports = {createProfile};