import React from "react";

export const Frame = () => {
  return (
    <div className="flex flex-col w-[300px] h-[150px] items-start justify-center gap-[20px] px-[20px] py-[12px] relative bg-white rounded-[14px] overflow-hidden border border-solid border-[#d1d1d6]" style={{ background: 'linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(241.6, 243.64, 250.85) 100%)' }}>
      <div className="inline-flex items-center justify-center gap-[12px] relative flex-[0_0_auto]">
        <img className="relative w-[40px] h-[40px]" alt="Ellipse" src="ellipse-6.png" />
        <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Hiragino_Mincho_Pro-W6',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal]">
            Brinda A
          </div>
          <div className="relative w-fit [font-family:'HomepageBaukasten-Book',Helvetica] font-normal text-[#3c3c4399] text-[17px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Placed at Zoho
          </div>
        </div>
      </div>
      <img className="relative w-[65.66px] h-[28px] object-cover" alt="Zoho logo" src="zoho-logo-512-1.png" />
    </div>
  );
};
