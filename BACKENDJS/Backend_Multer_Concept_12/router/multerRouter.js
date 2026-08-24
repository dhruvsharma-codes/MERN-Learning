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
module.exports = router;