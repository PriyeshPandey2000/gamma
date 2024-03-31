"use client"
import { React ,useState, useEffect, useRef } from "react";
import { useMediaQuery } from '@react-hook/media-query';
import dynamic from "next/dynamic";

const Component = () => {
  const isXsScreen = useMediaQuery('(max-width: 639px)');
  if (isXsScreen) {
    return null;
  }

  return (
    <div className="max-w-[1000px] mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-6 font-hiragino-mincho-heading">All Courses</h2>
      <div className="flex flex-col justify-center px-6 py-8 rounded-xl border border-solid shadow-sm border-gray-300">
        <div className="flex items-center gap-4 text-base font-bold text-custom-blue">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c1430967ea1cdd123e59dc1677531ede6a34511ac28a769cc239b5ed2b59754?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
            className="w-6 h-6"
          />
          <div>Specialized Skills and Tools</div>
        </div>
        <div className="mt-8">
          <div className="flex gap-4">
            <div className="flex flex-col w-full">
              <div className="text-lg font-semibold leading-8 text-center text-custom-blue">
                DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects
              </div>
              <div className="w-4/5 mt-4 justify-center mx-auto leading-6 text-center text-gray-700" style={{ fontSize: '12px' }}>
                Learn with real work experience and get guaranteed placement as a Full-Stack or Backend Developer at product-based companies.
              </div>
              <div className="flex flex-col justify-center p-4 mt-4 text-sm text-gray-700 bg-gray-100 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <div>Project-led MERN or Backend Specialisation</div>
                    <div className="mt-2">Externships with Real Tech Companies</div>
                  </div>
                  <div>
                    <div>DS, Algo, and System Design curriculum</div>
                    <div className="mt-2">Guaranteed Placement in top dev roles</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-lg font-semibold leading-8 text-center text-gray-800">
                Offline and Online Classes
              </div>
              <div className="mt-6">
                <div className="flex gap-4">
                  <div className="flex flex-col w-1/2">
                    <div className="p-4 text-sm text-center text-gray-700 bg-gray-100 rounded-lg">
                      <div className="font-semibold">Offline</div>
                      <div className="mt-2">Content goes here</div>
                      <div className="mt-2">Content goes here</div>
                      <div className="mt-2">Content goes here</div>
                      <div className="w-1/3 flex items-center justify-center mt-2 text-base font-bold text-white bg-custom-blue rounded-full py-1 ">
                        ₹14,999/-
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <div className="p-4 text-sm text-center text-gray-700 bg-gray-100 rounded-lg">
                      <div className="font-semibold">Online</div>
                      <div className="mt-2">Content goes here</div>
                      <div className="mt-2">Content goes here</div>
                      <div className="mt-2">Content goes here</div>
                      <div className="w-1/3 flex items-center justify-center mt-2 text-base font-bold text-white bg-custom-blue rounded-full py-1">
                        ₹7,999/-
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-2/5">
              <div className="p-4 mt-6 text-sm text-center text-gray-700 bg-gray-100 rounded-lg flex gap-3 items-center">
              <div className="ml-0"> {/* Added margin to shift the image */}
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/989da4af1758b55e7cd0f2b8a00506edd12c4629b70ae35b97d351f3b11f2553?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
      className="w-6 h-6"
    />
  </div>
  <div>
    <div className="font-semibold">Interview</div>
    <div className="mt-1">Assured Interview call</div>
  </div>
</div>
<div className="p-4 mt-6 text-sm text-center text-gray-700 bg-gray-100 rounded-lg flex gap-3 items-center">
              <div className="ml-0"> {/* Added margin to shift the image */}
              <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2e8d04dd581727d30052daf1cb3f1c6d3496162f31f473aa2485e21cb240898?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
      className="w-6 h-6"
    />
  </div>
  <div>
    <div className="font-semibold">Duration</div>
    <div className="mt-1">30 Days</div>
  </div>
</div>
<div className="p-4 mt-6 text-sm text-center text-gray-700 bg-gray-100 rounded-lg flex gap-3 items-center">
              <div className="ml-0"> {/* Added margin to shift the image */}
              <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b449480ebdc5e9efd49d47602c24aaf8a9242a3109327cf8e23ed9919cdcb53?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
      className="w-6 h-6"
    />
  </div>
  <div>
    <div className="font-semibold">Benefits</div>
    <div className="mt-1">Complete Refund if not placed</div>
  </div>
</div>
<div className="p-4 mt-6 text-sm text-center text-gray-700 bg-gray-100 rounded-lg flex gap-3 items-center">
              <div className="ml-0"> {/* Added margin to shift the image */}
              <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/06bb0f2be2a5605a08d818724c92ea983c1e41e2b167827e38da4b0ecd1e9a2b?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
      className="w-6 h-6"
    />
  </div>
  <div>
    <div className="font-semibold">Classes</div>
    <div className="mt-1">Offline and Online</div>
  </div>
</div>
              <div className="flex justify-center items-center mt-6 text-base font-bold text-white bg-custom-blue rounded-full py-2">
                Apply Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Component), { ssr: false });
