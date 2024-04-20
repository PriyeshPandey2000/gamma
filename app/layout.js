"use client";
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from 'react-hot-toast';
import dynamic from "next/dynamic";
// import { useRouter } from 'next/router';
// import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth'
// import Provider from '@/components/Provider';
// import SessionProvider from '@/components/Provider';
import { SessionProvider } from 'next-auth/react';
import Navbar from '@/components/Navbar';

import Authprovider from '@/components/AuthProvider/AuthProvider';






const RootLayout = ({ children }) => {
  
  useEffect(() => {
    const loadFonts = () => {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    };

    loadFonts(); // Load fonts on initial render

    // Event listener for window resizing
    const handleResize = () => {
      const customScreens = {
        'xs': '(min-width: 300px) and (max-width: 640px)',
        'sm': '(min-width: 641px) and (max-width: 768px)',
        'md': '(min-width: 769px) and (max-width: 1024px)',
        'lg': '(min-width: 1025px) and (max-width: 1280px)',
        'xl': '(min-width: 1281px) and (max-width: 1536px)',
        '2xl': '(min-width: 1537px)',
      };

      let isMobile = false;

      // Check if any custom screen matches
      Object.keys(customScreens).forEach((size) => {
        if (window.matchMedia(customScreens[size]).matches) {
          isMobile = true;
          document.documentElement.style.setProperty('--is-mobile', '1');

          // Adjust viewport scale for xs size
          if (size === 'xs') {
            document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0');
          }
        }
      });

      if (!isMobile) {
        document.documentElement.style.setProperty('--is-mobile', '0');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  //  useEffect(() => {
  //   const isBrowser = typeof window !== 'undefined';
  //   if (isBrowser) {
  //   // require('react-hot-toast/index.css');
  //     const toastContainer = document.createElement('div');
  //     document.body.appendChild(toastContainer);
  //     return () => {
  //       document.body.removeChild(toastContainer);
  //     };
  //   }
  // }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      {/* <AuthProvider> */}
      
      <html lang="en">
      
      
        <body>
       
       <Authprovider>
      
        <Toaster position="top-center"/>
        
   {children}
    
   </Authprovider>
     </body>
       
      </html>
      
      
      {/* </AuthProvider> */}
     
    </>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  
};

export default RootLayout;
// export default dynamic(() => Promise.resolve(RootLayout), { ssr: false });
// export default dynamic (() => Promise.resolve(RootLayout), {ssr: false});
