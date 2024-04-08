import { FollowUs } from '@/components/FollowUs'
import App from '@/components/LoginNav'
import Navbar from '@/components/Navbar'
import Benefit from '@/components/SingleCourse/Benefits'
import Other from '@/components/SingleCourse/OtherCourse'
import Require from '@/components/SingleCourse/Requirements'
import SBanner from '@/components/SingleCourse/SBanner'
import SBanner3 from '@/components/SingleCourse/SBanner3'
import StudentsPlaced from '@/components/StudentsPlaced'
import React from 'react'
import "tailwindcss/tailwind.css"

function SingleCourse() {
  return (
    <div>
        <App/>
      
        <SBanner3
  title="DevOps and Cloud
  "
  description="Includes Azure/AWS
  Data Visualization
  DevOps
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