import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/ContextProvider";
import { IoIosArrowUp } from "react-icons/io";

function CategoryFilter() {
  const {
    categories,
    selectedCategories,
    setSelectedCategories,
    getCategoryCounts,
  } = useContext(Context);
  const [categoryCounts, setCategoryCounts] = useState({});

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  useEffect(() => {
    setCategoryCounts(getCategoryCounts());
  }, [categories, getCategoryCounts]);

  return (
    <div className="w-[90%] py-4 flex flex-col gap-4 mx-auto">
      <div className="flex justify-between items-center">
        <h3 className="font-medium leading-6 text-2xl text-[#140342]">
          Category
        </h3>
        <IoIosArrowUp className="text-[#140342]" />
      </div>
      <div>
        <div className="flex flex-col gap-3">
          {categories.map((cat) => (
            <div key={cat} className="flex justify-between items-center">
              <div className="flex gap-2 items-center ">
                <input
                  className=" w-4 h-4 border-2 border-[#6A7A99]  accent-[#1A064F] scale-110  "
                  type="checkbox"
                  id={cat}
                  value={cat}
                  onChange={() => handleCategoryChange(cat)}
                />

                <label
                  htmlFor={cat}
                  className="text-[#1A064F] text-sm leading-[30px]"
                >
                  {cat}
                </label>
              </div>

              <p className="my-auto text-[#4F547B]">
                ({categoryCounts[cat] || 0})
              </p>
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

export default CategoryFilter;
