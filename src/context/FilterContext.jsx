import React, { createContext, useContext, useState } from 'react';
import {data} from '../data'

const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const maxPrice = 100000;

  const [minPrice, setMinPrice] = useState(0);
  const [maxSelectedPrice, setMaxSelectedPrice] = useState(maxPrice);

  const products = data;

  const [filteredProducts, setFilteredProducts] = useState(products);

  const applyFilters = () => {
    const filtered = products.filter(
      (product) => product.product_price >= minPrice && product.product_price <= maxSelectedPrice
    );
    setFilteredProducts(filtered);
  };

  const resetFilters = () => {
    setMinPrice(0);
    setMaxSelectedPrice(maxPrice);
    setFilteredProducts(products); 
  };

  const value = {
    minPrice,
    maxSelectedPrice,
    setMinPrice,
    setMaxSelectedPrice,
    maxPrice,
    filteredProducts,  
    applyFilters,      
    resetFilters,
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};
