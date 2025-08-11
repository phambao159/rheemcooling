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
        <div className="w-full md:w-[30%]">
          <img
            src={banner_2}
            alt="Banner"
            className="rounded-lg shadow-md w-full h-full object-cover"
          />
        </div>

        {/* Product List */}
        <div className="w-full md:w-[70%]">
          {/* <div
            className="swiper-button-prev absolute top-1/2 -translate-y-1/2 -left-4 z-10 
                  !w-8 !h-8 !rounded-full !bg-white !shadow-md 
                  !flex !items-center !justify-center !text-black hover:scale-110 transition"
          >
            <FaChevronLeft size={14} />
          </div>

          <div
            className="swiper-button-next absolute top-1/2 -translate-y-1/2 -right-4 z-10 
                  !w-8 !h-8 !rounded-full !bg-white !shadow-md 
                  !flex !items-center !justify-center !text-black hover:scale-110 transition"
          >
            <FaChevronRight size={14} />
          </div> */}

          <Swiper
            modules={[Navigation]}
            navigation
            // navigation={{
            //   nextEl: ".swiper-button-next",
            //   prevEl: ".swiper-button-prev",
            // }}
            // spaceBetween={20}
            // slidesPerView={4}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="mb-6"
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 12 },
              640: { slidesPerView: 3, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 20 },
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
                      <SaveButton product={product} width={"w-4/5 md:w-full py-2"} />
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
