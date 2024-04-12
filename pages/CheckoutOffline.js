
import { FollowUs } from '@/components/FollowUs'
import { GetInTouch } from '@/components/GetInTouch'
import Navbar from '@/components/Navbar'
import Other from '@/components/SingleCourse/OtherCourse'
import CheckoutBanner from '@/components/checkout/CheckoutBanner'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CheckoutBannerOffline from '@/components/checkout/CheckoutBannerOffline'


const Checkoutoffline = () => {
    const router = useRouter();
const [courseId, setCourseId] = useState(null);

useEffect(() => {
    const { courseId } = router.query;
    if (courseId) {
      // Set courseId to state
      setCourseId(courseId);
    }
  }, [router.query]);
  return (
    <div>
        <Navbar/>
        <div className="container mx-auto max-w-[1100px]  ">
        <CheckoutBannerOffline courseId={courseId} />
       
        <Other/>
        </div>
        <FollowUs/>
    </div>
  )
}

export default Checkoutoffline