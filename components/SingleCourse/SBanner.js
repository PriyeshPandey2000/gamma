import * as React from "react";

function SBanner() {
  return (
    
    <div className="flex flex-col items-start px-16 pt-10 pb-20 max-md:px-5 mb-5 " style={{ background: 'linear-gradient(180deg, #E4EFFF 0%, #F5EEFF 94.5%)' }}>
      <div className="flex flex-col items-start ml-20 max-w-full w-[735px]">
        <div className="flex gap-2 text-lg font-bold text-red-500">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e694ddca739fb2a9eec50637be1b5d44dcea2024158c9cd241a4dc1b7029a393?"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="my-auto">Most Popular Course</div>
        </div>
        <div className="self-stretch mt-5 text-4xl font-medium text-sky-800 max-md:max-w-full">
          DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects
        </div>
        <div className="self-stretch mt-5 text-xl leading-8 text-black max-md:max-w-full">
          DSA for Cracking the Coding Interview. Animated Examples for Faster
          Learning and Deeper Understanding. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </div>
        <div className="flex gap-2 mt-5">
          <div className="text-xl font-medium leading-8 text-black">4.0 </div>
          <div className="flex gap-1 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/99caeda8d0cd22e0f914f336c87d2dbc7a4a1a3637e4dfe33545a90d6005d2b3?"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4542d1178e5e5fd4420fc91c4d40c92e523e17d4e21da607f412358ccd2e9c41?"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32844e05103a7f75d10666288c3b69b0753f53eaae035a9304e8c7fd873c0b89?"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4eeb32293a12b0f7c969c0fe8e8c5f71c661d2c8eca1e3d263d62e2d9e7b757?"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f98cc21e31298eeec2e5c19f8e86ef0e4d50d4eb52dc6081a864b43e253b9ad?"
              className="shrink-0 w-6 aspect-square"
            />
          </div>
          <div className="text-xl leading-8 text-sky-800 underline">
            (230 Reviews)
          </div>
        </div>
        <div className="flex gap-2 mt-5 text-xl font-medium leading-8 text-black">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/71cdfcdc0598f5d6140e43f4975ca219874667dceebb596980aeaf5d2eaea0ac?"
            className="shrink-0 w-10 aspect-square"
          />
          <div className="my-auto">329 Students got Placed</div>
        </div>
        <div className="flex gap-5 justify-between mt-10 text-xl leading-8 text-black max-md:flex-wrap">
          <div className="flex gap-2 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a1c1052445589cde2e9629c935277076499bfc3746ed597c80afd54a7389c95?"
              className="shrink-0 my-auto w-6 aspect-square"
            />
            <div>English</div>
          </div>
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/445c888ba368474cf3ebb35f9b18e8ca6cd6837e15347557a6ef2830d1c315f2?"
              className="shrink-0 my-auto w-6 aspect-square"
            />
            <div>English, Hindi</div>
          </div>
        </div>
        <div className="flex gap-2 mt-5 text-xl font-medium leading-8 text-sky-800 max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ed914582e2621a0a3e4b62fdefc50d2606270b2983b506284a2fbde4b08a576?"
            className="shrink-0 my-auto w-6 aspect-square"
          />
          <div className="max-md:max-w-full">Starts on 15 March</div>
        </div>
      </div>
    </div>
  );
}

export default  SBanner;


