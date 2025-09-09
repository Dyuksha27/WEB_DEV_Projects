import React, { useState, useEffect } from "react";
import Typeeffect from "./Typeeffect";

function Herosec() {
  const images = [
    "/Images/img1.png",
    "/Images/img2.png",
    "/Images/img3.png",
    "/Images/img4.png",
  ]; // Ensure these images are inside `public/Images/`

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="hero-container">
      <div className="hero-section">
        <div
          className="hero-image"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            height: "100vh",
            width: "100%",
          }}
        ></div>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Discover, Explore, and Relive India's
            <br />
            <Typeeffect />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Herosec;
