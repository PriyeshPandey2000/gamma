import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const Card = ({ profilePic, name, description, companyLogo }) => {
  return (
    <div className="card mx-2 my-2 p-2 rounded-lg bg-gray-200 text-xl max-w-md xs:max-w-full" style={{ maxWidth: '100%' }}>
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

// Prop type validation
Card.propTypes = {
  profilePic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  companyLogo: PropTypes.string.isRequired,
};

export default Card;
