// components/SBanner.js

import React from 'react';
import Card from './Card'; // Import the Card component
import '../../styles/fonts.css';

function SBanner3({ title, description, reviewRating, reviewCount, studentsPlaced }) {
  const [isXsScreen, setIsXsScreen] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setIsXsScreen(window.innerWidth < 600);
    }

    handleResize(); // Call once to set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Card component */}
      {!isXsScreen && (
        <div className="absolute top-14 right-24 z-10">
          <Card />
        </div>
      )}

      {/* SBanner component */}
      <div className="flex flex-col items-start px-12 pt-10 pb-20 max-md:px-5 mb-5 " style={{ background: 'linear-gradient(180deg, #E4EFFF 0%, #F5EEFF 94.5%)' }}>
        <div className="flex flex-col items-start lg:ml-20 xs:ml-0 max-w-full sm:w-[300px] md:w-[400px] lg:w-[660px]">
          <div className="flex gap-2 text-lg font-bold text-red-500">
            <img
              loading="lazy"
              src="/images/Tools.png"
              className="shrink-0 w-6 aspect-square"
            />
            <div className="my-auto text-custom-blue">Specialized Skills and Tools</div>
          </div>
          <div className={`self-stretch mt-5 text-4xl font-medium text-sky-800 max-md:max-w-full  ${isXsScreen ? 'font-gotham-book-xs' : 'font-gotham-book'}  `}>
            {title}
          </div>
          <div className="self-stretch mt-5 text-xl leading-8 text-black max-md:max-w-full">
            {description}
          </div>
          <div className="flex gap-2 mt-5">
            <div className="text-xl font-medium leading-8 text-black">{reviewRating}</div>
            <div className="flex gap-1 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99caeda8d0cd22e0f914f336c87d2dbc7a4a1a3637e4dfe33545a90d6005d2b3?"
                className="shrink-0 w-6 aspect-square"
              />
              {/* Add remaining review icons */}
            </div>
            <div className="text-xl leading-8 text-sky-800 underline">
              ({reviewCount} Reviews)
            </div>
          </div>
          <div className="flex gap-2 mt-5 text-xl font-medium leading-8 text-black">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/71cdfcdc0598f5d6140e43f4975ca219874667dceebb596980aeaf5d2eaea0ac?"
              className="shrink-0 w-10  aspect-square"
            />
            <div className="my-auto">{studentsPlaced} Students got Placed</div>
          </div>
          <div className="flex gap-5 justify-between mt-10 text-xl leading-8 text-black max-md:flex-wrap">
            {/* Language options */}
          </div>
          <div className="flex gap-2 mt-5 text-xl font-medium leading-8 text-sky-800 max-md:flex-wrap">
            {/* Start date */}
          </div>
        </div>
      </div>
      {isXsScreen && (
        <div className="w-full  top-14 right-24 z-10" >
          <Card />
        </div>
      )}
    </div>
  );
}

export default SBanner3;
