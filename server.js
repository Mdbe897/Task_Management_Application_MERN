import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// ✅ middleware FIRST
app.use(express.json());
app.use(cors());

// connect DB
connectDB();

// ✅ routes AFTER middleware
app.use("/api/auth", authRoutes);

app.use("/api/tasks", (req, res) => {
  res.send("Task route working 🚀");
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));