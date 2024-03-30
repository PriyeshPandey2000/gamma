"use client"
import React, { useState, useEffect } from 'react';
import Card from './Card'; // Import the Card component
import "../styles/StudentsPlaced.css";
import Frame from './MovingCard';

// Custom hook to handle media query
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => {
      setMatches(mediaQuery.matches);
    };
    updateMatches();
    mediaQuery.addListener(updateMatches);
    return () => {
      mediaQuery.removeListener(updateMatches);
    };
  }, [query]);

  return matches;
};

const StudentsPlaced = () => {
  // Define your media query
  const isExtraSmallScreen = useMediaQuery('(max-width:575px)');

  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden "> {/* Add overflow-x-hidden */}
      {/* Apply different font based on the media query */}
      <h2 className={`text-center ${isExtraSmallScreen ? 'font-hiragino-mincho-xs' : 'font-hiragino-mincho-pro-center'}`}>Student Placed Stories</h2>
      <div className="cards flex justify-center mt-8 animate-scrollRightToLeft">
        <Frame name="Brinda A" desc="Placed at Zoho" logo="/images/zohopic.png" company="/images/zoho.png"/>
        <Frame name="Brinda A" desc="Placed at Zoho" logo="/images/zohopic.png" company="/images/zoho.png"/>
        <Frame name="Brinda A" desc="Placed at Zoho" logo="/images/zohopic.png" company="/images/zoho.png"/>
        <Frame name="Brinda A" desc="Placed at Zoho" logo="/images/zohopic.png" company="/images/zoho.png"/>
        <Frame name="Brinda A" desc="Placed at Zoho" logo="/images/zohopic.png" company="/images/zoho.png"/>
        <Frame name="Brinda A" desc="Placed at Zoho" logo="/images/zohopic.png" company="/images/zoho.png"/>
        <Frame name="Brinda A" desc="Placed at Zoho" logo="/images/zohopic.png" company="/images/zoho.png"/>
        {/* Repeat for other cards */}
      </div>
    </div>
  );
};

export default StudentsPlaced;
