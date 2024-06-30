import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";

function ClearFilter() {
  const {
    setFilteredProducts,
    setSelectedCategories,
    setSelectedRating,
    setPriceRange,
    products,
    setProducts,
    setpageCount,
    setitemOffset,
    selectedCategories,
    selectedRating,
  } = useContext(Context);

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedRating(null);
    setPriceRange([0, 1000]);

    setFilteredProducts(products);

    setpageCount(0);
    setitemOffset(0);
  };

  const clearCheckboxes = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const handleClearAll = () => {
    clearAllFilters();
    clearCheckboxes();
  };

  return (
    <div className="flex justify-between items-center ">
      <p className="m-0 p-0">Filters</p>
      <button
        className="border-2 border-[#E4E4E4] rounded-[30px] py-2 px-4"
        onClick={handleClearAll}
      >
        Clear All
      </button>
    </div>
  );
}

export default ClearFilter;
