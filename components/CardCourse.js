// "use client"
// import { useState, useEffect, useRef } from "react";
// import { useMediaQuery } from '@react-hook/media-query';
// import dynamic from "next/dynamic";

// import * as React from "react";

// const NewComponent=()=> {
//   const isXsScreen = useMediaQuery('(max-width: 639px)');
//   if (isXsScreen) {
//     return null;
//   }

//   return (
//     <div className="w-full mx-auto px-4 ">
//     <h2 className="text-2xl font-bold text-center mb-6 font-hiragino-mincho-heading">All Courses</h2>
//     <div className="flex flex-col justify-center px-5 py-6 rounded-2xl border border-solid shadow-sm border-zinc-300 ">
//       <div className="flex gap-2 self-start text-lg font-bold text-sky-800">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c1430967ea1cdd123e59dc1677531ede6a34511ac28a769cc239b5ed2b59754?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
//           className="shrink-0 w-6 aspect-square"
//         />
//         <div className="my-auto">Specialized Skills and Tools</div>
//       </div>
//       <div className="mt-10 max-md:max-w-full">
//         <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//           <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
//             <div className="flex flex-col grow justify-center max-md:mt-10 max-md:max-w-full">
//               <div className="self-center text-lg font-semibold leading-8 text-center text-sky-800 max-md:max-w-full">
//                 DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental
//                 subjectsT
//               </div>
//               <div className="self-center mt-3 text-sm leading-4 text-center text-black max-md:max-w-full">
//                 Learn with real work experience and get guaranteed placement as
//                 a Full-Stack or
//                 <br />
//                 Backend Developer at product-based companies.
//               </div>
//               <div className="flex flex-col justify-center px-10 py-5 mt-3 text-sm text-black rounded-lg bg-black bg-opacity-10 max-md:px-5 max-md:max-w-full">
//                 <div className="flex gap-5 justify-between max-md:flex-wrap">
//                   <div className="flex flex-col">
//                     <div className="leading-5">
//                       Project-led MERN or Backend
//                       <br />
//                       Specialisation
//                     </div>
//                     <div className="mt-5 leading-[143%]">
//                       Externships with Real Tech Companies
//                     </div>
//                   </div>
//                   <div className="flex flex-col">
//                     <div className="leading-5">
//                       DS, Algo, and System Design
//                       <br />
//                       curriculum
//                     </div>
//                     <div className="mt-5 leading-[143%]">
//                       Guaranteed Placement in top dev roles
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-5 text-xl font-semibold leading-8 text-center text-sky-800 max-md:max-w-full">
//                 Offline and Online Classes
//               </div>
//               <div className="mt-5 max-md:max-w-full">
//                 <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//                   <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
//                     <div className="flex flex-col grow items-start p-6 w-full text-sm leading-6 text-center text-black rounded-lg bg-black bg-opacity-10 max-md:px-5 max-md:mt-6">
//                       <div className="text-lg font-semibold leading-5 text-sky-800">
//                         Offline
//                       </div>
//                       <div className="mt-3">Content goes here</div>
//                       <div className="mt-3">Content goes here</div>
//                       <div className="mt-3">Content goes here</div>
//                       <div className="justify-center p-2 mt-3 text-lg font-bold text-white whitespace-nowrap bg-sky-800 rounded-[37px]">
//                         ₹14,999/-
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
//                     <div className="flex flex-col grow items-start p-6 w-full text-sm leading-6 text-center text-black rounded-lg bg-black bg-opacity-10 max-md:px-5 max-md:mt-6">
//                       <div className="text-lg font-semibold leading-5 text-sky-800">
//                         Online
//                       </div>
//                       <div className="mt-3">Content goes here</div>
//                       <div className="mt-3">Content goes here</div>
//                       <div className="mt-3">Content goes here</div>
//                       <div className="justify-center p-2 mt-3 text-lg font-bold text-white whitespace-nowrap bg-sky-800 rounded-[37px]">
//                         ₹7,999/-
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
//             <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
//               <div className="flex flex-col justify-center items-start px-5 py-3 rounded-xl border border-solid bg-black bg-opacity-10 border-zinc-300 border-opacity-30 max-md:pr-5 max-md:max-w-full">
//                 <div className="flex gap-4">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/989da4af1758b55e7cd0f2b8a00506edd12c4629b70ae35b97d351f3b11f2553?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
//                     className="shrink-0 self-start aspect-square w-[30px]"
//                   />
//                   <div className="flex flex-col">
//                     <div className="text-sm leading-5 text-zinc-700 text-opacity-60">
//                       Interview
//                     </div>
//                     <div className="mt-1 text-lg font-medium leading-5 text-center text-black">
//                       Assured Interview call
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col justify-center items-start px-5 py-3 mt-3 rounded-xl border border-solid bg-black bg-opacity-10 border-zinc-300 border-opacity-30 max-md:pr-5 max-md:max-w-full">
//                 <div className="flex gap-4">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2e8d04dd581727d30052daf1cb3f1c6d3496162f31f473aa2485e21cb240898?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
//                     className="shrink-0 self-start aspect-square w-[30px]"
//                   />
//                   <div className="flex flex-col">
//                     <div className="text-sm leading-5 text-zinc-700 text-opacity-60">
//                       Duration
//                     </div>
//                     <div className="mt-1 text-lg font-medium leading-5 text-center text-black">
//                       30 Days
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col justify-center items-start px-5 py-3 mt-3 rounded-xl border border-solid bg-black bg-opacity-10 border-zinc-300 border-opacity-30 max-md:pr-5 max-md:max-w-full">
//                 <div className="flex gap-4">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b449480ebdc5e9efd49d47602c24aaf8a9242a3109327cf8e23ed9919cdcb53?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
//                     className="shrink-0 self-start aspect-square w-[30px]"
//                   />
//                   <div className="flex flex-col">
//                     <div className="text-sm leading-5 text-zinc-700 text-opacity-60">
//                       Benefits
//                     </div>
//                     <div className="mt-1 text-lg font-medium leading-5 text-center text-black">
//                       Complete Refund if not placed
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col justify-center items-start px-5 py-3 mt-3 rounded-xl border border-solid bg-black bg-opacity-10 border-zinc-300 border-opacity-30 max-md:pr-5 max-md:max-w-full">
//                 <div className="flex gap-4">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/06bb0f2be2a5605a08d818724c92ea983c1e41e2b167827e38da4b0ecd1e9a2b?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
//                     className="shrink-0 self-start aspect-square w-[30px]"
//                   />
//                   <div className="flex flex-col">
//                     <div className="text-sm leading-5 text-zinc-700 text-opacity-60">
//                       Classes
//                     </div>
//                     <div className="mt-1 text-lg font-medium leading-5 text-center text-black">
//                       Offline and Online
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-center items-center px-16 py-3 mt-6 text-base font-bold text-center text-white capitalize bg-sky-800 rounded-[58px] max-md:px-5 max-md:max-w-full">
//                 <div className="flex gap-3.5">
//                   <div className="my-auto">Apply Now</div>
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fa9e636bccf557e9d169500645a497a5d71ec2b3ac3801c37530762d0f329ea?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
//                     className="shrink-0 aspect-[0.5] w-[9px]"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }


// export default dynamic (() => Promise.resolve(NewComponent), {ssr: false});