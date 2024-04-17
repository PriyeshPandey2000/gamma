import * as React from "react";
function Require({ requirements }) {
  return (
    <div className="flex flex-col text-black max-w-[735px] ml-11">
      <div className="w-full text-2xl font-semibold leading-8 max-md:max-w-full">
        Requirements
      </div>
      <div className="mt-5 w-full text-base text-black leading-8 max-md:max-w-full">
      {requirements && requirements.map((requirement, index) => (
          <React.Fragment key={index}>
            * {requirement}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default  Require;
