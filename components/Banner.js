"use client"
import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import BulletPoints from './CircleWithLines';
import "../styles/fonts.css";
import dynamic from "next/dynamic";
import Link from 'next/link';



const JobBanner = () => {
  const isXsScreen = useMediaQuery('(max-width: 640px)');
  const handleButtonClick = () => {
    window.location.href = "https://wa.me/918949020810?text=Hi,%20I%20want%20to%20know%20more%20about%20gammaprep.com%20placement%20bootcamp%20course";
  };

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
                <div className="[background:linear-gradient(99.28deg,_#fff,_#f1f4fb)] shadow-[0px_0px_10px_rgba(76,_76,_109,_0.07)] box-border border-[1px] border-solid border-#D1D1D6 p-2 md:p-4 rounded-lg xs:w-full xs:mr-0 ml-0">
                  <div className="all-steps mb-2">
                    <h4 className="text-xs md:text-sm font-bold text-info mb-2 md:mb-4">WANT TO GET PLACED AS A SOFTWARE ENGINEER?</h4>
                    <div>
                      <BulletPoints/>
                    </div>
                  </div>
                  <div className="all-steps course">
                    <span className="text-red-500 text-xs"><del>₹ 14,999/-</del></span>&nbsp;&nbsp;<span className="text-xs block"><b>Starting at:</b></span>
                    <span className="inline-block text-blue-900 rounded px-0 py-1 mb-2 text-xl font-bold mr-0">₹ <span className="text-custom-blue text-xl">7999/-</span></span>&nbsp;<span className="text-xs text-yellow-500">Filling Fast</span><br></br>
                    <span><b>Next Live Batch:</b> From 10th March, 2024 <br/><br/></span>
                    <div className="flex mb-4">
                      <button className="btn btn-primary-new bg-custom-blue text-white rounded-full py-1 px-3 mr-4">Enroll now</button>
                      <button className="btn btn-primary-new border border-green-500 flex items-center px-3 rounded-full text-green-500">
                        <img src="/images/whatsapp.png" className="w-6 h-6 mr-2 " alt="WhatsApp Icon" />
                        Contact on Whatsapp
                      </button>
                    </div>
                    <button className="btn btn-primary-new w-100px px-10 py-1 rounded-full bg-custom-blue text-white">Take self-assessment test for free!</button>
                    {/* Add new items here */}
                    <div className="flex justify-between mt-4 flex-col ">
                      <div className="flex items-center">
                        <img src="/images/ok.png" className="w-4 h-4 mr-2" alt="Icon1" />
                        <span className="text-sm">Assured referral on completion</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <img src="/images/ok.png" className="w-4 h-4 mr-2 " alt="Icon2" />
                        <span className="text-sm">Full refund if unplaced</span>
                      </div>
                    </div>
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
                <div className="[background:linear-gradient(99.28deg,_#fff,_#f1f4fb)] shadow-[0px_0px_10px_rgba(76,_76,_109,_0.07)] box-border border-[1px] border-solid border-#D1D1D6 p-2 md:p-4 rounded-lg xs:w-full xs:mr-0 ml-0">
                  <div className="all-steps mb-2">
                    <h4 className="text-xs md:text-sm font-bold text-info mb-2 md:mb-4">WANT TO GET PLACED AS A SOFTWARE ENGINEER?</h4>
                    <div>
                      <BulletPoints/>
                    </div>
                  </div>
                  <div className="all-steps course ">
                    <span className="text-red-500 text-xs"><del>₹ 14,999/-</del></span>&nbsp;&nbsp;<span className="text-xs block"><b>Starting at:</b></span>
                    <span className="inline-block text-blue-900 rounded px-0 py-1 mb-2 text-xl font-bold mr-0">₹ <span className="text-custom-blue text-xl">7999/-</span></span>&nbsp;<span className="text-xs text-yellow-500">Filling Fast</span><br></br>
                    <span><b>Next Live Batch:</b> From 10th March, 2024 <br/><br/></span>
                    <div className="flex mb-4">
                    <Link href="/AllCourses">
                      <button className="btn btn-primary-new bg-custom-blue text-white rounded-full py-1 px-3 mr-4">Enroll now</button>
                      </Link>
                      
                      <button onClick={handleButtonClick} className="btn btn-primary-new border border-green-500 flex items-center px-3 rounded-full text-green-500">
                        <img src="/images/whatsapp.png" className="w-6 h-6 mr-2 " alt="WhatsApp Icon" />
                        Contact on Whatsapp
                      </button>
                      
                    </div>
                    <button className="btn btn-primary-new w-100px px-10 py-1 rounded-full bg-custom-blue text-white">Take self-assessment test for free!</button>
                    {/* Add new items here */}
                    <div className="flex justify-start mt-4">
                      <div className="flex items-center ">
                        <img src="/images/ok.png" className="w-5 h-5 mr-2 " alt="Icon1" />
                        <span className="text-sm ">Assured referral on completion</span>
                      </div>
                      <div className="flex items-center ml-5" >
                        <img src="/images/ok.png" className="w-5 h-5 mr-2" alt="Icon2" />
                        <span className="text-sm">Full refund if unplaced</span>
                      </div>
                    </div>
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

export default dynamic (() => Promise.resolve(JobBanner), {ssr: false});
