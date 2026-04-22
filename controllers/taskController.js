import Task from "../models/Task.js";

// CREATE TASK
export const createTask = async (req, res) => {
  try {
    const { title, description, deadline } = req.body;

    const task = await Task.create({
      title,
      description,
      deadline,
      user: req.user._id
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER TASKS
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✏️ UPDATE TASK added on phase 4
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // 🔐 check ownership
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedTask);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🗑️ DELETE TASK added on phase 4
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // 🔐 check ownership
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await task.deleteOne();

    res.json({ message: "Task deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};