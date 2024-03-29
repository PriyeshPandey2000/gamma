import React from 'react';
import Card from './Card'; // Import the Card component
import "../styles/StudentsPlaced.css";
import Frame from './MovingCard';

const StudentsPlaced = () => {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden "> {/* Add overflow-x-hidden */}
      <h2 className="text-center font-hiragino-mincho-pro-center ">Students Placed Stories</h2>
      <div className="cards flex justify-center mt-8 animate-scrollRightToLeft">
      <Frame name="Brinda A" desc="Placed at Zoho" logo="/images/zohopic.png" company="/images/zoho.png"/>
        <Frame />
         <Frame/>
        <Frame/>
         <Frame/>
         <Frame/>
        <Frame/>
        {/* Repeat for other cards */}
      </div>
    </div>
  );
};

export default StudentsPlaced;
