import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialValues);
  const { firstName, lastName, email, password } = userData;
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8080/auth/register",
        userData
      );
      console.log(data);
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      setSuccessMsg(
        `Hello dear ${firstName}, Welcome to EASYBANK. We received your Sign up request. Stay connected, and further assistance will be sent to you at ${email}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signIn-container">
      {successMsg ? (
        <div className="success-div">
          <h4>Registration successful!!!</h4>
          <p className="success-msg">{successMsg}</p>
          <Link to="/login">
            <button className="success-btn">Login Now</button>
          </Link>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <h4>Create your account here </h4>

          <div className="input-fields">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="firstName"
              onChange={handleChange}
              value={firstName}
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="lastName"
              onChange={handleChange}
              value={lastName}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              value={email}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={password}
            />

            <button type="submit" className="signin-button">
              Sign-up
            </button>

            <p>
              Already Register? <a href="/login">Sign in here</a>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;
