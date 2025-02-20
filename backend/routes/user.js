import express from 'express';
import { User, validate } from "../models/user.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        // Validate Request Body
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Check if User Already Exists
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(409).json({ message: "User already registered." });
        }

        // Hash Password
        const saltRounds = Number(process.env.SALT) || 10; // Default to 10 if SALT is undefined
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create New User
        const newUser = new User({ ...req.body, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User created successfully." });

    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
});

export default router;
