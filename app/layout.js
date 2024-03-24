"use client"
import React from 'react';
import { useEffect } from "react"; // Import useEffect if necessary
import PropTypes from "prop-types"; // Import PropTypes for prop validation
// import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  useEffect(() => {
    inter.load();
    return () => inter.cleanup();
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default RootLayout;
