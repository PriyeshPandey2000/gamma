import DashGrid from '@/components/DashGrid'
import DashText from '@/components/DashText'
import { FollowUs } from '@/components/FollowUs'
import { GetInTouch } from '@/components/GetInTouch'
import Navbar from '@/components/Navbar'
import React from 'react';
import DashTiles from '@/components/DashTiles';

function Dashboard() {
  return (
    <div>
        <Navbar/>
        <div className="container mx-auto max-w-[1200px]  ">
        <DashText/>
        <DashTiles/>
        <DashGrid/>
        </div>
        <FollowUs/>
    </div>
  )
}

export default Dashboard