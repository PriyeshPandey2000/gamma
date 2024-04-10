"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Login from '@/pages/Login';
import { useRouter } from 'next/navigation'; 
import dynamic from "next/dynamic";
import axios from 'axios';
// import { isLoggedIn } from '@/app/helpers/auth';
import { isLoggedIn } from '@/app/helpers/auth';
import { useAuth } from '@/contexts/AuthContext';


const Navbar = ( ) => {
 
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  console.log('isLoggedIn:', isLoggedIn);
  const router = useRouter(); 
  

  

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

  const handleLogout = async () => {
    console.log('Logging out...');

    try {
      await logout(); // Call the logout function from useAuth hook
      router.push('/'); // Redirect to home page after logout
    } catch (error) {
      console.error('Logout error:', error.message);
      // Handle logout error and provide feedback to the user
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  // const authenticated = isLoggedIn();

  return (
    <nav className={`bg-white py-${isMobile ? '2' : '4'} px-${isMobile ? '3' : '4'} ${isMobile ? 'flex justify-between items-center ' : ''}`} >
      <div className=" w-full flex justify-between items-center"> {/* Add w-full class */}
        {/* Dropdown icon and menu */}
        {isMobile && (
          <div className="relative">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6 fill-current text-custom-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
        <div className={`flex items-center ${isMobile ? 'ml-2' : 'ml-4'} ${isMobile && showMenu ? 'ml-8' : ''}`}>
          <a href="#">
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
        {isLoggedIn ? (
          <button onClick={handleLogout} className="border border-custom-blue text-blue-900 px-3 py-1 rounded-full text-sm hover:bg-blue-100">Logout</button>
        ) : (
          <div className={`flex items-center space-x-4 ${isMobile ? 'ml-auto' : ''}`}>
            <Link href="/Login">
              <button className="border border-custom-blue text-blue-900 px-3 py-1 rounded-full text-sm hover:bg-blue-100">Login</button>
            </Link>
            <Link href="/Signup">
              <button className={`bg-custom-blue text-white px-4 py-1 rounded-full text-sm hover:bg-blue-800 ${isMobile ? 'w-18 ' : 'mr-4'}`}>Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

// export default Navbar;
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
