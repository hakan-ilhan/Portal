import React from "react";
import star from "../assets/Star.png";
import { FaRegHeart } from "react-icons/fa";
function ProductCard({ product }) {
  return (
    <div className=" w-[305px] font-inter ">
      <div className="bg-[#F7F5F7] rounded-t-3xl relative">
        <img className="p-4" src={product.image} />
        <div className="w-12 h-12 rounded-full absolute top-[3%] right-[3%] bg-white flex items-center">
          <FaRegHeart className="text-[#667085] text-xl my-auto mx-auto" />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-6 rounded-3xl rounded-t-none border-2 border-[#F7F5F7] ">
        <div className="flex flex-col ">
          <div className="flex justify-between">
            <p className="font-inter font-medium leading-6 text-[#667085]">
              {product.brand}
            </p>
            <p className="font-inter font-bold leading-6 text-[#344054]">
              {product.price}
            </p>
          </div>
          <p className="text-[#98A2B3] text-sm leading-4 font-normal">
            {product.stock} types of shoos avaliable
          </p>
          <div className="flex gap-2 items-center">
            <div className="flex">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </div>
            <p className="text-sm text-[#98A2B3] my-auto">
              ({product.comment})
            </p>
          </div>
        </div>
        <div className="flex gap-2 justify-start">
          <button className="text-white bg-[#3A4980]  py-2 rounded-3xl text-sm w-32">
            Add To Cart
          </button>
          <button className="text-[#344054] font-semibold  px-3 py-2 rounded-3xl border-2 border-[#D0D5DD] text-sm w-32">
            Add Shortlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
