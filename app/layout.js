"use client";
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import './globals.css';

// Import the Inter font directly from Google Fonts
const RootLayout = ({ children }) => {
  useEffect(() => {
    // No need to import Inter from next/font/google, as we are loading it directly from Google Fonts
    // Load the Inter font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Clean up the Inter font
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
