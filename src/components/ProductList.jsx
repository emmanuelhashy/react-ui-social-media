import React from 'react';
import { useFilterContext } from '../context/FilterContext';
import Product from './Product';

const ProductList = () => {
  const { filteredProducts } = useFilterContext();

  return (

    <div>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {filteredProducts.map((product) => (
            <Product key={product.id} {...product} />
        ))}
        </div>
      ) : (
        <div className='w-full flex justify-center pt-20 items-start'>
          <h2 className='text-lg font-medium'>No products found within the selected range.</h2>
        </div>
      )}
    </div>
  );
};

export default ProductList;
