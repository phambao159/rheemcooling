import { useState, useMemo, useEffect } from "react";

export default function useProductFilter(db, onFilter) {
  const [filterOption, setFilterOption] = useState({
    category: [],
    brand: [],
    priceRange: [],
    power: [],
  });

  const filteredProducts = useMemo(() => {
    const { category, brand, priceRange, power } = filterOption;

    return db.filter((product) => {
      const matchCategory =
        category.length === 0 || category.includes(product.type);
      const matchBrand = brand.length === 0 || brand.includes(product.brand);
      const matchPrice =
        priceRange.length === 0 ||
        priceRange.some(
          ({ min, max }) => product.price >= min && product.price <= max
        );
      const matchPower = power.length === 0 || power.includes(product.power);

      return matchCategory && matchBrand && matchPrice && matchPower;
    });
  }, [db, filterOption]);

  useEffect(() => {
    if (onFilter) {
      onFilter(filteredProducts, filterOption);
    }
  }, [filteredProducts, filterOption]);

  const clearAllFilters = () => {
    setFilterOption({
      category: [],
      brand: [],
      priceRange: [],
      power: [],
    });
  };

  return {
    filterOption,
    setFilterOption,
    filteredProducts,
    clearAllFilters,
  };
}
