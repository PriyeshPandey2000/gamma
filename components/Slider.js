"use client"
import React, { useRef, useEffect, useState } from "react";
import Component from "@/components/SampleCard"; // Assuming the correct path to your Component

const Slider = () => {
  const sliderRef = useRef(null);
  const [middleCardIndex, setMiddleCardIndex] = useState(0);

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
          overflow: hidden;
          width: 100%;
          display: flex;
          justify-content: center; /* Center align the slides */
        }

        .slides {
          display: inline-flex; /* Use inline-flex to keep slides in a line */
        }

        .slide {
          margin-right: 20px;
          white-space: nowrap; /* Prevent slides from wrapping */
          transition: transform 0.3s ease;
        }

        .card {
          padding: 10px;
          display: inline-block;
        }

        .card.middle {
          transform: scale(1.08);
        }

        .slide:last-child {
          margin-right: 0;
        }
      `}</style>
    </div>
  );
};

export default Slider;
