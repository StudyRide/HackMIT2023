import React from "react";
import Navbar from "./Navbar.js";
import ProfileInfo from "./ProfileInfo.js";
import ToggleList from "./ToggleLists.js";
import "./PersonDash.css";
import { Toaster } from "react-hot-toast";

function PersonDash() {
  const futureRides = ["Item 1", "Item 2", "Item 3"];
  const history = ["Item 1", "Item 2", "Item 3"];
  const offeredRides = ["Item 1", "Item 2", "Item 3"];
  return (
    <div className="person-dash">
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <ProfileInfo />
      <div className="rides-section">
        <div className="my-rides">
          <ToggleList title="Future Rides" items={futureRides} />
          <ToggleList title="History" items={history} />
        </div>
        <ToggleList title="Offered Rides" items={offeredRides} />
      </div>
    </div>
  );
}

export default PersonDash;
