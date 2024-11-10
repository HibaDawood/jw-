// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             In harum eius accusamus odit, amet eveniet, corrupti culpa illum ex nobis rem placeat ad minima optio.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/cars">drinks</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <p>123 JW Drinks</p>
          <p>Email: info@JW-website.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; CarWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;