import React, { useState } from "react";
import Products from "../../data/product.json";

import windowAC_vuong from "../../images/home/windowAC_vuong.jpg";

import FilterProduct from "../../components/product/FilterProduct";
import Sort from "../../components/product/Sort";

export default function Product() {
  const [filteredList, setFilteredList] = useState([]);
  const handleFilter = (p) => {
    setFilteredList(p);
  };

  const [finalList, setFinalList] = useState([]);
  const handleSort = (p) => {
    setFinalList(p);
  };

  const [visibleCount, setVisibleCount] = useState(8);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-10 gap-4">
        <section className="col-span-2 my-8">
          <FilterProduct db={Products} onFilter={handleFilter} />
        </section>

        <section className="col-span-8 px-6 py-6 my-4 bg-white">
          {/* Title + Filter Options */}
          <div>
            <h2 className="text-3xl font-bold mb-5">
              AIR CONDITIONER{" "}
              <span className="font-normal">({finalList.length})</span>
            </h2>
            {/* thêm hàm IF nếu có filter thì hiển thị từng thẻ filter, có nút tắt trong mỗi thẻ và thẻ Clear All */}
            <hr />
          </div>

          {/* Sort By */}
          <div className="flex justify-end items-center gap-4 my-6">
            <Sort db={filteredList} onSort={handleSort} />
          </div>

          {/* List */}
          <div className="grid grid-cols-4 gap-4">
            {finalList.slice(0, visibleCount).map((product) => (
              <div
                key={product.id}
                className="p-4 h-100 bg-white border rounded-lg shadow-sm hover:shadow-lg transition relative"
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
                <div className="flex justify-center items-center">
                  <img
                    src={windowAC_vuong}
                    alt="image"
                    className="w-4/5 h-60 object-contain rounded-md mb-4"
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
            ))}
          </div>

          {/* View more */}
          {visibleCount < finalList.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="border border-blue-500 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                View more {finalList.length - visibleCount} Air Conditioner ↓
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
