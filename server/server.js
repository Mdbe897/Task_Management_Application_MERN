import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://task-management-application-mern-sepia.vercel.app",
  "http://localhost:5173"
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

// ✅ 1. CORS FIRST (important)
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

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