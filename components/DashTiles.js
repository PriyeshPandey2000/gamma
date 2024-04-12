import * as React from "react";

function DashTiles() {
  return (
    <div className="flex  justify-between gap-5 text-base font-medium text-black max-md:flex-wrap mt-7 mb-7 items-center">
      <div className="flex-auto px-5 py-8 text-blue-900 rounded-2xl border border-solid shadow-sm border-zinc-300 leading-[133%] ">
        Courses Enrolled
      </div>
      <div className="flex-auto px-5 py-8 text-center rounded-2xl border border-solid shadow-sm border-zinc-300">
        Scheduled Mock Interview
      </div>
      <div className="flex-auto px-5 py-8 text-center rounded-2xl border border-solid shadow-sm border-zinc-300">
        Request Job Referrals
      </div>
      <div className="flex-auto px-5 py-8 rounded-2xl border border-solid shadow-sm border-zinc-300 leading-[133%]">
        Join Batch Group
      </div>
      <div className="flex-auto px-5 py-5 text-center rounded-2xl border border-solid shadow-sm border-zinc-300">
        Ask Doubt from
        <br />
        Mentor
      </div>
    </div>
  );
}

export default DashTiles;
