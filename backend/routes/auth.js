import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user.js';
import Joi from 'joi';

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email }).select("+password");
        if (!user) return res.status(401).send("Invalid email or password.");

        if (!req.body.password || !user.password) {
            return res.status(400).send("Password is missing.");
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(401).send("Invalid email or password.");

        const token = user.generateAuthToken();
        
        console.log("Generated Token:", token); // Debugging line

        res.status(200).json({message: "Login successful." });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server Error" });
    }
});


// Keep your existing validate function
const validate = (user) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().min(6).required().label('Password')
    });
    return schema.validate(user);
};

export default router;