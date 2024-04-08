import { FollowUs } from '@/components/FollowUs'
import App from '@/components/LoginNav'
import Navbar from '@/components/Navbar'
import Benefit from '@/components/SingleCourse/Benefits'
import Other from '@/components/SingleCourse/OtherCourse'
import Require from '@/components/SingleCourse/Requirements'
import SBanner from '@/components/SingleCourse/SBanner'
import SBanner2 from '@/components/SingleCourse/SBanner2'
import StudentsPlaced from '@/components/StudentsPlaced'
import React from 'react'
import "tailwindcss/tailwind.css"

function SingleCourse() {
  return (
    <div>
        <App/>
      
        <SBanner2
  title="Complete Java Development with Spring Boot
  "
  description="Learn Java Basics to Advanced concepts
  Including DSA and Development
  Includes Live Projects
  "
  reviewRating="4.0"
  reviewCount={230}
  studentsPlaced={329}
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