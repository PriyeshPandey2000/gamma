import React from 'react';
import JobBanner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CirclesWithLines from "@/components/CircleWithLines";
import Placement from "@/components/Placement";
import CoursesOffered from "@/components/CoursesOffered";
import "../styles/fonts.css"
import StudentsPlaced from "@/components/StudentsPlaced";
import CourseDetails from "@/components/CourseDetails";
import MentorsSection from "@/components/MentorsSection";
import { Faq } from '@/components/Faq';
import CourseCard from '@/components/CourseCard';
import Component from '@/components/SampleCard';
import Testimonial from '@/components/Testimonial';
import { Frame } from '@/components/MovingCard';
import { WhyGamma } from '@/components/WhyGamma';
import { Dppit } from '@/components/Dppit';
import { Placed } from '@/components/Placed';
import { GetInTouch } from '@/components/GetInTouch';
import { FollowUs } from '@/components/FollowUs';
import Strip3 from '@/components/Strip3';
import Strip1 from '@/components/Strip1';
import Strip2 from '@/components/Strip2';
import FrameComponent4 from '@/components/SampleDpiit';
import { useMediaQuery } from '@react-hook/media-query';
import Courses from '@/components/SlidingCards';
import Slider from '@/components/Slider';





export default function Home() {
 
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-[1300px] mb-10"> {/* Set specific width */}
      <div className="my-4 flex flex-col "> {/* Flexbox layout for vertical stacking */}
          <div className="relative mb-0"> {/* Added relative positioning and margin bottom */}
            <JobBanner />
          </div>
          <div className="relative "> {/* Added relative positioning */}
            <Placement/>
          </div>
        </div>
        {/* <div> */}
        </div>
        <div>
        <StudentsPlaced/>
        
        
        
        {/* <Frame/> */}
        <div className="container mx-auto max-w-[1180px] ">
        {/* <CoursesOffered/> */}
        <Courses/>
        
        </div>
        {/* <ChartBar/> */}
        {/* <CourseCard icon="/images/Tools.png" title="Specialised Skills and Tools " column1Heading="DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects" column1Para="Learn with real work experience and get guaranteed placement as a Full-Stack or Backend Developer at product-based companies.srgsmgsdmglsdmglmdl;gm;lsdmglsdmlgsmldglsdgmm;" /> */}
        <div className="mb-16 container mx-auto max-w-[1300px]">
          <Component/>
          
           </div>
           {/* <Slider/> */}
        
        <CourseDetails />
        </div>
        <Strip1 />
        <MentorsSection/>
        <Strip2/>
        <WhyGamma/>
        <div className="container mx-auto max-w-[1300px] flex flex-col">
  <div className="mb-5">
    <Dppit />
  </div>
  <div className="mb-18">
    <Faq />
  </div>
</div>
        
        <Strip3/>
        <div className="container mx-auto max-w-[1300px]">
        <Placed/>
        <Testimonial/>
        <GetInTouch/>
        </div>
        
      
      <FollowUs/>
      {/* <CirclesWithLines/> */}
    </div>
  );
}
