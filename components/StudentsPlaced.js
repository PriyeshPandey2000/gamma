import React from 'react';
import Card from './Card'; // Import the Card component
import "../styles/StudentsPlaced.css";

const StudentsPlaced = () => {
  return (
    <div className="container flex flex-col items-center overflow-x-hidden"> {/* Add overflow-x-hidden */}
      <h2 className="text-center font-hiragino-mincho-pro">Students Placed Stories</h2>
      <div className="cards flex justify-center mt-8 animate-scrollRightToLeft">
        <Card
          profilePic="/images/zohopic.png"
          name="Brinda A"
          description="Placed at Zoho"
          companyLogo="/images/zoho.png"
          className="max-w-full xs:max-w-md" // Apply max-w-full for xs screens
        />
        <Card
          profilePic="/images/kunjika.png"
          name="Kunjika Arora"
          description="Placed at Zoho"
          companyLogo="/images/amdocs.png"
          className="max-w-full xs:max-w-md" // Apply max-w-full for xs screens
        />
        <Card
          profilePic="/images/zohopic.png"
          name="Brinda A"
          description="Placed at Zoho"
          companyLogo="/images/zoho.png"
          className="max-w-full xs:max-w-md" // Apply max-w-full for xs screens
        />
        <Card
          profilePic="/images/zohopic.png"
          name="Brinda A"
          description="Placed at Zoho"
          companyLogo="/images/zoho.png"
          className="max-w-full xs:max-w-md" // Apply max-w-full for xs screens
        />
        <Card
          profilePic="/images/zohopic.png"
          name="Brinda A"
          description="Placed at Zoho"
          companyLogo="/images/zoho.png"
          className="max-w-full xs:max-w-md" // Apply max-w-full for xs screens
        />
        <Card
          profilePic="/images/zohopic.png"
          name="Brinda A"
          description="Placed at Zoho"
          companyLogo="/images/zoho.png"
          className="max-w-full xs:max-w-md" // Apply max-w-full for xs screens
        />
        {/* Repeat for other cards */}
      </div>
    </div>
  );
};

export default StudentsPlaced;
