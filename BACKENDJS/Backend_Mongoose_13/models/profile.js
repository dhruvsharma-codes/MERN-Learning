const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    profileImage: {
      type: String,
      default: null,
    },

    bio: {
      type: String,
      default: "",
      maxlength: 150,
    },

    location: {
      type: String,
      default: "",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const profile = mongoose.model("profile",profileSchema);
module.exports = profile;