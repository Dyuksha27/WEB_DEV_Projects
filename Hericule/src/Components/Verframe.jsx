import React from "react";

const Verframe = ({ position }) => {
  return (
    <div
      className="vertical-frame"
      style={{
        position: "absolute",
        top: "5px",
        left: `${position}px`, // Moves with text
        height: "50%", // Make sure it follows text height
        width: "6px",
        backgroundColor: "rgb(239, 95, 165);",
        transition: "left 0.2s ease-in-out", // Smooth movement
      }}
    ></div>
  );
};

export default Verframe;
