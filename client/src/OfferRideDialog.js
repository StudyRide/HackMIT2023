import React, { useState } from 'react';
import './OfferRideDialog.css'; // Import your CSS file

function OfferRideDialog({ isOpen, onClose }) {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [time, setTime] = useState('');

  const handleConfirm = () => {
    // Handle the confirmation logic (e.g., send data to the server)
    // You can access the origin and destination values here
    console.log('Origin:', origin);
    console.log('Destination:', destination);
    console.log('Time:', time);

    // Close the dialog
    onClose();
  };

  return (
    <div className={`dialog ${isOpen ? 'open' : ''}`}>
      <div className="dialog-content">
        <h2>Offer Ride</h2>
        <div className='input-boxes'>
            <label htmlFor="origin">Origin</label>
            <input
                type="text"
                id="origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
            />
        </div>
        <div className='input-boxes'>
            <label htmlFor="destination">Destination</label>
            <input
                type="text"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />
        </div>
        <div className='input-boxes'>
            <label htmlFor="time">Time</label>
                <input
                type="text"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                />
        </div>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
}

export default OfferRideDialog;
