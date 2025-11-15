import express from "express";
import bcrypt from "bcrypt";
import User from "../models/user.js";

const router = express.Router();

// Registration Route
router.post("/register", async (req, res) => {
  const { email, password, gstNumber, cinNumber, employeeCount } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email already registered. Please sign in instead." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      gstNumber,
      cinNumber,
      employeeCount,
    });

    await newUser.save();
    res
      .status(201)
      .json({ message: "Registration successful.", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Sign-In Route
router.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "No user found with this email. Please register." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Incorrect password. Please try again." });
    }

    res.status(200).json({ message: "Sign-in successful.", user });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

export default router;
