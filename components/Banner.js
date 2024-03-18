import React from 'react';

const JobBanner = () => (
  <div className="bg-white py-8 px-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1 bg-white rounded-lg shadow-md p-4">
          <div className="job-content-block mb-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">Get your Dream Job/Internship in just 90 Days with Gamma Prep</h1>
            <div className="all-steps mb-4">
              <h4 className="text-info mb-4">WANT TO GET PLACED AS A SOFTWARE ENGINEER?</h4>
              {/* Steps */}
              <ul className="list-disc ml-6">
                <li className="mb-4 flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div> {/* Blue dot */}
                  <span>Enroll With Us</span>
                </li>
                <li className="mb-4 flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div> {/* Blue dot */}
                  <span>Learn development from the best mentors</span>
                </li>
                <li className="mb-4 flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div> {/* Blue dot */}
                  <span>Make amazing projects</span>
                </li>
                <li className="mb-4 flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div> {/* Blue dot */}
                  <span>Get Placed</span>
                </li>
              </ul>
            </div>
            <div className="all-steps course">
              <span><b>Full Course Fee:</b> ₹ 7999/-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="text-danger"><del>₹ 14999/-</del></span><br/><br/>
              <span><b>Next Live Batch:</b> From 10th March, 2024 (Just Started, Enroll Now)<br/><br/></span>
              <a href="https://gammaprep.com/Login">
                <button className="btn btn-primary-new">Enroll Now</button>&nbsp;&nbsp;&nbsp;
              </a>
              {/* Other buttons */}
            </div>
          </div>
        </div>

        <div className="md:col-span-1 bg-white rounded-lg shadow-md p-4">
          <div className="ban1">
            <img className="img-responsive" src="/images/job-hunt.png" alt="Banner"/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default JobBanner;
