import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import Congrats from '@/components/Congrats';
import "tailwindcss/tailwind.css"
import Navbar from '@/components/Navbar';
import { FollowUs } from '@/components/FollowUs';
function Success  ()  {
  const router = useRouter();
 

  useEffect(() => {
    // Retrieve courseId and userId from cookies
    const courseId = Cookies.get('courseId');
    const userId = Cookies.get('userId');
     

    if (courseId && userId) {
      // Send POST request to addcourse route
      axios.post('/api/users/addcourse', {
        userId: userId,
        courseId: courseId,
        paymentStatus: 'PAYMENT_SUCCESS' // You can include the payment status
      })
      .then(response => {
        console.log('Course added successfully:', response.data);
        // Clear courseId and userId cookies
        Cookies.remove('courseId');
        Cookies.remove('userId');
        // Redirect to home page or any other page as needed
        // router.push('/');
      })
      .catch(error => {
        console.error('Error adding course:', error);
        // Clear courseId and userId cookies
        Cookies.remove('courseId');
        Cookies.remove('userId');
        // Redirect to failure page or handle error as needed
        router.push('/failure');
      });
    } else {
      console.error('Course ID or User ID not found in cookies');
      // Redirect to failure page or handle error as needed
      router.push('/failure');
    }
  }, []);

   // Or render a success message if needed


  return (
    <div>
       <Navbar/>
       <div className="container mx-auto max-w-[1100px]  ">
       
      <Congrats/>
     
      </div>
      <FollowUs/>
    </div>
  )
}

export default Success;