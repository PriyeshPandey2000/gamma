"use client"
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

function Failure  () {
  const router = useRouter();
  useEffect(() => {
    const courseId = Cookies.get('courseId');
    if (courseId) {
      router.push(`/Checkout?courseId=${courseId}`);
    }
  }, []);
  return (
    <div>payment failed ..</div>
  )
}
export default Failure;
