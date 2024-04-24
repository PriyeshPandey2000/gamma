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
    <div>
    <h2 className={`text-center ${isExtraSmallScreen ? 'font-hiragino-mincho-xs' : 'font-hiragino-mincho-pro-center'}`}>Student Placed Stories</h2>
    <div className="w-full flex flex-row items-center overflow-x-hidden "> {/* Add overflow-x-hidden */}
      {/* Apply different font based on the media query */}
      
      <div className="cards flex justify-center mt-8 animate-scrollLeftToLeft">
        <Frame name="Brinda A" desc="Placed at Zoho" logo="/images/zohopic.png" company="/images/zoho.png"/>
        <Frame name="Kunjika Arora" desc="Placed at Amdocs" logo="/images/kunjika.png" company="/images/amdocssmall.png"/>
        <Frame name="Abhishek Mishra" desc="Placed at IBM" logo="/images/ibmpic.png" company="/images/ibm.png"/>
        <Frame name="Ayushi Chaudhary" desc="Placed at Adobe" logo="/images/adobepic.png" company="/images/adobeee.png"/>
        <Frame name="Nishant Padhi" desc="Placed at Walmart" logo="/images/walmartpic.jpg" company="/images/barcley 5.png"/>
        <Frame name="Vishal Kumar" desc="Placed at AllState" logo="/images/allstatepic.jpg" company="/images/allstate.png"/>
        <Frame name="Brinda A" desc="Placed at Zoho" logo="/images/zohopic.png" company="/images/zoho.png"/>
        {/* Repeat for other cards */}
      </div>
      <div className="cards flex justify-center mt-8 animate-scrollLeftToLeft">
     
        <Frame name="Kunjika Arora" desc="Placed at Amdocs" logo="/images/kunjika.png" company="/images/amdocssmall.png"/>
        <Frame name="Abhishek Mishra" desc="Placed at IBM" logo="/images/ibmpic.png" company="/images/ibm.png"/>
        <Frame name="Ayushi Chaudhary" desc="Placed at Adobe" logo="/images/adobepic.png" company="/images/adobeee.png"/>
        <Frame name="Brinda A" desc="Placed at Zoho" logo="/images/zohopic.png" company="/images/zoho.png"/>
        <Frame name="Nishant Padhi" desc="Placed at Walmart" logo="/images/walmartpic.jpg" company="/images/barcley 5.png"/>
        <Frame name="Vishal Kumar" desc="Placed at AllState" logo="/images/allstatepic.jpg" company="/images/allstate.png"/>
        <Frame name="Brinda A" desc="Placed at Zoho" logo="/images/zohopic.png" company="/images/zoho.png"/>
        {/* Repeat for other cards */}
      </div>
      </div>
    </div>
  );
};

export default StudentsPlaced;
