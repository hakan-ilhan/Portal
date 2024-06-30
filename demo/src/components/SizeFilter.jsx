import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { IoIosArrowUp } from "react-icons/io";

function SizeFilter() {
  const handleStyle = {
    width: "20px", // Küçültülen genişlik
    height: "20px", // Küçültülen yükseklik
    // Handle'ın yarısının negatif margini
    marginTop: "-8px", // Handle'ın yarısının negatif margini
    border: "2px solid #1A064F",
    backgroundColor: "white",
    boxShadow: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const innerCircleStyle = {
    width: "50%",
    height: "50%",
    backgroundColor: "#1A064F",
    borderRadius: "50%",
  };

  return (
    <div className="w-[90%] mx-auto flex flex-col gap-4 py-4">
      <div>
        <div className="flex justify-between">
          <p className="font-medium text-xl leading-6">Size</p>
          <IoIosArrowUp className="text-[#140342]" />
        </div>
        <Slider
          range
          min={5}
          max={10}
          value={[5, 10]}
          trackStyle={[{ backgroundColor: "#3A4980" }]}
          handleStyle={[handleStyle, handleStyle]}
          railStyle={{ backgroundColor: "#D3D3D3" }}
        />
      </div>
      <div className="price-inputs flex gap-4">
        <input
          type="number"
          value={5}
          min="5"
          max={10}
          className="border-2 border-gray-300 p-2 rounded-md"
        />
        <input
          type="number"
          value={10}
          min={5}
          max="1000"
          className="border-2 border-gray-300 p-2 rounded-md"
        />
      </div>
      <style jsx>{`
        .rc-slider-handle {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rc-slider-handle::before {
          content: "";
          display: block;
          width: 50%;
          height: 50%;
          background-color: #1a064f;
          border-radius: 50%;
        }
      `}</style>
      <hr />
    </div>
  );
}

export default SizeFilter;
