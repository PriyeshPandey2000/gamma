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
import React from 'react'
import "tailwindcss/tailwind.css"

function SingleCourse() {
    const courseId="6611c032467c3ba9ab016963"
  return (
    <div>
        <App/>
      
        <SBanner3Online
  title="Software Testing with Selenium"
  description="For Quality Assurance Professionals
  For Test Automation Engineers
  For Software Testing Specialists
  "
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