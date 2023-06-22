import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    axios
    .post("http://localhost:4000/auth/register", {
      email,
      password,
    })
    .then((response) => {
      const data = response.data;
      console.log(data);
      if (data.success) {
        alert("Login successful");
        window.localStorage.setItem("token", data.token);
        window.localStorage.setItem("loggedIn", true);

        // Redirect based on user role
        if (data.user.role === "Admin") {
          window.location.href = "http://localhost:5000/";
        } else {
          window.location.href = "http://localhost:5173/";
        }
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error("Login failed:", error);
      alert("Something went wrong");
    });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleRegister}>
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>

          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
