"use client"
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Dropdown icon and menu */}
        {isMobile && (
          <div className="relative">
            <button onClick={toggleMenu} className="focus:outline-none ml-4">
              <svg className="w-6 h-6 fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3 6h18v2H3V6zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
              </svg>
            </button>
            {showMenu && (
              <div className="absolute mt-2 ml-0 sm:ml-4 w-48 bg-white rounded-lg shadow-xl z-10">
                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">About Us</a>
                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Testimonials</a>
                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Hire from Us</a>
                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">FAQ</a>
                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Contact Us</a>
              </div>
            )}
          </div>
        )}

        {/* Logo on the left side */}
        <div className="flex items-center ml-4">
          <a href="#" className={`ml-4 ${isMobile && showMenu ? 'ml-8' : ''}`}>
            <img src="/images/logo.png" alt="Logo" className="h-8" />
          </a>
        </div>

        {/* Navigation items for larger screens */}
        {!isMobile && (
          <div className="hidden md:flex items-center space-x-6 ml-auto mr-6">
            <a href="#" className="text-sm text-black hover:text-gray-300">About Us</a>
            <a href="#" className="text-sm text-black hover:text-gray-300">Testimonials</a>
            <a href="#" className="text-sm text-black hover:text-gray-300">Hire from Us</a>
            <a href="#" className="text-sm text-black hover:text-gray-300">FAQ</a>
            <a href="#" className="text-sm text-black hover:text-gray-300">Contact Us</a>
          </div>
        )}

        {/* Login and Signup buttons */}
        <div className="flex items-center space-x-4">
          <button className="border border-blue-900 text-blue-900 px-3 py-1 rounded-full text-sm hover:bg-blue-100">Login</button>
          <button className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-800 mr-4">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
