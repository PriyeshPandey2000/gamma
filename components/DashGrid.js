import * as React from "react";

function DashGrid({ title, description }) {
  return (
    <div className="flex flex-col">
      <div className="px-5 w-full max-md:max-w-full mt-7">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] mx-auto max-md:w-full">
            <div className="flex flex-col grow px-5 py-6 w-full text-base rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:mt-9 max-md:max-w-full">
              <img
                loading="lazy"
                src="/images/courseimage.png"
                className="w-full aspect-[2.38] max-md:max-w-full"
              />
              <div className="mt-3 text-base font-medium leading-8 text-sky-800 max-md:max-w-full">
                {title}
              </div>
              <div className="mt-2 text-sm leading-6 text-zinc-700 text-opacity-60 max-md:max-w-full">
                {description}
              </div>
              <div className="flex gap-1 self-start mt-3">
                <div className="text-black leading-[160%] text-sm">
                  Course Starts at :
                </div>
                <div className="font-medium text-center text-sky-800 leading-[133%]">
                  15 March
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashGrid;
