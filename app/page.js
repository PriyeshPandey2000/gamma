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
import Faq from "@/components/Faq";
import CourseCard from '@/components/CourseCard';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-[1300px]"> {/* Set specific width */}
      <div className="my-8 flex flex-col"> {/* Flexbox layout for vertical stacking */}
          <div className="relative mb-0"> {/* Added relative positioning and margin bottom */}
            <JobBanner />
          </div>
          <div className="relative"> {/* Added relative positioning */}
            <Placement/>
          </div>
        </div>
        <StudentsPlaced/>
        <CoursesOffered/>
        {/* <CourseCard icon="/images/Tools.png" title="Specialised Skills and Tools " column1Heading="DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects" column1Para="Learn with real work experience and get guaranteed placement as a Full-Stack or Backend Developer at product-based companies.srgsmgsdmglsdmglmdl;gm;lsdmglsdmlgsmldglsdgmm;" /> */}
        <CourseDetails/>
        <MentorsSection/>
        <Faq/>
      </div>
      {/* <CirclesWithLines/> */}
    </div>
  );
}
