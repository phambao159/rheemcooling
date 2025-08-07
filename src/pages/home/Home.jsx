import React, { useState } from "react";
import Products from "../../data/product.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import YouViewed from "../../components/home/YouViewed";

import banner_1 from "../../images/home/banner_1.jpg";
import banner_2 from "../../images/home/banner_2.jpg";
import windowAC_vuong from "../../images/home/windowAC_vuong.jpg";

export default function Home() {
  const [isOpenSpecialOffer, setIsOpenSpecialOffer] = useState(true);
  const [isOpenHistory, setIsOpenHistory] = useState(true);
  const [activeTab, setActiveTab] = useState("topselling");
  return (
    <div className="">
      {/* Total Visitor */}
      <div className="fixed top-0 right-0 bg-green-400 text-white px-4 py-1 z-50 rounded-bl-lg shadow">
        Total Visitor
      </div>

      {/* 1. Special Offer */}
      {isOpenSpecialOffer && (
        <div className="flex justify-center items-center bg-yellow-500 text-black text-2xl h-15 px-6 py-2 text-center relative animate-pulse">
          🎉 Ưu đãi đặc biệt: Giảm giá sốc trong 24h! 🎉
          <button
            className="absolute right-4 top-1 text-white text-xl"
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
          className="w-full"
        />
      </div>

      {/* 3. Top Deals */}
      <section
        style={{
          backgroundImage: "linear-gradient(to left, #e6e6e6ff, #ffffffff)",
        }}
        className="mt-auto mb-2 px-15 py-10 text-white border rounded-lg"
      >
        <div className="grid grid-cols-10 gap-8">
          <div className="col-span-3">
            <h2 className="text-8xl text-[#dc143c] mb-2">
              TOP <div className="font-bold ">DEALS</div>
            </h2>
            <p className="text-xl text-[#dc143c] mb-4">Don't miss it</p>
            <button className="bg-[#dc143c] text-white font-semibold px-4 py-2 rounded hover:bg-red-700 transition">
              Shop now
            </button>
          </div>

          <div className="col-span-7 grid grid-cols-4 gap-4">
            {[
              {
                title: "Save $50 on smart Air Conditioner",
                img: require("../../images/home/splitAC_hcn.jpg"),
              },
              {
                title: "Save $50 on smart Air Conditioner",
                img: require("../../images/home/splitAC_hcn.jpg"),
              },
              {
                title: "Save $50 on smart Air Conditioner",
                img: require("../../images/home/splitAC_hcn.jpg"),
              },
              {
                title: "Save $50 on smart Air Conditioner",
                img: require("../../images/home/splitAC_hcn.jpg"),
              },
              {
                title: "Save $50 on smart Air Conditioner",
                img: require("../../images/home/splitAC_hcn.jpg"),
              },
              {
                title: "Save $50 on smart Air Conditioner",
                img: require("../../images/home/splitAC_hcn.jpg"),
              },
            ].map((deal, index) => (
              <div
                key={index}
                className={`bg-gray-50 text-black rounded shadow p-4 ${
                  index < 2 ? "col-span-2" : ""
                }`}
              >
                <img
                  src={deal.img}
                  alt={deal.title}
                  className="w-full h-30 mb-3 border rounded-md"
                />
                <p className="font-semibold text-sm mb-2">{deal.title}</p>
                <button className="bg-[#dc143c] text-white text-sm font-semibold px-3 py-1 rounded-lg hover:bg-red-700 transition">
                  Shop now
                </button>
              </div>
            ))}
          </div>

          <div className="col-span-10">
            <h3 className="text-black font-bold text-xl mb-4">
              Shop deals by category
            </h3>
            <div className="flex justify-center items-center gap-4 overflow-x-auto scrollbar-hide">
              {["Window AC", "Split AC", "Cassette AC"].map((cat, index) => (
                <div key={index} className="flex-shrink-0 w-40 text-center">
                  <div className="flex justify-center items-center bg-white w-25 h-25 mx-auto mb-2 border-2 border-black rounded-full overflow-hidden">
                    <img
                      src={windowAC_vuong}
                      alt="image"
                      className="w-4/5 h-4/5 object-contain"
                    />
                  </div>
                  <p className="text-lg text-black">{cat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Recently Viewed */}
      {isOpenHistory && (
        <section className="bg-[#dc143c] px-6 py-6 rounded-lg">
          <YouViewed
            db={Products}
            isOpenHistory={isOpenHistory}
            setIsOpenHistory={setIsOpenHistory}
          />
        </section>
      )}

      {/* 5. Trending Products */}
      <section className="my-4 p-6 bg-white border rounded-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Trending Product</h2>
        </div>

        <div className="flex gap-4">
          <div className="w-[30%]">
            <img
              src={banner_2}
              alt="Banner"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>

          <div className="w-[70%]">
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
              spaceBetween={20}
              slidesPerView={4}
              className="mb-6"
              loop={true}
              autoplay={{ delay: 3000 }}
              // breakpoints={{
              //   320: { slidesPerView: 2 },
              //   768: { slidesPerView: 4 },
              //   1024: { slidesPerView: 6 },
              // }}
            >
              {Products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="p-4 h-100 bg-white border rounded-lg shadow-sm hover:shadow-lg transition relative">
                    {/* Label */}
                    {product.isNew && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        New
                      </span>
                    )}
                    {product.discount > 0 && (
                      <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                        -{product.discount}%
                      </span>
                    )}

                    <div className="flex justify-center items-center">
                      <img
                        src={windowAC_vuong}
                        alt="image"
                        className="w-9/10 h-60 object-contain rounded-md mb-4"
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="text-gray-800 font-semibold text-sm mb-2">
                        {product.name}
                      </h3>
                      <p className="text-pink-600 font-bold text-lg">
                        {product.price} đ
                      </p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-gray-400 line-through text-sm">
                          {product.old_price} đ
                        </p>
                        <span className="text-red-500 text-xs">
                          -{product.discount}%
                        </span>
                      </div>
                      <p className="text-yellow-400 text-sm mb-1">
                        ★
                        <span className="text-gray-600">
                          {" "}
                          (4.9) • Sold {product.sale_quantity}
                        </span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* 6. Product Category */}
      <section className="px-6 py-10 bg-[#dc143c]">
        {/* Header + Tabs */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Product Category</h2>

          <div className="flex gap-2">
            {[
              { label: "Top Selling AC", value: "topselling" },
              { label: "Window AC", value: "Window AC" },
              { label: "Split AC", value: "Split AC" },
              { label: "Cassette AC", value: "Cassette AC" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 border rounded text-sm font-semibold transition ${
                  activeTab === tab.value
                    ? "bg-pink-500 text-white border-pink-500"
                    : "text-black hover:border-pink-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-6 grid-rows-2 gap-6 mb-6">
          {Products.filter((product) => {
            if (activeTab === "topselling") {
              return product.isTopSelling === true;
            } else {
              return product.type === activeTab;
            }
          })
            .sort(() => 0.5 - Math.random()) // Xáo trộn ngẫu nhiên
            .slice(0, 12)
            .map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition relative"
              >
                {/* Label */}
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    New
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                    -{product.discount}%
                  </span>
                )}

                <img
                  src={windowAC_vuong}
                  alt="image"
                  className="w-full h-40 object-contain mb-4"
                />
                <div className="text-center">
                  <h3 className="text-gray-800 font-semibold text-sm mb-2">
                    {product.name}
                  </h3>
                  <p className="text-yellow-400 text-sm mb-1">★★★★★ (3)</p>
                  <p className="text-pink-600 font-bold text-lg">
                    ${product.price}{" "}
                    <span className="text-gray-400 line-through text-sm ml-1">
                      ${product.old_price}
                    </span>
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Xem thêm sản phẩm */}
        <div className="text-center font-bold text-yellow-500">
          <a href="blank">View more products {">>"} </a>
        </div>
      </section>

      {/* Date, time, location */}
      <div className="bg-green-400 text-white text-sm text-center py-1 fixed bottom-0 right-0 w-[40%] z-50">
        Ngày giờ & địa điểm hiện tại của client (fixed)
      </div>
    </div>
  );
}
