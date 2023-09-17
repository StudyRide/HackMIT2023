// ProfileInfo.js

import React, { useState } from "react";
import "./ProfileInfo.css";
import profilePic from "./profile-picture.png";
import OfferRideDialog from "./OfferRideDialog";


function ProfileInfo() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true); // Open the dialog when this function is called
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false); // Close the dialog when this function is called
  };

  return (
    <div className="profile-info">
      <img src={profilePic} alt="Profile" className="profile-picture" />
      <div className="profile-details">
        <h2 className="name">Mary Jane</h2>
        <p className="wallet">Wallet: $10</p>
        <button className="offer-ride-button" onClick={handleOpenDialog}>
          Offer Ride
        </button>
        {/* Render the dialog with isOpen and onClose props */}
        {isDialogOpen && (
          <OfferRideDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
        )}
      </div>
    </div>
  );
}

export default ProfileInfo;
