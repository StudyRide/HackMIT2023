// Main_Container_1.js

import React from 'react';
import './Main_Container_1.css'; // Import the CSS file for styling
import { useEffect, useState } from "react"

function Main_Container_1() {


  return (
    <div className="main-container-1 bg-emerald-700">
      <div className="centered-content">
        <h2 className="search-hook font-">Find Your Next Shared Ride!</h2>
        <input type="text" className="search-bar" placeholder="Search for a ride" />
        <button className="start-ride-button">Start</button>
      </div>
      
    </div>
  );
}

export default Main_Container_1;
