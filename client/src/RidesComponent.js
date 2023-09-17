// import React from 'react';
import React, { useState, useEffect } from 'react';
import RideCard from './RideCard';
import './RidesComponent.css';

function RidesComponent(){
    const [rides, setRides] = useState([]);
    useEffect(() => {
        fetch('/getRides')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setRides(data);
        })
        .catch((err) => {
            console.log(err.message);
        })
    });
    return(
        <div class="Ride-Card">
            <div class="card-body">
                {rides.map(ride => (
                    <RideCard origin={ride.origin} ride={ride}/>
                ))}  
            </div>
        </div>
    );
}
export default RidesComponent;