import React from 'react';
import { useFilterContext } from '../context/FilterContext';

const ProductList = () => {
  const { filteredProducts } = useFilterContext(); // Get filtered products from context

  return (
    <div className="grid grid-cols-1 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))
      ) : (
        <p>No products found within the selected range.</p>
      )}
    </div>
  );
};

export default ProductList;
