import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import ProductCard from "../ProductCard";
import SaveButton from "../SaveButton";

const FinalList = ({ db, visibleCount }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
              wrapperClassName="flex justify-center items-center h-42 sm:h-54 md:h-60 mt-5"
              imageClassName="max-w-9/10 max-h-full object-contain rounded-md mb-3 sm:mb-4" // custom className tùy ý
            />

            {/* Button */}
            <div className="flex justify-center mt-5">
              <SaveButton product={product} width={"w-4/5 md:w-full py-2"} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FinalList;
