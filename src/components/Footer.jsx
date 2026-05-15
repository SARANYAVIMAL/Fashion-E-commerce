import React from 'react';
import './Footer.css';
import { FaInstagram, FaGlobe, FaTwitter, FaFacebookF } from 'react-icons/fa';

function Footer(){
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-section brand">
          <h2 className="logo">LUXE.</h2>
          <p>
            Premium fashion for the modern connoisseur. Elevate your style 
            with our curated collections.
          </p>
          <div className="social-icons">
            <FaInstagram />
            <FaGlobe />
            <FaTwitter />
            <FaFacebookF />
          </div>
        </div>

        {/* Links Sections */}
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Accessories</li>
            <li>New Arrivals</li>
            <li>Sale</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>Customer Service</li>
            <li>My Account</li>
            <li>Find a Store</li>
            <li>Shipping & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Corporate Responsibility</li>
            <li>Press</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;