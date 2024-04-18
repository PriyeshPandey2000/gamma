"use client"
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css"
import '../../styles/fonts.css'

function Failure  () {
  const router = useRouter();
  useEffect(() => {
    const courseId = Cookies.get('courseId');
    const mode=Cookies.get('mode');
    if (courseId && mode) {
      if(mode==='online'){router.push(`/Checkout?courseId=${courseId}`)}
      else{
        router.push(`/CheckoutOffline?courseId=${courseId}`);
      }
      
    }
  }, []);
  return (
    <div className="font-hiragino-mincho-pro-center">Payment failed ..</div>
  )
}
export default Failure;
