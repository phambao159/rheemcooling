//components/SearchPage.jsx
import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import FilterProduct from "../../src/components/product/FilterProduct";
import FinalList from "../../src/components/product/FinalList";
import db from "../data/product.json";
import RecentView from "../components/RecentView";
import Sort from "../components/product/Sort";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function removeVietnameseTones(str) {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase();
}

function SearchPage() {
    const query = useQuery();
    const keysearch = query.get("query") || "";


    const initialFiltered = useMemo(() => {
        if (!keysearch) return db;

        const keywords = removeVietnameseTones(keysearch).split(" ").filter(Boolean);

        return db.filter((p) => {
            const name = removeVietnameseTones(p.name);
            return keywords.some((kw) => name.includes(kw));
        });
    }, [keysearch]);


    const [filteredProducts, setFilteredProducts] = useState(initialFiltered);


    const [sortedProducts, setSortedProducts] = useState(initialFiltered);


    useEffect(() => {
        setFilteredProducts(initialFiltered);
        setSortedProducts(initialFiltered);
    }, [initialFiltered]);


    function handleFilter(filtered) {
        setFilteredProducts(filtered);
        setSortedProducts(filtered);
    }


    function handleSort(sorted) {
        setSortedProducts(sorted);
    }

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-10 gap-4">
                <section className="col-span-3 lg:col-span-2 my-5">
                    <FilterProduct db={initialFiltered} onFilter={handleFilter} />
                </section>

                <section className="col-span-7 lg:col-span-8 my-5 p-6 bg-white border rounded-lg">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            Search results for "{keysearch}"
                        </h2>
                        <hr className="mb-4" />
                    </div>

                    {/* Sort By */}
                    <div className="flex justify-end items-center gap-4 my-6">
                        <Sort db={filteredProducts} onSort={handleSort} />
                    </div>

                    {/* List */}
                    {sortedProducts.length > 0 ? (
                        <FinalList db={sortedProducts} visibleCount={10} />
                    ) : (
                        <div>
                            <p>No products found.</p>
                            <h2 className="text-xl font-semibold my-4">
                                You may also be interested in
                            </h2>
                            <FinalList db={db} visibleCount={10} />
                        </div>
                    )}
                </section>
            </div>
            <div>
                <RecentView />
            </div>
        </div>
    );
}

export default SearchPage;
