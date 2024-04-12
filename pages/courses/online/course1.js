import { FollowUs } from '@/components/FollowUs'
import App from '@/components/LoginNav'
import Navbar from '@/components/Navbar'
import Benefit from '@/components/SingleCourse/Benefits'
import Other from '@/components/SingleCourse/OtherCourse'
import Require from '@/components/SingleCourse/Requirements'
import SBanner from '@/components/SingleCourse/SBanner'
import SBannerOnline1 from '@/components/SingleCourse/SBannerOnline1'
import StudentsPlaced from '@/components/StudentsPlaced'
import React from 'react'
import "tailwindcss/tailwind.css";
import { useRouter } from 'next/router';

function SingleCourse() {
    const courseId = "6611bed1467c3ba9ab016953";
    const router = useRouter();
    const handleDashboardClick = () => {
        router.push('/courses/offline/course1');
      };
  return (
    <div>
        <App/>
        
      
        <SBannerOnline1
  title="DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects"
  description="DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  reviewRating="4.0"
  reviewCount={230}
  studentsPlaced={329}
  courseId={courseId}
/>
        <div className="justify-start">
        <div className="container md:ml-10 max-w-[850px]  xs:ml-0 ">
        <Benefit />
        </div>
        </div>
        <Require/>
       
        <StudentsPlaced/>
        <div className="container mx-auto max-w-[1200px]  ">
        <Other/>
        </div>
        <FollowUs/>
        </div>
  )
}

export default SingleCourse