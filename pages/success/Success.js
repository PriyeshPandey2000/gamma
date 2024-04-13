import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import Congrats from '@/components/Congrats';
import "tailwindcss/tailwind.css"
import Navbar from '@/components/Navbar';
import { FollowUs } from '@/components/FollowUs';
function Success  ()  {
  const router = useRouter();
  const [course, setCourse] = useState('');
 

  useEffect(() => {
    // Retrieve courseId and userId from cookies
    const courseId = Cookies.get('courseId');
    const userId = Cookies.get('userId');

    if (courseId && userId) {
      // Fetch course details based on courseId
      const fetchCourse = async () => {
        try {
          const allCoursesResponse = await fetch('/api/users/courses');
          if (!allCoursesResponse.ok) {
            throw new Error('Failed to fetch courses');
          }
          const allCoursesData = await allCoursesResponse.json();
          const allCourses = allCoursesData.data;
          const specificCourse = allCourses.find(course => course._id === courseId);
          if (!specificCourse) {
            throw new Error('Course not found');
          }
          // Set the title state with the fetched course title
          setCourse(specificCourse);

          // Send POST request to addcourse route
          await axios.post('/api/users/addcourse', {
            userId: userId,
            courseId: courseId,
            paymentStatus: 'PAYMENT_SUCCESS' // You can include the payment status
          });
          console.log('Course added successfully');
          // Clear courseId and userId cookies
          // Cookies.remove('courseId');
          // Cookies.remove('userId');
          // Redirect to home page or any other page as needed
          // router.push('/');
        } catch (error) {
          console.error('Error adding course:', error);
          // Clear courseId and userId cookies
          // Cookies.remove('courseId');
          // Cookies.remove('userId');
          // Redirect to failure page or handle error as needed
          router.push('/failure/Failure');
        }
      };
      fetchCourse();
    } else {
      console.error('Course ID or User ID not found in cookies');
      // Redirect to failure page or handle error as needed
      router.push('/failure/Failure');
    }
  }, []);

   // Or render a success message if needed


  return (
    <div>
       <Navbar/>
       <div className="container mx-auto max-w-[900px]  mt-7 mb-9">
       
       {course && <Congrats course={course} />}
     
      </div>
      <FollowUs/>
    </div>
  )
}

export default Success;