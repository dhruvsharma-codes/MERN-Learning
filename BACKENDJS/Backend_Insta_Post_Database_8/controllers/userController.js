const {
  Users,
  userProfile,
  Posts,
  Comments,
  Replies,
} = require("../models/index.js");

// Test API
const testApi = async (req, res) => {
  res.status(200).json({
    status: true,
    message: "Api Executed Successfully",
  });
};

// Create User API
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        status: false,
        message: "username, email and password is required",
      });
    }
    const user = await Users.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      status: true,
      message: "User Created Successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "failed to Create User",
      error: error.message,
    });
  }
};

// Create User Profile API
const createUserProfile = async (req, res) => {
  try {
    const { fullName, bio, profileImage, gender, dateOfBirth, userId } = req.body;
    if ( !userId || !fullName || !profileImage || !gender || !dateOfBirth) {
      return res.status(400).json({
        status: false,
        message: "fullName, profileImage, dateOfBirth and gender is required",
      });
    }
    const userprofile = await userProfile.create({
      fullName,
      bio,
      profileImage,
      gender,
      dateOfBirth,
      userId
    });
    res.status(201).json({
      status: true,
      message: "UserProfile Created Successfully",
      data: userprofile,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "failed to Create UserProfile",
      error: error.message,
    });
  }
};

// Create User Posts API
const createUserPosts = async (req, res) => {
  try {
    const { caption, imageUrl, videoUrl, userId } = req.body;
    if (!caption || !imageUrl || !videoUrl || !userId) {
      return res.status(400).json({
        status: false,
        message: "caption, userId, and imageUrl is required",
      });
    }
    const posts = await Posts.create({
      caption,
      imageUrl,
      videoUrl,
      userId
    });
    res.status(201).json({
      status: true,
      message: "User Post Created Successfully",
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "failed to Create User Post",
      error: error.message,
    });
  }
};

// Create User Comments API
const createUserComments = async (req, res) => {
  try {
    const { commentText, userId, postId } = req.body;
    if (!commentText || !userId || !postId) {
      return res.status(400).json({
        status: false,
        message: "comment, userId and postId is required",
      });
    }
    const comments = await Comments.create({
      commentText,
      userId,
      postId
    });
    res.status(201).json({
      status: true,
      message: "Comment Created Successfully",
      data: comments,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "failed to Create Comment",
      error: error.message,
    });
  }
};

// Create Replies API
const createReplies = async (req, res) => {
  try {
    const { replyText, userId,commentId } = req.body;
    if (!replyText || !userId || !commentId) {
      return res.status(400).json({
        status: false,
        message: "reply, userId and commentId is required",
      });
    }
    const replies = await Replies.create({
      replyText,
      userId,
      commentId
    });
    res.status(201).json({
      status: true,
      message: "replies Created Successfully",
      data: replies,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "failed to Create Replies",
      error: error.message,
    });
  }
};
module.exports = { testApi, createUser, createUserPosts, createUserProfile, createUserComments, createReplies };