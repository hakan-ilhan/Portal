import React from "react";
import Header from "../layout/Header";
import Promotion from "../components/Promotion";
import Products from "../components/Products";
import Filters from "./Filters";
import ClearFilter from "../components/ClearFilter";

function ProductPage() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Header />
      <Promotion />
      <div className="flex gap-12  justify-center font-inter mt-8">
        <Filters />
        <Products />
      </div>
    </div>
  );
}

export default ProductPage;
