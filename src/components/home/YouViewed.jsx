import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

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

      <div className="relative w-full">
        {/* Custom Navigation Buttons */}
        <button
          id="custom-prev-recentview"
          className="hidden md:block absolute z-10 top-3/4 left-0 -translate-y-3/4 cursor-pointer bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-blue-100 transition  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          id="custom-next-recentview"
          className="hidden md:block absolute z-10 top-3/4 right-0 -translate-y-3/4 cursor-pointer bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-blue-100 transition "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: "#custom-prev-recentview",
            nextEl: "#custom-next-recentview",
          }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination-recentview",
          }}
          // spaceBetween={20}
          // slidesPerView={4}
          className="my-4 w-full relative"
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 12 },
            768: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {recent.map((product) => {
            const imageUrl = `https://storage.googleapis.com/rheemcooling/${product.brand}/${product.ac_id}/${product.ac_id}_img1.webp`;
            return (
              <SwiperSlide key={product.ac_id}>
                <div className="flex gap-2 bg-white border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm hover:shadow-lg transition relative">
                  <Link
                    to={`/product/${product.ac_id}`}
                    className="flex gap-2 bg-white border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm hover:shadow-lg transition relative"
                  >
                    <img
                      src={imageUrl}
                      alt=""
                      className="w-[35%] sm:w-[30%] h-16 sm:h-20 object-contain rounded-md"
                    />
                    <div className="flex-1 text-left">
                      <h3 className="text-gray-800 font-semibold text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2">
                        {product.name}
                      </h3>

                      <div className="flex items-baseline gap-2 sm:gap-3 mt-1 sm:mt-2 mb-1">
                        <p className="text-[#DC143C] font-bold text-sm sm:text-lg md:text-lg">
                          $ {product.price}
                        </p>
                        <p className="text-gray-400 line-through text-xs sm:text-sm">
                          $ {product.old_price}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
