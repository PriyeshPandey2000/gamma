import * as React from "react";

function Benefit({ includes }) {
  return (
    <div className="flex flex-col justify-start">
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-start ml-11 xs:ml-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-8 border border-solid border-zinc-300 max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <div className="text-2xl font-semibold leading-8 text-black max-md:max-w-full">
                Benefits
              </div>
              <div className="flex flex-col justify-center items-start px-5 py-3 mt-6 border border-solid bg-black bg-opacity-10 border-zinc-300 border-opacity-30 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/21b1c054ea925a529c8fe629951b44265f520cbe710fe11cd6d28db77d168c28?"
                    className="shrink-0 self-start aspect-square w-[30px] h-auto"
                  />
                  <div className="flex flex-col">
                    <div className="text-sm leading-5 text-zinc-700 text-opacity-60">
                      Interview
                    </div>
                    <div className="mt-1 text-lg font-medium leading-5 text-center text-black">
                      Assured Interview call
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start px-5 py-3 mt-3 border border-solid bg-black bg-opacity-10 border-zinc-300 border-opacity-30 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fd107a8c29ffb7aeb7796434b7ace55198ef9490cdd9483f24847bcfa1661b7?"
                    className="shrink-0 self-start aspect-square w-[30px]"
                  />
                  <div className="flex flex-col">
                    <div className="text-sm leading-5 text-zinc-700 text-opacity-60">
                      Duration
                    </div>
                    <div className="mt-1 text-lg font-medium leading-5 text-center text-black">
                      30 Days
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start px-5 py-3 mt-3 border border-solid bg-black bg-opacity-10 border-zinc-300 border-opacity-30 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1f4d93d395dd34b16595579cfb7b847694777534c4186d1edb32f092b296adf?"
                    className="shrink-0 self-start aspect-square w-[30px]"
                  />
                  <div className="flex flex-col">
                    <div className="text-sm leading-5 text-zinc-700 text-opacity-60">
                      Benefits
                    </div>
                    <div className="mt-1 text-lg font-medium leading-5 text-center text-black">
                      Complete Refund if not placed
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start px-5 py-3 mt-3 border border-solid bg-black bg-opacity-10 border-zinc-300 border-opacity-30 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a1c1822003c451d42881e2455a12784982140bba7c975da8853e9972e72de3a?"
                    className="shrink-0 self-start aspect-square w-[30px]"
                  />
                  <div className="flex flex-col">
                    <div className="text-sm leading-5 text-zinc-700 text-opacity-60">
                      Classes
                    </div>
                    <div className="mt-1 text-lg font-medium leading-5 text-center text-black">
                      Offline and Online
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-8 text-black border border-solid border-zinc-300 max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <div className="text-2xl font-semibold leading-8 max-md:max-w-full">
                Includes
              </div>
              <div className="flex flex-col p-5 mt-6 text-sm leading-5 bg-black bg-opacity-10 max-md:max-w-full">
              {includes.map((include, index) => (
                  <div className="flex gap-2 mt-6" key={index}>
                    {/* Assuming you have some default image */}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/543ef4f618d20e1a4eee1eff80f7304e76268937d3cd66480af46f9de4138ece?"
                      
                      className="shrink-0 w-6 aspect-square"
                    />
                    <div>{include}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start p-8 mt-5 w-full border border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
        <div className="self-start text-2xl font-semibold leading-8 text-black max-md:max-w-full">
          Top Recruiters of this Course
        </div>
        <div className="flex gap-5 self-center mt-5 ml-0 text-lg text-zinc-700 text-opacity-60 max-md:flex-wrap">
          <img
            loading="lazy"
            src="/images/barcley 1.png"
            className="shrink-0 aspect-[2.38] w-[66px] h-[60px]"
          />
          <img
            loading="lazy"
            src="/images/barcley 3.png"
            className="shrink-0 aspect-[3.45] w-[98px] h-[60px]"
          />
          <img
            loading="lazy"
            src="/images/barcley 4.png"
            className="shrink-0 aspect-[3.45] w-[98px] h-[60px]"
          />
          <img
            loading="lazy"
            src="/images/barcley 5.png"
            className="shrink-0 max-w-full aspect-[4.17] w-[119px] h-[60px]"
          />
          <img
            loading="lazy"
            src="/images/barcley 6.png"
            className="shrink-0 max-w-full aspect-[4.17] w-[119px] h-[50px]"
          />
          <div className="my-auto">and more...</div>
        </div>
      </div>
    </div>
  );
}



    export default Benefit;