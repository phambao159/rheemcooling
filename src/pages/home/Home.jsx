import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Home({ db }) {
  const [activeTab, setActiveTab] = useState("featured");
  return (
    <div className="container mx-auto">
      <div className="bg-white text-gray-800">
        {/* Total Visitor */}
        <div className="fixed top-0 right-0 bg-green-400 text-white px-4 py-1 z-50 rounded-bl-lg shadow">
          Total Visitor
        </div>

        {/* Special Offer */}
        <div className="bg-orange-500 text-white px-6 py-2 mb-3 text-center relative animate-pulse">
          🎉 Ưu đãi đặc biệt: Giảm giá sốc trong 24h! 🎉
          <button className="absolute right-4 top-1 text-white text-xl">
            &times;
          </button>
        </div>

        {/* Banner Carousel */}
        <div className="bg-yellow-500 h-64 flex items-center justify-center text-white text-3xl font-semibold">
          <img
            src="/dmx.png"
            alt="Banner Carousel & Call To Action"
            className="flex justify-center w-full"
          />
        </div>

        {/* Top Deals */}
        <section className="grid grid-cols-10 gap-8 px-20 py-10 bg-gradient-to-r from-red-800 to-red-400 text-white">
          <div className="col-span-3">
            <h2 className="text-8xl text-yellow-400 mb-2">
              TOP <div className="font-bold ">DEALS</div>
            </h2>
            <p className="text-lg mb-4">Don't miss it</p>
            <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition">
              Shop now
            </button>
          </div>

          <div className="col-span-7 grid grid-cols-4 gap-4">
            {[
              {
                title: "Save $50 on smart Air Conditioner",
                img: "https://via.placeholder.com/300x180",
              },
              {
                title: "Save $50 on smart Air Conditioner",
                img: "https://via.placeholder.com/300x180",
              },
              {
                title: "Save $50 on smart Air Conditioner",
                img: "https://via.placeholder.com/300x180",
              },
              {
                title: "Save $50 on smart Air Conditioner",
                img: "https://via.placeholder.com/300x180",
              },
              {
                title: "Save $50 on smart Air Conditioner",
                img: "https://via.placeholder.com/300x180",
              },
              {
                title: "Save $50 on smart Air Conditioner",
                img: "https://via.placeholder.com/300x180",
              },
            ].map((deal, index) => (
              <div
                key={index}
                className={`bg-white text-black rounded shadow p-4 ${
                  index < 2 ? "col-span-2" : ""
                }`}
              >
                <img
                  src={deal.img}
                  alt={deal.title}
                  className="w-full mb-3 rounded"
                />
                <p className="font-semibold text-sm mb-2">{deal.title}</p>
                <button className="text-blue-600 font-medium hover:underline">
                  Shop now
                </button>
              </div>
            ))}
          </div>

          <div className="col-span-10">
            <h3 className="text-white text-lg mb-4">Shop deals by category</h3>
            <div className="flex justify-center items-center gap-4 overflow-x-auto scrollbar-hide">
              {["Window AC", "Split AC", "Cassette AC"].map((cat, index) => (
                <div key={index} className="flex-shrink-0 w-40 text-center">
                  <div className="bg-white rounded-full w-20 h-20 mx-auto mb-2"></div>
                  <p className="text-md text-white">{cat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Products */}
        <section className="px-6 py-10 bg-white">
          {/* Header + Tabs */}
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Trending Products
            </h2>
            <div className="flex gap-2">
              {["new", "featured", "bestseller"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`uppercase px-4 py-2 border rounded text-sm font-semibold transition ${
                    activeTab === tab
                      ? "bg-pink-500 text-white border-pink-500"
                      : "text-gray-700 hover:border-pink-300"
                  }`}
                >
                  {tab.replace(/^\w/, (c) => c.toUpperCase()) + " AC"}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-5 gap-6">
            {db
              .filter((p) => p.type === activeTab)
              .sort(() => 0.5 - Math.random()) // Xáo trộn ngẫu nhiên
              .slice(0, 5) // Chỉ lấy 5 sản phẩm đầu tiên
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
                    src={product.img}
                    alt={product.title}
                    className="w-full h-40 object-contain mb-4"
                  />
                  <div className="text-center">
                    <p className="text-yellow-400 text-sm mb-1">★★★★★ (3)</p>
                    <h3 className="text-gray-800 font-semibold text-sm mb-2">
                      {product.title}
                    </h3>
                    <p className="text-pink-600 font-bold text-lg">
                      ${product.price}{" "}
                      <span className="text-gray-400 line-through text-sm ml-1">
                        ${product.oldPrice}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Recently Viewed */}
        <section className="bg-orange-100 px-6 py-6">
          <div className="mb-4">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              YOU RECENTLY VIEWED
            </h2>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={5} // Hiển thị 6 sản phẩm mỗi lần
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
                <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition relative">
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
                    src={product.img}
                    alt={product.title}
                    className="w-full h-40 object-contain mb-4"
                  />
                  <div className="text-center">
                    <p className="text-yellow-400 text-sm mb-1">★★★★★ (3)</p>
                    <h3 className="text-gray-800 font-semibold text-sm mb-2">
                      {product.title}
                    </h3>
                    <p className="text-pink-600 font-bold text-lg">
                      ${product.price}{" "}
                      <span className="text-gray-400 line-through text-sm ml-1">
                        ${product.oldPrice}
                      </span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Date, time, location */}
        <div className="bg-green-400 text-white text-sm text-center py-1 fixed bottom-0 right-0 w-[40%] z-50">
          Ngày giờ & địa điểm hiện tại của client (fixed)
        </div>
      </div>
    </div>
  );
}
