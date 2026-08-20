const { Users } = require("../models/index.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Signup API
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!email || !username || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required",
      });
    }

    const existingUser = await Users.findOne({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email Already Exists",
      });
    }

    const existingUsername = await Users.findOne({
      where: { username },
    });

    if (existingUsername) {
      return res.status(409).json({
        success: false,
        message: "Username Already Exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Users.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      success: true,
      message: "User registered Successfully",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password is required",
      });
    }

    const user = await Users.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1d",
      },
    );

    res.status(200).json({
      success: true,
      message: "Login Successfull",
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
module.exports = { registerUser, loginUser };
