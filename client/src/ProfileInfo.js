// ProfileInfo.js

import React from 'react';
import './ProfileInfo.css';
import profilePic from './profile-picture.png';

function ProfileInfo() {
  return (
    <div className="profile-info">
      <img src={profilePic} alt="Profile" className="profile-picture" />
      <div className="profile-details">
        <p className='name'>Mary Jane</p>
        <p className="wallet">Wallet Balance: $10</p>
        <button className="offer-ride-button">Offer Ride</button>
      </div>
    </div>
  );
}

export default ProfileInfo;
