const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
    try {
        const { username, password, email, phone, dob } = req.body;

        const existingUser  = await User.findOne({ username });
        if (existingUser ) {
            return res.status(400).json({ message: "Username already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword, email, phone, dob });
        await user.save();

        res.status(201).json({ message: "User  registered successfully." });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};