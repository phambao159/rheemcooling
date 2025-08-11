import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import ProductCard from "../ProductCard";

const FinalList = ({ db, visibleCount }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {db.slice(0, visibleCount).map((product) => {
        const imageUrl = `https://storage.googleapis.com/rheemcooling/${product.brand}/${product.ac_id}/${product.ac_id}_img1.webp`;
        return (
          <div
            key={product.ac_id}
            className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-lg transition relative"
          >
            <ProductCard
              product={product}
              imageSrc={imageUrl}
              wrapperClassName="flex justify-center items-center h-42 sm:h-54 md:h-60"
              imageClassName="max-w-9/10 max-h-full object-contain rounded-md mb-3 sm:mb-4" // custom className tùy ý
            />

            {/* Button */}
            <div className="">
              <Link to={`/product/${product.ac_id}`}>
                <button className="w-full bg-[#DC143C] hover:bg-red-700 transition font-bold text-sm sm:text-base px-4 py-2 rounded-lg text-white mt-5 hover:cursor-pointer ">
                  Save Product
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FinalList;
