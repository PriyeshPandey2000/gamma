"use client"
import React, { useRef, useEffect, useState } from "react";
import Component from "@/components/SampleCard"; // Assuming the correct path to your Component

const Slider = () => {
  const sliderRef = useRef(null);
  const [middleCardIndex, setMiddleCardIndex] = useState(0);

  useEffect(() => {
    const containerWidth = sliderRef.current.offsetWidth;
    const slideWidth = sliderRef.current ? sliderRef.current.querySelector('.slide').offsetWidth : 0;
    const totalSlidesWidth = 3 * slideWidth; // Assuming you always have 3 slides
    const newScrollPosition = (totalSlidesWidth - containerWidth) / 2;
    sliderRef.current.scrollLeft = newScrollPosition;
    localStorage.setItem('sliderScrollPosition', newScrollPosition);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMiddleCardIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming you always have 3 slides
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-container" ref={sliderRef}>
      <div className="slides">
        {/* Render each slide directly */}
        <div className="slide">
          <div className={`card ${0 === middleCardIndex ? 'middle' : ''}`}>
            <Component />
          </div>
        </div>
        <div className="slide">
          <div className={`card ${1 === middleCardIndex ? 'middle' : ''}`}>
            <Component />
          </div>
        </div>
        <div className="slide">
          <div className={`card ${2 === middleCardIndex ? 'middle' : ''}`}>
            <Component />
          </div>
        </div>
      </div>
      {/* eslint-disable-next-line */}
      <style jsx>{`
        .slider-container {
          overflow: hidden; /* Hide horizontal overflow */
          width: 100%;
          position: relative;
          white-space: nowrap; /* Prevent slides from wrapping */
        }

        .slides {
          display: inline-block; /* Use inline-block to keep slides in a line */
        }

        .slide {
          display: inline-block;
          margin-right: 20px; /* Add margin between slides */
          white-space: normal; /* Reset white-space to allow text wrapping inside slides */
          vertical-align: top; /* Align slides to the top */
          transition: transform 0.3s ease; /* Add transition effect */
        }

        .card {
          display: inline-block;
          padding: 10px;
        }

        .card.middle {
          transform: scale(1.08); /* Increase the scale of the middle card */
        }

        .slide:last-child {
          margin-right: 0; /* Remove margin from the last slide */
        }
      `}</style>
    </div>
  );
};

export default Slider;
