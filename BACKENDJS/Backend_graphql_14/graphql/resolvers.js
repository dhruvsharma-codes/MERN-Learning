const bcrypt = require("bcryptjs");

const { User } = require("../models");
const generateToken = require("../utils/generateToken");

const resolvers = {
  Query: {
    _empty: () => {
      return "GraphQL API";
    },
  },

  Mutation: {
    register: async (_, args) => {
      try {
        const { name, email, password } = args;

        // 1. Validate name
        if (!name || name.trim().length < 2) {
          throw new Error("Name must be at least 2 characters");
        }

        // 2. Validate password
        if (password.length < 6) {
          throw new Error("Password must be at least 6 characters");
        }

        // 3. Normalize email
        const normalizedEmail = email.trim().toLowerCase();

        // 4. Check existing user
        const existingUser = await User.findOne({
          where: {
            email: normalizedEmail,
          },
        });

        if (existingUser) {
          throw new Error("User with this email already exists");
        }

        // 5. Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // 6. Create user
        const user = await User.create({
          name: name.trim(),
          email: normalizedEmail,
          password: hashedPassword,
        });

        // 7. Generate JWT
        const token = generateToken(user);

        // 8. Return response
        return {
          token,
          user,
        };
      } catch (error) {
        console.error("Register Error:", error);

        throw new Error(error.message);
      }
    },

    login: async (_, args) => {
      try {
        const { email, password } = args;

        // 1. Validate input
        if (!email || !password) {
          throw new Error("Email and password are required");
        }

        // 2. Normalize email
        const normalizedEmail = email.trim().toLowerCase();

        // 3. Find user
        const user = await User.findOne({
          where: {
            email: normalizedEmail,
          },
        });

        // Don't reveal whether email exists
        if (!user) {
          throw new Error("Invalid email or password");
        }

        // 4. Compare password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
          throw new Error("Invalid email or password");
        }

        // 5. Generate JWT
        const token = generateToken(user);

        // 6. Return response
        return {
          token,
          user,
        };
      } catch (error) {
        console.error("Login Error:", error);

        throw new Error(error.message);
      }
    },
  },
};

module.exports = resolvers;
