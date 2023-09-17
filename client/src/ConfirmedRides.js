// import React from 'react';
import React, { useState, useEffect } from 'react';
import ConfirmedCard from './ConfirmedCard';
import './RidesComponent.css';

function ConfirmedRides(){
    const [rides, setRides] = useState([]);
    let userName = "kate";
    useEffect(() => {
      fetch(`http://localhost:4242/getUserRides?search=kate`, {
        method: "GET",
        mode: "cors"
      })
        .then((res) => res.json())
        .then((data) => setRides(data));
    }, []);

    return(
        <div className="divide-y divide-gray-100 mt-5">
        {rides.map((ride) => (
            <ConfirmedCard key={ride.id} ride={ride} />
          ))}
        </div>
    )
}
export default ConfirmedRides;