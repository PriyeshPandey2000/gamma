// CourseDetails.js
"use client"

import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';


const CourseDetails = () => {
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
    <div className="text-center">
      <h2 className={`text-2xl  mb-4 ${isXsScreen ? 'font-hiragino-mincho-xs' : 'font-hiragino-mincho-pro-center'}`}>Course Details</h2>
      <p className="mb-8 px-3">Gammaprep placement Bootcamp is a single course that will provide a complete placement package. Our Bootcamp starts with the very basics of coding (we assume that you don't know anything!) and then moves to advanced level Data Structure and Algorithms and solve so many problems which are important for companies like Amazon, Google, Microsoft, IBM, etc. then you will start with Full Stack Development and then Data Science and Analytics Not only this, you will create A full-stack working project, A Front End project, and A Machine Learning Project. What else? You will learn core CS subjects like DBMS, OOPS, and OS. Also, Aptitude and Verbal which is a must for placements. The best part is, you will have live doubt classes and Assured referrals in companies like Amazon, Microsoft, PayPal, Oracle etc. Also you will get assured paid internship and projects at Gammainnovations.com</p>
      <div className="flex justify-center mb-12">
     
          <img className="w-full sm:w-1/2" src="/images/stats.png" alt="Course Image"  />
        
      </div>
    </div>
  );
};

export default CourseDetails;
