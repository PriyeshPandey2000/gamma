"use client"
import { FollowUs } from "@/components/FollowUs";
import MyComponent from "@/components/GridCourses";
import App from "@/components/LoginNav";
import Navbar from "@/components/Navbar";
import * as React from "react";
import "tailwindcss/tailwind.css"




function AllCourses() {
  return (
    <div>
      
    <App/>
    <div className="container mx-auto max-w-[1180px] mt-5">
    <div className="flex items-center justify-start p-4   rounded-md ">
      {/* Text */}
      <div>
        <p className="font-hiragino-mincho-pro-center-small-left">Courses Offered</p>
      </div>
      
      {/* Search functionality */}
      <div className="relative pl-7">
        <input
          type="text"
          placeholder="Search"
          className="w-40 px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M13.293 14.707a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 1 1 1.414-1.414l3 3zM10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
    </div>
    
    <div className="container mx-auto max-w-[1180px] mb-11 ">
        <MyComponent/>
        </div>
        <FollowUs/>
        </div>
  )
  
}

export default AllCourses