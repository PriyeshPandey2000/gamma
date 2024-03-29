"use client"
import { useState, useEffect, useRef } from "react";

// export default function Component() {
//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
//       <div className="flex items-center space-x-2">
//         <img
//           src="https://file.rendit.io/n/8nCSSckyDnD5HSHF9MOX.svg"
//           alt="Tools"
//           className="w-6"
//         />
//         <h2 className="text-lg font-bold text-blue-800">
//           Specialized Skills and Tools
//         </h2>
//       </div>

//       <div className="mt-4">
//         <h3 className="text-lg text-blue-800 font-semibold text-center">
//           DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjectsT
//         </h3>
//         <p className="mt-2 text-sm text-center">
//           Learn with real work experience and get guaranteed placement as a
//           Full-Stack or Backend Developer at product-based companies.
//         </p>
//       </div>

//       <div className="mt-4 bg-gray-100 p-4 rounded-lg">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <p className="text-sm">Project-led MERN or Backend Specialisation</p>
//             <p className="text-sm">Externships with Real Tech Companies</p>
//           </div>
//           <div className="space-y-2">
//             <p className="text-sm">DS, Algo, and System Design curriculum</p>
//             <p className="text-sm">Guaranteed Placement in top dev roles</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div className="bg-gray-50 rounded-lg p-4 space-y-3">
//           <h4 className="text-sm text-center text-blue-800">Offline</h4>
//           <ul className="text-xs list-disc pl-5 space-y-1">
//             <li>Content goes here</li>
//             <li>Content goes here</li>
//             <li>Content goes here</li>
//           </ul>
//           <div className="text-sm font-bold text-white bg-blue-800 rounded-full px-3 py-1 text-center self-start">
//             ₹14,999/-
//           </div>
//         </div>
//         <div className="bg-gray-50 rounded-lg p-4 space-y-3">
//           <h4 className="text-sm text-center text-blue-800">Online</h4>
//           <ul className="text-xs list-disc pl-5 space-y-1">
//             <li>Content goes here</li>
//             <li>Content goes here</li>
//             <li>Content goes here</li>
//           </ul>
//           <div className="text-sm font-bold text-white bg-blue-800 rounded-full px-3 py-1 text-center self-start">
//             ₹7,999/-
//           </div>
//         </div>
//       </div>

//       <div className="mt-4 space-y-4">
//         <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
//           <img
//             src="https://file.rendit.io/n/XnTNE1vRQWjQIDXRjBTd.svg"
//             alt="Interview Icon"
//             className="flex-shrink-0 w-8"
//           />
//           <div>
//             <h5 className="text-xs text-gray-600">Interview</h5>
//             <p className="text-sm font-medium">Assured Interview call</p>
//           </div>
//         </div>

//         <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
//           <img
//             src="https://file.rendit.io/n/BSWzBCP9bxEm2o2qeIB4.svg"
//             alt="Benefits Icon"
//             className="flex-shrink-0 w-8"
//           />
//           <div>
//             <h5 className="text-xs text-gray-600">Benefits</h5>
//             <p className="text-sm font-medium">Complete Refund if not placed</p>
//           </div>
//         </div>

//         <button className="w-full flex items-center justify-center bg-blue-800 rounded-full px-6 py-3 text-white font-semibold hover:bg-blue-700 transition duration-300">
//           Apply Now
//           <img
//             src="https://file.rendit.io/n/iAyHbqCqFxJCfh2BE6Z1.svg"
//             alt="Arrow"
//             className="ml-2"
//           />
//         </button>
//       </div>
//     </div>
//   );
// }







import * as React from "react";

