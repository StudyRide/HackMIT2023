// import React from 'react';
import React, { useState, useEffect } from "react";
import RideCard from "./RideCard";
import "./RidesComponent.css";

function RidesComponent({ rides }) {
  return (
    <div className="divide-y divide-gray-100 mt-5">
      {rides.map((ride) => (
        <RideCard key={ride.id} ride={ride} />
        // <div key={ride.id}>
        //   {/* Output the entire ride object */}
        //   {JSON.stringify(ride.destination)}
        // </div>
      ))}
    </div>
  );
}
export default RidesComponent;
