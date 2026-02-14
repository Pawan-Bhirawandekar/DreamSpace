import React from "react";
import "./Footer.css";
import DreamSpace from './../../assets/logo-home1.png'; // Adjust the path if necessary

function Footer() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied to clipboard: ${text}`);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <img src={DreamSpace} alt="DreamSpace Logo" className="footer-logo" />
          <p className="footer-description">
            Transform your space into a dream with innovative and stylish interior design solutions.
          </p>
        </div>

        {/* Tools Section */}
        <nav className="footer-links">
          <h3>Tools</h3>
          <ul>
            <li><a href="/generateImage">AI Image Generation</a></li>
            <li><a href="/generateImage">Text-to-Image Generation</a></li>
            <li><a href="/vaastu">Vaastu Shastra</a></li>
            <li><a href="/budget">Design with Budget Estimation</a></li>
          </ul>
        </nav>

        {/* Quick Links Section */}
        <nav className="footer-easyAccess">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#aboutus">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#feedback">Feedback</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>

        {/* Contact Section */}
        <address className="footer-contact">
          <h3>Contact Us</h3>
          {/* Clickable Email */}
          <p>Email: <a href="mailto:contact.dreamspace2425@gmail.com">contact.dreamspace2425@gmail.com</a></p>
          {/* Clickable and Copyable Phone */}
          <p>
            Phone: 
            <a href="tel:+919969403524"> +91 9969403524</a> ||
            <a href="tel:+919820118984"> +91 9820118984</a>
          </p>
          {/* Google Maps Link */}
          <p>
            Address: 
            <a href="https://www.google.com/maps/search/?api=1&query=Vile+Parle,+Mumbai,+Maharashtra" target="_blank" rel="noopener noreferrer">
               Vile Parle, Mumbai, Maharashtra
            </a>
          </p>
        </address>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DreamSpace. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

