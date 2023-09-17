// Main_Container_1.js

import React from "react";
import "./Main_Container_1.css"; // Import the CSS file for styling
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

function Main_Container_1({ setRides }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    axios
      .post("http://localhost:4242/findRides", {
        search: search,
      })
      .then((res) => {
        setRides(res.data);
        toast.success("Search results displayed below");
      })
      .catch((err) => {
        toast.error(
          `Unable to perform search. Following error has occured ${err}`
        );
      });
  };

  return (
    <div className="main-container-1 bg-emerald-700">
      <div className="centered-content">
        <h2 className="search-hook font-">Find Your Next Shared Ride!</h2>
        <input
          type="text"
          className="search-bar w-96 rounded-3xl mb-10"
          placeholder="Search for a ride"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch} className="start-ride-button">
          Start
        </button>
      </div>
    </div>
  );
}

export default Main_Container_1;
