import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import API from "../api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(`${API}/api/auth/register`, {
        name,
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";

    } catch (err) {
      setMessage(err.response?.data?.message || err.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleRegister}>
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

      <button type="submit">Register</button>

      {message ? <p>{message}</p> : null}

      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </form>
  );
};

export default Register;