import React from 'react';

const Card = ({ profilePic, name, description, companyLogo }) => {
  return (
    <div className="card mx-2 my-2 p-2 rounded-lg bg-gray-200 text-xl max-w-md flex flex-col items-start">
      <div className="flex items-center">
        <img src={profilePic} alt="Profile" className="profile-pic w-12 h-12 rounded-full mr-4" />
        <div className="info flex flex-col">
          <h3 className="name text-sm font-hiragino-mincho-pro mb-1">{name}</h3> {/* Adjusted margin-bottom */}
          <p className="description text-sm mb-0">{description}</p> {/* Adjusted margin-bottom */}
        </div>
      </div>
      <img src={companyLogo} alt="Company" className="company-logo w-16 h-8 self-start mt-2" />
    </div>
  );
};

export default Card;
