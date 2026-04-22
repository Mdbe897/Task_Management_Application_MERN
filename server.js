import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// connect DB
connectDB();

// routes
app.use("/api/tasks", (req, res) => {
  res.send("Task route working 🚀");
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));