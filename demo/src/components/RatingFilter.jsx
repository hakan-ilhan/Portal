import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";
import star from "../assets/Star.png";
import { IoIosArrowUp } from "react-icons/io";
function RatingFilter() {
  const { selectedRating, setSelectedRating, getRatingCount } =
    useContext(Context);

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="w-[90%]  mx-auto flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium leading-6 text-2xl text-[#140342]">
          Ratings
        </h3>
        <IoIosArrowUp className="text-[#140342]" />
      </div>
      <div>
        <div className="flex flex-col gap-3">
          {["4.5", "4.0", "3.5", "3.0"].map((rating) => (
            <div key={rating} className="flex justify-between">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id={`rating-${rating}`}
                  name="rating"
                  value={rating}
                  checked={selectedRating === rating}
                  onChange={() => handleRatingChange(rating)}
                  className="accent-[#1A064F] scale-110"
                />
                <div className="flex gap-1">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <label
                  htmlFor={`rating-${rating}`}
                  className="ml-2 text-[#140342] text-sm"
                >
                  {rating} & up
                </label>
              </div>
              <p className="text-[#4F547B] text-sm my-auto">
                ({getRatingCount(rating)})
              </p>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default RatingFilter;
