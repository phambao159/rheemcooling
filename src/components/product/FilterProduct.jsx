import React, { useState, useEffect, useMemo } from "react";

export default function FilterProduct({ db, onFilter }) {
  const [filterOption, setFilterOption] = useState({
    category: [],
    brand: [],
    priceRange: [0, Infinity],
    power: [],
    size: [],
    features: [],
  });

  const categorieList = Array.from(new Set(db.map((p) => p.type)));
  const brandList = Array.from(new Set(db.map((p) => p.brand)));
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const handleSetPrice = () => {
    const min = Number(minPrice) || 0;
    const max = Number(maxPrice) || Infinity;

    setFilterOption((prev) => ({
      ...prev,
      priceRange: [min, max],
    }));
  };

  const filteredProducts = useMemo(() => {
    const { category, brand, priceRange, power, size, features } = filterOption;

    return db.filter((product) => {
      const matchCategory =
        category.length === 0 || category.includes(product.type);
      const matchBrand = brand.length === 0 || brand.includes(product.brand);
      const matchPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchPower = power.length === 0 || power.includes(product.power);
      const matchSize = size.length === 0 || size.includes(product.size);
      const matchFeatures =
        features.length === 0 ||
        features.every((f) => product.features?.includes(f));

      return (
        matchCategory &&
        matchBrand &&
        matchPrice &&
        matchPower &&
        matchSize &&
        matchFeatures
      );
    });
  }, [db, filterOption]);

  useEffect(() => {
    onFilter(filteredProducts);
  }, [filteredProducts]);

  return (
    <div className="p-4 bg-white border rounded-lg space-y-6 h-auto md:h-full max-h-none md:max-h-screen overflow-x-auto md:overflow-y-auto">
      {/* Category */}
      <div>
        <h3 className="text-[#DC143C] font-semibold mb-2">Category</h3>
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
        <h3 className="text-[#DC143C] font-semibold mb-2">Brand</h3>
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
        <h3 className="text-[#DC143C] font-semibold mb-2">Price</h3>

        {[
          { label: "Under $75", min: 0, max: 75 },
          { label: "$75 - $99.99", min: 75, max: 99.99 },
          { label: "$150 - $199.99", min: 150, max: 199.99 },
          { label: "$200 - $249.99", min: 200, max: 249.99 },
          { label: "$250 - $499.99", min: 250, max: 499.99 },
          { label: "$500 - $749.99", min: 500, max: 749.99 },
          { label: "Over $749.99", min: 749.99, max: Infinity },
        ].map(({ label, min, max }) => (
          <div key={label}>
            <label className="flex gap-2 items-center flex-wrap mb-1 text-sm sm:text-base">
              <input
                type="checkbox"
                name="price"
                onChange={(e) =>
                  setFilterOption((prev) => {
                    if (e.target.checked) {
                      return { ...prev, priceRange: [min, max] };
                    } else {
                      return { ...prev, priceRange: [0, Infinity] };
                    }
                  })
                }
              />
              {label}
            </label>
          </div>
        ))}
      </div>

      {/* Power */}
      <div>
        <h3 className="text-[#DC143C] font-semibold mb-2">Power</h3>
        {["1HP", "1.5HP", "2HP", "2.5HP"].map((p) => (
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
            {p}
          </label>
        ))}
      </div>


    </div>
  );
}
