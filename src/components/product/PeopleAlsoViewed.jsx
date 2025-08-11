import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import windowAC_vuong from "../../images/home/windowAC_vuong.jpg";
import ProductCard from "../ProductCard";

const ProductCategory = ({ db }) => {
  return (
    <section className="my-4 p-6 bg-[#dc143c] border rounded-lg">
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          People Also Viewed
        </h2>
      </div>

      <div className="flex gap-4">
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
          // slidesPerView={5}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="mb-6"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 3, spaceBetween: 16 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          {db.map((product) => (
            <SwiperSlide key={product.ac_id}>
              <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-lg transition relative">
                <ProductCard
                  product={product}
                  imageSrc={windowAC_vuong}
                  imageClassName="w-9/10 h-28 sm:h-36 md:h-40 object-contain rounded-md mb-3 sm:mb-4" // custom className tùy ý
                />

                {/* Button */}
                {/* <button className="w-full bg-[#DC143C] hover:bg-red-700 transition font-bold py-2 rounded-lg text-white flex items-center justify-center mt-5 hover:cursor-pointer ">
                  Save Product
                </button> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCategory;
