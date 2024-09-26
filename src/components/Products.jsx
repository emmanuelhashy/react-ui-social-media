import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
  return (
    <section className="max-w-7xl mx-auto my-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">New Products</h2>
        <div className="w-28 h-1 bg-orange-500 mt-3 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
