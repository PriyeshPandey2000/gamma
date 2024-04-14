import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

function DashTiles() {
  // const isXsScreen = true; // Assuming this value for demonstration
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
    <div className={`flex ${isXsScreen ? 'flex-wrap' : ''} justify-between gap-5 text-base font-medium text-black max-md:flex-wrap mt-7 mb-7 items-center`}>
      <div className={`flex-auto px-5 py-8 text-center ${isXsScreen ? 'w-[40vw]' : ''} text-blue-900 rounded-2xl border border-solid shadow-sm border-zinc-300 leading-[133%] `}>
        Courses Enrolled
      </div>
      <div className={`flex-auto px-5  text-center ${isXsScreen ? 'w-[40vw] py-5' : 'py-8'} rounded-2xl border border-solid shadow-sm border-zinc-300`}>
        Scheduled Mock Interview
      </div>
      <div className={`flex-auto px-5  text-center ${isXsScreen ? 'w-[40vw] py-6' : 'py-8'} rounded-2xl border border-solid shadow-sm border-zinc-300`}>
        Request Job Referrals
      </div>
      <div className={`flex-auto px-5 py-8 text-center ${isXsScreen ? 'w-[40vw]' : ''} rounded-2xl border border-solid shadow-sm border-zinc-300`}>
        Join Batch Group
      </div>
      <div className={`flex-auto px-5 py-5 text-center ${isXsScreen ? 'w-[40vw]' : ''} rounded-2xl border border-solid shadow-sm border-zinc-300`}>
        Ask Doubt from
        <br />
        Mentor
      </div>
    </div>
  );
}

export default DashTiles;
