import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import './index.css'; 

const ScrollIndicator = () => {
  const [show, setShow] = useState(true);

  // Handles the scroll event
  const handleScroll = () => {
    const scrollableHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY + viewportHeight;

    // Buffer to detect near-bottom
    const buffer = 250;

    if (scrollableHeight - scrollPosition < buffer) {
      setShow(false); // Hide indicator when close to bottom
    } else {
      setShow(true);  // Show indicator otherwise
    }
  };

  useEffect(() => {
    handleScroll(); // Initial check in case the user is already at the bottom
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    
    show && (
      <div className="transition-opacity bg-opacity-75 dark:bg-gray-800 dark:text-red-600 scroll-indicator fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white rounded-full p-3 shadow-lg z-50 animate-bounce">
        <FaArrowDown size={24} />
      </div>
    )
  );
};

export default ScrollIndicator;
