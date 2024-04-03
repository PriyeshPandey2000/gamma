import * as React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center px-11 pt-11 pb-20 bg-white max-md:px-5">
      <img
        loading="lazy"
        srcSet="..."
        className="self-start max-w-full aspect-[3.33] w-[164px]"
      />
      <div className="mt-32 w-full max-w-[1285px] max-md:mt-10 max-md:max-w-full">
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
                    srcSet="..."
                    className="max-w-full aspect-[3.33] w-[164px]"
                  />
                  <div className="mt-8 text-2xl font-semibold max-md:max-w-full">
                    Sign in
                  </div>
                  <div className="justify-center items-start px-6 py-5 mt-7 whitespace-nowrap rounded-xl border border-solid border-zinc-300 text-zinc-700 text-opacity-60 max-md:px-5 max-md:max-w-full">
                    Email
                  </div>
                  <div className="justify-center items-start px-6 py-5 mt-3 whitespace-nowrap rounded-xl border border-solid border-zinc-300 text-zinc-700 text-opacity-60 max-md:px-5 max-md:max-w-full">
                    Password
                  </div>
                  <div className="justify-center items-center px-16 py-4 mt-6 text-white bg-blue-900 rounded-lg max-md:px-5 max-md:max-w-full">
                    Sign in
                  </div>
                  <div className="self-center mt-7">or</div>
                </div>
                <div className="flex justify-center items-center px-16 py-3 mt-6 max-w-full text-white bg-red-400 rounded-lg w-[438px] max-md:px-5">
                  <div className="flex gap-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/749053aa83b596a7c71261e620ffdbfd8102a4d358aa2f2287be01fdc5d074de?"
                      className="shrink-0 w-6 aspect-square"
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
  );
}


