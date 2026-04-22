import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// ✅ 1. CORS FIRST (important)
app.use(cors({
  origin: "*",
  credentials: true
}));

// ✅ 2. THEN JSON middleware
app.use(express.json());

// connect DB
connectDB();

// routes
app.use("/api/auth", authRoutes);

app.use("/api/tasks", (req, res) => {
  res.send("Task route working 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));