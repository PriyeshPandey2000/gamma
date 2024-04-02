
import { FollowUs } from "@/components/FollowUs";
import MyComponent from "@/components/GridCourses";
import App from "@/components/LoginNav";
import Navbar from "@/components/Navbar";
import * as React from "react";


function AllCourses() {
  return (
    <div>
    <App/>
    <div className="container mx-auto max-w-[1180px] mb-11">
        <MyComponent/>
        </div>
        <FollowUs/>
        </div>
  )
  
}

export default AllCourses