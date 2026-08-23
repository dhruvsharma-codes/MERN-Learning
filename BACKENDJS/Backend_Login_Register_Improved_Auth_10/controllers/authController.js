const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER USER API
const registerUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;

    // checking all required fields
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // removing whitespaces and making email in lowecase for security purpose
    username = username.trim();
    email = email.trim().toLowerCase();

    // checking passowrd length
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be atleast 8 characters",
      });
    }

    // checking if email is already registered
    const existingEmail = await User.findOne({
      where: { email },
    });

    if (existingEmail) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }

    // checking if username is already registered
    const existingUsername = await User.findOne({
      where: { username },
    });

    if (existingUsername) {
      return res.status(409).json({
        success: false,
        message: "Username already exists",
      });
    }

    // used bcrypt to protect passsword
    const hashedPassword = await bcrypt.hash(password, 12);

    // created user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("Register Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// LOGIN USER API
const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    email = email.trim().toLowerCase();

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or password",
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Account is disabled",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or passowrd",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      },
    );

    return res.status(200).json({
      success: true,
      message: "Login successfull",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { registerUser, loginUser };
