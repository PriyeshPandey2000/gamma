import * as React from "react";
import { toast } from "react-hot-toast";

function Login() {
  return (
    <>
    <img
    loading="lazy"
    srcSet="/images/logo.png"
    className="self-start max-w-full aspect-[3.33] w-[140px] ml-11 mt-9"
  />
   <div className="container mx-auto max-w-[1080px] ">
    <div className="flex flex-col items-center px-11 pt-7 pb-20 bg-white max-md:px-5">
     
      <div className="mt-29 w-full max-w-[1285px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fe1e782fd435b3dd637e249808662449ee1a5221a367380c8c3864f4daec79f?"
              className="w-full aspect-square max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center self-stretch my-auto text-lg font-medium leading-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col items-center py-6 rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:max-w-full">
                <div className="flex flex-col self-stretch px-5 text-black max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="/images/logo.png"
                    className="max-w-full aspect-[3.33] w-[140px]"
                  />
                  <div className="mt-8 text-2xl font-semibold max-md:max-w-full">
                    Sign in
                  </div>
                  <div className="justify-center items-start px-6 py-2 mt-7 whitespace-nowrap rounded-xl border border-solid border-zinc-300 text-zinc-700 text-opacity-60 max-md:px-5 max-md:max-w-full">
                  <input
                      type="email"
                      placeholder="Email"
                      className="w-full h-full px-3 py-0 outline-none rounded-xl border-none bg-transparent text-black"
                    />
                  </div>
                  <div className="justify-center items-start px-6 py-2 mt-3 whitespace-nowrap rounded-xl border border-solid border-zinc-300 text-zinc-700 text-opacity-60 max-md:px-5 max-md:max-w-full">
                  <input
                      type="email"
                      placeholder="Password"
                      className="w-full h-full px-3 py-0 outline-none rounded-xl border-none bg-transparent text-black"
                    />
                  </div>
                  <div className="flex justify-center items-center px-16 py-4 mt-6 text-white bg-blue-900 rounded-lg max-md:px-5 max-md:max-w-full">
                    Sign in
                  </div>
                  <div className="self-center mt-7">or</div>
                </div>
                <div className="flex justify-center text-base items-center px-16 py-3 mt-6 max-w-[360px] text-white bg-red-400 rounded-lg w-[438px] max-md:px-5">
                  <div className="flex gap-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/749053aa83b596a7c71261e620ffdbfd8102a4d358aa2f2287be01fdc5d074de?"
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div>Sign in with Google</div>
                  </div>
                </div>
                <div className="mt-7 text-blue-900">Forgot Password?</div>
              </div>
              <div className="flex justify-center items-center px-5 py-6 mt-3.5 rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:max-w-full">
                <div className="flex gap-2 justify-center">
                  <div className="text-black">Don’t have an account?</div>
                  <div className="text-blue-900">Sign up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-32 text-lg text-black max-md:flex-wrap max-md:mt-10">
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Testimonial</div>
        <div>Hire From Us</div>
        <div>FAQ</div>
        <div>Privacy Policy</div>
      </div>
    </div>
    </div>
    </>
  );
}



export default Login;

