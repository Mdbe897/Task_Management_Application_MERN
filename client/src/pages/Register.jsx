import { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL; // ✅ move outside component

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${API}/api/auth/register`, {
        name,
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";

    } catch (err) {
      console.log("REGISTER ERROR:", err.response?.data || err.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>

      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
};

export default Register;