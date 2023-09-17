// Navbar.js

import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>StudyRide</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">About Us</a></li>
        <li><a href="/">Log In</a></li>
        <li><a href="/">Sign Up</a></li>
        {/* When we add log in functionality, it's gonna be one or the other */}
        <li><a href="/">Profile</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
