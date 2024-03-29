// import React from 'react';

// const Faq = () => {
//   return (
//     <section className="p-8 border border-gray-300 rounded-lg">
//       <h2 className="text-3xl font-bold mb-8 font-hiragino-mincho-pro-center">Frequently Asked Questions</h2>
//       <div className="grid grid-cols-2 gap-8">
//         {/* Left column */}
//         <div className="col-span-1">
//           <div className="space-y-4">
//             <p className="text-sm text-black font-hiragino-mincho-pro-center-left">What will the course structure be like?</p>
//             <p className="text-sm text-black font-hiragino-mincho-pro-center-left">What is GammaInnovations and How I will get the paid internship there?</p>
//             <p className="text-sm text-black font-hiragino-mincho-pro-center-left">I am from a non-tech background. Am I eligible?</p>
//             <p className="text-sm text-black font-hiragino-mincho-pro-center-left">What will be the duration of the course?</p>
//           </div>
//         </div>
//         {/* Right column */}
//         <div className="col-span-1">
//           <div className="space-y-4">
//             <p className="text-sm text-black font-hiragino-mincho-pro-center-left">On which platform live classes, mock interviews, and mock tests will be Conducted</p>
//             <p className="text-sm text-black font-hiragino-mincho-pro-center-left">How can I ask my doubts during the course?</p>
//             <p className="text-sm text-black font-hiragino-mincho-pro-center-left">How will I receive placement assistance?</p>
//             <p className="text-sm text-black font-hiragino-mincho-pro-center-left">Tell me more about "Full Refund if Unplaced" policy?</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Faq;

import  React from "react";

export const Faq= ()=> {
  return (
    <div className="mb-10">
    <h2 className="text-2xl font-bold text-center mb-6 font-hiragino-mincho-heading">Frequently Asked Questions</h2>
    <div className="py-6 pr-5 pl-6 rounded-3xl border border-solid border-zinc-300 max-md:pl-5 ">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-2xl font-semibold leading-9 text-black max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full font-hiragino-mincho-pro-center-left-heading">
              What will the course structure be like?
            </div>
            <div className="mt-10 mr-7 leading-9 max-md:mr-2.5 max-md:max-w-full font-hiragino-mincho-pro-center-left-heading">
              What is GammaInnovations and How I will get
              <br />
              the paid internship there?
            </div>
            <div className="mt-10 max-md:max-w-full font-hiragino-mincho-pro-center-left-heading">
              I am from a non-tech background. Am I eligible?{" "}
            </div>
            <div className="mt-10 max-md:max-w-full font-hiragino-mincho-pro-center-left-heading">
              What will be the duration of the course?{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-2xl font-semibold leading-9 text-black max-md:mt-10 max-md:max-w-full">
            <div className="leading-9 max-md:max-w-full font-hiragino-mincho-pro-center-left-heading">
              On which platform live classes, mock interviews, and mock tests
              will be Conducted?{" "}
            </div>
            <div className="mt-10 max-md:max-w-full font-hiragino-mincho-pro-center-left-heading">
              How can I ask my doubts during the course?{" "}
            </div>
            <div className="mt-10 max-md:max-w-full font-hiragino-mincho-pro-center-left-heading">
              How will I receive placement assistance?{" "}
            </div>
            <div className="mt-10 max-md:max-w-full font-hiragino-mincho-pro-center-left-heading">
              Tell me more about &quot;Full Refund if Unplaced&quot; policy?{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};



