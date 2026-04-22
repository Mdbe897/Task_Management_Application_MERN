import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔐 protected routes
router.post("/", protect, createTask);
router.get("/", protect, getTasks);

// ✏️ UPDATE
router.put("/:id", protect, updateTask);

// 🗑️ DELETE
router.delete("/:id", protect, deleteTask);

export default router;