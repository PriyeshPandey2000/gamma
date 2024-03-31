"use client"
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

export const Dppit = () => {
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
    <div className="flex justify-center h-[50vh] ml-0 mr-6">
      <div className="relative w-full max-w-screen-lg mx-auto">
        <div className="top-4 left-4 absolute w-full">
          <div className="top-0 left-0 absolute w-full">
            {/* Conditionally render flex direction based on screen size */}
            <div className={`inline-flex items-center gap-8 xs:gap-2 absolute top-0 left-0 w-full ${isXsScreen ? 'flex-col ' : 'flex-row'}`}>
              <div className="inline-flex flex-col items-start justify-center gap-2 px-2 py-2 relative flex-0_0_auto bg-[#f6f6f6] w-full xs:w-full xs:mt-5">
                <p className="relative w-full mt-[-1.5px] font-normal text-black text-lg md:text-xl lg:text-2xl tracking-normal leading-normal">
                  Still looking to find a tech job? Gammaprep is your solution
                </p>
                <p className="relative w-full font-normal text-transparent text-sm md:text-base lg:text-lg tracking-normal leading-normal">
                  <span className="text-black">
                    Like said by Anu Aunty herself, IIT NIT MIT those three letters may really make your mummy happy but,
                    some of us lucked out and have finished our degree in a decent college with a good enough CGPA but are
                    still sitting ducks. Gammaprep is here for you. Gammaprep is a platform...{" "}
                  </span>
                  <span className="text-[#0075ff]">Read full Article</span>
                </p>
                <div className="inline-flex items-center gap-2 relative flex-0_0_auto">
                  <img className="relative w-16 h-auto" alt="Tdb" src="/images/tdb 1.png" />
                  <div className="relative font-normal text-[#3c3c4399] text-sm md:text-base lg:text-lg tracking-normal leading-normal">
                    Source: The Daily Beat
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start justify-center gap-2 px-2 py-2 relative flex-0_0_auto bg-[#f6f6f6] w-full xs:w-full xs:mt-5">
                <div className="relative w-full mt-[-1.5px] font-normal text-black text-lg md:text-xl lg:text-2xl tracking-normal leading-normal">
                  Startup India DPIIT Recognised
                </div>
                <div className="relative w-full font-normal text-black text-lg md:text-xl lg:text-2xl tracking-normal leading-normal">
                  Google Launchpad
                </div>
              </div>
            </div>
            <img className="w-10 h-px top-48 right-40 absolute object-cover" alt="Line" src="/images/Line 5.png" />
          </div>
          <img className="w-px h-14 top-35 right-8 absolute object-cover" alt="Line" src="images/Line 6.png" style={{ right: '150px' }} /> {/* Adjusted right value */}
        </div>
        <img className="w-10 h-px top-0 left-0 absolute object-cover" alt="Line" src="images/Line 3.png" />
        <img className="w-px h-14 top-0 -left-0 absolute object-cover" alt="Line" src="images/Line 7.png" />
      </div>
    </div>
  );
};

