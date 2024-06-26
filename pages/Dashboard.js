import DashGrid from '@/components/DashGrid'
import DashText from '@/components/DashText'
import { FollowUs } from '@/components/FollowUs'
import { GetInTouch } from '@/components/GetInTouch'
import Navbar from '@/components/Navbar'
import React, { useState, useEffect } from 'react';
import DashTiles from '@/components/DashTiles';
import axios from 'axios';
import '../styles/fonts.css';
import { useMediaQuery } from '@react-hook/media-query';

import "tailwindcss/tailwind.css"

function Dashboard() {
    const [purchasedCourses, setPurchasedCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchPurchasedCourses = async () => {
          try {
            // Fetch user data to obtain the purchased course IDs
            const userResponse = await axios.get('/api/users/me');
            const purchasedCourseIds = userResponse.data.data.purchasedCourses;
    
            // Fetch all courses
            const allCoursesResponse = await axios.get('/api/users/courses');
            const allCourses = allCoursesResponse.data.data;
    
            // Filter courses based on purchased course IDs
            const filteredCourses = allCourses.filter(course => purchasedCourseIds.includes(course._id));
            
            setPurchasedCourses(filteredCourses);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching purchased courses:', error);
            setLoading(false);
          }
        };
    
        fetchPurchasedCourses();
      }, []);
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
    <div>
        <Navbar/>
        <div className="container mx-auto max-w-[1200px]   ">
        <DashText/>
        <DashTiles/>
        <div className="flex flex-wrap justify-between">
        {loading ? (
          <div>Loading...</div> // Render a loading indicator
        ) : purchasedCourses.length > 0 ? (
         purchasedCourses.map((course, index) => (
            <DashGrid
              key={index}
              title={course.title}
              description={course.description}
            />
          ))
        ) : (
          <div>No purchased courses yet</div> // Render a message when there are no purchased courses
        )}
        </div>

        </div>
        <FollowUs/>
    </div>
  )
}

export default Dashboard