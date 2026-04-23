import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // 🔄 FETCH TASKS
  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("taskmanagementapplicationmern-production.up.railway.app/api/tasks", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setTasks(res.data);
    } catch (error) {
      console.log("FETCH ERROR:", error);
    }
  };

  // ➕ CREATE TASK
  const handleCreateTask = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "taskmanagementapplicationmern-production.up.railway.app/api/tasks",
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setTitle("");
      setDescription("");

      fetchTasks(); // refresh list

    } catch (error) {
      console.log("CREATE ERROR:", error);
    }
  };

  // 🚀 LOAD ON PAGE START
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      {/* CREATE TASK FORM */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Create Task</h3>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: "block", marginBottom: "10px" }}
        />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ display: "block", marginBottom: "10px" }}
        />

        <button onClick={handleCreateTask}>
          Add Task
        </button>
      </div>

      {/* TASK LIST */}
      <div>
        <h3>Your Tasks</h3>

        {tasks.length === 0 ? (
          <p>No tasks yet</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task._id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px"
              }}
            >
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
              <p>
                Deadline:{" "}
                {task.deadline
                  ? new Date(task.deadline).toLocaleDateString()
                  : "No deadline"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;