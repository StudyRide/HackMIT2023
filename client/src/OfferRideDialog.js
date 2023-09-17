import React, { useState } from "react";
import "./OfferRideDialog.css"; // Import your CSS file
import axios from "axios";
import { toast } from "react-hot-toast";

function OfferRideDialog({ isOpen, onClose }) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [depTime, setDepTime] = useState("");
  const [retTime, setRetTime] = useState("");
  const [cost, setCost] = useState("");
  const [capacity, setCapacity] = useState("");

  // const fields = ["Origin, Destination, Departure Time, Return Time, Cost, Capacity"]

  const fields = [
    {
      name: "Origin",
      value: origin,
      updateInput: setOrigin,
    },
    {
      name: "Destination",
      value: destination,
      updateInput: setDestination,
    },
    {
      name: "Departure Time",
      value: depTime,
      updateInput: setDepTime,
    },
    {
      name: "Return Time",
      value: retTime,
      updateInput: setRetTime,
    },
    {
      name: "Cost",
      value: cost,
      updateInput: setCost,
    },
    {
      name: "Capacity",
      value: capacity,
      updateInput: setCapacity,
    },
  ];

  const handleConfirm = () => {
    // Handle the confirmation logic (e.g., send data to the server)
    // You can access the origin and destination values here
    // console.log("Origin:", origin);

    const headers = {
      "Content-Type": "application/json",
    };

    const data = {
      driver: "Testing",
      capacity: capacity,
      origin: origin,
      destination: destination,
      rideDepartureTime: depTime,
      rideReturnTime: retTime,
      cost: cost,
    };

    axios
      .post("http://localhost:4242/createRide", data, { header: headers })
      .then((res) => toast.success(res.data))
      .catch((err) => console.log(err));

    // Close the dialog
    onClose();
  };

  return (
    <div
      onClick={(e) => {
        isOpen && onClose();
      }}
      className={`dialog ${isOpen ? "open" : ""}`}
    >
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <h2>Offer Ride</h2>
        {fields.map((field) => (
          <div className="input-boxes">
            <label htmlFor={field.name}>{field.name}</label>
            <input
              type="text"
              id={field.name}
              value={field.value}
              onChange={(e) => field.updateInput(e.target.value)}
            />
          </div>
        ))}
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
}

export default OfferRideDialog;