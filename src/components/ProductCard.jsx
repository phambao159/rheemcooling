import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  imageSrc,
  wrapperClassName = "",
  imageClassName = "",
}) => {
  return (
    <div className="">
      {/* Label */}
      {product.isNew && (
        <span className="absolute top-2 left-2 bg-[#DC143C] text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
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
      <div className={wrapperClassName}>
        <img
          src={imageSrc}
          alt={product.name}
          className={`${imageClassName}`}
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-grow ">
        <Link to={`/product/${product.ac_id}`} className="text-gray-800 font-bold line-clamp-3 mt-5 hover:underline min-h-[3.6em] leading-[1.2rem] ">
          {product.name}
        </Link>
        <div className="flex items-baseline gap-2 sm:gap-3 mt-1 sm:mt-2 mb-1">
          <p className="text-[#DC143C] font-bold text-sm sm:text-lg md:text-lg">
            $ {product.price}
          </p>
          <p className="text-gray-400 line-through text-xs sm:text-sm">
            $ {product.old_price}
          </p>
        </div>
        <p className="text-yellow-400 text-xs sm:text-sm mb-1">
          ★
          <span className="text-gray-600">
            {" "}
            (4.9) • Sold {product.sale_quantity}
          </span>
        </p>
      </div>
    </div >
  );
};

export default ProductCard;
