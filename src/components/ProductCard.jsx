import React from "react";

const ProductCard = ({ product, imageSrc, imageClassName = "" }) => {
  return (
    <>
      {/* Label */}
      {product.isNew && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
          New
        </span>
      )}
      <span className="absolute top-2 right-2 bg-yellow-400 text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
        - 20%
      </span>
      {/* {product.discount > 0 && (
        <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
          -{product.discount}%
        </span>
      )} */}

      {/* Product Image */}
      <div className="flex justify-center items-center">
        <img
          src={imageSrc}
          alt={product.name}
          className={`${imageClassName}`}
        />
      </div>

      {/* Product Info */}
      <div className="text-left mt-2 sm:mt-3">
        <h3 className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base line-clamp-3">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2 sm:gap-3 mt-1 sm:mt-2 mb-1">
          <p className="text-[#dc143c] font-bold text-sm sm:text-lg md:text-xl">
            $ {product.price}
          </p>
          <p className="text-gray-400 line-through text-[10px] sm:text-sm">
            $ {product.old_price}
          </p>
        </div>
        <p className="text-yellow-400 text-[10px] sm:text-sm mb-1">
          ★
          <span className="text-gray-600">
            {" "}
            (4.9) • Sold {product.sale_quantity}
          </span>
        </p>
      </div>
    </>
  );
};

export default ProductCard;
