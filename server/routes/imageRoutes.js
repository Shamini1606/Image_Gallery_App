// routes/imageRoutes.js

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
router.post("/", verifyToken, upload.single("image"), uploadImage); // Ensure verifyToken is used
router.get("/", verifyToken, getImages);
router.delete("/:id", verifyToken, deleteImage);

const Image = require("./models/Image"); // Assuming you have an Image model
// GET /api/images
router.get("/images", async (req, res) => {
  try {
    const images = await Image.find(); // Fetch images from the database
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
