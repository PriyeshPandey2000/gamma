import * as React from "react";
import { useRouter } from 'next/router';


function Congrats({course}) {
    const router = useRouter();
    const handleDashboardClick = () => {
        router.push('/Dashboard');
      };
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-semibold text-sky-800 max-md:max-w-full">
        Congrats on Enrolling!
      </div>
      <div className="mt-5 text-xl leading-8 text-center text-black max-md:max-w-full">
        Welcome to GammaPrep! 
      </div>
      <div className="flex flex-col justify-center self-stretch p-5 mt-5 w-full rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl font-medium max-md:mt-10 max-md:max-w-full">
                <div className="leading-9 text-sky-800 max-md:max-w-full">
                {course.title}
                </div>
                {/* <div className="mt-6 text-black leading-[150%] max-md:max-w-full">
                  ₹4,999
                </div> */}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                {/* <div className="self-end text-2xl font-semibold text-black">
                  Online
                </div> */}
                {/* <div className="mt-10 text-lg font-bold tracking-wider text-sky-800">
                  DOWNLOAD INVOICE
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-xl leading-8 text-center text-black max-md:max-w-full">
        Your Invoice has sent to you through Email.
      </div>
      <div onClick={handleDashboardClick} className="justify-center items-center px-16 py-4 mt-8 max-w-full text-xl font-medium leading-8 text-center text-white bg-sky-800 rounded-[70px] w-[599px] max-md:px-5 cursor-pointer">
        Access your Dashboard
      </div>
    </div>
  );
}


export default Congrats;