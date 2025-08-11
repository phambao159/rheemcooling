import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SaveButton from '../components/SaveButton'; // 
import "../css/style.css";

function RecentView() {
    const [recent, setRecent] = useState([]);

    // Load recently viewed products
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("recently_viewed")) || [];
        setRecent(stored);
    }, []);

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
                    {recent.map((product) => (
                        <SwiperSlide
                            key={product.ac_id}
                            className="p-6 bg-white border border-gray-200 rounded-md hover:shadow-sm"
                        >
                            {/* Label row */}
                            <div className="flex justify-between">
                                <p className={`px-2 font-bold rounded ${product.isNew ? 'bg-[#DC143C] text-white text-sm' : 'invisible text-sm'}`}>
                                    New
                                </p>
                                {product.sale ? (
                                    <p className="bg-yellow-400 text-black text-sm px-2 font-bold rounded">
                                        -{product.sale}%
                                    </p>
                                ) : (
                                    <span />
                                )}
                            </div>

                            {/* Product Image */}
                            <div className="w-full h-[180px] md:h-[150px] flex justify-center items-center">
                                <img
                                    src={`https://storage.googleapis.com/rheemcooling/${product.brand}/${product.ac_id}/${product.ac_id}_img1.webp`}
                                    alt={product.name}
                                    className="max-h-full object-contain"
                                />
                            </div>

                            {/* Product Name */}
                            <Link
                                to={`/product/${product.ac_id}`}
                                className="font-bold text-sm line-clamp-3 mt-5 hover:underline min-h-[3.6em] leading-[1.2em]"
                            >
                                {product.name}
                            </Link>

                            {/* Price */}
                            <div className="flex gap-2 items-center my-5">
                                <p className="font-bold text-[#DC143C]">${product.price}</p>
                                <p className="text-sm text-gray-500 line-through">${product.old_price}</p>
                            </div>

                            {/* SaveButton dùng w-full */}
                            <div className="flex justify-center">
                                <SaveButton product={product} width={"w-4/5 md:w-full py-2"} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="custom-swiper-pagination-recentview flex justify-center mt-6" />
            </div>
        </div>
    );
}

export default RecentView;
