import React from "react";

export const Placed = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
      <div className="flex flex-col justify-center gap-4 items-start w-full md:w-auto">
        <p className="font-normal text-black text-2xl md:text-3xl leading-normal font-hiragino-mincho-heading">
          Where will you get Placed?
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center justify-center xs:mx-auto"> {/* Center grid for xs screens */}
          <img className="w-20 md:w-28 lg:w-36 h-10 md:h-14 lg:h-18 object-cover" alt="Barcley" src="/images/barcley 1.png" />
          <img className="w-20 md:w-28 lg:w-32 h-10 md:h-16 lg:h-23 object-cover" alt="Barcley" src="/images/barcley 2.png" />
          <img className="w-20 md:w-28 lg:w-36 h-10 md:h-14 lg:h-18 object-cover" alt="Barcley" src="/images/barcley 3.png" />
          <img className="w-20 md:w-28 lg:w-36 h-10 md:h-14 lg:h-18 object-cover" alt="Barcley" src="/images/barcley 4.png" />
          <img className="w-20 md:w-28 lg:w-36 h-10 md:h-14 lg:h-18 object-cover" alt="Barcley" src="/images/barcley 5.png" />
          <img className="w-20 md:w-28 lg:w-36 h-10 md:h-14 lg:h-18 object-cover" alt="Barcley" src="/images/barcley 6.png" />
          <img className="w-20 md:w-28 lg:w-36 h-10 md:h-14 lg:h-18 object-cover" alt="Barcley" src="/images/barcley 7.png" />
          <img className="w-20 md:w-28 lg:w-36 h-10 md:h-14 lg:h-18 object-cover" alt="Barcley" src="/images/barcley 8.png" />
        </div>
      </div>
      <img className="w-48 md:w-72 h-48 md:h-72 ml-auto xs:mx-auto" alt="Business deal bro" src="/images/Business deal-bro 1.png" />
    </div>
  );
};
