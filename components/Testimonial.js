import React from "react";

export default function Testimonial({ testimonials }) {
  return (
    <div className="flex flex-wrap justify-center mx-auto max-w-7xl gap-4 p-5 font-['HomepageBaukasten'] bg-[linear-gradient(99deg,_#ffffff_-6%,#f2f4fb_240%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat rounded-[25px]">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="flex flex-col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] items-center gap-5">
          <div className="border border-[rgba(209,_209,_214,_0.3)] shadow-[0px_0px_10px_0px_rgba(76,_76,_109,_0.07)] bg-black/5 rounded-lg p-5 w-full flex flex-col items-center">
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-16"
            />
            <div className="flex flex-row gap-2 items-center mt-2">
              <div className="text-xl text-center font-['Hiragino_Mincho_Pro']">{testimonial.title}</div>
              <img
                src="https://file.rendit.io/n/6MFUpqki87O4rqiAhU21.png"
                alt="LinkedIn"
                className="w-6"
              />
            </div>
            <div className="text-sm text-[rgba(60,_60,_67,_0.6)] text-center mt-1">
              {testimonial.company}
            </div>
            <div className="text-xs leading-[20px] text-center w-full mt-2">
              {testimonial.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
