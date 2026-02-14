import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo-home1.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location  = useLocation()
  const [isLogin, setIsLogin] = useState(false);

  // Check for token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsLogin(false); // Immediately update the state
    navigate("/login"); // Redirect to login page
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:4000/api/user/login", {
        email,
        password,
      });
      if (response.data.success) {
        localStorage.setItem("token", response.data.token); // Save token to localStorage
        setIsLogin(true); // Update Navbar state immediately
        navigate("/"); // Navigate to home page after login
      } else {
        alert("Login failed!");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

    if(location.pathname === '/login') return null;
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo_home" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#aboutus">About Us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#feedback">Feedback</a>
        </li>
        <li>
          <button className="btn-contact">
            <a style={{ color: "black" }} href="#contact">
              Contact Us
            </a>
          </button>
        </li>
        <li>
          <button className="btn-contact">
            {isLogin ? (
              <span
                style={{ color: "black", cursor: "pointer" }}
                onClick={handleSignOut}
              >
                Sign Out
              </span>
            ) : (
              <Link style={{ color: "black" }} to="/login">
                Login/Register
              </Link>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
