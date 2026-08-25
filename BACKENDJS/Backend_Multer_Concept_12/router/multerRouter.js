const express = require("express");
const router = express.Router();
const {
  upload,
  uploadErrorHandler,
} = require("../middlewares/uploadMiddleware.js");

router.post(
  "/upload",
  upload.single("image"),
  uploadErrorHandler,
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required.",
      });
    }

    res.status(201).json({
      success: true,
      message: "Image uploaded successfully.",
      file: req.file,
    });
  },
);

router.post(
  "/posts",
  upload.array("image", 5),
  uploadErrorHandler,
  (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one image is required.",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Images upload successfully",
      files: req.files,
    });
  },
);
module.exports = router;
