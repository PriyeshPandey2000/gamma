
import { FollowUs } from '@/components/FollowUs'
import { GetInTouch } from '@/components/GetInTouch'
import Navbar from '@/components/Navbar'
import Other from '@/components/SingleCourse/OtherCourse'
import CheckoutBanner from '@/components/checkout/CheckoutBanner'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


const Checkout = () => {
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
        <CheckoutBanner courseId={courseId} />
       
        <Other/>
        </div>
        <FollowUs/>
    </div>
  )
}

export default Checkout