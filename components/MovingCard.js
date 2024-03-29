import React from "react";
import PropTypes from 'prop-types';

const Frame = ({ name, desc, logo, company }) => {
  return (
    <div className="flex flex-col w-[300px] h-[150px] items-start justify-center gap-[20px] px-[20px] py-[12px] relative bg-white rounded-[14px] overflow-hidden border border-solid border-[#d1d1d6] mr-5" style={{ background: 'linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(241.6, 243.64, 250.85) 100%)' }}>
      <div className="inline-flex items-center justify-center gap-[12px] relative flex-[0_0_auto]">
        <img className="relative w-[40px] h-[40px]" alt="Ellipse" src={logo} /> {/* Use the passed logo prop */}
        <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Hiragino_Mincho_Pro-W6',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal]">
            {name} {/* Use the passed name prop */}
          </div>
          <div className="relative w-fit [font-family:'HomepageBaukasten-Book',Helvetica] font-normal text-[#3c3c4399] text-[17px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            {desc} {/* Use the passed desc prop */}
          </div>
        </div>
      </div>
      <img className="relative w-[65.66px] h-[28px] object-cover" alt={`${company} logo`} src={company} /> {/* Use the passed company prop */}
    </div>
  );
};
MovingCard.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired
};


export default Frame;
