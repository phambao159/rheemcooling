import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function RecentView() {
    const [recent, setRecent] = useState([]);
    const [savedIds, setSavedIds] = useState([]);

    // Load recently viewed products
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("recently_viewed")) || [];
        setRecent(stored);
    }, []);

    // Load saved product IDs
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("saved_product")) || [];
        setSavedIds(saved.map(item => item.ac_id));
    }, []);

    // Toggle Save/Remove product
    const handleSave = (product) => {
        const saved = JSON.parse(localStorage.getItem("saved_product")) || [];
        const existed = saved.find(s => s.ac_id === product.ac_id);

        const updated = existed
            ? saved.filter(s => s.ac_id !== product.ac_id)
            : [...saved, product];

        alert(existed ? "Removed from Saved successfully!" : "Saved successfully!");
        localStorage.setItem("saved_product", JSON.stringify(updated));
        setSavedIds(updated.map(item => item.ac_id));
    };

    if (recent.length === 0) return null;

    return (
        <div className="px-4 md:px-0 my-10">
            <h2 className="text-2xl font-bold mb-4">Recently Viewed</h2>
            <div className="relative w-full px-6 py-10">

                {/* Custom Navigation Buttons */}
                <button
                    id="custom-prev-recentview"
                    className="absolute z-10 top-1/2 left-0 -translate-y-1/2 -translate-x-full cursor-pointer bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-red-100 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    id="custom-next-recentview"
                    className="absolute z-10 top-1/2 right-0 translate-y-[-50%] translate-x-full cursor-pointer bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-red-100 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    navigation={{
                        prevEl: "#custom-prev-recentview",
                        nextEl: "#custom-next-recentview",
                    }}
                    pagination={{
                        clickable: true,
                        el: ".custom-swiper-pagination-recentview",
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {recent.map((product) => {
                        const isSaved = savedIds.includes(product.ac_id);

                        return (
                            <SwiperSlide
                                key={product.ac_id}
                                className="p-6 border border-gray-200 rounded-md hover:shadow-sm"
                            >
                                {/* Label row */}
                                <div className="flex justify-between">
                                    <p className={`px-2 font-bold rounded ${product.isNew ? "bg-[#DC143C] text-white" : "invisible"}`}>
                                        New
                                    </p>
                                    {product.sale ? (
                                        <p className="bg-yellow-400 text-black px-2 font-bold rounded">
                                            -{product.sale}%
                                        </p>
                                    ) : <span />}
                                </div>

                                {/* Product Image */}
                                <img
                                    src={`https://storage.googleapis.com/rheemcooling/${product.brand}/${product.ac_id}/${product.ac_id}_img2.webp`}
                                    alt={product.name}
                                    className="w-full h-50 md:h-30 md:object-cover my-5 object-contain"
                                />

                                {/* Product Name */}
                                <Link
                                    to={`/product/${product.ac_id}`}
                                    className="font-bold text-sm line-clamp-3 hover:underline"
                                >
                                    {product.name}
                                </Link>

                                {/* Price */}
                                <div className="flex gap-2 items-center mb-3">
                                    <p className="font-bold text-[#DC143C]">${product.price}</p>
                                    <p className="text-sm text-gray-500 line-through">${product.old_price}</p>
                                </div>

                                {/* Save/Remove Button */}
                                <button
                                    className={`w-full transition font-bold py-2 rounded-lg flex items-center justify-center mt-8 border-2 ${isSaved
                                        ? "bg-gray-50 text-[#DC143C] border-[#DC143C] hover:bg-[#DC143C] hover:text-white"
                                        : "bg-[#DC143C] text-white border-[#DC143C] hover:bg-red-700"
                                        }`}
                                    onClick={() => handleSave(product)}
                                >
                                    {isSaved ? "Remove Saved" : "Save Product"}
                                </button>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <div className="custom-swiper-pagination-recentview flex justify-center mt-6" />
            </div>
        </div>
    );
}

export default RecentView;
