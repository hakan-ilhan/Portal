import React from "react";
import woman from "../assets/woman.png";
function Promotion() {
  return (
    <div className="bg-gradient-to-r from-[#F4E8F3] via-[#F3EFF6] to-[#EEE0F9] font-inter flex justify-between px-40 items-center pt-6">
      <div className="flex flex-col gap-10 items-start">
        <h2 className="text-[#3A4980] text-4xl leading-10 font-bold max-w-[400px]">
          Grab Upto 50% Off On Selected Headphone
        </h2>
        <button className="px-8 py-3 bg-[#3A4980] text-white font-semibold rounded-3xl">
          Buy Now
        </button>
      </div>
      <img src={woman} alt="" />
    </div>
  );
}

export default Promotion;
