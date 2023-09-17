// import React from 'react';
import React, { useState, useEffect } from 'react';
import RideCard from './RideCard';
import './RidesComponent.css';

function RidesComponent(){
    const [rides, setRides] = useState([]);

    useEffect(() => {
      fetch('http://localhost:4242/getRides', {
        method: "GET",
        mode: "cors"
      })
        .then((res) => res.json())
        .then((data) => setRides(data));
    }, []);
    return(
        <div>
        {rides.map((ride) => (
            <RideCard key={ride.id} ride={ride} />
            // <div key={ride.id}>
            //   {/* Output the entire ride object */}
            //   {JSON.stringify(ride.destination)}
            // </div>
          ))}
        </div>
    )
}
export default RidesComponent;