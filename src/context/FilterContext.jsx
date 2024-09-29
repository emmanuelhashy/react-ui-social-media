import React, { createContext, useContext, useState } from 'react';
import {data} from '../data'

// Create the Context
const FilterContext = createContext();

// Custom hook to use the context
export const useFilterContext = () => useContext(FilterContext);

// Context Provider component
export const FilterProvider = ({ children }) => {
  const maxPrice = 100000;

  // Manage state for min and max prices
  const [minPrice, setMinPrice] = useState(0);
  const [maxSelectedPrice, setMaxSelectedPrice] = useState(maxPrice);

  // Example products list
  // const products = [
  //   { id: 1, name: 'Product 1', price: 5000 },
  //   { id: 2, name: 'Product 2', price: 15000 },
  //   { id: 3, name: 'Product 3', price: 25000 },
  //   { id: 4, name: 'Product 4', price: 45000 },
  // ];

  const products = data;

  // State to hold filtered products
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Function to apply filters
  const applyFilters = () => {
    const filtered = products.filter(
      (product) => product.product_price >= minPrice && product.product_price <= maxSelectedPrice
    );
    setFilteredProducts(filtered); // Update filtered products
  };

  // Function to reset filters
  const resetFilters = () => {
    setMinPrice(0);
    setMaxSelectedPrice(maxPrice);
    setFilteredProducts(products); // Reset to full product list
  };

  // Context value that will be passed to children
  const value = {
    minPrice,
    maxSelectedPrice,
    setMinPrice,
    setMaxSelectedPrice,
    maxPrice,
    filteredProducts,  // Expose filtered products
    applyFilters,      // Expose applyFilters function
    resetFilters,      // Expose resetFilters function
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};
