"use client"
import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';

const MentorsSection = () => {
  const isXsScreen = useMediaQuery('(max-width: 639px)');
  return (
    <section className="p-8">
      <h2 className={`text-3xl font-bold mb-8 ${isXsScreen ? 'font-hiragino-mincho-xs' : 'font-hiragino-mincho-pro-center'}`}>Our Mentors</h2>
      <div className="flex flex-col sm:flex-row justify-between">
        {/* Mentor Card 1 */}
        <div className="w-full sm:w-1/3 bg-white rounded-lg shadow-md p-6 flex flex-col items-center mb-4 sm:mb-0">
          <img src="/images/vaibhav.png" alt="Mentor 1" className="w-16 h-auto rounded-full mb-4" />
          <h3 className="text-xl font-bold mb-2 font-hiragino-mincho-pro-center-small">Vaibhav Goyal</h3>
          <img src="/images/oracle.png" alt="Company 1" className="w-20 h-auto mb-4" />
          <p className="text-sm text-gray-700 mb-4">Vaibhav is a Senior Software Engineer at Oracle. He is Graduated from NIT Warangal. While in college, he developed his job search portal and ran it successfully for 2 years. He has also worked on various projects like AQI prediction using ML, Graph traversal optimization which has been patented recently, and developed software used in Chemical plants. He has a passion to teach coding and discuss problems with his students</p>
          <p className="text-lg font-bold">DSA and Full Stack</p>
        </div>
        {/* Mentor Card 2 */}
        <div className="w-full sm:w-1/3 bg-white rounded-lg shadow-md p-6 flex flex-col items-center mb-4 sm:mb-0">
          <img src="/images/drishti.png" alt="Mentor 2" className="w-16 h-auto rounded-full mb-4" />
          <h3 className="text-xl font-bold mb-2 font-hiragino-mincho-pro-center-small">Drishti Mamtani</h3>
          <img src="/images/google.png" alt="Company 2" className="w-20 h-auto mb-4" />
          <p className="text-sm text-gray-700 mb-9">Drishti is a Software Engineer at Google. She has also interned at Oracle in the Data Science team and at Amazon in the Amazon Pay team. She is a graduate from BITS Pilani Hyderabad Campus with Majors in B.E. Computer Science and MSc. Physics and Minor in Data Science. She has also worked on various projects like Product Recommender Models, Test Automation, etc.</p>
          <p className="text-lg font-bold">Data Science and Analytics Part</p>
        </div>
        {/* Mentor Card 3 */}
        <div className="w-full sm:w-1/3 bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <img src="/images/shubham.png" alt="Mentor 3" className="w-16 h-auto rounded-full mb-4" />
          <h3 className="text-xl font-bold mb-2 font-hiragino-mincho-pro-center-small">Shubham Mondal</h3>
          <img src="/images/mastercard.png" alt="Company 3" className="w-20 h-auto mb-4" />
          <p className="text-sm text-gray-700 mb-12">Shubham is a Software Developer in Mastercard India. He has also interned in Mastercard as a Software intern and in Pine Labs as a Data Intern. He is a graduate from IIT Kharagpur, having a Masters in Mathematics and Computing. He has a passion for teaching and solving problems with his students.</p>
          <p className="text-lg font-bold mt-6">DSA and Coding</p>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
