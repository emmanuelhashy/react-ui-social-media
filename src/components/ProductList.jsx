import React from 'react';
import { useFilterContext } from '../context/FilterContext';
import Product from './Product';

const ProductList = () => {
  const { filteredProducts } = useFilterContext(); // Get filtered products from context

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
            <Product key={product.id} {...product} />
        ))
      ) : (
        <div className='title'>
          <h2 className='w-full flex justify-center h-screen items-center text-lg font-medium'>No products found within the selected range.</h2>
        </div>
      )}
    </div>
  );
};

export default ProductList;
