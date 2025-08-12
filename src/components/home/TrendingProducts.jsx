import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import banner_2 from "../../images/home/banner_2.jpg";
import windowAC_vuong from "../../images/home/windowAC_vuong.jpg";
import ProductCard from "../ProductCard";
import SaveButton from "../SaveButton";

const TrendingProducts = ({ db }) => {
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <section className="my-4 px-4 sm:px-6 py-4 sm:py-6 bg-white border rounded-lg">
      <div className="mb-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
          Trending Products
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Banner */}
        <div className="w-full md:w-[60%] lg:w-[30%]">
          <img
            src={banner_2}
            alt="Banner"
            className="rounded-lg shadow-md w-full h-full object-cover"
          />
        </div>

        {/* Product List */}
        <div className="relative w-full md:w-[40%] lg:w-[70%] ">
          {/* Custom Navigation Buttons */}
          <button
            id="custom-prev-recentview"
            className="hidden md:block absolute z-10 top-1/2 left-0 -translate-y-1/2 cursor-pointer bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-blue-100 transition"
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
            className="hidden md:block absolute z-10 top-1/2 right-0 -translate-y-1/2 cursor-pointer bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-blue-100 transition"
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
            modules={[Navigation]}
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
            autoplay={{ delay: 3000 }}
            className="mb-6"
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 12 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {shuffleArray(db).map((product) => {
              const imageUrl = `https://storage.googleapis.com/rheemcooling/${product.brand}/${product.ac_id}/${product.ac_id}_img1.webp`;
              return (
                <SwiperSlide key={product.ac_id}>
                  <div className="p-3 sm:p-4 bg-white border rounded-lg shadow-sm hover:shadow-lg transition relative">
                    <ProductCard
                      product={product}
                      imageSrc={imageUrl}
                      wrapperClassName="flex justify-center items-center h-42 sm:h-54 md:h-60"
                      imageClassName="max-w-9/10 max-h-full object-contain rounded-md mb-3 sm:mb-4" // custom className tùy ý
                    />

                    {/* Button */}
                    <div className="flex justify-center mt-5">
                      <SaveButton
                        product={product}
                        width={"w-4/5 md:w-full py-2"}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
