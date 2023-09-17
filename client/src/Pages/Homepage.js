import React from 'react';
import Navbar from '../Navbar';
import RidesComponent from '../RidesComponent'
import Main_Container_1 from '../Main_Container_1';

function Homepage(){
    return (
        <div className="App">
        <Navbar />
        <Main_Container_1 />
        <div className = "rides">
          <RidesComponent/>
        </div>
      </div>
    )
}

export default Homepage;