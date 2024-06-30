import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "../layout/ProductCard";
import { Context } from "../context/ContextProvider";
import { IoIosArrowDown } from "react-icons/io";
function Products() {
  const {
    filteredProducts,
    setFilteredProducts,
    products,
    selectedCategories,
    selectedRating,
    priceRange,
    setResut,
  } = useContext(Context);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    let filtered = products;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }

    if (selectedRating !== null) {
      filtered = filtered.filter((item) => item.rating >= selectedRating);
    }

    filtered = filtered.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
    setPageCount(Math.ceil(filtered.length / itemsPerPage));
    setItemOffset(0);
  }, [
    selectedCategories,
    selectedRating,
    priceRange,
    products,
    setFilteredProducts,
  ]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
  }, [filteredProducts, itemOffset, itemsPerPage]);

  const handlePageClick = ({ selected }) => {
    const newOffset = selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col gap-4 w-[68%] xl:w-[53%]">
      <div className="flex justify-between pr-3 items-center">
        <p className="font-medium text-[#0D3356] text-sm m-0 p-0">
          Showing {currentItems.length} Result from total{" "}
          {filteredProducts.length}
        </p>
        <div className="flex text-[#1D364D] text-sm font-medium border-2  border-[#E0E0E0] px-3 py-2 items-center rounded-3xl gap-2">
          <button>Popularity</button>
          <IoIosArrowDown className="text-black" />
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {currentItems.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
      <div className="flex mx-auto">
        <ReactPaginate
          className="flex gap-4 px-2"
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={7}
          pageCount={pageCount}
          previousLabel="Previews"
          renderOnZeroPageCount={null}
          pageLinkClassName="border-2 border-[#F3F3F3] px-3 py-[10px] rounded-md text-[#667085] no-underline text-sm font-semibold hover:bg-gradient-to-r from-[#F4E8F3] via-[#F3EFF6] to-[#EEE0F9]"
          previousLinkClassName="border-2 border-[#F3F3F3] px-3 py-[10px] rounded-md text-[#667085] no-underline text-sm font-semibold hover:bg-gradient-to-r from-[#F4E8F3] via-[#F3EFF6] to-[#EEE0F9]"
          nextLinkClassName="border-2 border-[#F3F3F3] px-3 py-[10px] rounded-md text-[#667085] no-underline text-sm font-semibold hover:bg-gradient-to-r from-[#F4E8F3] via-[#F3EFF6] to-[#EEE0F9]"
          breakLinkClassName=""
          activeLinkClassName="text-activeLink bg-gradient-to-r from-[#F4E8F3] via-[#F3EFF6] to-[#EEE0F9] "
        />
      </div>
    </div>
  );
}

export default Products;
