import React from "react";

const Product = ({
  product_name,
  product_image,
  product_price,
  product_discount,
  product_discount_price,
  product_sizes,
  product_brand,
  product_brand_logo,
}) => {
  const getImage = (imageName) => {
    return require(`../assets/${imageName}`);
  };

  return (
    <article className="bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg relative">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={getImage(product_image)}
          alt={product_name}
          className="w-full h-80 object-cover transition-transform duration-300 transform hover:scale-110"
        />
      </div>

      <span className="absolute top-2 right-2 material-symbols-outlined text-orange-700 grid place-items-center w-12 h-22 text-3xl transition-transform hover:scale-110 cursor-pointer">
        favorite
      </span>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <p className="font-bold text-xl">${product_price}</p>
            <p className="line-through text-gray-400">
              ${product_discount_price}
            </p>
          </div>
          <p className="bg-orange-200 rounded-md px-3 py-1 text-orange-700 text-sm font-medium">
            {product_discount}% off
          </p>
        </div>
        <h5 className="text-base font-medium my-4">{product_name}</h5>
        <div className="flex items-center space-x-2">
          <img
            src={getImage(product_brand_logo)}
            alt={product_brand}
            className="w-10 h-5 object-cover transition-transform duration-600 transform hover:scale-110"
          />
          <p className="text-gray-400 text-sm font-medium">{product_brand}</p>
        </div>
        <div className="my-4">
          <p className="text-base font-medium">Available Sizes</p>
          <div className="flex items-center mt-2 space-x-2">
            {product_sizes.map((size) => (
              <p
                key={size}
                className="font-bold text-sm bg-orange-100 hover:bg-orange-400 hover:text-white px-2 w-fit h-8 flex justify-center items-center cursor-pointer"
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Product;
