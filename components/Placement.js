// Placement.js

import React from 'react';

const Placement = () => {
  return (
    <div className="container mx-auto flex justify-between items-center my-8">
      {/* Left side content */}
      <div className="w-1/2 pr-4">
        <h2 className="text-3xl font-bold text-black mb-4">Placement Report</h2>
        <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis odio, posuere eget fringilla ac, sodales a metus. Sed nec risus tincidunt, faucibus dui nec, suscipit justo. dolor sit amet, consectetur adipiscing elit. Nulla felis odio, posuere eget fringilla ac, sodales a metus. Sed nec risus tincidunt, faucibus dui nec, suscipit justo.</p>
        <button className="btn btn-primary-new bg-blue-800 text-white py-2 px-4 rounded-full">Download Placement Report</button>
      </div>
      
      {/* Right side image */}
      <div className="w-1/2 pl-4 flex justify-end"> {/* Added flex justify-end to shift image to the extreme right */}
        <img src="/images/frame.png" alt="Frame" className="w-68 h-48 rounded-lg" /> {/* Increased width and height */}
      </div>
    </div>
  );
};

export default Placement;
