import * as React from "react";

function DashGrid() {
  return (
    <div className="flex flex-col">
      <div className="px-5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-6 w-full text-base rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:mt-9 max-md:max-w-full">
              <img
                loading="lazy"
                src="/images/courseimage.png"
                className="w-full aspect-[2.38] max-md:max-w-full"
              />
              <div className="mt-3 text-base font-medium leading-8 text-sky-800 max-md:max-w-full">
                Course 1{" "}
              </div>
              <div className="mt-2 text-sm leading-6 text-zinc-700 text-opacity-60 max-md:max-w-full">
                DSA for Cracking the Coding Interview. Animated Examples for
                Faster Learning and Deeper Understanding.
              </div>
              <div className="flex gap-1 self-start mt-3">
                <div className="text-black leading-[160%] text-sm">
                  Course Starts at :
                </div>
                <div className="font-medium text-center text-sky-800 leading-[133%]">
                  15 March
                </div>
              </div>
              {/* <div className="flex gap-5 pr-4 mt-6 font-medium text-center text-emerald-500 whitespace-nowrap leading-[133%] max-md:flex-wrap">
                <div>100%</div>
                <div className="shrink-0 px-5 py-1 my-auto max-w-full h-2 bg-emerald-500 rounded-[63px] w-[240px]" />
              </div> */}
              {/* <div className="justify-center self-start px-5 py-2 mt-5 font-medium text-center text-sky-800 whitespace-nowrap border border-sky-800 border-solid leading-[133%] rounded-[63px]">
                Rewatch
              </div> */}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-6 w-full rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:mt-9 max-md:max-w-full">
              <img
                loading="lazy"
                src="/images/courseimage.png"
                className="w-full aspect-[2.38] max-md:max-w-full"
              />
              <div className="mt-3 text-base font-medium leading-8 text-sky-800 max-md:max-w-full">
                Lesson 2: Introduction to DSA for Cracking{" "}
              </div>
              <div className="mt-2 text-sm leading-6 text-zinc-700 text-opacity-60 max-md:max-w-full">
                DSA for Cracking the Coding Interview. Animated Examples for
                Faster Learning and Deeper Understanding.
              </div>
              <div className="flex gap-1 self-start mt-6 text-base">
                <div className="text-black leading-[160%]">
                  Course Starts at :
                </div>
                <div className="font-medium text-center text-sky-800 leading-[133%]">
                  15 March
                </div>
              </div>
              <div className="flex gap-5 mt-6 max-md:flex-wrap max-md:max-w-full">
                <div className="text-base font-medium leading-5 text-center text-emerald-500">
                  75%
                </div>
                <div className="flex flex-col justify-center my-auto">
                  <div className="flex flex-col justify-center bg-neutral-200 rounded-[63px]">
                    <div className="shrink-0 h-2 bg-emerald-500 rounded-[63px]" />
                  </div>
                </div>
              </div>
              <div className="justify-center self-start px-5 py-3 mt-5 text-base font-medium leading-5 text-center text-sky-800 whitespace-nowrap border border-sky-800 border-solid rounded-[63px]">
                Continue
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-6 w-full rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:mt-9 max-md:max-w-full">
              <img
                loading="lazy"
                src="/images/courseimage.png"
                className="w-full aspect-[2.38] max-md:max-w-full"
              />
              <div className="mt-3 text-base font-medium leading-8 text-sky-800 max-md:max-w-full">
                Lesson 3: Introduction to DSA for Cracking{" "}
              </div>
              <div className="mt-2 text-sm leading-6 text-zinc-700 text-opacity-60 max-md:max-w-full">
                DSA for Cracking the Coding Interview. Animated Examples for
                Faster Learning and Deeper Understanding.
              </div>
              <div className="flex gap-1 self-start mt-6 text-base">
                <div className="text-black leading-[160%]">
                  Course Starts at :
                </div>
                <div className="font-medium text-center text-sky-800 leading-[133%]">
                  15 March
                </div>
              </div>
              <div className="flex gap-5 mt-6 max-md:flex-wrap max-md:max-w-full">
                <div className="text-base font-medium leading-5 text-center text-black">
                  0%
                </div>
                <div className="flex flex-col justify-center my-auto">
                  <div className="shrink-0 h-2 bg-neutral-200 rounded-[63px]" />
                </div>
              </div>
              <div className="justify-center self-start px-5 py-3 mt-5 text-base font-medium leading-5 text-center text-sky-800 border border-sky-800 border-solid rounded-[63px]">
                Start Now
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-6 w-full rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:mt-9 max-md:max-w-full">
              <img
                loading="lazy"
                src="/images/courseimage.png"
                className="w-full aspect-[2.38] max-md:max-w-full"
              />
              <div className="mt-3 text-base font-medium leading-8 text-sky-800 max-md:max-w-full">
                Lesson 3: Introduction to DSA for Cracking{" "}
              </div>
              <div className="mt-2 text-sm leading-6 text-zinc-700 text-opacity-60 max-md:max-w-full">
                DSA for Cracking the Coding Interview. Animated Examples for
                Faster Learning and Deeper Understanding.
              </div>
              <div className="flex gap-1 self-start mt-6 text-base">
                <div className="text-black leading-[160%]">
                  Course Starts at :
                </div>
                <div className="font-medium text-center text-sky-800 leading-[133%]">
                  15 March
                </div>
              </div>
              <div className="flex gap-5 mt-6 max-md:flex-wrap max-md:max-w-full">
                <div className="text-base font-medium leading-5 text-center text-black">
                  0%
                </div>
                <div className="flex flex-col justify-center my-auto">
                  <div className="shrink-0 h-2 bg-neutral-200 rounded-[63px]" />
                </div>
              </div>
              <div className="justify-center px-5 py-3 mt-5 text-base font-medium leading-5 text-center border border-solid border-slate-700 border-opacity-60 rounded-[63px] text-slate-700 text-opacity-60 max-md:max-w-full">
                Finish Previous Lessons to Unlock
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-6 w-full rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:mt-9 max-md:max-w-full">
              <img
                loading="lazy"
                src="/images/courseimage.png"
                className="w-full aspect-[2.38] max-md:max-w-full"
              />
              <div className="mt-3 text-base font-medium leading-8 text-sky-800 max-md:max-w-full">
                Lesson 3: Introduction to DSA for Cracking{" "}
              </div>
              <div className="mt-2 text-sm leading-6 text-zinc-700 text-opacity-60 max-md:max-w-full">
                DSA for Cracking the Coding Interview. Animated Examples for
                Faster Learning and Deeper Understanding.
              </div>
              <div className="flex gap-1 self-start mt-6 text-base">
                <div className="text-black leading-[160%]">
                  Course Starts at :
                </div>
                <div className="font-medium text-center text-sky-800 leading-[133%]">
                  15 March
                </div>
              </div>
              <div className="flex gap-5 mt-6 max-md:flex-wrap max-md:max-w-full">
                <div className="text-base font-medium leading-5 text-center text-black">
                  0%
                </div>
                <div className="flex flex-col justify-center my-auto">
                  <div className="shrink-0 h-2 bg-neutral-200 rounded-[63px]" />
                </div>
              </div>
              <div className="justify-center px-5 py-3 mt-5 text-base font-medium leading-5 text-center border border-solid border-slate-700 border-opacity-60 rounded-[63px] text-slate-700 text-opacity-60 max-md:max-w-full">
                Finish Previous Lessons to Unlock
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-6 w-full rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:mt-9 max-md:max-w-full">
              <img
                loading="lazy"
                src="/images/courseimage.png"
                className="w-full aspect-[2.38] max-md:max-w-full"
              />
              <div className="mt-3 text-base font-medium leading-8 text-sky-800 max-md:max-w-full">
                Lesson 3: Introduction to DSA for Cracking{" "}
              </div>
              <div className="mt-2 text-sm leading-6 text-zinc-700 text-opacity-60 max-md:max-w-full">
                DSA for Cracking the Coding Interview. Animated Examples for
                Faster Learning and Deeper Understanding.
              </div>
              <div className="flex gap-1 self-start mt-6 text-base">
                <div className="text-black leading-[160%]">
                  Course Starts at :
                </div>
                <div className="font-medium text-center text-sky-800 leading-[133%]">
                  15 March
                </div>
              </div>
              <div className="flex gap-5 mt-6 max-md:flex-wrap max-md:max-w-full">
                <div className="text-base font-medium leading-5 text-center text-black">
                  0%
                </div>
                <div className="flex flex-col justify-center my-auto">
                  <div className="shrink-0 h-2 bg-neutral-200 rounded-[63px]" />
                </div>
              </div>
              <div className="justify-center px-5 py-3 mt-5 text-base font-medium leading-5 text-center border border-solid border-slate-700 border-opacity-60 rounded-[63px] text-slate-700 text-opacity-60 max-md:max-w-full">
                Finish Previous Lessons to Unlock
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default DashGrid;

