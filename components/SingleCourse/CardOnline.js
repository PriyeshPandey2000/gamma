import * as React from "react";
import { useRouter } from 'next/router';
import useAuthStore from "@/stores/authStore";


function CardOnline({ courseId,canEnroll,course }) {
  const router = useRouter();
  const courseRoutes = {
    '6611bed1467c3ba9ab016953': '/courses/offline/course1',
    '6611bf63467c3ba9ab016955': '/courses/offline/course2',
    '6611bf77467c3ba9ab016957': '/courses/offline/course3',
    '6611bfc7467c3ba9ab016959': '/courses/offline/course4',
    '6611bfd5467c3ba9ab01695b': '/courses/offline/course5',
    '6611bfe0467c3ba9ab01695d': '/courses/offline/course6',
    '6611c020467c3ba9ab01695f': '/courses/offline/course7',
    '6611c028467c3ba9ab016961': '/courses/offline/course8',
    '6611c032467c3ba9ab016963': '/courses/offline/course9',
    // Add more courseId and corresponding routes here
  };
  const handleEnrollClick = () => {
    if (!useAuthStore.getState().isLoggedIn) {
      // If the user is not logged in, redirect to the login page
      router.push('/Login');
    } else {
      // If the user is logged in, proceed with the enrollment logic
      router.push(`/Checkout?courseId=${courseId}`);
    }
  };
  const offlineclick = () => {
    // Get the route corresponding to the courseId
    const route = courseRoutes[courseId];
    if (route) {
        router.push(route);
    } else {
        console.error(`Route not found for courseId: ${courseId}`);
    }
};
  const checkout = (courseId) => {
   router.push(`/Checkout?courseId=${courseId}`); 
  };
  return (
    <div className="flex flex-col p-3 mx-auto rounded-lg border border-solid shadow-sm border-gray-300 max-w-[350px] " style={{ background: 'linear-gradient(99.28deg, #FFFFFF 2.04%, #F2F4FB 149.73%)' }}>
      <div className="flex overflow-hidden relative flex-col items-center px-10 pt-12 pb-3 text-base font-medium text-white min-h-[200px]">
        <img
          loading="lazy"
          src={`data:image/png;base64,${course.imageData}`}
          className=" absolute inset-0 w-full h-full"
        />
        <div className="flex relative flex-col max-w-full w-[100px]">
          {/* <img
            loading="lazy"
            src="/images/play_arrow.png"
            className="self-center rounded-full aspect-square backdrop-blur-[10px] bg-black bg-opacity-60 h-[50px] w-[50px]"
          />
          <div className="text-sm justify-center p-1 mt-8 bg-black bg-opacity-50 rounded-[30px]">
            Course Preview
          </div> */}
        </div>
      </div>
      <div className="flex gap-px mt-3 text-base">
        <div className="justify-center px-6 py-3  font-medium border-b-2 text-blue-800 border-blue-800 border-solid cursor-pointer">
          Online Classes
        </div>
        <div onClick={offlineclick} className="justify-center px-6 py-3 text-black  cursor-pointer">
          Offline Classes
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <div className="text-xl font-medium text-black">₹{course.price}</div>
        <div className="flex gap-2 my-auto">
          <div className="text-base text-gray-700">₹14999</div>
          <div className="my-auto text-sm text-red-600">50% off</div>
        </div>
      </div>
      <div className="mt-2 text-base font-medium text-red-600 text-opacity-60">
        Limited Period offer
      </div>
      <div>
      {/* Card content */}
      {canEnroll ? (
        <div onClick={handleEnrollClick} className="justify-center items-center px-10 py-3 mt-4 text-base font-medium text-white rounded-[30px] cursor-pointer" style={{ background: 'linear-gradient(90deg, #0B4B7F 0%, #1487E5 100%)' }}>
          Enroll for this Course
        </div>
      ) : (
        // <div className="justify-center items-center px-10 py-3 mt-4 text-base font-medium text-white rounded-[30px]" style={{ background: 'linear-gradient(90deg, #0B4B7F 0%, #1487E5 100%)' }}>
        //   Already Enrolled
        // </div>
        <p className="text-lg ml-7 text-blue-800 ">You are already enrolled ...</p>
      )}
    </div>

      <div className="flex gap-2 self-center mt-4 text-base font-medium leading-6 text-blue-800">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d8151600b7645d201a426b597738854b9d450e0ab2953bd46134f53faccf0cf?"
          className="w-6 aspect-square"
        />
        <div>Share this course</div>
      </div>
      {/* <div className="mt-6 text-base leading-6 text-center text-black">
        Available in 3 Locations
      </div>
      <div className="flex gap-3 justify-center px-6 mt-3 text-base leading-6 text-blue-800 whitespace-nowrap">
        <div className="flex gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f9ac36cf4d412ffd7379d5c821a0f8dff330343edf2ed8c8c944cc31ce994d2?"
            className="w-6 aspect-square"
          />
          <div>Kolkata</div>
        </div>
        <div className="flex gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b44638230219d3d40e85e1579e0a837e5ee24a197a2dc7b8e482a87b8c539637?"
            className="w-6 aspect-square"
          />
          <div>Hyderabad</div>
        </div>
        <div className="flex gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f937acb4e0713ed8a1bf74a25e7ec1e2740571eb5db14c14fbadb3a1e023655e?"
            className="w-6 aspect-square"
          />
          <div>Mumbai</div>
        </div>
      </div> */}
      <div className="mt-6 text-base leading-6 text-center text-black">
        {course.cardDescription}
      </div>
      <div className="flex flex-col justify-center self-center px-3 py-2 mt-4 max-w-full text-sm font-medium text-green-500 border-2 border-green-500 border-solid rounded-[30px] w-[200px]">
        <div className="flex gap-1 justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/add0371bbb16daddb8d04fe5953f54d43fbbd65019f45940210ea0c664815729?"
            className="w-5 aspect-square"
          />
          <div>Contact in Whatsapp</div>
        </div>
      </div>
    </div>
  );
}

export default CardOnline;
