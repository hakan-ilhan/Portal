import React from "react";
import CategoryFilter from "../components/CategoryFilter";
import RatingFilter from "../components/RatingFilter";
import BrandFilter from "../components/BrandFilter";
import PriceRangeSlider from "../components/PriceRangeSlider";
import SizeFilter from "../components/SizeFilter";
import ClearFilter from "../components/ClearFilter";

function Filters() {
  return (
    <div className="flex flex-col gap-4">
      <ClearFilter />
      <div className="flex flex-col  rounded-lg border-2 border-[#F3F3F3] w-[320px] ">
        <CategoryFilter />
        <RatingFilter />
        <BrandFilter />
        <PriceRangeSlider />
        <SizeFilter />
      </div>
    </div>
  );
}

export default Filters;
