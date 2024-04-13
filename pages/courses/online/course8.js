import { FollowUs } from '@/components/FollowUs'
import App from '@/components/LoginNav'
import Navbar from '@/components/Navbar'
import Benefit from '@/components/SingleCourse/Benefits'
import Other from '@/components/SingleCourse/OtherCourse'
import Require from '@/components/SingleCourse/Requirements'
import SBanner from '@/components/SingleCourse/SBanner'
import SBanner3 from '@/components/SingleCourse/SBanner3'
import SBanner3Online from '@/components/SingleCourse/SBanner3Online'
import StudentsPlaced from '@/components/StudentsPlaced'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css"

function SingleCourse() {
    const courseId = "6611c028467c3ba9ab016961";
    const [course, setCourse] = useState(null);
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const handleDashboardClick = () => {
        router.push('/courses/offline/course1');
      };
       useEffect(() => {
    async function fetchCourse() {
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
      
          setCourse(specificCourse);
        const userResponse = await fetch('/api/users/me');
                if (!userResponse.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const userData = await userResponse.json();
                console.log('User data:', userData);
                setUser(userData.data);
      } catch (error) {
        console.error('Error fetching course:', error);
      }finally {
        setIsLoading(false);
    }
    }

    if (courseId) {
      fetchCourse();
    }
  }, [courseId]);
  const canEnroll = !isLoading && (!user || !user.purchasedCourses || !user.purchasedCourses.includes(courseId));
  return (
    <div>
        <App/>
      
        {course && ( <SBanner3Online
 title={course.title}
 description={course.longDescription}
 reviewRating={course.rating.$numberDecimal.toString()}
 reviewCount={course.totalReviews}
 studentsPlaced={329}
 courseId={courseId}
 canEnroll={canEnroll}
  course={course}
/>
       )}
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