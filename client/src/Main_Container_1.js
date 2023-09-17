// Main_Container_1.js

import React from 'react';
import './Main_Container_1.css'; // Import the CSS file for styling
import { useEffect, useState } from "react"

function Main_Container_1() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4242/getRides', {
      method: "GET",
      mode: "cors"
    })
      .then((res) => res.json())
      .then((data) => setRides(data));
  }, []);

  return (
    <div className="main-container-1">
      <div className="centered-content">
        <h2 className="search-hook">Find Your Next Shared Ride!</h2>
        <input type="text" className="search-bar" placeholder="Search for a ride" />
        <button className="start-ride-button">Start</button>
      </div>
      <div>
      {rides.map((ride) => (
          <div key={ride.id}>
            {/* Output the entire ride object */}
            {JSON.stringify(ride.origin)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main_Container_1;
