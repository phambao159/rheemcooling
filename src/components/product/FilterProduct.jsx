import React, { useState, useEffect } from "react";
import useProductFilter from "../customhooks/useProductFilter";

export default function FilterProduct({ db, onFilter, onExposeActions }) {
  const categorieList = Array.from(new Set(db.map((p) => p.type)));
  const brandList = Array.from(new Set(db.map((p) => p.brand)));
  const priceOptions = [
    { label: "Under $75", min: 0, max: 75 },
    { label: "$75 - $99.99", min: 75, max: 99.99 },
    { label: "$150 - $199.99", min: 150, max: 199.99 },
    { label: "$200 - $249.99", min: 200, max: 249.99 },
    { label: "$250 - $499.99", min: 250, max: 499.99 },
    { label: "$500 - $749.99", min: 500, max: 749.99 },
    { label: "Over $749.99", min: 749.99, max: Infinity },
  ];
  const powerList = Array.from(new Set(db.map((p) => p.power))).sort((a, b) => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    return numA - numB;
  });

  const {
    filterOption,
    setFilterOption,
    // filteredProducts, // nếu cần
    clearAllFilters,
  } = useProductFilter(db, onFilter);

  useEffect(() => {
    if (onExposeActions) {
      onExposeActions({ setFilterOption, clearAllFilters });
    }
  }, [onExposeActions, setFilterOption, clearAllFilters]);

  return (
    <div className="p-4 bg-white border rounded-lg space-y-6 h-auto md:h-full max-h-none md:max-h-screen md:overflow-y-auto">
      {/* Category */}
      <div>
        <h3 className="text-[#dc143c] font-semibold mb-2">Category</h3>
        {categorieList.map((c) => (
          <label
            key={c}
            className="flex items-center gap-1 flex-wrap text-sm sm:text-base"
          >
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) =>
                setFilterOption((prev) => {
                  const current = prev.category;
                  return {
                    ...prev,
                    category: e.target.checked
                      ? [...current, c] // thêm category `c` vào mảng prev
                      : current.filter((cur) => cur !== c), //giữ lại những phần tử khác với c (đã bị bỏ chọn)
                  };
                })
              }
            />
            {c}
          </label>
        ))}
      </div>

      {/* Brand */}
      <div>
        <h3 className="text-[#dc143c] font-semibold mb-2">Brand</h3>
        {brandList.map((b) => (
          <label
            key={b}
            className="flex items-center gap-1 flex-wrap text-sm sm:text-base"
          >
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) =>
                setFilterOption((prev) => {
                  const current = prev.brand;
                  return {
                    ...prev,
                    brand: e.target.checked
                      ? [...current, b]
                      : current.filter((cur) => cur !== b),
                  };
                })
              }
            />
            {b.charAt(0).toUpperCase() + b.slice(1)}
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-[#dc143c] font-semibold mb-2">Price</h3>
        {priceOptions.map((p) => (
          <div key={p.label}>
            <label className="flex gap-2 items-center flex-wrap mb-1 text-sm sm:text-base">
              <input
                type="checkbox"
                name="price"
                checked={filterOption.priceRange.some(
                  (x) => x.label === p.label
                )}
                onChange={(e) =>
                  setFilterOption((prev) => {
                    const current = prev.priceRange;
                    return {
                      ...prev,
                      priceRange: e.target.checked
                        ? [...current, p]
                        : current.filter((x) => x.label !== p.label),
                    };
                  })
                }
              />
              {p.label}
            </label>
          </div>
        ))}
      </div>

      {/* Power */}
      <div>
        <h3 className="text-[#dc143c] font-semibold mb-2">Power</h3>
        {powerList.map((p) => (
          <label
            key={p}
            className="flex items-center gap-1 flex-wrap text-sm sm:text-base"
          >
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) =>
                setFilterOption((prev) => {
                  const current = prev.power;
                  return {
                    ...prev,
                    power: e.target.checked
                      ? [...current, p]
                      : current.filter((po) => po !== p),
                  };
                })
              }
            />
            {p.split("(")[0].trim()}
          </label>
        ))}
      </div>
    </div>
  );
}
