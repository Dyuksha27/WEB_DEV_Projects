import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container1 grid grid-two-column">
      <div className="section-hero-data">
        <p className="hero-top-data1">Explore Bharat</p>
        <h1 className="hero-heading">HERICULÉ</h1>
        <p className="hero-para4">
          With unparalleled tapestry of diversity, vibrant cultures and
          magnificent landmarks, India stands as a resplendent destination,
          symbolizing the perfect harmony. Each state shows cultural microcosm,
          unique traditions, languages and culinary delights that reflect the
          rich heritage of India.
        </p>
        <button className="btn explore-btn btnho">
          <Link to="../Pages/Ttd">Explore</Link>
        </button>
      </div>

      <div className="section-hero-image">
        <img src="../Images/map.png" className="hero-img" />
      </div>
    </div>
  );
}

export default Home;
