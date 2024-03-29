import React from "react";

export default function Testimonial() {
  return (
    <div className="flex flex-wrap justify-center mx-auto max-w-7xl gap-4 p-5 font-['HomepageBaukasten'] bg-[linear-gradient(99deg,_#ffffff_-6%,#f2f4fb_240%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat rounded-[25px]">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex flex-col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] items-center gap-5">
          <div className="border border-[rgba(209,_209,_214,_0.3)] shadow-[0px_0px_10px_0px_rgba(76,_76,_109,_0.07)] bg-black/5 rounded-lg p-5 w-full flex flex-col items-center">
            <img
              src="https://file.rendit.io/n/ZHdzQXiIfAyinm81Vutr.svg"
              alt="Ellipse"
              className="w-16"
            />
            <div className="flex flex-row gap-2 items-center mt-2">
              <div className="text-xl text-center font-['Hiragino_Mincho_Pro']">Preeti Josh</div>
              <img
                src="https://file.rendit.io/n/6MFUpqki87O4rqiAhU21.png"
                alt="LinkedIn"
                className="w-6"
              />
            </div>
            <div className="text-sm text-[rgba(60,_60,_67,_0.6)] text-center mt-1">
              Placed at Amazon
            </div>
            <div className="text-xs leading-[20px] text-center w-full mt-2">
              Gammaprep did a fantastic job. Their content is so well structured, have
              live classes, good projects and most important good mentors. They helped
              me at every thick and thins to get skilled and interview calls. I would
              recommend Gammaprep to everyone.
            </div>
          </div>
        </div>
      ))}

      {/* Additional Testimonial Blocks */}
      <div className="flex flex-col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] items-center gap-5">
        <div className="border border-[rgba(209,_209,_214,_0.3)] shadow-[0px_0px_10px_0px_rgba(76,_76,_109,_0.07)] bg-black/5 rounded-lg p-5 w-full flex flex-col items-center">
          <img
            src="https://file.rendit.io/n/ZHdzQXiIfAyinm81Vutr.svg"
            alt="Ellipse"
            className="w-16"
          />
          <div className="flex flex-row gap-2 items-center mt-2">
            <div className="text-xl text-center font-['Hiragino_Mincho_Pro']">Preeti Josh</div>
            <img
              src="https://file.rendit.io/n/6MFUpqki87O4rqiAhU21.png"
              alt="LinkedIn"
              className="w-6"
            />
          </div>
          <div className="text-sm text-[rgba(60,_60,_67,_0.6)] text-center mt-1">
            Placed at Amazon
          </div>
          <div className="text-xs leading-[20px] text-center w-full mt-2">
            Gammaprep did a fantastic job. Their content is so well structured, have
            live classes, good projects and most important good mentors. They helped
            me at every thick and thins to get skilled and interview calls. I would
            recommend Gammaprep to everyone.
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] items-center gap-5">
        <div className="border border-[rgba(209,_209,_214,_0.3)] shadow-[0px_0px_10px_0px_rgba(76,_76,_109,_0.07)] bg-black/5 rounded-lg p-5 w-full flex flex-col items-center">
          <img
            src="https://file.rendit.io/n/ZHdzQXiIfAyinm81Vutr.svg"
            alt="Ellipse"
            className="w-16"
          />
          <div className="flex flex-row gap-2 items-center mt-2">
            <div className="text-xl text-center font-['Hiragino_Mincho_Pro']">Preeti Josh</div>
            <img
              src="https://file.rendit.io/n/6MFUpqki87O4rqiAhU21.png"
              alt="LinkedIn"
              className="w-6"
            />
          </div>
          <div className="text-sm text-[rgba(60,_60,_67,_0.6)] text-center mt-1">
            Placed at Amazon
          </div>
          <div className="text-xs leading-[20px] text-center w-full mt-2">
            Gammaprep did a fantastic job. Their content is so well structured, have
            live classes, good projects and most important good mentors. They helped
            me at every thick and thins to get skilled and interview calls. I would
            recommend Gammaprep to everyone.
          </div>
        </div>
      </div>
    </div>
  );
}
