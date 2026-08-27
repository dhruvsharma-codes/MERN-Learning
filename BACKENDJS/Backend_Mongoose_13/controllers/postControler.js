const Post = require("../models/post.js");

const createPost = async (req, res) => {
try {
    const { title, description, userId } = req.body;

    const post = await Post.create({
        title,
        description, 
        user:userId
    });
    res.status(201).json({
        success:true,
        message:"Post created successsfully",
        data:post
    })
} catch (error) {
    res.status(500).json({
        success:true,
        message:error.message
    });
}
};

const getPost = async (req, res) => {
try {

    const post = await Post.find()
    .populate(
        {
            path:"user"
        }
    );

    res.status(201).json({
        success:true,
        message:"Post created successsfully",
        post
    })
} catch (error) {
    res.status(500).json({
        success:true,
        message:error.message
    });
}
};
module.exports = { createPost, getPost };