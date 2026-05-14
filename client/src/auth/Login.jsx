import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/auth/login",
        formData,
      );
      console.log(data);
      setErrorMessage("");
      localStorage.setItem("auth", true);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.message);
      console.log(error.response.data.message);
    }
  }

  return (
    <div
      style={{ height: "60vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <form
        onSubmit={handleLogin}
        className="card p-3 shadow w-50 d-grid gap-3"
      >
        <h1>Login</h1>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="text"
          className="form-control"
          placeholder="Email"
        />

        <input
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          type="password"
          className="form-control"
          placeholder="•••••••••••"
        />

        <button
          type="submit"
          className="btn btn-primary"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default Login;
