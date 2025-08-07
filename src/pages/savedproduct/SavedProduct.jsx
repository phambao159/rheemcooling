// components/RecentView.jsx
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";
import { X } from "lucide-react";

function SavedProduct() {
    const [saved, setSaved] = useState([]);
    const handleDelete = ((id) => {
        if (window.confirm("Are you sure to delete ?")) {
            const updated = saved.filter(p => p.ac_id !== id);
            localStorage.setItem("saved_product", JSON.stringify(updated));
            setSaved(updated);
        }
    });

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("saved_product")) || [];
        setSaved(stored);
    }, []);

    if (saved.length === 0) return (
        <div className="noproduct h-100 flex justify-center items-center">
            <h2 className="font-bold text-4xl text-[#DC143C]">No Product Here !</h2>
        </div>
    );

    return (
        <div className="px-4 md:px-0 my-10">
            <h2 className="text-2xl font-bold mb-4">Saved Product</h2>
            <div className="relative w-full px-6 py-10">

                {/* Custom Navigation Buttons */}
                <div
                    className="absolute z-10 top-1/2 left-0 -translate-y-1/2 -translate-x-full cursor-pointer bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-red-100 transition"
                    id="custom-prev"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>

                <div
                    className="absolute z-10 top-1/2 right-0 translate-y-[-50%] translate-x-full cursor-pointer bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-red-100 transition"
                    id="custom-next"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    navigation={{
                        prevEl: '#custom-prev',
                        nextEl: '#custom-next',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.custom-swiper-pagination',
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                    className="mySwiper"
                >
                    {saved.map((product) => {
                        return (
                            <SwiperSlide key={product.ac_id} className="p-6 border border-gray-200 rounded-md hover:shadow-sm">
                                <button onClick={() => handleDelete(product.ac_id)}><X /></button>
                                <img
                                    src={`https://storage.googleapis.com/rheemcooling/${product.brand}/${product.ac_id}/${product.ac_id}_img2.webp`}

                                    alt={product.name}
                                    className="w-full h-50 md:h-30 md:object-cover mb-3 md:mb-0 object-contain"
                                />
                                <Link
                                    to={`/product/${product.ac_id}`}
                                    className="font-bold text-sm line-clamp-3 hover:underline"
                                >
                                    {product.name}
                                </Link>



                                <div className="flex gap-2 items-center mb-3">
                                    <p className="font-bold text-[#DC143C]">${product.price}</p>
                                    <p className="text-sm text-gray-500 line-through">${product.old_price}</p>
                                </div>

                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <div className="custom-swiper-pagination flex justify-center mt-6"></div>
            </div>
        </div>
    );
}

export default SavedProduct;