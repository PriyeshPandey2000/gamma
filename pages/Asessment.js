import AssessmentOptions from '@/components/AssesmentOptions'
import Navbar from '@/components/Navbar'
import React from 'react'

function Asessment() {
  return (
    <div>
        <Navbar/>
        <div className="container mx-auto max-w-[1180px] mb-11">
     <AssessmentOptions/>
     </div>
        </div>
  )
}

export default Asessment