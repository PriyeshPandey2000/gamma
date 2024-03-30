import { useMemo } from "react";

const ChartBar = ({ trending, mostPopularCourse, propWidth, propColor }) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const mostPopularCourseStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="rounded-sm [background:linear-gradient(99.28deg,_#fff,_#f1f4fb)] shadow-[0px_0px_10px_rgba(76,_76,_109,_0.07)] box-border flex flex-col items-start justify-start py-6 px-[19px] gap-[24px] max-w-full text-left text-mid text-tomato font-gotham border-[1px] border-solid border-lightgray-200 mq800:pt-5 mq800:pb-5 mq800:box-border">
      <div
        className="w-[211px] h-6 flex flex-row items-start justify-start gap-[8px]"
        style={frameDivStyle}
      >
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src={trending}
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
          <b className="self-stretch relative" style={mostPopularCourseStyle}>
            {mostPopularCourse}
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-b4b7f">
        <img
          className="self-stretch h-[179px] relative rounded-6xs max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/4218796-d1d8-28-1@2x.png"
        />
        <div className="self-stretch relative leading-[30px] font-medium">
          DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects
        </div>
        <div className="self-stretch relative text-mini leading-[24px] font-homepagebaukasten text-darkslategray-100">
          DSA for Cracking the Coding Interview. Animated Examples for Faster
          Learning and Deeper Understanding.
        </div>
      </div>
      <div className="w-[199px] flex flex-col items-start justify-start gap-[24px] text-mini text-labels-primary font-homepagebaukasten">
        <div className="self-stretch flex flex-row items-end justify-start gap-[4px]">
          <div className="flex-1 relative leading-[24px]">
            Course Starts at :
          </div>
          <div className="w-[66px] relative leading-[20px] font-medium font-gotham text-b4b7f text-center flex items-center justify-center min-w-[66px]">
            15 March
          </div>
        </div>
        <button className="cursor-pointer py-3 px-[19px] bg-[transparent] w-[125px] rounded-44xl box-border flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-b4b7f hover:bg-steelblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-100">
          <div className="flex-1 relative text-mini leading-[20px] font-medium font-gotham text-b4b7f text-center">
            Learn More
          </div>
        </button>
      </div>
      <div className="w-[316px] h-5 flex flex-row items-start justify-center">
        <div className="mt-[-2px] rounded-31xl flex flex-row items-start justify-start py-2 px-3 gap-[8px]">
          <div className="h-2 w-2 relative rounded-31xl bg-labels-primary" />
          <div className="h-2 w-2 relative rounded-31xl bg-gray-300" />
          <div className="h-2 w-2 relative rounded-31xl bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default ChartBar;