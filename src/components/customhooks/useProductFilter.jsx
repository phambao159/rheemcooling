import { useState, useMemo, useEffect, useCallback, useRef } from "react";

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

  const clearAllFilters = useCallback(() => {
    setFilterOption({
      category: [],
      brand: [],
      priceRange: [],
      power: [],
    });
  }, []);

  // dùng ref để lưu lần onFilter đã gửi trước đó -> tránh gọi onFilter khi nội dung không đổi
  const lastSentRef = useRef({ filtered: null, option: null });

  useEffect(() => {
    if (!onFilter) return;

    const filteredStr = JSON.stringify(filteredProducts);
    const optionStr = JSON.stringify(filterOption);

    if (
      lastSentRef.current.filtered !== filteredStr ||
      lastSentRef.current.option !== optionStr
    ) {
      onFilter(filteredProducts, filterOption);
      lastSentRef.current.filtered = filteredStr;
      lastSentRef.current.option = optionStr;
    }
  }, [filteredProducts, filterOption, onFilter]);

  return {
    filterOption, //object
    filteredProducts, //array
    setFilterOption,
    clearAllFilters,
  };
}
