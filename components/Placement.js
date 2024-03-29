"use client"
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

const Placement = () => {
  const [isXsScreen, setIsXsScreen] = useState(false);

  useEffect(() => {
    const xsScreen = window.localStorage.getItem('isXsScreen');
    if (xsScreen) {
      setIsXsScreen(JSON.parse(xsScreen));
    }
  }, []);

  const handleResize = () => {
    const xsScreen = window.matchMedia('(max-width: 640px)').matches;
    setIsXsScreen(xsScreen);
    window.localStorage.setItem('isXsScreen', JSON.stringify(xsScreen));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`w-full mx-auto flex flex-col sm:flex-row justify-between items-center my-8 ${isXsScreen ? 'xs-screen' : ''}`}>
      {/* Left side content */}
      <div className={`w-full sm:w-full md:w-1/2 pr-4 ${isXsScreen ? 'text-center' : ''}`}>
        <h2 className={`text-3xl font-bold text-black mb-4 font-hiragino-mincho-pro ${isXsScreen ? 'font-hiragino-mincho-s' : ''}`}>Placement Report</h2>
        <p className={`text-gray-700 mb-4 ${isXsScreen ? 'text-center px-4' : ''}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis odio, posuere eget fringilla ac, sodales a metus. Sed nec risus tincidunt, faucibus dui nec, suscipit justo. dolor sit amet, consectetur adipiscing elit. Nulla felis odio, posuere eget fringilla ac, sodales a metus. Sed nec risus tincidunt, faucibus dui nec, suscipit justo.
        </p>
        <button className={`btn btn-primary-new bg-custom-blue text-white py-2 px-4 rounded-full ${isXsScreen ? 'block mx-auto' : ''}`}>Download Placement Report</button>
      </div>
      
      {/* Right side image */}
      <div className={`w-full sm:w-full md:w-1/2 pl-4 flex justify-center sm:justify-end ${isXsScreen ? 'text-center' : ''}`}>
        <img src="/images/frame.png" alt="Frame" className={`rounded-lg ${isXsScreen ? 'w-80 h-72  mx-auto' : 'w-68 h-48'}`} />
      </div>
    </div>
  );
};

export default Placement;

