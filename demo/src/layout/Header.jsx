import React from "react";
import bag from "../assets/frame.png";
import bell from "../assets/vector.png";
import scarlet from "../assets/scarlet.png";
function Header() {
  return (
    <div className="">
      <div className="flex justify-between my-6 px-24">
        <div className="flex gap-16 items-center">
          <p className="font-extrabold text-2xl leading-10 text-[#0D3356]">
            FashionHub
          </p>
          <div className="flex gap-14 ">
            <p className="font-medium leading-5 text-[#1D364D] font-inter">
              Category
            </p>
            <p className="font-medium leading-5 text-[#1D364D]">Brand</p>
            <p className="font-medium leading-5 text-[#1D364D]">Contact</p>
            <p className="font-medium leading-5 text-[#1D364D]">FAQ’s</p>
          </div>
        </div>
        {/*right div */}
        <div className="flex gap-8">
          <div className="flex gap-8">
            <div className="rounded-full bg-[#F5F1EE] w-12 h-12 flex items-center justify-center relative">
              <img src={bag} />
              <div className="bg-[#1D364D] absolute top-[-12%] right-[-10%] border-2 border-white text-white rounded-full w-6 h-6  text-[10px] leading-[10px] flex items-center justify-center text-center">
                <p className="my-auto">3</p>
              </div>
            </div>
            <div className="flex">
              <div className="rounded-full bg-[#EEEFF8] w-12 h-12 flex items-center justify-center relative">
                <img src={bell} />
                <div className="bg-[#D75951] absolute top-[3%] right-[-1%] border-2 border-white text-white rounded-full w-3 h-3  text-[10px] leading-[10px] flex items-center justify-center text-center"></div>
              </div>
            </div>
            <img src={scarlet} className="h-12 object-cover" />
            <div className="flex flex-col gap-2">
              <p className="font-medium text-xs text-[#C0C3C6] m-0">
                Good Morning!
              </p>
              <p className="font-semibold  text-[#1D364D]">Scarlet Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
