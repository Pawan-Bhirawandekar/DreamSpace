import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(
          "http://localhost:4000/api/user/register",
          { name, email, password }
        );
        if (response.data.success) {
          navigate("/");
          localStorage.setItem("token", response.data.token);
          toast.success("User registered successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        } else {
          toast.error("User registration failed!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        }
      } else {
        const response = await axios.post(
          "http://localhost:4000/api/user/login",
          { email, password }
        );
        if (response.data.success) {
          navigate("/");
          localStorage.setItem("token", response.data.token);
          toast.success("Logged in successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        } else {
          toast.error("Login failed!");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <ToastContainer />
      <div className="container-login">
        <form onSubmit={onSubmitHandler} className="form-login">
          <div className="header-login">
            <p className="title">{currentState}</p>
            <hr className="separator" />
          </div>
          {currentState === "Login" ? null : (
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="input"
              placeholder="Name"
              required
            />
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="input"
            placeholder="Email"
            required
          />
          <div className="password-container">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={showPassword ? "text" : "password"}
              className="input"
              placeholder="Password"
              required
            />
            <span
              className="password-toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <div className="footer-login">
            {/* <p className="link">Forgot your password?</p> */}
            {currentState === "Login" ? (
              <p
                onClick={() => setCurrentState("Sign Up")}
                className="link"
              >
                Create account
              </p>
            ) : (
              <p
                onClick={() => setCurrentState("Login")}
                className="link"
              >
                Login Here
              </p>
            )}
          </div>
          <button className="button-login">
            {currentState === "Login" ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
