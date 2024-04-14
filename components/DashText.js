import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

function DashText() {
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
    <div className="flex flex-col justify-center max-w-[645px] mt-7">
      <div className="flex gap-5 justify-between px-5 w-full max-md:flex-wrap max-md:max-w-full">
        <div className={`text-4xl font-semibold text-black ${isXsScreen ? 'font-hiragino-mincho-xssssss' : 'font-hiragino-mincho-pro'}`}>My Dashboard</div>
        {/* <div className="flex flex-col justify-center items-start px-5 py-3 my-auto text-xl border border-solid border-zinc-300 rounded-[74px] text-zinc-700 text-opacity-60 max-md:pr-5"> */}
          {/* <div className="flex gap-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/652990c61ea0d02167030fbaa79136ed8c2c414c7375cf79f49e82e1baf08d14?"
              className="shrink-0 w-6 aspect-square"
            />
            <div>Search Lesson</div>
          </div> */}
        {/* </div> */}
      </div>
      {/* <div className="flex gap-5 px-5 mt-3 w-full max-md:flex-wrap max-md:max-w-full"> */}
        {/* <div className="text-base font-medium leading-5 text-center text-black">
          OVERALL PROGRESS
        </div> */}
        <div className="flex flex-col justify-center my-auto">
          {/* <div className="flex flex-col justify-center items-start bg-neutral-200 rounded-[63px] max-md:pr-5">
            <div className="shrink-0 h-2 bg-emerald-500 rounded-[63px] w-[73px]" />
          </div> */}
        </div>
        {/* <div className="text-base font-medium leading-5 text-center text-emerald-500">
          10%
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default DashText;


