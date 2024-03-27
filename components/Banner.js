import React from 'react';
import BulletPoints from './CircleWithLines';

import "../styles/fonts.css"

const JobBanner = () => (
  <div className="bg-white py-4 px-2 md:px-8  "> {/* Reduced padding for xs screens */}
    <div className="w-full mx-auto xs:w-full "> {/* Adjusted width for xs screens */}
      {/* Adjusted width for the heading container */}
      <h1 className="text-2xl md:text-3xl font-bold text-custom-blue mb-2 md:mb-4 md:w-1/2  font-hiragino-mincho-pro xs:font-hiragino-mincho-xs mx-2 ">
        Get your Dream Job/Internship in just 90 Days with Gamma Prep
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1 bg-white rounded-lg p-2 md:p-4 ${breakpoints.sm ? 'order-2' : ''}`}"> {/* Reduced padding */}
          <div className="job-content-block mb-4 xs:w-full xs:mr-0 ml-0"> {/* Reduced margin */}
            {/* Content container with grey background */}
            <div className="bg-gray-200 p-2 md:p-4 rounded-lg xs:w-full xs:mr-0 ml-0 "> {/* Reduced padding */}
              <div className="all-steps mb-2"> {/* Reduced margin */}
                <h4 className="text-xs md:text-sm font-bold text-info mb-2 md:mb-4">WANT TO GET PLACED AS A SOFTWARE ENGINEER?</h4> {/* Reduced font size and margin */}
                {/* Steps */}
                <div>
                  <BulletPoints/>
                </div>
              </div>
              <div className="all-steps course">
                <span className="text-red-500 text-xs"><del>₹ 14,999/-</del></span>&nbsp;&nbsp;<span className="text-xs block"><b>Starting at:</b></span> {/* Moved "Starting at" text to next line and reduced its size */}
                <span className="inline-block text-blue-900 rounded px-0 py-1 mb-2 text-xl font-bold mr-0">₹ <span className="text-blue-900 text-xl">7999/-</span></span>&nbsp;<span className="text-xs text-yellow-500">Filling Fast</span> {/* Added background color to ₹ 7999/- */}<br></br>
                
                <span><b>Next Live Batch:</b> From 10th March, 2024 <br/><br/></span>
                <div> {/* Removed center alignment */}
                  <div className="flex mb-4"> {/* Added flexbox for the first line */}
                    <button className="btn btn-primary-new bg-blue-800 text-white rounded-full py-1 px-3 mr-4">Enroll now</button> {/* First button with rounded edges */}
                    <button className="btn btn-primary-new border border-green-500 flex items-center px-3 rounded-full text-green-500"> {/* Second button with whatsapp icon and rounded edges */}
                      <img src="/images/whatsapp.png" className="w-6 h-6 mr-2 " alt="WhatsApp Icon" />
                      Contact on Whatsapp
                    </button>
                  </div>
                  <button className="btn btn-primary-new w-100px px-10 py-1 rounded-full bg-blue-800 text-white">Take self-assessment test for free!</button> {/* Long button on the second line with reduced width and rounded edges */}
                </div>
                {/* Other buttons */}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 bg-white rounded-lg p-2 md:p-4 relative  ${breakpoints.sm ? 'order-1' : ''}`}"> {/* Reduced padding */}
          {/* Single image with four circles */}
          <img className="img-responsive mt-[-30px]" src="/images/job-hunt.png" alt="Banner"/>
          {/* Headings positioned in front of the image */}
        </div>
      </div>
    </div>
  </div>
);

export default JobBanner;
