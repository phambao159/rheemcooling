import React, { useState } from "react";
import products from "../../data/product.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import TopDeals from "../../components/home/TopDeals";
import YouViewed from "../../components/home/YouViewed";
import TrendingProducts from "../../components/home/TrendingProducts";
import ProductCategory from "../../components/home/ProductCategory";

import banner_1 from "../../images/home/banner_1.jpg";

export default function Home() {
  const [isOpenSpecialOffer, setIsOpenSpecialOffer] = useState(true);
  const [isOpenHistory, setIsOpenHistory] = useState(true);
  return (
    <>
      {/* 1. Special Offer */}
      {isOpenSpecialOffer && (
        <div className="flex flex-col sm:flex-row justify-center items-center bg-yellow-500 text-black text-lg sm:text-xl md:text-2xl px-4 sm:px-6 py-4 text-center relative animate-pulse">
          🎉 Ưu đãi đặc biệt: Giảm giá sốc trong 24h! 🎉
          <button
            className="absolute right-3 sm:right-4 top-1 text-white text-2xl leading-none"
            onClick={() => setIsOpenSpecialOffer(false)}
          >
            &times;
          </button>
        </div>
      )}

      {/* 2. Banner Carousel */}
      <div className="flex items-center justify-center my-2">
        <img
          src={banner_1}
          alt="Banner Carousel & Call To Action"
          className="w-full" //w-full max-w-full sm:max-w-3xl md:max-w-5xl h-auto object-contain
        />
      </div>

      {/* 3. Top Deals */}
      <TopDeals db={products} />

      {/* 4. Recently Viewed */}
      {isOpenHistory && (
        <YouViewed
          db={products}
          isOpenHistory={isOpenHistory}
          setIsOpenHistory={setIsOpenHistory}
        />
      )}

      {/* 5. Trending Products */}
      <TrendingProducts db={products} />

      {/* 6. Product Category */}
      <ProductCategory db={products} />
    </>
  );
}
