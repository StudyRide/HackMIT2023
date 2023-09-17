// Navbar.js

// import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import React, { useState } from 'react';

function Navbar() {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

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
        <li onClick={toggleDropdown}>
          <span>Profile</span>
          {isDropdownOpen && (
            <ul>
              <li><a href="#item1">Dropdown Item 1</a></li>
              <li><a href="#item2">Dropdown Item 2</a></li>
              <li><a href="#item3">Dropdown Item 3</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
