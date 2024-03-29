import React from "react";

export const WhyGamma = () => {
  return (
    <div className="flex flex-wrap items-center justify-between relative max-w-screen-xl mx-auto px-4">
      <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col items-start gap-6 mt-5">
        <div className="text-4xl font-semibold leading-tight">
          Why GammaPrep?
        </div>
        <p className="text-base leading-normal lg:w-full">
          Gammaprep is an emerging platform that is continuously helping students to get their dream job. Our mentors
          have a very unique way of teaching. They are the best in their domain. You will also get very good placement
          assistance since we have a dedicated HR who will help you in all the possible ways to fetch you your dream
          job, and you will have great interaction with mentors and fellow students since we will conduct many fun
          events apart from studies.
          <br />
          The best part is, we offer you all this at the lowest fee in the market.
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:w-5/12 flex justify-end">
        <img className="w-full max-w-xs h-auto" alt="Whb" src="/images/whb 1.png" />
      </div>
    </div>
  );
};
