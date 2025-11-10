import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link
      to={`/product/${id}`}
      className="group block rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-500 text-gray-800 cursor-pointer overflow-hidden"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110"
        />

        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Product Info */}
      <div className="p-5 text-center">
        <p className="text-base font-medium text-gray-700 group-hover:text-gray-900 tracking-tight">
          {name}
        </p>
        <p className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
