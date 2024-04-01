"use client"
import React, { useRef, useEffect, useState, useMemo } from "react";
import Component from "@/components/SampleCard"; // Assuming the correct path to your Component

const Slider = () => {
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [middleCardIndex, setMiddleCardIndex] = useState(0);
  const [animateMiddleCard, setAnimateMiddleCard] = useState(false);

  const slides = useMemo(() => [1, 2, 3], []); // Memoize the slides array

  useEffect(() => {
    const containerWidth = sliderRef.current.offsetWidth;
    const slideWidth = sliderRef.current ? sliderRef.current.querySelector('.slide').offsetWidth : 0;
    const totalSlidesWidth = slides.length * slideWidth;
    const newScrollPosition = (totalSlidesWidth - containerWidth) / 2;
    setScrollPosition(newScrollPosition);

    const intervalId = setInterval(() => {
      setMiddleCardIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setAnimateMiddleCard(true); // Set animateMiddleCard to true when middle card updates
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slides]);

  useEffect(() => {
    if (sliderRef.current && scrollPosition !== null) {
      sliderRef.current.scrollLeft = scrollPosition;
      localStorage.setItem('sliderScrollPosition', scrollPosition);
    }
  }, [scrollPosition]);

  useEffect(() => {
    const savedScrollPosition = localStorage.getItem('sliderScrollPosition');
    if (savedScrollPosition !== null) {
      setScrollPosition(Number(savedScrollPosition));
    }
  }, []);

  useEffect(() => {
    const slideWidth = sliderRef.current ? sliderRef.current.querySelector('.slide').offsetWidth : 0;
    const newScrollPosition = middleCardIndex * slideWidth;
    setScrollPosition(newScrollPosition);
    setAnimateMiddleCard(false);
  }, [middleCardIndex]);

  return (
    <div className="slider-container" ref={sliderRef}>
      <div className="slides">
        {/* Render each slide directly */}
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === middleCardIndex && animateMiddleCard ? 'animate' : ''}`}>
            <Component />
          </div>
        ))}
      </div>
      <style jsx>{`
        .slider-container {
          overflow: hidden; /* Hide horizontal overflow */
          width: 100%;
          position: relative;
          white-space: nowrap; /* Prevent slides from wrapping */
        }

        .slides {
          display: inline-block; /* Use inline-block to keep slides in a line */
          transition: transform 0.5s ease; /* Apply transition effect */
        }

        .slide {
          display: inline-block;
          margin-right: 10px; /* Add margin between slides */
          white-space: normal; /* Reset white-space to allow text wrapping inside slides */
          vertical-align: top; /* Align slides to the top */
        }

        .slide.animate {
          animation: slideLeftAnimation 0.5s ease; /* Apply animation only when middle card updates */
        }

        @keyframes slideLeftAnimation {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-10px); /* Adjust the distance for desired animation */
          }
        }

        .slide:last-child {
          margin-right: 0; /* Remove margin from the last slide */
        }
      `}</style>
    </div>
  );
};

export default Slider;
