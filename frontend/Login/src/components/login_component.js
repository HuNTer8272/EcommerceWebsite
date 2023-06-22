import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:4000/auth/login", {
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
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>

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

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/sign-up">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
