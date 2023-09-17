// import React from 'react';
import React, { useState, useEffect } from "react";

import "./RideCard.css";

function ConfirmedCard({ ride }) {
  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src="defaultPfp.jpeg"
          alt=""
        />
        <div className="min-w-0 flex-auto text-left">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {ride.driver}
          </p>
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {ride.origin} to {ride.destination}
          </p>
          <p className="text-sm leading-6 text-gray-900">
            <span className="italic">Departure: </span> <span className="font-semibold">{ride.rideDepartureTime}</span>
          </p>
          <p className="text-sm leading-6 text-gray-900">
          <span className="italic">Return: :</span> <span className="font-semibold">{ride.rideReturnTime}</span>
          </p>
        </div>
      </div>
    </li>
  );
}
export default ConfirmedCard;
