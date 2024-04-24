import * as React from "react";

function DashGrid({ title, description }) {
  return (
    <div className="px-5 w-full md:w-full mt-7">
      <div className="flex flex-row flex-wrap gap-5">
        <div className="w-full mx-auto md:w-[33%]">
          <div className="flex flex-col  px-5 py-6 w-full text-base rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:mt-9 max-md:max-w-full">
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
  );
}

export default DashGrid;
