"use client"
import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import '../styles/fonts.css';
import {useRouter} from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";

function Signup() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    name:"",
    password: "",
    phone: "",
})
const onSignup = async () => {
  try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/Login");
  } catch (error) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
  } finally {
      setLoading(false);
  }
};

// useEffect(() => {
//   if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
//       setButtonDisabled(false);
//   } else {
//       setButtonDisabled(true);
//   }
// }, [user]);



const [buttonDisabled, setButtonDisabled] = React.useState(false);
const [loading, setLoading] = React.useState(false);
  return (
    <>
      <img
        loading="lazy"
        srcSet="/images/logo.png"
        className="self-start max-w-full aspect-[3.33] w-[140px] ml-11 mt-9 "
      />
      <div className="container mx-auto max-w-[1080px] ">
      <div className="flex flex-col items-center px-11 pt-7 pb-20 bg-white max-md:px-5">
        <div className="mt-18 xs:mt-1 w-full max-w-[1285px] max-md:mt-10 max-md:max-w-full">
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
                    srcSet="/images/logo.png"
                    className="max-w-full aspect-[3.33] w-[140px]"
                  />
                  <div className="self-start mt-5 text-2xl font-semibold text-black font-hiragino-mincho-pro-center-left">
                    Sign up
                  </div>
                  <div className="flex justify-center items-center px-16 py-2 text-base mt-7 font-medium text-white bg-red-400 rounded-lg leading-[129%] max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5caadc79e959e1f5b32c5b5ba5eedbcbd9ae09dadc1d3097cfb7baf726cd3a8?"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <div>Signup with Google</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-0 mt-3 text-black w-full max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="/images/Line 10.png"
                      className="shrink-0 w-1/3  "
                    />
                    <div>or</div>
                    <img
                      loading="lazy"
                      src="/images/Line 10.png"
                      className="shrink-0 w-1/3 "
                    />
                  </div>
                  <div className="text-base justify-center items-start px-6 py-2 mt-3 rounded-xl border border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
                    <input
                      type="email"
                      placeholder="Email"
                      value={user.email}
                      onChange={(e)=>setUser({...user,email:e.target.value})}
                      className="w-full h-full px-3 py-0 outline-none rounded-xl border-none bg-transparent text-black"
                    />
                  </div>
                  <div className=" text-base justify-center items-start px-6 py-2 mt-5 rounded-xl border border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={user.username}
                      onChange={(e)=>setUser({...user,username:e.target.value})}
                      className="w-full h-full px-3 py-0 outline-none rounded-xl border-none bg-transparent text-black"
                    />
                  </div>
                  <div className="text-base justify-center items-start px-6 py-2 mt-5 rounded-xl border border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={user.phone}
                      onChange={(e)=>setUser({...user,phone:e.target.value})}
                      className="w-full h-full px-3 py-0 outline-none rounded-xl border-none bg-transparent text-black"
                    />
                  </div>
                  <div className="text-base justify-center items-start px-6 py-2 mt-5 rounded-xl border border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
                    <input
                      type="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={(e)=>setUser({...user,password:e.target.value})}
                      className="w-full h-full px-3 py-0 outline-none rounded-xl border-none bg-transparent text-black"
                    />
                  </div>
                  <div className="mt-5 text-sm leading-6 text-center text-sky-800 max-md:max-w-full">
                    <span className="text-black">
                      By signing up, you agree to our{" "}
                    </span>
                    <span className="text-sky-800">Terms</span>
                    <span className="text-sky-800">, </span>
                    <span className="text-sky-800">Privacy Policy</span> and{" "}
                    <span className="text-sky-800">Cookies Policy</span>
                    <span className="text-sky-800">.</span>
                  </div>
                  <div className="text-base flex justify-center items-center px-16 py-2 mt-5 font-medium text-white bg-blue-900 rounded-lg leading-[129%] max-md:px-5 max-md:max-w-full cursor-pointer" onClick={onSignup}>
                    Sign up
                    {/* <Link href="/Login">Visit login page</Link> */}
                  </div>
                </div>
                <div className="text-base flex justify-center items-center px-5 py-3 mt-5 font-medium rounded-2xl border border-solid shadow-sm border-zinc-300 leading-[129%] max-md:max-w-full">
                  <div className="flex gap-2 justify-center">
                    <div className="text-black">
                      Already have an account?
                    </div>
                    <div className="text-blue-900">Sign in</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-base flex gap-5 justify-between mt-20  text-black max-md:flex-wrap max-md:mt-10">
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

export default Signup;
