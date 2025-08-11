import React, { useState } from "react";
import Products from "../../data/product.json";

import FilterProduct from "../../components/product/FilterProduct";
import Sort from "../../components/product/Sort";
import FinalList from "../../components/product/FinalList";
import PeopleAlsoViewed from "../../components/product/PeopleAlsoViewed";

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
        <section className="col-span-2 my-5">
          <FilterProduct db={Products} onFilter={handleFilter} />
        </section>

        <section className="col-span-8 my-5 p-6 bg-white border rounded-lg">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5">
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
          <FinalList db={finalList} visibleCount={visibleCount} />

          {/* View more */}
          {visibleCount < finalList.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="border border-blue-500 text-blue-600 text-sm sm:text-base px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                View more {finalList.length - visibleCount} Air Conditioner ↓
              </button>
            </div>
          )}
        </section>
      </div>

      {/* People Also Viewed */}
      <PeopleAlsoViewed db={Products} />
    </div>
  );
}
