import React, { useState } from "react";
import Products from "../../data/product.json";

import FilterProduct from "../../components/product/FilterProduct";
import Sort from "../../components/product/Sort";
import FinalList from "../../components/product/FinalList";
import PeopleAlsoViewed from "../../components/product/PeopleAlsoViewed";

import useProductFilter from "../../components/customhooks/useProductFilter";

export default function Product() {
  const [filteredList, setFilteredList] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});
  const [filterActions, setFilterActions] = useState({});

  const [finalList, setFinalList] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  const handleFilter = (filteredProducts, filterOption) => {
    setFilteredList(filteredProducts);
    setActiveFilters(filterOption);
  };

  const handleSort = (p) => {
    setFinalList(p);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-10 gap-4">
        <section className="col-span-2 my-5">
          <FilterProduct
            db={Products}
            onFilter={handleFilter}
            onExposeActions={setFilterActions}
          />
        </section>

        <section className="col-span-8 my-5 p-6 bg-white border rounded-lg">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5">
              AIR CONDITIONER{" "}
              <span className="font-normal">({finalList.length})</span>
            </h2>

            {/* Tag Filters */}
            <div className="mb-4 flex flex-wrap gap-2">
              {Object.entries(activeFilters).flatMap(([key, val]) => {
                if (Array.isArray(val) && val.length > 0) {
                  if (key === "priceRange") {
                    return val.map((item) => (
                      <span
                        key={item.label}
                        className="bg-gray-200 px-2 py-1 rounded"
                      >
                        {item.label}{" "}
                        <button
                          className="ml-1 text-red-500"
                          onClick={() => {
                            filterActions.setFilterOption((prev) => ({
                              ...prev,
                              priceRange: prev.priceRange.filter(
                                (x) => x.label !== item.label
                              ),
                            }));
                          }}
                        >
                          ×
                        </button>
                      </span>
                    ));
                  }
                  return val.map((item) => (
                    <span key={item} className="bg-gray-200 px-2 py-1 rounded">
                      {item}
                      <button
                        className="ml-1 text-red-500"
                        onClick={() => {
                          filterActions.setFilterOption((prev) => ({
                            ...prev,
                            [key]: prev[key].filter((v) => v !== item),
                          }));
                        }}
                      >
                        ×
                      </button>
                    </span>
                  ));
                }
                return [];
              })}

              {/* Clear All chip cuối */}
              {Object.values(activeFilters).some(
                (val) => Array.isArray(val) && val.length > 0
              ) && (
                <span
                  onClick={() => filterActions.clearAllFilters()}
                  className="bg-red-100 text-red-600 px-2 py-1 rounded cursor-pointer"
                >
                  Clear All
                </span>
              )}
            </div>

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
