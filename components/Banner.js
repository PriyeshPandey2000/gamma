"use client"
import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import BulletPoints from './CircleWithLines';
import "../styles/fonts.css";
import dynamic from "next/dynamic";


const JobBanner = () => {
  const isXsScreen = useMediaQuery('(max-width: 640px)');

  return (
    <div className="bg-white py-4 px-2 md:px-8">
      <div className="w-full mx-auto xs:w-full">
      <h1 className={`text-2xl md:text-3xl font-bold text-custom-blue mb-2 md:mb-4 md:w-1/2 font-hiragino-mincho-pro ${isXsScreen ? 'font-hiragino-mincho-xs' : ''} mx-2`}>
          Get your Dream Job/Internship in just 90 Days with Gamma Prep
        </h1>
        {isXsScreen ? (
          // Render content for small screens
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-lg p-2 md:p-4">
              <img className="img-responsive mt-[-30px]" src="/images/job-hunt.png" alt="Banner"/>
            </div>
            <div className="md:col-span-1 bg-white rounded-lg p-2 md:p-4">
              <div className="job-content-block mb-4 xs:w-full xs:mr-0 ml-0">
                <div className="bg-gray-200 p-2 md:p-4 rounded-lg xs:w-full xs:mr-0 ml-0">
                  <div className="all-steps mb-2">
                    <h4 className="text-xs md:text-sm font-bold text-info mb-2 md:mb-4">WANT TO GET PLACED AS A SOFTWARE ENGINEER?</h4>
                    <div>
                      <BulletPoints/>
                    </div>
                  </div>
                  <div className="all-steps course">
                    <span className="text-red-500 text-xs"><del>₹ 14,999/-</del></span>&nbsp;&nbsp;<span className="text-xs block"><b>Starting at:</b></span>
                    <span className="inline-block text-blue-900 rounded px-0 py-1 mb-2 text-xl font-bold mr-0">₹ <span className="text-blue-900 text-xl">7999/-</span></span>&nbsp;<span className="text-xs text-yellow-500">Filling Fast</span><br></br>
                    <span><b>Next Live Batch:</b> From 10th March, 2024 <br/><br/></span>
                    <div className="flex mb-4">
                      <button className="btn btn-primary-new bg-blue-800 text-white rounded-full py-1 px-3 mr-4">Enroll now</button>
                      <button className="btn btn-primary-new border border-green-500 flex items-center px-3 rounded-full text-green-500">
                        <img src="/images/whatsapp.png" className="w-6 h-6 mr-2 " alt="WhatsApp Icon" />
                        Contact on Whatsapp
                      </button>
                    </div>
                    <button className="btn btn-primary-new w-100px px-10 py-1 rounded-full bg-blue-800 text-white">Take self-assessment test for free!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Render content for larger screens
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`md:col-span-1 bg-white rounded-lg p-2 md:p-4 ${isXsScreen ? 'order-2' : ''}`}>
              <div className="job-content-block mb-4 xs:w-full xs:mr-0 ml-0">
                <div className="bg-gray-200 p-2 md:p-4 rounded-lg xs:w-full xs:mr-0 ml-0">
                  <div className="all-steps mb-2">
                    <h4 className="text-xs md:text-sm font-bold text-info mb-2 md:mb-4">WANT TO GET PLACED AS A SOFTWARE ENGINEER?</h4>
                    <div>
                      <BulletPoints/>
                    </div>
                  </div>
                  <div className="all-steps course">
                    <span className="text-red-500 text-xs"><del>₹ 14,999/-</del></span>&nbsp;&nbsp;<span className="text-xs block"><b>Starting at:</b></span>
                    <span className="inline-block text-blue-900 rounded px-0 py-1 mb-2 text-xl font-bold mr-0">₹ <span className="text-blue-900 text-xl">7999/-</span></span>&nbsp;<span className="text-xs text-yellow-500">Filling Fast</span><br></br>
                    <span><b>Next Live Batch:</b> From 10th March, 2024 <br/><br/></span>
                    <div className="flex mb-4">
                      <button className="btn btn-primary-new bg-custom-blue text-white rounded-full py-1 px-3 mr-4">Enroll now</button>
                      <button className="btn btn-primary-new border border-green-500 flex items-center px-3 rounded-full text-green-500">
                        <img src="/images/whatsapp.png" className="w-6 h-6 mr-2 " alt="WhatsApp Icon" />
                        Contact on Whatsapp
                      </button>
                    </div>
                    <button className="btn btn-primary-new w-100px px-10 py-1 rounded-full bg-custom-blue text-white">Take self-assessment test for free!</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`md:col-span-1 bg-white rounded-lg p-2 md:p-4 relative ${isXsScreen ? 'order-1' : ''}`}>
              <img className="img-responsive mt-[-30px]" src="/images/job-hunt.png" alt="Banner"/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// export default JobBanner;
export default dynamic (() => Promise.resolve(JobBanner), {ssr: false})

