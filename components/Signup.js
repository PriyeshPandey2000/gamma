import * as React from "react";

function Signup() {
  return (
    <div className="flex flex-col items-center px-11 pt-11 pb-20 bg-white max-md:px-5">
      <img
        loading="lazy"
        srcSet="..."
        className="self-start max-w-full aspect-[3.33] w-[164px]"
      />
      <div className="mt-24 w-full max-w-[1285px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9814b8a114b370a40776a04999426f3fec1004a029015057868e254441eda8d3?"
              className="self-stretch my-auto w-full aspect-square max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center text-lg max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col px-5 py-6 rounded-2xl border border-solid shadow-sm border-zinc-300 text-zinc-700 text-opacity-60 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="max-w-full aspect-[3.33] w-[164px]"
                />
                <div className="self-start mt-8 text-2xl font-semibold text-black">
                  Sign up
                </div>
                <div className="flex justify-center items-center px-16 py-3 mt-7 font-medium text-white bg-red-400 rounded-lg leading-[129%] max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5caadc79e959e1f5b32c5b5ba5eedbcbd9ae09dadc1d3097cfb7baf726cd3a8?"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <div>Signup with Google</div>
                  </div>
                </div>
                <div className="justify-center items-center px-16 mt-5 text-black whitespace-nowrap max-md:px-5 max-md:max-w-full">
                  or
                </div>
                <div className="justify-center items-start px-6 py-5 mt-5 whitespace-nowrap rounded-xl border border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
                  Email
                </div>
                <div className="justify-center items-start px-6 py-5 mt-3 rounded-xl border border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
                  Full Name
                </div>
                <div className="justify-center items-start px-6 py-5 mt-3 rounded-xl border border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
                  Phone Number
                </div>
                <div className="justify-center items-start px-6 py-5 mt-3 whitespace-nowrap rounded-xl border border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
                  Password
                </div>
                <div className="mt-5 leading-6 text-center text-sky-800 max-md:max-w-full">
                  <span className="text-black">
                    By signing up, you agree to our{" "}
                  </span>
                  <span className="text-sky-800">Terms</span>
                  <span className="text-sky-800">, </span>
                  <span className="text-sky-800">Privacy Policy</span> and{" "}
                  <span className="text-sky-800">Cookies Policy</span>
                  <span className="text-sky-800">.</span>
                </div>
                <div className="justify-center items-center px-16 py-4 mt-5 font-medium text-white bg-blue-900 rounded-lg leading-[129%] max-md:px-5 max-md:max-w-full">
                  Sign up
                </div>
              </div>
              <div className="flex justify-center items-center px-5 py-6 mt-5 font-medium rounded-2xl border border-solid shadow-sm border-zinc-300 leading-[129%] max-md:max-w-full">
                <div className="flex gap-2 justify-center">
                  <div className="text-black">Already have an account?</div>
                  <div className="text-blue-900">Sign in</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-20 text-lg text-black max-md:flex-wrap max-md:mt-10">
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Testimonial</div>
        <div>Hire From Us</div>
        <div>FAQ</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
}


