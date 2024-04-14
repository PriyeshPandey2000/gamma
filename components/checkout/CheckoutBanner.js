
"use client"
import React, { useState,useEffect } from 'react'
import { useRouter } from "next/navigation";
import sha256 from "crypto-js/sha256";
import { redirect } from "next/navigation";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';
import PayText from '../PayText';
import { useMediaQuery } from '@react-hook/media-query';

function CheckoutBanner({courseId}) {
    const [courses, setCourses] = useState([]);
    const router=useRouter();
    
    // const courseId="6611bfe0467c3ba9ab01695d";
    useEffect(() => {
        const fetchCourses = async () => {
          try {
            const response = await axios.get('/api/users/courses');
            console.log('Response data:', response.data);
            console.log(response.data.data[0].title);
          if (Array.isArray(response.data.data)) { // Access response.data.data
            setCourses(response.data.data);
            } else {
              console.error('Invalid response data structure:', response.data);
            }
          } catch (error) {
            console.error('Error fetching courses:', error);
          }
        };
        fetchCourses();
        
      }, []);

    const makePayment=async(e)=>{

        e.preventDefault();
        const course = courses.find(course => course._id === courseId);
        if (!course) {
            console.error('Course not found');
            return;
        }
        Cookies.set('courseId', courseId, { expires: 1 });
    
        const transactionid = "Tr-"+uuidv4().toString(36).slice(-6);
        

        
    
        const payload = {
            merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
            merchantTransactionId: transactionid,
            merchantUserId: 'MUID-'+uuidv4().toString(36).slice(-6),
            amount: course.price,
            redirectUrl: `https://gamma-indol.vercel.app/api/users/status/${transactionid}?courseId=${courseId}`,
            redirectMode: "POST",
            callbackUrl: `https://gamma-indol.vercel.app/api/users/status/${transactionid}?courseId=${courseId}`,
            mobileNumber: '9999999999',
            paymentInstrument: {
              type: "PAY_PAGE",
            },
            
            
          };
    
    
          const dataPayload = JSON.stringify(payload);
          console.log(dataPayload);
    
          const dataBase64 = Buffer.from(dataPayload).toString("base64");
          console.log(dataBase64);
    
    
      const fullURL =
            dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY;
         const dataSha256 = sha256(fullURL);
    
          const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;
          console.log("c====",checksum);
    
    
    
        const UAT_PAY_API_URL =
        "https://api.phonepe.com/apis/hermes/pg/v1/pay";
    
    
      const response = await axios.post(
        UAT_PAY_API_URL,
        {
          request: dataBase64,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
             "X-VERIFY": checksum,
          },
        }
      );
    
    
      const redirect=response.data.data.instrumentResponse.redirectInfo.url;
      router.push(redirect)
    
    
      }
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
  return (
    <div>
      
      <h1 className="mt-7 font-hiragino-mincho-pro-center-small-left md:ml-0 xs:ml-11">Checkout</h1>
                    <p className="mt-3 mb-11 md:ml-0 xs:ml-11" style={{ color: '#3C3C4399' }}>Review your order details</p>
                    
      
    {courses.map((course, index) => {
        // Check if the course id matches the provided courseId
        if (course._id === courseId) {
            return (
              <div className="mt-7 ">
              <div className="flex  justify-between max-md:flex-wrap">
              <div className="w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className={`flex flex-col w-[40vw] max-md:ml-0 max-md:w-full ${isXsScreen ? '  mx-auto' : 'justify-start'}`}>
                    
                    <img
                      loading="lazy"
                      src="/images/courseimage.png"
                      className="self-stretch mx-auto md:w-[27vw] xs:w-[90vw]   aspect-[2.38] max-md:mt-10 max-md:max-w-full"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[70vw] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-5 text-base leading-8 text-black max-md:mt-10 max-md:max-w-full">
                      <div className="text-xl font-bold max-md:max-w-full">
                        {course.title}
                      </div>
                      <div className="flex flex-row justify-between w-full">
                      <div className="mt-3 max-md:max-w-full">Online</div>
                      <div className="my-auto text-2xl font-medium leading-8 text-black  mr-0">
              ₹{course.price}
              </div>

                      </div>
                      <div className="mt-3 text-yellow-500 max-md:max-w-full">
                        Few Seats Left!
                      </div>
                      <div className="mt-3 font-medium text-sky-800 max-md:max-w-full">
                        View Course Details
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="my-auto text-2xl font-medium leading-8 text-black xs:mx-auto">
              ₹{course.price}hello 
              </div> */}
            </div>
            <div className=" xs:mx-auto md:flex justify-end mb-7 ">
                                {/* <PayText /> */}
                                <div className="flex flex-col md:w-[44vw] xs:[90vw]">
    <div className="flex gap-5 justify-between text-base leading-8 text-black whitespace-nowrap ">
      <div className="flex-grow md:ml-0 xs:ml-4">Subtotal</div>
      <div className="font-medium md:ml-auto xs:mr-4"> ₹{course.price}</div>
    </div>
    {/* <div className="flex gap-5 justify-between text-base leading-8 text-black whitespace-nowrap max-w-[810px] max-md:flex-wrap">
      <div className="max-md:max-w-full">Tax</div>
      <div className="font-medium">₹0</div>
    </div> */}
    <div className="flex gap-9 justify-between text-2xl font-bold leading-8 text-black whitespace-nowrap max-w-[227px] ml-auto xs:mr-4">
      <div>Total</div>
      <div  className="ml-8">₹{course.price}</div>
    </div>
    <div className="flex flex-col py-5 text-base max-w-[834px] text-zinc-700 text-opacity-60">
      {/* <div className="w-full max-md:max-w-full">Have a Coupon code?</div> */}
      <div className="mt-4 w-full border border-solid bg-zinc-700 bg-opacity-40 border-zinc-700 border-opacity-40 min-h-[1px] max-md:max-w-full" />
    </div>
    <div onClick={(e) => makePayment(e)} className="flex justify-center items-center px-16 py-3 text-2xl font-medium leading-8 text-white bg-sky-800 max-w-[833px] rounded-[59px] max-md:px-5 cursor-pointer md:w-full xs:w-[90vw] xs:mx-auto">
      Pay now
    </div>
    </div>
                            </div>
                {/* <div key={course._id}>
                    <h1 className="mt-7 font-hiragino-mincho-pro-center-small-left">Checkout</h1>
                    <p className="mt-3 mb-11" style={{ color: '#3C3C4399' }}>Review your order details</p>
                    <div className="flex gap-5 justify-between max-md:flex-wrap mt-11">
                        <div className="max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full mt-8">
                                    <img
                                        loading="lazy"
                                        src="/images/courseimage.png"
                                        className="grow w-full aspect-[2] max-md:mt-10 max-md:max-w-full"
                                    />
                                </div>
                                <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col self-stretch px-5 my-auto text-lg leading-8 text-black max-md:mt-10 max-md:max-w-full mt-6">
                                        <div className="text-xl font-bold max-md:max-w-full">
                                            {course.title}
                                        </div>
                                        <div className="mt-3 max-md:max-w-full">{course.type}</div>
                                        <div className="mt-3 font-medium text-sky-800 max-md:max-w-full">
                                            View Course Details
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-auto text-2xl font-medium leading-8 text-black">
                            ₹{course.price}
                        </div>
                    </div>
                    <div className="max-md:max-w-full mt-5">
                        <div onClick={(e) => makePayment(e)} className="justify-center items-center px-16 py-4 text-2xl font-medium leading-8 text-white bg-sky-800 max-w-[833px] rounded-[59px] max-md:px-5 cursor-pointer">
                            Pay now
                        </div>
                    </div>
                </div> */}
                </div>
            );
        }
    })}
</div>


  );
}

export default CheckoutBanner;
