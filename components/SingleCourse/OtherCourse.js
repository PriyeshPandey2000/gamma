"use client"
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import axios from 'axios';


function Other() {
  const [isXsScreen, setIsXsScreen] = useState(false);
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/users/courses');
        console.log('Response data:', response.data);
        console.log(response.data.data[0].title);
      if (Array.isArray(response.data.data)) { // Access response.data.data
        setCourses(response.data.data);
      
        } else {
          console.error('Invalid response data structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);


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
  const getRandomCourses = () => {
    const randomCourses = [];
    const numCourses = courses.length;
    while (randomCourses.length < 3) {
      const randomIndex = Math.floor(Math.random() * numCourses);
      randomCourses.push(courses[randomIndex]);
    }
    return randomCourses;
  };

  const randomCourses = getRandomCourses();

  const isXsScreenMediaQuery = useMediaQuery('(max-width: 639px)');
  return (
    <div className="flex flex-col mt-11 mb-7">
    <div className={`w-full text-2xl font-semibold leading-8 text-black max-md:max-w-full ${isXsScreen ? 'font-hiragino-mincho-xssssss' : 'font-hiragino-mincho-pro-center-small-left'}`}>
      Our Other Courses
    </div>
    <div className="px-5 mt-10 w-full max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {courses.length > 0 && randomCourses.map((course, index) => (
          <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-4 w-full text-base rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:mt-9 max-md:max-w-full">
              <img
                loading="lazy"
                src={`data:image/png;base64,${course.imageData}`}
                className="w-full aspect-[2] max-md:max-w-full "
              />
              <div className="mt-3 text-lg font-medium leading-8 text-sky-800 max-md:max-w-full">
                {course.title}
              </div>
              <div className="mt-2 leading-6 text-zinc-700 text-opacity-60 max-md:max-w-full">
                {course.description}
              </div>
              <div className="flex gap-1 self-start mt-6">
                {/* <div className="text-black leading-[160%]">
                  Course Starts at :
                </div>
                <div className="font-medium text-center text-sky-800 leading-[133%]">
                  {course.startDate}
                </div> */}
              </div>
              <div className="justify-center self-start px-5 py-3 mt-6 font-medium text-center text-sky-800 border border-sky-800 border-solid leading-[133%] rounded-[63px]">
                Learn More
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Other;
