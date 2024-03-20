import JobBanner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CirclesWithLines from "@/components/CircleWithLines";
import Placement from "@/components/Placement";
import CoursesOffered from "@/components/CoursesOffered";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-[1200px]"> {/* Set specific width */}
        <div className="my-8 max-h-screen"> {/* Adjusted max height */}
          <JobBanner />
        </div>
        <Placement/>
        <CoursesOffered/>
      </div>
      {/* <CirclesWithLines/> */}
    </div>
  );
}
