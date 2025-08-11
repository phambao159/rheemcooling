import React, { useState } from "react";
import { Link } from "react-router-dom";

import windowAC_vuong from "../../images/home/windowAC_vuong.jpg";
import ProductCard from "../ProductCard";

const ProductCategory = ({ db }) => {
  const [activeTab, setActiveTab] = useState("Topselling");

  const filteredProducts =
    activeTab === "Topselling"
      ? [...db].sort((a, b) => b.sale_quantity - a.sale_quantity).slice(0, 12)
      : db
          .filter((product) => product.type === activeTab)
          .slice(0, 12)
          .sort(() => 0.5 - Math.random());

  return (
    <section className="my-2 px-4 sm:px-6 py-6 sm:py-10 bg-white border rounded-lg w-full box-border">
      {/* Header + Tabs */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
          Product Category
        </h2>

        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {[
            { label: "Top Selling AC", value: "Topselling" },
            { label: "Window AC", value: "Window" },
            { label: "Split AC", value: "Split" },
            { label: "Cassette AC", value: "Cassette" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-3 sm:px-4 py-2 border rounded text-xs sm:text-sm font-semibold whitespace-nowrap transition ${
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 grid-rows-2 gap-4 sm:gap-6 mb-6">
        {filteredProducts.map((product) => {
          const imageUrl = `https://storage.googleapis.com/rheemcooling/${product.brand}/${product.ac_id}/${product.ac_id}_img1.webp`;
          return (
            <div
              key={product.ac_id}
              className="p-3 sm:p-4 bg-white border rounded-lg shadow-sm hover:shadow-lg transition relative"
            >
              <ProductCard
                product={product}
                imageSrc={imageUrl}
                wrapperClassName="flex justify-center items-center h-28 sm:h-36 md:h-40"
                imageClassName="max-w-9/10 max-h-full object-contain rounded-md mb-3 sm:mb-4" // custom className tùy ý
              />
            </div>
          );
        })}
      </div>

      {/* Xem thêm sản phẩm */}
      <div className="text-center font-bold text-blue-600 text-sm sm:text-base">
        <Link to="/topsellingAC">
          <a href="blank">View more products {">>"} </a>
        </Link>
      </div>
    </section>
  );
};

export default ProductCategory;
