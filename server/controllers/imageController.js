const Image = require('../models/Image');

exports.uploadImage = async (req, res) => {
    try {
        const { title, description } = req.body;
        const imageUrl = req.file.path; // Ensure this is the correct path
        const image = new Image({ title, description, imageUrl, userId: req.user.id });
        await image.save();
        res.status(201).json(image);
    } catch (error) {
        console.error("Error uploading image:", error);
        res.status(500).json({ message: "Failed to upload image." });
    }
};

exports.getImages = async (req, res) => {
    try {
        const images = await Image.find({ userId: req.user.id });
        res.json(images);
    } catch (error) {
        console.error("Error fetching images:", error);
        res.status(500).json({ message: "Failed to fetch images." });
    }
};

exports.deleteImage = async (req, res) => {
    try {
        const { id } = req.params;
        await Image.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting image:", error);
        res.status(500).json({ message: "Failed to delete image." });
    }
};