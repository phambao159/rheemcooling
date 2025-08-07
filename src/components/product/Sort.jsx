import React, { useEffect, useState } from "react";

export default function Sort({ db, onSort }) {
  const [sortOption, setSortOption] = useState("Top Selling");
  const sortedProducts = [...db].sort((a, b) => {
    switch (sortOption) {
      case "Top Selling":
        return b.sale_quantity - a.sale_quantity;
      case "Top Deal":
        return b.discount - a.discount;
      case "Price Low - High":
        return a.price - b.price;
      case "Price High - Low":
        return b.price - a.price;
      case "Customer Rating":
        return b.rating - a.rating;
      case "New Arrivals":
        return b.isNew - a.isNew;
      default:
        return 0;
    }
  });

  useEffect(() => {
    onSort(sortedProducts);
  }, [onSort, sortedProducts]);

  return (
    <>
      <div>SORT BY: </div>
      <select
        value={sortOption}
        onChange={(e) => {
          setSortOption(e.target.value);
          // setCurrentPage(1); // reset về page 1 khi sort
        }}
        className="border px-4 py-2 rounded"
      >
        <option>Top Selling</option>
        <option>Top Deal</option>
        <option>Price Low - High</option>
        <option>Price High - Low</option>
        <option>Customer Rating</option>
        <option>New Arrivals</option>
      </select>
    </>
  );
}
