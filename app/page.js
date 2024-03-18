import JobBanner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Home() {
  return (
   <div>
    <Navbar/>
    <JobBanner/>
   </div>
  );
}
