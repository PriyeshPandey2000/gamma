import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';


function Other() {
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
    <div className="flex flex-col mt-11 mb-7">
      <div className={`w-full text-2xl font-semibold leading-8 text-black max-md:max-w-full ${isXsScreen ? 'font-hiragino-mincho-xssssss' : 'font-hiragino-mincho-pro-center-small-left'}`}>
        Our Other Courses
      </div>
      <div className="px-5 mt-10 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-4 w-full text-base rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:mt-9 max-md:max-w-full">
              <img
                loading="lazy"
                src="/images/courseimage.png"
                className="w-full aspect-[2] max-md:max-w-full "
              />
              <div className="mt-3 text-lg font-medium leading-8 text-sky-800 max-md:max-w-full">
                DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental
                subjects
              </div>
              <div className="mt-2 leading-6 text-zinc-700 text-opacity-60 max-md:max-w-full">
                DSA for Cracking the Coding Interview. Animated Examples for
                Faster Learning and Deeper Understanding.
              </div>
              <div className="flex gap-1 self-start mt-6">
                <div className="text-black leading-[160%]">
                  Course Starts at :
                </div>
                <div className="font-medium text-center text-sky-800 leading-[133%]">
                  15 March
                </div>
              </div>
              <div className="justify-center self-start px-5 py-3 mt-6 font-medium text-center text-sky-800 border border-sky-800 border-solid leading-[133%] rounded-[63px]">
                Learn More
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-6 w-full text-base rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:mt-9 max-md:max-w-full">
              <img
                loading="lazy"
                src="/images/courseimage.png"
                className="w-full aspect-[2] max-md:max-w-full"
              />
              <div className="mt-3 text-lg font-medium leading-8 text-sky-800 max-md:max-w-full">
                DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental
                subjects
              </div>
              <div className="mt-2 leading-6 text-zinc-700 text-opacity-60 max-md:max-w-full">
                DSA for Cracking the Coding Interview. Animated Examples for
                Faster Learning and Deeper Understanding.
              </div>
              <div className="flex gap-1 self-start mt-6">
                <div className="text-black leading-[160%]">
                  Course Starts at :
                </div>
                <div className="font-medium text-center text-sky-800 leading-[133%]">
                  15 March
                </div>
              </div>
              <div className="justify-center self-start px-5 py-3 mt-6 font-medium text-center text-sky-800 border border-sky-800 border-solid leading-[133%] rounded-[63px]">
                Learn More
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-6 w-full text-base rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:mt-9 max-md:max-w-full">
              <img
                loading="lazy"
                src="/images/courseimage.png"
                className="w-full aspect-[2] max-md:max-w-full"
              />
              <div className="mt-3 text-lg font-medium leading-8 text-sky-800 max-md:max-w-full">
                DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental
                subjects
              </div>
              <div className="mt-2 leading-6 text-zinc-700 text-opacity-60 max-md:max-w-full">
                DSA for Cracking the Coding Interview. Animated Examples for
                Faster Learning and Deeper Understanding.
              </div>
              <div className="flex gap-1 self-start mt-6">
                <div className="text-black leading-[160%]">
                  Course Starts at :
                </div>
                <div className="font-medium text-center text-sky-800 leading-[133%]">
                  15 March
                </div>
              </div>
              <div className="justify-center self-start px-5 py-3 mt-6 font-medium text-center text-sky-800 border border-sky-800 border-solid leading-[133%] rounded-[63px]">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Other;
