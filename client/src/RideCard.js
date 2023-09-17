// import React from 'react';
import React, { useState, useEffect } from "react";

import "./RideCard.css";

function RideCard({ ride }) {
  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src="defaultPfp.jpeg"
          alt=""
        />
        <div className="min-w-0 flex-auto text-left">
          <p className="text-lg font-bold leading-6 text-gray-900">
            {ride.driver}
          </p>
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {ride.origin} to {ride.destination}
          </p>
          <p className="text-sm leading-6 text-gray-900">
            <span className="italic">Departure: </span>{" "}
            <span className="font-semibold">{ride.rideDepartureTime}</span>
          </p>
          <p className="text-sm leading-6 text-gray-900">
            <span className="italic">Return: :</span>{" "}
            <span className="font-semibold">{ride.rideReturnTime}</span>
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <div className="mt-1 flex items-center justify-center items-center gap-x-1.5">
          <button className="confirm-ride">Request</button>
        </div>
      </div>
    </li>
  );
}
export default RideCard;
