"use client"
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
import MyComponent from '@/pages/AllCourses';
import AllCourses from '@/pages/AllCourses';
import AssessmentOptions from '@/components/AssesmentOptions';
import SingleCourse from '@/pages/SingleCourse';
import SBanner from '@/components/SingleCourse/SBanner';
import Signup from '@/components/Signup';
import Login from '@/components/Login';

import useAuthStore from '@/stores/authStore';
import Authprovider from '@/components/AuthProvider/AuthProvider';
import { SessionProvider } from 'next-auth/react';








export default function Home() {
  const { isLoggedIn } = useAuthStore();
 
  return (
    <>
    <Authprovider>
    <div>
      <Navbar />
      {/* <div className="container mx-auto max-w-[1080px] "> */}
      {/* <Signup/>
      <Login/> */}
      {/* </div> */}
      
      
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
       
        {/* <AllCourses/> */}
        {/* <Asessment/> */}
        {/* <SingleCourse/> */}
       
        
        
        
        {/* <Frame/> */}
        <div className="container mx-auto max-w-[1180px] ">
          <CoursesOffered/>
        {/* <CoursesOffered/> */}
        {/* <Courses/> */}
        
        </div>
        {/* <ChartBar/> */}
        {/* <CourseCard icon="/images/Tools.png" title="Specialised Skills and Tools " column1Heading="DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects" column1Para="Learn with real work experience and get guaranteed placement as a Full-Stack or Backend Developer at product-based companies.srgsmgsdmglsdmglmdl;gm;lsdmglsdmlgsmldglsdgmm;" /> */}
        {/* <div className="mb-16 container mx-auto max-w-[1300px]">
          <Component/>
          
           </div> */}
           {/* <div className="mb-8 mt-5"> <Slider/></div> */}
          
        
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
        <Testimonial testimonials={[
    {
      title: "Preeti Josh",
      company: "Placed at Amazon",
      description: "Gammaprep did a fantastic job. Their content is so well structured, have live classes, good projects and most important good mentors. The",
      image: "https://file.rendit.io/n/ZHdzQXiIfAyinm81Vutr.svg",
      alt: "Ellipse"
    },
    {
      title: "Preeti Josh",
      company: "Placed at Amazon",
      description: "Gammaprep did a fantastic job. Their content is so well structured, have live classes, good projects and most important good mentors. They helped me at every thick and thins to get skilled and interview calls. I would recommend Gammaprep to everyone.",
      image: "https://file.rendit.io/n/ZHdzQXiIfAyinm81Vutr.svg",
      alt: "Ellipse"
    },
    {
      title: "Preeti Josh",
      company: "Placed at Amazon",
      description: "Gammaprep did a fantastic job. Their content is so well structured, have live classes, good projects and most important good mentors. They helped me at every thick and thins to get skilled and interview calls. I would recommend Gammaprep to everyone.",
      image: "https://file.rendit.io/n/ZHdzQXiIfAyinm81Vutr.svg",
      alt: "Ellipse"
    },
    {
      title: "Preeti Josh",
      company: "Placed at Amazon",
      description: "Gammaprep did a fantastic job. Their content is so well structured, have live classes, good projects and most important good mentors. They helped me at every thick and thins to get skilled and interview calls. I would recommend Gammaprep to everyone.",
      image: "https://file.rendit.io/n/ZHdzQXiIfAyinm81Vutr.svg",
      alt: "Ellipse"
    },
    {
      title: "Preeti Josh",
      company: "Placed at Amazon",
      description: "Gammaprep did a fantastic job. Their content is so well structured, have live classes, good projects and most important good mentors. They helped me at every thick and thins to get skilled and interview calls. I would recommend Gammaprep to everyone.",
      image: "https://file.rendit.io/n/ZHdzQXiIfAyinm81Vutr.svg",
      alt: "Ellipse"
    },
    {
      title: "Preeti Josh",
      company: "Placed at Amazon",
      description: "Gammaprep did a fantastic job. Their content is so well structured, have live classes, good projects and most important good mentors. They helped me at every thick and thins to get skilled and interview calls. I would recommend Gammaprep to everyone.",
      image: "https://file.rendit.io/n/ZHdzQXiIfAyinm81Vutr.svg",
      alt: "Ellipse"
    },
    {
      title: "Preeti Josh",
      company: "Placed at Amazon",
      description: "Gammaprep did a fantastic job. Their content is so well structured, have live classes, good projects and most important good mentors. They helped me at every thick and thins to get skilled and interview calls. I would recommend Gammaprep to everyone.",
      image: "https://file.rendit.io/n/ZHdzQXiIfAyinm81Vutr.svg",
      alt: "Ellipse"
    },
    {
      title: "Preeti Josh",
      company: "Placed at Amazon",
      description: "Gammaprep did a fantastic job. Their content is so well structured, have live classes, good projects and most important good mentors. They helped me at every thick and thins to get skilled and interview calls. I would recommend Gammaprep to everyone.",
      image: "https://file.rendit.io/n/ZHdzQXiIfAyinm81Vutr.svg",
      alt: "Ellipse"
    },
    // Add more testimonials as needed
  ]}/>
        <GetInTouch/>
        </div>
        
      
      <FollowUs/>
      {/* <CirclesWithLines/> */}
    </div>
    </Authprovider>
    </>
  );
}