export default function Component() {
  return (
    <div>
    <h2 className="text-2xl font-bold text-center mb-6 font-hiragino-mincho-heading">All Courses</h2>
    <div className="flex flex-col justify-center px-5 py-6 rounded-2xl border border-solid shadow-sm border-zinc-300 ">
      <div className="flex gap-2 self-start text-lg font-bold text-sky-800">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c1430967ea1cdd123e59dc1677531ede6a34511ac28a769cc239b5ed2b59754?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">Specialized Skills and Tools</div>
      </div>
      <div className="mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center max-md:mt-10 max-md:max-w-full">
              <div className="self-center text-lg font-semibold leading-8 text-center text-sky-800 max-md:max-w-full">
                DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental
                subjectsT
              </div>
              <div className="self-center mt-3 text-sm leading-4 text-center text-black max-md:max-w-full">
                Learn with real work experience and get guaranteed placement as
                a Full-Stack or
                <br />
                Backend Developer at product-based companies.
              </div>
              <div className="flex flex-col justify-center px-10 py-5 mt-3 text-sm text-black rounded-lg bg-black bg-opacity-10 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between max-md:flex-wrap">
                  <div className="flex flex-col">
                    <div className="leading-5">
                      Project-led MERN or Backend
                      <br />
                      Specialisation
                    </div>
                    <div className="mt-5 leading-[143%]">
                      Externships with Real Tech Companies
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="leading-5">
                      DS, Algo, and System Design
                      <br />
                      curriculum
                    </div>
                    <div className="mt-5 leading-[143%]">
                      Guaranteed Placement in top dev roles
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-xl font-semibold leading-8 text-center text-sky-800 max-md:max-w-full">
                Offline and Online Classes
              </div>
              <div className="mt-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start p-6 w-full text-sm leading-6 text-center text-black rounded-lg bg-black bg-opacity-10 max-md:px-5 max-md:mt-6">
                      <div className="text-lg font-semibold leading-5 text-sky-800">
                        Offline
                      </div>
                      <div className="mt-3">Content goes here</div>
                      <div className="mt-3">Content goes here</div>
                      <div className="mt-3">Content goes here</div>
                      <div className="justify-center p-2 mt-3 text-lg font-bold text-white whitespace-nowrap bg-sky-800 rounded-[37px]">
                        ₹14,999/-
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start p-6 w-full text-sm leading-6 text-center text-black rounded-lg bg-black bg-opacity-10 max-md:px-5 max-md:mt-6">
                      <div className="text-lg font-semibold leading-5 text-sky-800">
                        Online
                      </div>
                      <div className="mt-3">Content goes here</div>
                      <div className="mt-3">Content goes here</div>
                      <div className="mt-3">Content goes here</div>
                      <div className="justify-center p-2 mt-3 text-lg font-bold text-white whitespace-nowrap bg-sky-800 rounded-[37px]">
                        ₹7,999/-
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col justify-center items-start px-5 py-3 rounded-xl border border-solid bg-black bg-opacity-10 border-zinc-300 border-opacity-30 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/989da4af1758b55e7cd0f2b8a00506edd12c4629b70ae35b97d351f3b11f2553?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
                    className="shrink-0 self-start aspect-square w-[30px]"
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
              <div className="flex flex-col justify-center items-start px-5 py-3 mt-3 rounded-xl border border-solid bg-black bg-opacity-10 border-zinc-300 border-opacity-30 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2e8d04dd581727d30052daf1cb3f1c6d3496162f31f473aa2485e21cb240898?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
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
              <div className="flex flex-col justify-center items-start px-5 py-3 mt-3 rounded-xl border border-solid bg-black bg-opacity-10 border-zinc-300 border-opacity-30 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b449480ebdc5e9efd49d47602c24aaf8a9242a3109327cf8e23ed9919cdcb53?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
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
              <div className="flex flex-col justify-center items-start px-5 py-3 mt-3 rounded-xl border border-solid bg-black bg-opacity-10 border-zinc-300 border-opacity-30 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/06bb0f2be2a5605a08d818724c92ea983c1e41e2b167827e38da4b0ecd1e9a2b?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
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
              <div className="flex justify-center items-center px-16 py-5 mt-6 text-base font-bold text-center text-white capitalize bg-sky-800 rounded-[58px] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-3.5">
                  <div className="my-auto">Apply Now</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fa9e636bccf557e9d169500645a497a5d71ec2b3ac3801c37530762d0f329ea?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
                    className="shrink-0 aspect-[0.5] w-[9px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}


