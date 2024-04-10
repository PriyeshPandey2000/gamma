"use client"
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import '../styles/fonts.css'

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isXsScreen, setIsXsScreen] = useState(false);

  const handleResize = () => {
    setIsXsScreen(window.matchMedia('(max-width: 640px)').matches);
  };

  useEffect(() => {
    setIsXsScreen(window.matchMedia('(max-width: 640px)').matches);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What will the course structure be like?",
      answer: "The course will consist of weekly 5 live classes for each topic, including DSA (Data Structures and Algorithms), Full Stack MERN Development, and Data Science and Analytics. During these classes, mentors will provide detailed instruction, and you will also have the opportunity to work on real-time projects. In addition, you will have access to self-paced content, homework assignments, mock interviews, and mock tests. Download the course structure",
    },
    {
      question: "What is GammaInnovations and How I will get the paid internship there?",
      answer: "GammaInnovations.com is a platform that offer IT services like App development, Software development and Website development to clients accross the world, once you fully prepared at Gammaprep, you will get one of the project, so you can learn in the real time and you will get paid as well.",
    },
    {
      question: "I am from a non-tech background. Am I eligible?",
      answer: "Yes, Gammaprep bootcamp is curated in such a way that even if you are from a non-tech background, you will learn everything from basics to advanced topics with equal placement opportunities. The real-time projects you build here will compensate for your lack of a degree.",
    },
    {
      question: "What will be the duration of the course?",
      answer: "The placement preparation program consists of 4 to 6 months of training, it consist of 5 live classes per week, self paced content and projects.",
    },
    {
      question: "On which platform live classes, mock interviews, and mock tests will be Conducted?",
      answer: "Classes and Mock interviews will be on Zoom/Google meet, and Tests will be on Hackerrank.",
    },
    {
      question: "How can I ask my doubts during the course?",
      answer: "You can ask your doubts during the live classes, and you will also be added to a group where you can ask any questions you may have.",
    },
    {
      question: "How will I receive placement assistance?",
      answer: `We will have a dedicated HR team that will connect recruiters from various companies to Gammaprep. Additionally, upon completing the course, we will refer you to good software companies based on your mock interview performance. You will also receive regular job notifications, access to the best resume templates, and opportunities for mock tests and interviews.\n\nMost importantly, the skills you will acquire during the bootcamp will be essential in successfully cracking interviews with major companies.`,
    },
    {
      question: "Tell me more about 'Full Refund if Unplaced' policy?",
      answer: "As mentioned, students are eligible for a full refund if they do not secure a placement even after completing the course and scheduling interviews through our referrals. More details, you can refer our Terms and Conditions Page.",
    }
  ];

  const isXsScreenMediaQuery = useMediaQuery('(max-width: 639px)');

  return (
    <div className="mb-10">
      <h2 className={`text-2xl font-bold text-center mb-6 ${isXsScreen ? 'font-hiragino-mincho-xs' : 'font-hiragino-mincho-pro-center'}`}>
        Frequently Asked Questions
      </h2>
      <div className="py-6 pr-5 pl-6 rounded-3xl border border-solid border-zinc-300 max-md:pl-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:w-full md:leading-10">
            {questions.slice(0, 4).map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown(index)}>
                  <div className={`text-lg ${isXsScreen ? 'font-gotham-book-sm' : 'font-gotham-book-ok'}`}>{item.question}</div>
                  <div style={{ fontSize: '1.5em', marginTop: '-4px' }}>{openIndex === index ? "-" : "+"}</div>
                </div>
                {openIndex === index && (
                  <div className="mt-2 text-gray-600 pl-0" style={{  fontSize: '14px' }}>{item.answer}</div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:w-full xs:ml-0 md:leading-10">
            {questions.slice(4, 8).map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown(index + 4)}>
                  <div className={`text-lg ${isXsScreen ? 'font-gotham-book-sm' : 'font-gotham-book-ok'}`}>{item.question}</div>
                  <div style={{ fontSize: '1.5em', marginTop: '-4px' }}>{openIndex === index + 4 ? "-" : "+"}</div>
                </div>
                {openIndex === index + 4 && (
                  <div className="mt-2 text-gray-600 pl-0" style={{  fontSize: '14px' }}>{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
