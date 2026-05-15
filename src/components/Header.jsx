import React from "react";
import "./Header.css";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() 
{
  return (
    <nav className="navbar">
      <div className="logo">Fashion World</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Categories">Categories</Link></li>
        <li><Link to="/AboutUs">AboutUs</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>

      <div className="nav-actions">
        <FaShoppingCart className="icon1" />
        <FaUserCircle className="icon2" />
        <button className="login-btn">login</button>
      </div>
    </nav>
  );
}

export default Header;
