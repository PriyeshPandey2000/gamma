
"use client"
import React, { useState,useEffect } from 'react'
import { useRouter } from "next/navigation";
import sha256 from "crypto-js/sha256";
import { redirect } from "next/navigation";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

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
    
        const transactionid = "Tr-"+uuidv4().toString(36).slice(-6);
        

        
    
        const payload = {
            merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
            merchantTransactionId: transactionid,
            merchantUserId: 'MUID-'+uuidv4().toString(36).slice(-6),
            amount: course.price,
            redirectUrl: `http://localhost:3000/api/users/status/${transactionid}`,
            redirectMode: "POST",
            callbackUrl: `http://localhost:3000/api/users/status/${transactionid}`,
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
        "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";
    
    
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
  return (
    <div>
    {courses.map((course, index) => {
        // Check if the course id matches the provided courseId
        if (course._id === courseId) {
            return (
                <div key={course._id}>
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
                </div>
            );
        }
    })}
</div>


  );
}

export default CheckoutBanner;
