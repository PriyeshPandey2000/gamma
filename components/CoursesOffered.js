// CoursesOffered.js
"use client"
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';






const CoursesOffered = () => {
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
    <div className="w-full   my-8">
      <h1 className={`text-3xl font-bold text-black-800 mb-4 text-center ${isXsScreen ? 'font-hiragino-mincho-xs' : 'font-hiragino-mincho-pro-center'}`}>Courses Offered</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3  justify-center ">
        {/* Card 1 */}
        <div className="[background:linear-gradient(99.28deg,_#fff,_#f1f4fb)] shadow-[0px_0px_10px_rgba(76,_76,_109,_0.07)] box-border border-[1px] border-solid border-#D1D1D6 rounded-lg  p-4  flex flex-col xs:mx-8 lg:w-4/5 lg:mx-auto lg:mr-0">
          <div className="flex items-center mb-2">
            <img src="/images/trending.png" alt="Course 1 Image" className="w-5 h-5 rounded-full mr-3" />
            <h2 className="text-12px font-bold text-custom-red mb-0.5">Most Popular Course</h2>
          </div>
          <img src="/images/courseimage.png" alt="Course 1" className="w-full rounded-lg mb-2" /> {/* Added image after the heading */}
         
          <h3 className="text-12px font-semibold mb-2 text-custom-blue">DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects</h3>
          <p className="text-4px text-gray-400 mb-2" style={{ fontSize: '14px' }}>DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.</p>
          <p className="text-black mb-4 font-semibold"  style={{ fontSize: '14px' }}>Course starts at : <span className="text-custom-blue">15 March</span></p> {/* Added text after the description */}
          <button className="btn btn-primary-new border border-blue-500 text-blue-500 rounded-full px-0 py-2 "  style={{ width: 'auto' }}>Learn More</button>
          <div className="flex justify-center items-center mt-2">
            <img src="/images/3-dot.png" alt="Your Image"  /> {/* Adjust the size and styling as needed */}
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="[background:linear-gradient(99.28deg,_#fff,_#f1f4fb)] shadow-[0px_0px_10px_rgba(76,_76,_109,_0.07)] box-border border-[1px] border-solid border-#D1D1D6 rounded-lg  p-4  flex flex-col xs:mx-8 lg:w-4/5 lg:mx-auto ">
          <div className="flex items-center mb-2">
            <img src="/images/Graph.png" alt="Course 2 Image" className="w-5 h-5 rounded-full mr-4" />
            <h2 className="text-12px font-bold text-custom-green mb-0.5">For Career Growth</h2>
          </div>
          <img src="/images/courseimage.png" alt="Course 2" className="w-full rounded-lg mb-2" /> {/* Added image after the heading */}
          
          <h3 className="text-12px font-semibold mb-2 text-custom-blue">DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects</h3>
          <p className="text-gray-400 mb-2 " style={{ fontSize: '14px' }}>DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.</p>
          <p className="text-black mb-4 font-semibold"  style={{ fontSize: '14px' }}>Course starts at : <span className="text-custom-blue">15 March</span></p> {/* Added text after the description */}
          <button className="btn btn-primary-new border border-blue-500 text-blue-500 rounded-full px-6 py-2">Learn More</button>
          <div className="flex justify-center items-center mt-2">
            <img src="/images/3-dot.png" alt="Your Image"  /> {/* Adjust the size and styling as needed */}
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="[background:linear-gradient(99.28deg,_#fff,_#f1f4fb)] shadow-[0px_0px_10px_rgba(76,_76,_109,_0.07)] box-border border-[1px] border-solid border-#D1D1D6 rounded-lg  p-4 md:col-span-1 flex flex-col xs:mx-8 lg:w-4/5  lg:ml-0">
          <div className="flex items-center mb-2">
            <img src="/images/Tools.png" alt="Course 3 Image" className="w-5 h-5 rounded-full mr-4" />
            <h2 className="text-12px font-bold text-custom-blue mb-0.5">Specialised Skills and Tools</h2>
          </div>
          <img src="/images/courseimage.png" alt="Course 3" className="w-full rounded-lg mb-2" /> {/* Added image after the heading */}
          
          <h3 className="text-12px font-semibold mb-2 text-custom-blue">DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects</h3>
          <p className="text-gray-400 mb-2" style={{ fontSize: '14px' }}>DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.</p>
          <p className="text-black mb-4 font-semibold"  style={{ fontSize: '14px' }}>Course starts at : <span className="text-custom-blue">15 March</span></p> {/* Added text after the description */}
          <button className="btn btn-primary-new border border-blue-500 text-blue-500 rounded-full px-6 py-2">Learn More</button>
          <div className="flex justify-center items-center mt-2">
            <img src="/images/3-dot.png" alt="Your Image"  /> {/* Adjust the size and styling as needed */}
          </div>
        </div>
      </div>

      {/* View All Courses Button */}
      <div className="flex justify-center mt-4">
        <button className="btn btn-primary-new border border-custom-blue  text-custom-blue rounded-full px-6 py-1">View All Courses</button>
      </div>
   
    </div>
  );
};

export default CoursesOffered;
