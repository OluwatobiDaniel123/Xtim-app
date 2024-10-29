import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialValues);
  const { email, password } = userData;
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
        "http://localhost:8080/auth/login",
        userData
      );
      console.log(data);
      setUserData({
        email: "",
        password: "",
      });
      setSuccessMsg(
        `Hello dear ${email}, Welcome to EASYBANK. We received your Sign up request. Stay connected, and further assistance will be sent to you at ${email}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      {successMsg ? (
        <div className="success-div">
          <h4>Registration successful!!!</h4>
          <p className="success-msg">{successMsg}</p>
          <Link to="/dashboard">
            <button className="success-btn">Go to dashboard</button>
          </Link>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <h4>LogIn your account here </h4>
          <div className="input-fields">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <button type="submit" className="login-button">
              Sign-in
            </button>

            <p>
              Not yet registered?{" "}
              <Link to="/register">
                <a href="#">Sign up here</a>
              </Link>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
