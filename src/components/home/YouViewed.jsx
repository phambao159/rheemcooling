import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import windowAC_vuong from "../../images/home/windowAC_vuong.jpg";

export default function YouViewed({ db, isOpenHistory, setIsOpenHistory }) {
  return (
    <>
      <div>
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-white">You Recently Viewed</h2>
          <button
            className="text-white text-sm underline"
            onClick={() => setIsOpenHistory(false)}
          >
            Clear History
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={4}
          className="my-6"
          loop={true}
          autoplay={{ delay: 3000 }}
          // breakpoints={{
          //   320: { slidesPerView: 2 },
          //   768: { slidesPerView: 4 },
          //   1024: { slidesPerView: 6 },
          // }}
        >
          {db.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="flex gap-2 bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition relative">
                {/* Label */}
                {/* {product.isNew && (
                              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                New
                              </span>
                            )}
                            {product.discount > 0 && (
                              <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                                -{product.discount}%
                              </span>
                            )} */}

                <img
                  src={windowAC_vuong}
                  alt="image"
                  className="w-[30%] h-15 object-contain border rounded-md"
                />
                <div className="text-left">
                  <h3 className="text-gray-800 font-semibold text-sm mb-2">
                    {product.name}
                  </h3>
                  <p className="text-pink-600 font-bold text-lg">
                    {product.price} đ
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
