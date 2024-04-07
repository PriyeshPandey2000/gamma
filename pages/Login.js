'use client'
import React, { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css";
import '../styles/fonts.css';
import {useRouter} from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useMediaQuery } from '@react-hook/media-query';



function Login() {
    const router = useRouter();
    const [user, setUser] = React.useState({
      email: "",
      
      password: "",
      
  })
  const [isXsScreen, setIsXsScreen] = useState(false);

  const handleResize = () => {
    const xsScreen = window.matchMedia('(max-width: 640px)').matches;
    setIsXsScreen(xsScreen);
    window.localStorage.setItem('isXsScreen', JSON.stringify(xsScreen));
  };

  useEffect(() => {
    const xsScreen = window.localStorage.getItem('isXsScreen');
    if (xsScreen) {
      setIsXsScreen(JSON.parse(xsScreen));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isXsScreenMediaQuery = useMediaQuery('(max-width: 639px)');

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
        setLoading(true);
        const response = await axios.post("/api/users/login", user);
        console.log("Login success", response.data);
        router.push("/");
    } catch (error) {
        console.log("Signup failed", error.message);
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
  };
//   useEffect(() => {
//     if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
//         setButtonDisabled(false);
//     } else {
//         setButtonDisabled(true);
//     }
//   }, [user]);


  return (
    <>
     {!isXsScreen && (<img
    loading="lazy"
    srcSet="/images/logo.png"
    className="self-start max-w-full aspect-[3.33] w-[140px] ml-11 mt-9"
  />)}
    
   <div className="container mx-auto max-w-[1080px] ">
    <div className="flex flex-col items-center px-11 pt-7 xs:pt-2 pb-20 bg-white max-md:px-5">
     
      <div className="mt-29 xs:mt-1 w-full max-w-[1285px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {!isXsScreen && ( // Render the image if not xs screen
          <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fe1e782fd435b3dd637e249808662449ee1a5221a367380c8c3864f4daec79f?"
              className="w-full aspect-square max-md:mt-10 max-md:max-w-full"
            />
          </div>
        )}
          <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center self-stretch my-auto text-lg font-medium leading-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col items-center py-6 rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:max-w-full">
                <div className="flex flex-col self-stretch px-5 text-black max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="/images/logo.png"
                    className="max-w-full aspect-[3.33] w-[140px]"
                  />
                  <div className="mt-8 text-xl font-semibold max-md:max-w-full font-hiragino-mincho-pro-center-left">
                    Sign in
                  </div>
                  <div className="text-base justify-center items-start px-6 py-2 mt-7 whitespace-nowrap rounded-xl border border-solid border-zinc-300 text-zinc-700 text-opacity-60 max-md:px-5 max-md:max-w-full">
                  <input
                      type="email"
                      placeholder="Email"
                      value={user.email}
                      onChange={(e)=>setUser({...user,email:e.target.value})}
                      className="w-full h-full px-3 py-0 outline-none rounded-xl border-none bg-transparent text-black"
                    />
                  </div>
                  <div className="text-base justify-center items-start px-6 py-2 mt-3 whitespace-nowrap rounded-xl border border-solid border-zinc-300 text-zinc-700 text-opacity-60 max-md:px-5 max-md:max-w-full">
                  <input
                      type="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={(e)=>setUser({...user,password:e.target.value})}
                      className="w-full h-full px-3 py-0 outline-none rounded-xl border-none bg-transparent text-black"
                    />
                  </div>
                  <div className="flex justify-center text-base items-center px-16 py-2 mt-6 text-white bg-blue-900 rounded-lg max-md:px-5 max-md:max-w-full cursor-pointer " onClick={onLogin}>
                    Sign in
                  </div>
                  <div className="self-center mt-4">or</div>
                </div>
                <div className="flex justify-center text-base items-center px-16 py-2 mt-4 md:max-w-[350px]  xs:max-w-[310px] text-white bg-red-400 rounded-lg w-[448px] max-md:px-5">
                  <div className="flex gap-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/749053aa83b596a7c71261e620ffdbfd8102a4d358aa2f2287be01fdc5d074de?"
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div >Sign in with Google</div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-blue-900">Forgot Password?</div>
              </div>
              <div className="flex justify-center items-center px-5 py-3 mt-3.5 rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:max-w-full">
                <div className="flex gap-2 justify-center">
                  <div className="text-black">Don’t have an account?</div>
                  <div className="text-blue-900">Sign up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-base flex gap-5 justify-between mt-32  text-black max-md:flex-wrap max-md:mt-10">
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

