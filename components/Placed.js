"use client"
import React, { useState, useEffect } from "react";
import { useMediaQuery } from '@react-hook/media-query';




export const Placed = () => {
  const [isXsScreen, setIsXsScreen] = useState(false);

  const handleResize = () => {
    const xsScreen = window.matchMedia('(max-width: 640px)').matches;
    setIsXsScreen(xsScreen);
    window.localStorage.setItem('isXsScreen', JSON.stringify(xsScreen));
  };

  useEffect(() => {
    const xsScreen = window.localStorage.getItem('isXsScreen');
    if (xsScreen) {
      setIsXsScreen(JSON.parse(xsScreen));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isXsScreenMediaQuery = useMediaQuery('(max-width: 639px)');
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-10">
      <div className={`flex flex-col justify-center gap-4 ${isXsScreen ? 'items-center' : 'items-start'}  w-full md:w-auto`}>
        <p className={`font-normal text-black text-2xl md:text-3xl leading-normal ${isXsScreen ? 'text-center font-hiragino-mincho-xs' : 'font-hiragino-mincho-pro-center'}`}>
          Where will you get Placed?
        </p>
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-${isXsScreen ? '8' : '4'} md:gap-8 items-center justify-center xs:mx-auto`}> {/* Center grid for xs screens */}
          <img className={`${isXsScreen ? 'w-30 h-14' : 'w-20 h-10'} md:w-28 md:h-14 lg:w-36 lg:h-18 object-cover`} alt="Barcley" src="/images/barcley 1.png" />
          <img className={`${isXsScreen ? 'w-30 h-14' : 'w-20 h-10'} md:w-28 md:h-14 lg:w-30 lg:h-23 object-cover`} alt="Barcley" src="/images/barcley 2.png" />
          <img className={`${isXsScreen ? 'w-30 h-14' : 'w-20 h-10'} md:w-28 md:h-14 lg:w-36 lg:h-18 object-cover`} alt="Barcley" src="/images/barcley 3.png" />
          <img className={`${isXsScreen ? 'w-30 h-14' : 'w-20 h-10'} md:w-28 md:h-14 lg:w-36 lg:h-18 object-cover`} alt="Barcley" src="/images/barcley 4.png" />
          <img className={`${isXsScreen ? 'w-30 h-14' : 'w-20 h-10'} md:w-28 md:h-14 lg:w-36 lg:h-18 object-cover`} alt="Barcley" src="/images/barcley 5.png" />
          <img className={`${isXsScreen ? 'w-30 h-14' : 'w-20 h-10'} md:w-28 md:h-14 lg:w-36 lg:h-18 object-cover`} alt="Barcley" src="/images/barcley 6.png" />
          <img className={`${isXsScreen ? 'w-30 h-14' : 'w-20 h-10'} md:w-28 md:h-14 lg:w-36 lg:h-18 object-cover`} alt="Barcley" src="/images/barcley 7.png" />
          <img className={`${isXsScreen ? 'w-30 h-14' : 'w-20 h-10'} md:w-28 md:h-14 lg:w-36 lg:h-18 object-cover`} alt="Barcley" src="/images/barcley 8.png" />
        </div>
      </div>
      <img className={`${isXsScreen ? 'w-72 h-72' : 'w-48 h-48'} md:w-72 md:h-72 ml-auto xs:mx-auto`} alt="Business deal bro" src="/images/Business deal-bro 1.png" />
    </div>
  );
};


// "w-20 md:w-28 lg:w-32 h-10 md:h-16 lg:h-23 object-cover"