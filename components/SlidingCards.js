"use client"
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

const Courses = () => {
  const [cards, setCards] = useState([]);
  const popularCourses = [
    {
      image: '/images/courseimage.png',
      title: 'Popular Course 1',
      description: 'DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.',
      buttonText: 'Learn More',
      startDate:'15 March'
    },
    {
      image: '/images/courseimage.png',
      title: 'Popular Course 2',
      description: 'DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.',
      buttonText: 'Learn More',
      startDate:'15 March'
    },
    {
      image: '/images/courseimage.png',
      title: 'Popular Course 3',
      description: 'DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.',
      buttonText: 'Learn More',
      startDate:'15 March'
    }
  ];

  const growthCourses = [
    {
      image: '/images/courseimage.png',
      title: 'Career Growth Course 1',
      description: 'DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.',
      buttonText: 'Learn More',
      startDate:'15 March'
    },
    {
      image: '/images/courseimage.png',
      title: 'Career Growth Course 2',
      description: 'DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.',
      buttonText: 'Learn More',
      startDate:'15 March'
    },
    {
      image: '/images/courseimage.png',
      title: 'Career Growth Course 3',
      description: 'DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.',
      buttonText: 'Learn More',
      startDate:'15 March'
    }
  ];

  const skillsCourses = [
    {
      image: '/images/courseimage.png',
      title: 'Specialized Course 1',
      description: 'DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.',
      buttonText: 'Learn More',
      startDate:'15 March'
    },
    {
      image: '/images/courseimage.png',
      title: 'Specialized Course 2',
      description: 'DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.',
      buttonText: 'Learn More',
      startDate:'15 March'
    },
    {
      image: '/images/courseimage.png',
      title: 'Specialized Course 3',
      description: 'DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.',
      buttonText: 'Learn More',
      startDate:'15 March'
    }
  ];

  const courses = [popularCourses, growthCourses, skillsCourses];
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through the courses array
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCards(courses[currentCourseIndex]);
  }, [currentCourseIndex]);
  const [isXsScreen, setIsXsScreen] = useState(false);

  const handleResize = () => {
    const xsScreen = window.matchMedia('(max-width: 640px)').matches;
    setIsXsScreen(xsScreen);
    window.localStorage.setItem('isXsScreen', JSON.stringify(xsScreen));
  };

  useEffect(() => {
    const xsScreen = window.localStorage.getItem('isXsScreen');
    if (xsScreen) {
      setIsXsScreen(JSON.parse(xsScreen));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isXsScreenMediaQuery = useMediaQuery('(max-width: 639px)');
  const renderCard = (card, index) => {
    let cardClassNames = "transition-transform duration-500 ease-in-out transform animate-fade-in [background:linear-gradient(99.28deg,_#fff,_#f1f4fb)] shadow-[0px_0px_10px_rgba(76,_76,_109,_0.07)] box-border border-[1px] border-solid border-#D1D1D6 rounded-lg p-4 flex flex-col xs:mx-8 xs:my-3 lg:w-4/5 lg:mx-auto ";

  if (index === 1 && !isXsScreen) {
    cardClassNames += " justify-self-center"; // Center the second card
  } else if (index === 2 && !isXsScreen) {
    cardClassNames += " lg:ml-0"; // Remove left margin for the last card
  }
  else if (index === 0 && !isXsScreen) {
    cardClassNames += " lg:mr-0"; // Remove left margin for the last card
  }

    return (
      <div key={index} className={cardClassNames}>
        <div className="flex items-center mb-2">
          <img src="/images/trending.png" alt="Course Image" className="w-5 h-5 rounded-full mr-3" />
          <h2 className="text-12px font-bold text-custom-red mb-0.5">{card.title}</h2>
        </div>
        <img src={card.image} alt="Course" className="w-full rounded-lg mb-2" />
        <h3 className="text-12px font-semibold mb-2 text-custom-blue">{card.description}</h3>
        <p className="text-gray-400 mb-2" style={{ fontSize: '14px' }}>
          {card.description}
        </p>
        <p className="text-black mb-4 font-semibold" style={{ fontSize: '14px' }}>
          Course starts at : <span className="text-custom-blue">{card.startDate}</span>
        </p>
        <button className="btn btn-primary-new border border-blue-500 text-blue-500 rounded-full px-0 py-2 " style={{ width: 'auto' }}>
          Learn More
        </button>
        <div className="flex justify-center items-center mt-2">
          <img src="/images/3-dot.png" alt="Your Image" />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full   my-8">
      <h1 className={`text-3xl font-bold text-black-800 mb-4 text-center ${isXsScreen ? 'font-hiragino-mincho-xs' : 'font-hiragino-mincho-pro-center'}`}>
        Courses Offered
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3  justify-center ">
        {cards.map((card, index) => renderCard(card, index))}
      </div>

      {/* View All Courses Button */}
      <div className="flex justify-center mt-4">
        <button className="btn btn-primary-new border border-custom-blue  text-custom-blue rounded-full px-6 py-1">View All Courses</button>
      </div>
    </div>
  );
};

export default Courses;
