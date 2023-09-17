import React from 'react';
import Navbar from './Navbar.js';
import ProfileInfo from './ProfileInfo.js';

function PersonDash() {
    return(
        <div className="person-dash">
            <Navbar />
            <ProfileInfo />
        </div>
        
    );
}

export default PersonDash;