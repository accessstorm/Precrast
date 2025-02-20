// backend/index.js (or app.js)
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();

// 🛠 Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Use routes
app.use("/api/users", userRoutes);   // Routes for /api/users
app.use("/api/auth", authRoutes);    // Routes for /api/auth (login)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
