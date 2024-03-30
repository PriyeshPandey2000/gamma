"use client"
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

export const GetInTouch = () => {
  const [isXsScreen, setIsXsScreen] = useState(false);

  const handleResize = () => {
    const xsScreen = window.matchMedia('(max-width: 640px)').matches;
    setIsXsScreen(xsScreen);
    window.localStorage.setItem('isXsScreen', JSON.stringify(xsScreen));
  };

  useEffect(() => {
    const xsScreen = window.localStorage.getItem('isXsScreen');
    if (xsScreen) {
      setIsXsScreen(JSON.parse(xsScreen));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isXsScreenMediaQuery = useMediaQuery('(max-width: 639px)');
  return (
    <div className="inline-flex flex-col items-start gap-[40px] relative w-full max-w-screen-xl mx-auto px-4 mb-10">
      <div className={`inline-flex flex-col ${isXsScreen ? 'items-center' : 'items-start'}  relative`}>
        <div className={`relative w-fit mt-[-1.00px] font-normal text-black text-[40px] tracking-[0] leading-[normal] ${isXsScreen ? 'font-hiragino-mincho-xs' : 'font-hiragino-mincho-pro-center'}`}>
          Get in Touch
        </div>
        <p className="relative w-fit font-normal text-[#3c3c4399] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
          We will catch you as early as we receive the message
        </p>
      </div>
      <div className="flex items-start gap-[80px] relative w-full xs:gap-[30px]">
        <div className="flex flex-col items-start relative flex-1 grow">
          <div className="flex flex-col items-start gap-[16px] px-0 py-[20px] relative self-stretch w-full">
            <div className="relative w-fit font-normal text-[#3c3c4399] text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
              Enter Name
            </div>
            <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="/images/Line 7.png" />
          </div>
          <div className="flex flex-col items-start gap-[16px] px-0 py-[20px] relative self-stretch w-full">
            <div className="relative w-fit font-normal text-[#3c3c4399] text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
              Enter Mobile
            </div>
            <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="/images/Line 7.png" />
          </div>
          <div className="flex flex-col items-start gap-[110px] px-0 py-[20px] relative self-stretch w-full">
            <div className="relative w-fit font-normal text-[#3c3c4399] text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
              Enter your Message
            </div>
            <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="/images/Line 7.png" />
          </div>
        </div>
        <div className="flex flex-col items-start relative flex-1 grow">
          <div className="flex flex-col items-start gap-[16px] px-0 py-[20px] relative self-stretch w-full">
            <div className="relative w-fit font-normal text-[#3c3c4399] text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
              Enter Email
            </div>
            <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="/images/Line 7.png" />
          </div>
          <div className="flex flex-col items-start gap-[16px] px-0 py-[20px] relative self-stretch w-full">
            <div className="inline-flex items-center gap-[16px] relative">
              <div className="relative w-fit font-normal text-[#3c3c4399] text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
                Select Requirement
              </div>
              <img className="relative w-[8.66px] h-[7.5px]" alt="Polygon" src="/images/Polygon 1.png" />
            </div>
            <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="/images/Line 7.png" />
          </div>
        </div>
      </div>
      {/* Terms & Conditions section */}
      <div className="inline-flex items-center gap-[12px] relative w-full">
        <div className="relative w-[20px] h-[20px] rounded-[4px] border border-solid border-[#3c3c4399]" />
        <p className="relative w-full max-w-[calc(100%-20px)] sm:w-fit font-normal text-black text-[17px] tracking-[0] leading-[normal]">
          I agree to the Terms & Conditions of Gamma Tech & Services LLP.
        </p>
      </div>
      
      {/* Submit button */}
      <div className="inline-flex items-start gap-[4px] px-[20px] py-[16px] relative bg-[#0b4b7f] rounded-[62px]">
        <div className="relative w-fit font-medium text-white text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
          Submit
        </div>
      </div>
    </div>
  );
};
