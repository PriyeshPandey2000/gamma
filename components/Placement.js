"use client"
import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';

const Placement = () => {
  const isXsScreen = useMediaQuery('(max-width: 640px)');
  return (
    <div className="w-full mx-auto flex flex-col sm:flex-row justify-between items-center my-8">
      {/* Left side content */}
      <div className="w-full sm:w-full md:w-1/2 pr-4">
        <h2 className={`text-3xl font-bold text-black mb-4 font-hiragino-mincho-pro ${isXsScreen ? 'font-hiragino-mincho-s' : ''}`}>Placement Report</h2>
        <p className={`text-gray-700 mb-4 sm:w-full ${isXsScreen ? ' text-center px-4' : ''}`}> {/* Set full width for sm screens */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis odio, posuere eget fringilla ac, sodales a metus. Sed nec risus tincidunt, faucibus dui nec, suscipit justo. dolor sit amet, consectetur adipiscing elit. Nulla felis odio, posuere eget fringilla ac, sodales a metus. Sed nec risus tincidunt, faucibus dui nec, suscipit justo.
        </p>
        <button className={`btn btn-primary-new bg-blue-800 text-white py-2 px-4 rounded-full ${isXsScreen ? 'block mx-auto' : ''}`}>Download Placement Report</button>
      </div>
      
      {/* Right side image */}
      <div className="w-full sm:w-full md:w-1/2 pl-4 flex justify-center sm:justify-end">
        <img src="/images/frame.png" alt="Frame" className={`rounded-lg ${isXsScreen ? 'w-80 h-72 mr-5' : 'w-68 h-48'}`} />
      </div>
    </div>
  );
};

export default Placement;
