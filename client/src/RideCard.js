// import React from 'react';
import React, { useState, useEffect } from "react";

import "./RideCard.css";

function RideCard({ ride }) {
  return (
    // <div className="ride-card b">
    //     <p>Origin: {ride.origin}</p>
    //     <p>Destination: {ride.destination}</p>
    //     <p>Driver: {ride.driver}</p>
    //     <p>Cost: {ride.cost}</p>
    //     <p>Departure: {ride.rideDepartureTime}</p>
    // </div>
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src="defaultPfp.jpeg"
          alt=""
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {ride.driver}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            TestEmail@gmail.com
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs leading-5 text-gray-500">Online</p>
        </div>
      </div>
    </li>
  );
}
export default RideCard;
