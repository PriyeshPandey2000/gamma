import * as React from "react";

function Card() {
  return (
    <div className="flex flex-col p-5 mx-auto w-full rounded-2xl border border-solid shadow-sm border-zinc-300 max-w-[480px]">
      <div className="flex overflow-hidden relative flex-col items-center px-16 pt-20 pb-4 text-base font-medium text-white min-h-[256px]">
        <img
          loading="lazy"
          srcSet="..."
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col max-w-full w-[133px]">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center rounded-full aspect-square backdrop-blur-[10px] bg-black bg-opacity-60 h-[68px] w-[68px]"
          />
          <div className="justify-center p-2 mt-16 bg-black bg-opacity-50 rounded-[51px]">
            Course Preview
          </div>
        </div>
      </div>
      <div className="flex gap-px mt-5 text-xl">
        <div className="justify-center px-8 py-5 text-black">
          Online Classes
        </div>
        <div className="justify-center px-8 py-5 font-medium text-sky-800 border-b-2 border-sky-800 border-solid">
          Offline Classes
        </div>
      </div>
      <div className="flex gap-5 mt-8">
        <div className="text-4xl font-medium text-black">₹500</div>
        <div className="flex gap-3 my-auto">
          <div className="text-2xl text-zinc-700 text-opacity-60">₹2000</div>
          <div className="my-auto text-xl text-red-600 text-opacity-60">
            50% off
          </div>
        </div>
      </div>
      <div className="mt-3 text-xl font-medium text-red-600 text-opacity-60">
        Limited Period offer
      </div>
      <div className="justify-center items-center px-16 py-6 mt-5 text-xl font-medium text-white rounded-[47px]">
        Enroll for this Course
      </div>
      <div className="flex gap-3 self-center mt-8 text-xl font-medium leading-8 text-sky-800">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d8151600b7645d201a426b597738854b9d450e0ab2953bd46134f53faccf0cf?"
          className="shrink-0 my-auto w-6 aspect-square"
        />
        <div>Share this course </div>
      </div>
      <div className="mt-8 text-lg font-medium leading-6 text-center text-black">
        Available in 3 Locations
      </div>
      <div className="flex gap-5 justify-center px-6 mt-3 text-lg leading-6 text-sky-800 whitespace-nowrap">
        <div className="flex gap-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f9ac36cf4d412ffd7379d5c821a0f8dff330343edf2ed8c8c944cc31ce994d2?"
            className="shrink-0 w-6 aspect-square"
          />
          <div>Kolkata</div>
        </div>
        <div className="flex gap-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b44638230219d3d40e85e1579e0a837e5ee24a197a2dc7b8e482a87b8c539637?"
            className="shrink-0 w-6 aspect-square"
          />
          <div>Hyderabad</div>
        </div>
        <div className="flex gap-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f937acb4e0713ed8a1bf74a25e7ec1e2740571eb5db14c14fbadb3a1e023655e?"
            className="shrink-0 w-6 aspect-square"
          />
          <div>Mumbai</div>
        </div>
      </div>
      <div className="mt-8 text-lg leading-6 text-center text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      </div>
      <div className="flex flex-col justify-center self-center px-5 py-3.5 mt-5 max-w-full text-lg font-medium text-emerald-500 border-2 border-emerald-500 border-solid rounded-[43px] w-[253px]">
        <div className="flex gap-2 justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/add0371bbb16daddb8d04fe5953f54d43fbbd65019f45940210ea0c664815729?"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="my-auto">Contact in Whatsapp</div>
        </div>
      </div>
    </div>
  );
}

export default Card
