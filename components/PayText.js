import * as React from "react";

function PayText() {
  return (
    <div className="flex flex-col w-[45vw] ">
    <div className="flex gap-5 justify-between text-base leading-8 text-black whitespace-nowrap ">
      <div className="flex-grow">Subtotal</div>
      <div className="font-medium ml-auto">₹4,999</div>
    </div>
    <div className="flex gap-5 justify-between text-base leading-8 text-black whitespace-nowrap max-w-[810px] max-md:flex-wrap">
      <div className="max-md:max-w-full">Tax</div>
      <div className="font-medium">₹500</div>
    </div>
    <div className="flex gap-9 justify-between text-2xl font-bold leading-8 text-black whitespace-nowrap max-w-[227px] ml-auto">
      <div>Total</div>
      <div  className="ml-8">₹5,500</div>
    </div>
    <div className="flex flex-col py-5 text-base max-w-[834px] text-zinc-700 text-opacity-60">
      <div className="w-full max-md:max-w-full">Have a Coupon code?</div>
      <div className="mt-4 w-full border border-solid bg-zinc-700 bg-opacity-40 border-zinc-700 border-opacity-40 min-h-[1px] max-md:max-w-full" />
    </div>
    <div className="justify-center items-center px-16 py-3 text-2xl font-medium leading-8 text-white bg-sky-800 max-w-[833px] rounded-[59px] max-md:px-5">
      Pay now
    </div>
    </div>
  );
}


export default PayText;


