import React from "react";
import { brand } from "../brand";
import { IoIosArrowUp } from "react-icons/io";
function BrandFilter() {
  return (
    <div className="w-[90%] py-4 flex flex-col gap-4 mx-auto">
      <div className="flex justify-between items-center">
        <h3 className="font-medium leading-6 text-2xl #140342">Brand</h3>
        <IoIosArrowUp className="text-[#140342]" />
      </div>
      <div>
        <div className="flex flex-col gap-3">
          {brand.map((brand) => (
            <div key={brand.name} className="flex justify-between">
              <div className="flex gap-2 items-center">
                <input
                  className=" w-4 h-4 border-2 border-[#6A7A99]  accent-[#1A064F] scale-110"
                  type="checkbox"
                  id={brand.name}
                  value={brand.name}
                />
                <label htmlFor={brand.name} className="text-[#1A064F] text-sm">
                  {brand.name}
                </label>
              </div>
              <p className="text-sm text-[#4F547B] my-auto">{brand.stock}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="text-[#6440FB] underline">Show more</button>
      </div>
      <hr />
    </div>
  );
}

export default BrandFilter;
