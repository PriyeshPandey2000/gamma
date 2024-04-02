import * as React from "react";

function AssessmentOptions() {
  return (
    <div>
        <h1 className="font-hiragino-mincho-pro">Take Self Asessment Test</h1>
        <p>Confused which course you want to take?Get Self Assessed</p>
    <div className="flex flex-col items-start pt-5 pb-20 pl-20 bg-white max-md:pl-5">
      <div className="flex gap-2.5 ml-5 max-md:ml-2.5">
        <div className="my-auto text-base leading-6 text-blue-800">1</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfcb01f846daff60f4195bddbefd9d5b6fc5c26c33e3a6386abd435b053f67fa?"
          className="shrink-0 self-start w-4 aspect-square"
        />
        <div className="flex-auto text-2xl leading-8 text-black">
          What is your current job status?
        </div>
      </div>
      <div className="flex gap-2 py-2 mt-9 ml-16 text-blue-800 whitespace-nowrap rounded shadow-sm bg-blue-800 bg-opacity-10 max-md:ml-2.5">
        <div className="flex flex-col justify-center items-center w-6 h-6 text-xs font-bold leading-4 text-center rounded-sm bg-white bg-opacity-80">
          <div className="justify-center items-center px-2 w-6 h-6 bg-white rounded-sm border border-solid border-blue-800 border-opacity-60 ml-2">
            A
          </div>
        </div>
        <div className="flex-auto my-auto text-xl leading-7 px-4">Fresher</div>
      </div>
      <div className="flex gap-2 py-2 mt-2 ml-16 text-blue-800 rounded shadow-sm bg-blue-800 bg-opacity-10 max-md:ml-2.5">
        <div className="flex flex-col justify-center items-center w-6 h-6 text-xs font-bold leading-4 text-center whitespace-nowrap rounded-sm bg-white bg-opacity-80">
          <div className="justify-center items-center w-6 h-6 bg-white rounded-sm border border-solid border-blue-800 border-opacity-60">
            B
          </div>
        </div>
        <div className="flex-auto text-xl leading-7">Working Professional</div>
      </div>
      <div className="flex gap-2 py-2 mt-2 ml-16 text-blue-800 whitespace-nowrap rounded shadow-sm bg-blue-800 bg-opacity-10 max-md:ml-2.5">
        <div className="flex flex-col justify-center items-center w-6 h-6 text-xs font-bold leading-4 text-center rounded-sm bg-white bg-opacity-80">
          <div className="justify-center items-center px-2 w-6 h-6 bg-white rounded-sm border border-solid border-blue-800 border-opacity-60">
            C
          </div>
        </div>
        <div className="flex-auto my-auto text-xl leading-7">Student</div>
      </div>
      <div className="flex gap-2 py-2 mt-2 ml-16 text-blue-800 rounded shadow-sm bg-blue-800 bg-opacity-10 max-md:ml-2.5">
        <div className="flex flex-col justify-center items-center w-6 h-6 text-xs font-bold leading-4 text-center whitespace-nowrap rounded-sm bg-white bg-opacity-80">
          <div className="justify-center items-center px-2 w-6 h-6 bg-white rounded-sm border border-solid border-blue-800 border-opacity-60">
            D
          </div>
        </div>
        <div className="flex-auto my-auto text-xl leading-7">On a break</div>
      </div>
      <div className="flex gap-2 py-2 mt-2 ml-16 text-blue-800 whitespace-nowrap rounded shadow-sm bg-blue-800 bg-opacity-10 max-md:ml-2.5">
        <div className="flex flex-col justify-center items-center w-6 h-6 text-xs font-bold leading-4 text-center rounded-sm bg-white bg-opacity-80">
          <div className="justify-center items-center px-2.5 w-6 h-6 bg-white rounded-sm border border-solid border-blue-800 border-opacity-60">
            E
          </div>
        </div>
        <div className="flex-auto my-auto text-xl leading-7">Other</div>
      </div>
      <div className="flex gap-2.5 justify-center px-4 py-3.5 mt-4 ml-16 text-xl font-bold leading-5 text-center text-white whitespace-nowrap bg-blue-800 rounded shadow-sm max-md:ml-2.5">
        <div>OK</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a923412888832c8ef2aed2addf2ec9d0f3bc9e9a8a5057d4e91f8b917f29d50?"
          className="shrink-0 self-start w-4 aspect-[1.23]"
        />
      </div>
      <div className="justify-center items-start self-end px-9 py-2.5 mt-40 max-w-full text-sm leading-3 text-right text-white bg-blue-800 rounded w-[150px] max-md:pl-5 max-md:mt-10">
        By GAMMA PREP
      </div>
    </div>
    </div>
  );
}

export default AssessmentOptions;

