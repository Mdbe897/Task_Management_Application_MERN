import { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL; // ✅ move outside component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API}/api/auth/login`, {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);

      window.location.href = "/dashboard";
    } catch (err) {
      console.log("LOGIN ERROR:", err.response?.data || err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
	  <p>
  Don't have an account? <a href="/register">Register</a>
</p>
    </div>
  );
};

export default Login;