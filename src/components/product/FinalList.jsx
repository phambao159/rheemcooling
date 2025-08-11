import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import banner_2 from "../../images/home/banner_2.jpg";
import windowAC_vuong from "../../images/home/windowAC_vuong.jpg";
import ProductCard from "../ProductCard";

const FinalList = ({ db, visibleCount }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {db.slice(0, visibleCount).map((product) => (
        <div
          key={product.ac_id}
          className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-lg transition relative"
        >
          <ProductCard
            product={product}
            imageSrc={windowAC_vuong}
            imageClassName="w-9/10 h-42 sm:h-54 md:h-60 object-contain rounded-md mb-3 sm:mb-4" // custom className tùy ý
          />

          {/* Button */}
          <Link to={`/product/${product.ac_id}`}>
            <button className="w-full bg-[#DC143C] hover:bg-red-700 transition font-bold text-sm sm:text-base py-2 rounded-lg text-white flex items-center justify-center mt-5 hover:cursor-pointer ">
              Save Product
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FinalList;
