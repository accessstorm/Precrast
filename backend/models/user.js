import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import passwordComplexity from "joi-password-complexity";
import Joi from "joi";

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, trim: true },
        password: { type: String, required: true, select: false }, // Password hidden by default
    },
    { timestamps: true } // Auto add createdAt & updatedAt fields
);

// Generate JWT Token
userSchema.methods.generateAuthToken = function () {
    const secret = process.env.JWT_SECRET || "fallback-secret"; // Use fallback for debugging
    return jwt.sign({ _id: this._id }, secret, { expiresIn: "1h" });
}

// Define User Model
const User = mongoose.model("User", userSchema);

// Validation Function
const validate = (user) => {
    const schema = Joi.object({
        firstName: Joi.string().trim().required(),
        lastName: Joi.string().trim().required(),
        email: Joi.string().email().trim().required(),
        password: passwordComplexity().required(),
    });
    return schema.validate(user);
};

// Export User Model & Validator
export { User, validate };
