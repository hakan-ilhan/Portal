import React, { createContext, useEffect, useState } from "react";
import { product } from "../product";
import { category } from "../category";
import { brand } from "../brand";
export const Context = createContext();

function ContextProvider({ children }) {
  const [products, setProducts] = useState(product);
  const [filteredProducts, setFilteredProducts] = useState(product);
  const [categories, setCategories] = useState(category);
  const [brands, setBrands] = useState(brand);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [currentItems, setCurrentItems] = useState(filteredProducts.slice(0.9));
  const [pageCount, setpageCount] = useState(0);
  const [itemOffset, setitemOffset] = useState(0);

  const itemsPerPage = 9;

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
  }, [selectedCategories, selectedRating, priceRange, products]);

  const getCategoryCounts = () => {
    const counts = {};
    products.forEach((product) => {
      counts[product.category] = (counts[product.category] || 0) + 1;
    });
    return counts;
  };

  const getRatingCount = (rating) => {
    return products.filter((product) => product.rating >= rating).length;
  };

  return (
    <Context.Provider
      value={{
        products,
        filteredProducts,
        categories,
        brands,
        setProducts,
        selectedCategories,
        setSelectedCategories,
        selectedRating,
        setSelectedRating,
        getRatingCount,
        getCategoryCounts,
        selectedRating,
        setSelectedRating,
        priceRange,
        setPriceRange,
        setFilteredProducts,
        currentItems,
        setCurrentItems,
        pageCount,
        setpageCount,
        itemOffset,
        setitemOffset,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
