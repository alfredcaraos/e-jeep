import React, { useState } from "react";
import "./login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      email: email,
      password: password,
    };

    // Make a POST request to the backend endpoint
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Log the response from the backend
        if (data === "Success") {
          // Login successful, redirect to account page
          window.location.href = "/account";
        } else {
          // Show error message
          setShowError(true);
        }
      })
      .catch((error) => {
        console.log(error); // Log any errors that occurred during the request
      });
  };

  return (
    <div className="cover">
      <div className="Login bg-success">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center text-white">Login</h1>

          <div className="form-group was-validated">
            <label className="form-label text-white" htmlFor="email">
              Email Address
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="invalid-feedback">
              Please Enter Your Email Address
            </div>
          </div>

          <div className="form-group was-validated">
            <label className="form-label text-white" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="invalid-feedback">Please Enter Your Password</div>
          </div>

          <div className="form-group form-check">
            <input className="form-check-input" type="checkbox" id="check" />
            <label className="form-check-label text-white" htmlFor="check">
              Remember Me
            </label>
          </div>
          <input
            className="btn btn-success bg-primary text-white w-50"
            type="submit"
            value="Sign In"
          />
          <Link to="/">
            <input
              className="btn btn-success bg-danger text-white w-50"
              type="button"
              value="Cancel"
            />
          </Link>
        </form>
        {showError && (
          <div className="alert alert-danger mt-3" role="alert">
            Invalid email or password. Please try again.
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
