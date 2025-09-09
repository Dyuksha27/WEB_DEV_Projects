import React, { useState, useEffect } from "react";
import Verframe from "./Verframe";

const Typeeffect = ({ text = "Glorious History", delay = 200 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [position, setPosition] = useState(0);
  const [resetKey, setResetKey] = useState(0); // Key to force re-render

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText(""); // Reset text at the start

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);

      // Get updated text width dynamically
      const textElement = document.getElementById("typing-text");
      if (textElement) {
        setPosition(textElement.offsetWidth + 5); // Adjust position
      }

      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(interval);

        // Reset everything after 1 second
        setTimeout(() => {
          setDisplayedText(""); // Clear text
          setPosition(0); // Reset dash position
          setResetKey((prevKey) => prevKey + 1); // Change key to force re-render
        }, 1000);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay, resetKey]); // Depend on resetKey to restart animation

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <span id="typing-text" className="typing-effect">{displayedText}</span>
      <Verframe position={position} />
    </div>
  );
};

export default Typeeffect;

