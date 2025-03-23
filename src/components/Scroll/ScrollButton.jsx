import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets"; // Ensure correct path
import "./ScrollButton.css";

const ScrollButton = () => {
  const [scrollDirection, setScrollDirection] = useState("down"); // Default: Show Down Arrow

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollTop === 0) {
        setScrollDirection("down"); // At the top → Show Down Arrow
      } else if (scrollTop >= scrollHeight - 10) {
        setScrollDirection("up"); // At the bottom → Show Up Arrow
      } else {
        setScrollDirection(scrollDirection); // Maintain last direction
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection]); // 🔥 Added dependency to update direction

  const handleScrollClick = () => {
    if (scrollDirection === "down") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      setTimeout(() => setScrollDirection("up"), 1000); // 🔥 Fix for delayed update
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => setScrollDirection("down"), 1000);
    }
  };

  return (
    <button className="scroll-button show" onClick={handleScrollClick}>
      <img
        src={scrollDirection === "down" ? assets.down_arrow : assets.up_arrow}
        alt="Scroll Button"
        className="arrow-icon"
      />
    </button>
  );
};

export default ScrollButton;
