import React from 'react';
import RideCard from './RideCard';
import './RidesComponent.css';

function RidesComponent(){
    //api enping : '/getRides'


    return(        
        <div className="rides">
            {/* {ridesList.map(ride => (
                <RideCard key={ride.id} ride={ride} />
            ))} */}
        </div>
    )
}
export default RidesComponent;