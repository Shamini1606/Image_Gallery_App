// imageRoutes.js

const express = require("express");
const {
  uploadImage,
  getImages,
  deleteImage,
} = require("../controllers/imageController");
const { verifyToken } = require("../middleware/authMiddleware");
const multer = require("multer");
const path = require("path");

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files to the uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use a timestamp as the filename
  },
});

const upload = multer({ storage: storage });
const router = express.Router();

// Image upload route
router.post("/", verifyToken, upload.single("image"), uploadImage); // Use the uploadImage controller
router.get("/", verifyToken, getImages);
router.delete("/:id", verifyToken, deleteImage);

module.exports = router;
 