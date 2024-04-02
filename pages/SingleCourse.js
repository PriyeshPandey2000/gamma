import { FollowUs } from '@/components/FollowUs'
import App from '@/components/LoginNav'
import Navbar from '@/components/Navbar'
import Benefit from '@/components/SingleCourse/Benefits'
import Other from '@/components/SingleCourse/OtherCourse'
import Require from '@/components/SingleCourse/Requirements'
import SBanner from '@/components/SingleCourse/SBanner'
import StudentsPlaced from '@/components/StudentsPlaced'
import React from 'react'
import "tailwindcss/tailwind.css"

function SingleCourse() {
  return (
    <div>
        <App/>
      
        <SBanner/>
        <div className="container mx-auto max-w-[900px]  ">
        <Benefit/>
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