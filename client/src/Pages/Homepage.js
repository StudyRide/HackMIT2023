import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import RidesComponent from "../RidesComponent";
import Main_Container_1 from "../Main_Container_1";

function Homepage() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4242/getRides", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => setRides(data));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Main_Container_1 setRides={setRides} />
      <div className="rides">
        <RidesComponent rides={rides} />
      </div>
    </div>
  );
}

export default Homepage;
