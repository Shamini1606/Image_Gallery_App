// imageController.js


const Image = require('../models/Image');

exports.uploadImage = async (req, res) => {
    const { title, description } = req.body;
    const imageUrl = req.file.path; // Assuming you are using multer to handle file uploads
    const image = new Image({ title, description, imageUrl, userId: req.user.id });
    await image.save();
    res.status(201).json(image);
};

exports.getImages = async (req, res) => {
    const images = await Image.find({ userId: req.user.id });
    res.json(images);
};

exports.deleteImage = async (req, res) => {
    const { id } = req.params;
    await Image.findByIdAndDelete(id);
    res.status(204).send();
};