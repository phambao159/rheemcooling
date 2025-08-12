import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import windowAC_vuong from "../../images/home/windowAC_vuong.jpg";

export default function YouViewed({ db, isOpenHistory, setIsOpenHistory }) {
  const [recent, setRecent] = useState([]);

  // Load recently viewed products
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recently_viewed")) || [];
    setRecent(stored);
  }, []);

  if (recent.length === 0) return null;

  return (
    <section className="bg-[#DC143C] my-2 px-4 sm:px-6 py-4 sm:py-6 rounded-lg">
      <div className="flex justify-between items-center gap-2 mb-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
          You Recently Viewed
        </h2>
        <button
          className="text-white text-xs sm:text-sm underline"
          onClick={() => setIsOpenHistory(false)}
        >
          Clear History
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        // spaceBetween={20}
        // slidesPerView={4}
        className="my-4 w-full"
        loop={true}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 12 },
          640: { slidesPerView: 3, spaceBetween: 16 },
          768: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {recent.map((product) => (
          <SwiperSlide key={product.ac_id}>
            <div className="flex gap-2 bg-white border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm hover:shadow-lg transition relative">
              <Link
                to={`/product/${product.ac_id}`}
                className="flex gap-2 bg-white border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm hover:shadow-lg transition relative"
              >
                <img
                  src={windowAC_vuong}
                  alt=""
                  className="w-[35%] sm:w-[30%] h-16 sm:h-20 object-contain border rounded-md"
                />
                <div className="flex-1 text-left">
                  <h3 className="text-gray-800 font-semibold text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-pink-600 font-bold text-sm sm:text-base">
                    $ {product.price}
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
