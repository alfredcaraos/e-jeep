import React, { useState } from "react";
import "./login.css";


const Register = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      name: name,
      age: age,
      email: email,
      password: password,
    };

    // Make a POST request to the backend endpoint
    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Log the response from the backend
        // Reset the form fields
        setName("");
        setAge("");
        setEmail("");
        setPassword("");

        // Show alert
        setShowAlert(true);
      })
      .catch((error) => {
        console.log(error); // Log any errors that occurred during the request
      });
  };

  return (
    <div className="cover">
      <div className="Login bg-success">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center text-white">Register</h1>

          <div className="form-group was-validated">
            <label className="form-label text-white" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="invalid-feedback">Please Enter Your Name</div>
          </div>

          <div className="form-group was-validated">
            <label className="form-label text-white" htmlFor="age">
              Age
            </label>
            <input
              className="form-control"
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <div className="invalid-feedback">Please Enter Your Age</div>
          </div>

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

          <input
            className="btn btn-success bg-primary text-white w-50"
            type="submit"
            value="Register"
          />
          <input
            className="btn btn-success bg-danger text-white w-50"
            type="button"
            value="Cancel"
            onClick={() => {
              window.location.href = "/";
            }}
          />
        </form>
        {showAlert && (
          <div className="alert alert-success mt-3" role="alert">
            User has been created.
            <button
              className="btn btn-primary mx-4"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              OK
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
