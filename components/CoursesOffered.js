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
    <div className="w-full mx-auto my-8">
      <h1 className={`text-3xl font-bold text-black-800 mb-4 text-center ${isXsScreen ? 'font-hiragino-mincho-xs' : 'font-hiragino-mincho-pro-center'}`}>Courses Offered</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 md:col-span-1 flex flex-col xs:mx-8">
          <div className="flex items-center mb-2">
            <img src="/images/trending.png" alt="Course 1 Image" className="w-6 h-6 rounded-full mr-4" />
            <h2 className="text-xl font-semibold text-red-500 mb-0.5">Most Popular Course</h2>
          </div>
          <img src="/images/courseimage.png" alt="Course 1" className="w-full rounded-lg mb-2" /> {/* Added image after the heading */}
         
          <h3 className="text-lg font-semibold mb-1 text-custom-blue">DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects</h3>
          <p className="text-gray-600 mb-2">DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.</p>
          <p className="text-gray-600 mb-4">Course starts on 15 March</p> {/* Added text after the description */}
          <button className="btn btn-primary-new border border-blue-500 text-blue-500 rounded-full px-6 py-2">Button 1</button>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 md:col-span-1 flex flex-col xs:mx-8">
          <div className="flex items-center mb-2">
            <img src="/images/Graph.png" alt="Course 2 Image" className="w-6 h-6 rounded-full mr-4" />
            <h2 className="text-xl font-semibold text-green-500 mb-0.5">For Career Growth</h2>
          </div>
          <img src="/images/courseimage.png" alt="Course 2" className="w-full rounded-lg mb-2" /> {/* Added image after the heading */}
          
          <h3 className="text-lg font-semibold mb-1 text-custom-blue">DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects</h3>
          <p className="text-gray-600 mb-2 ">DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.</p>
          <p className="text-gray-600 mb-4">Course starts on 15 March</p> {/* Added text after the description */}
          <button className="btn btn-primary-new border border-blue-500 text-blue-500 rounded-full px-6 py-2">Button 2</button>
        </div>
        
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 md:col-span-1 flex flex-col xs:mx-8">
          <div className="flex items-center mb-2">
            <img src="/images/Tools.png" alt="Course 3 Image" className="w-6 h-6 rounded-full mr-4" />
            <h2 className="text-xl font-semibold text-custom-blue mb-0.5">Specialised Skills and Tools</h2>
          </div>
          <img src="/images/courseimage.png" alt="Course 3" className="w-full rounded-lg mb-2" /> {/* Added image after the heading */}
          
          <h3 className="text-lg font-semibold mb-1 text-custom-blue">DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects</h3>
          <p className="text-gray-600 mb-2">DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.</p>
          <p className="text-gray-600 mb-4">Course starts on 15 March</p> {/* Added text after the description */}
          <button className="btn btn-primary-new border border-blue-500 text-blue-500 rounded-full px-6 py-2">Button 3</button>
        </div>
      </div>

      {/* View All Courses Button */}
      <div className="flex justify-center mt-4">
        <button className="btn btn-primary-new bg-blue-800 text-white rounded-full px-6 py-2">View All Courses</button>
      </div>
   
    </div>
  );
};

export default CoursesOffered;
