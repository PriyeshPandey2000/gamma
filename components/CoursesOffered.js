
"use client"



import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';
import axios from 'axios';






const CoursesOffered = () => {
  const router = useRouter(); 
  const [courses, setCourses] = useState([]);
  const [popularIndex, setPopularIndex] = useState(0);
  const [growthIndex, setGrowthIndex] = useState(0);
  const [imageIndexPopular, setImageIndexPopular] = useState(0);
  const [imageIndexGrowth, setImageIndexGrowth] = useState(0);
  const [imageIndexSpecialized, setImageIndexSpecialized] = useState(0);
  const [specializedIndex, setSpecializedIndex] = useState(0);
  const [currentPopularCourseId, setCurrentPopularCourseId] = useState(null);
  const [currentGrowthCourseId, setCurrentGrowthCourseId] = useState(null);
  const [currentSpecializedCourseId, setCurrentSpecializedCourseId] = useState(null);

  const handler = function() {
    
    router.push('/AllCourses'); // Navigate to AllCourses page
  };
  const handleLearnMore = (courseId) => {
    router.push(`/courses/online/${courseId}`);
  };

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
  

  useEffect(() => {
    const popularTimer = setInterval(() => {
      setPopularIndex((prevIndex) => (prevIndex + 1) % 3);
      setImageIndexPopular((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    const growthTimer = setInterval(() => {
      setGrowthIndex((prevIndex) => (prevIndex + 1) % 3);
      setImageIndexGrowth((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    const specializedTimer = setInterval(() => {
      setSpecializedIndex((prevIndex) => (prevIndex + 1) % 3);
      setImageIndexSpecialized((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(popularTimer);
      clearInterval(growthTimer);
      clearInterval(specializedTimer);
    };
  }, []);

  const images = ["/images/3-dot.png", "/images/Pagemiddle.png", "/images/Pagelast.png"];


  const popularCourses = courses.filter(course => course.category === 'Most Popular Course');
  const growthCourses = courses.filter(course => course.category === 'For Career Growth');
  const specializedCourses = courses.filter(course => course.category === 'Specialised Skills and Tools');


  
  
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
        <div className="[background:linear-gradient(99.28deg,_#fff,_#f1f4fb)] shadow-[0px_0px_10px_rgba(76,_76,_109,_0.07)] box-border border-[1px] border-solid border-#D1D1D6 rounded-lg  p-4  flex flex-col xs:mx-8 lg:w-4/5 lg:mx-auto lg:mr-0" >
          <div className="flex items-center mb-2">
            <img src="/images/trending.png" alt="Course 1 Image" className="w-5 h-5 rounded-full mr-3" />
            <h2 className="text-12px font-bold text-custom-red mb-0.5">Most Popular Course</h2>
          </div>
         
         
          {courses
            .filter((course) => course.category === 'Most Popular Course')
            .map((course, index) => (
              <div key={index} className={index === popularIndex ? 'block' : 'hidden'}>
                 <img src={`data:image/png;base64,${course.imageData}`} alt="Course 1" className="w-full rounded-lg mb-2" /> {/* Added image after the heading */}
                 <div className="description-container" style={{ height: '160px', overflow: 'auto' }}>
                <p className="text-12px font-semibold mb-2 text-custom-blue">{course.title}</p>
                
                <p className="text-gray-400 mb-2 " style={{ fontSize: '14px' }}>{course.description}</p>
                </div>
                <p className="text-black mb-4 font-semibold"  style={{ fontSize: '14px' }}>Course starts at : <span className="text-custom-blue">15 March</span></p> {/* Added text after the description */}
                <Link href={`/courses/online/course${index + 1}`}>
        <button className="btn btn-primary-new border border-blue-500 text-blue-500 rounded-full px-6 py-2">Learn More</button>
      </Link>
              </div>
            ))}
          {/* <p className="text-black mb-4 font-semibold"  style={{ fontSize: '14px' }}>Course starts at : <span className="text-custom-blue">15 March</span></p> Added text after the description */}
          {/* <Link href={`/courses/course${index + 1}`}>
        <a className="btn btn-primary-new border border-blue-500 text-blue-500 rounded-full px-0 py-2" style={{ width: 'auto' }}>Learn More</a>
      </Link> */}
          <div className="flex justify-center items-center mt-2">
          <img src={images[imageIndexPopular]} alt="Your Image" /> {/* Adjust the size and styling as needed */}
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="[background:linear-gradient(99.28deg,_#fff,_#f1f4fb)] shadow-[0px_0px_10px_rgba(76,_76,_109,_0.07)] box-border border-[1px] border-solid border-#D1D1D6 rounded-lg  p-4  flex flex-col xs:mx-8 lg:w-4/5 lg:mx-auto ">
          <div className="flex items-center mb-2">
            <img src="/images/Graph.png" alt="Course 2 Image" className="w-5 h-5 rounded-full mr-4" />
            <h2 className="text-12px font-bold text-custom-green mb-0.5">For Career Growth</h2>
          </div>
          
          
          {courses
            .filter((course) => course.category === 'For Career Growth')
            .map((course, index) => (
              <div key={index} className={index === popularIndex ? 'block' : 'hidden'}>
                <img src={`data:image/png;base64,${course.imageData}`} alt="Course 2" className="w-full rounded-lg mb-2" /> {/* Added image after the heading */}
                <div className="description-container" style={{ height: '160px', overflow: 'auto' }}>
                <p className="text-12px font-semibold mb-2 text-custom-blue">{course.title}</p>
               
                <p className="text-gray-400 mb-2 " style={{ fontSize: '14px' }}>{course.description}</p>
                </div>
                <p className="text-black mb-4 font-semibold"  style={{ fontSize: '14px' }}>Course starts at : <span className="text-custom-blue">15 March</span></p> {/* Added text after the description */}
                <Link href={`/courses/online/course${index + 4}`}>
        <button className="btn btn-primary-new border border-blue-500 text-blue-500 rounded-full px-6 py-2">Learn More</button>
      </Link>
                
              </div>
            ))}
         
          <div className="flex justify-center items-center mt-2">
          <img src={images[imageIndexGrowth]} alt="Your Image" /> {/* Adjust the size and styling as needed */}
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="[background:linear-gradient(99.28deg,_#fff,_#f1f4fb)] shadow-[0px_0px_10px_rgba(76,_76,_109,_0.07)] box-border border-[1px] border-solid border-#D1D1D6 rounded-lg  p-4 md:col-span-1 flex flex-col xs:mx-8 lg:w-4/5  lg:ml-0">
          <div className="flex items-center mb-2">
            <img src="/images/Tools.png" alt="Course 3 Image" className="w-5 h-5 rounded-full mr-4" />
            <h2 className="text-12px font-bold text-custom-blue mb-0.5">Specialised Skills and Tools</h2>
          </div>
           {/* Added image after the heading */}
          
          {courses
            .filter((course) => course.category === 'Specialized Skills and Tools')
            .map((course, index) => (
              <div key={index} className={index === popularIndex ? 'block' : 'hidden'}>
                <img src={`data:image/png;base64,${course.imageData}`} alt="Course 3" className="w-full rounded-lg mb-2" />
                <div className="description-container" style={{ height: '160px', overflow: 'auto' }}>
                <p className="text-12px font-semibold mb-2 text-custom-blue">{course.title}</p>
               
                <p className="text-gray-400 mb-2 " style={{ fontSize: '14px' }}>{course.description}</p>
                </div>
                <p className="text-black mb-4 font-semibold"  style={{ fontSize: '14px' }}>Course starts at : <span className="text-custom-blue">15 March</span></p> {/* Added text after the description */}
                <Link href={`/courses/online/course${index + 7}`}>
        <button className="btn btn-primary-new border border-blue-500 text-blue-500 rounded-full px-6 py-2">Learn More</button>
      </Link>
              </div>
            ))}
         
          <div className="flex justify-center items-center mt-2">
          <img src={images[imageIndexSpecialized]} alt="Your Image" />{/* Adjust the size and styling as needed */}
          </div>
        </div>
      </div>

      {/* View All Courses Button */}
      <div className="flex justify-center mt-4">
        <button  className="btn btn-primary-new border border-custom-blue  text-custom-blue rounded-full px-6 py-1" onClick={handler}>View All Courses</button>
      </div>
   
    </div>
  );
};

export default CoursesOffered;
