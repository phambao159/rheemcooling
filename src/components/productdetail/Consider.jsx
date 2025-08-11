// Consider.jsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { StarIcon as StarSolid } from "@heroicons/react/20/solid";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import SaveButton from '../../components/SaveButton'; // 

function Consider({ data, review }) {
    return (
        <div className="partners px-4 md:px-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">More to consider</h2>

            <div className="relative w-full px-6 py-10">

                {/* Custom Navigation Buttons */}
                <div
                    className="absolute z-10 top-1/2 left-0 -translate-y-1/2 -translate-x-full cursor-pointer bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-red-100 transition"
                    id="custom-prev-consider"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>

                <div
                    className="absolute z-10 top-1/2 right-0 translate-y-[-50%] translate-x-full cursor-pointer bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-red-100 transition"
                    id="custom-next-consider"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    navigation={{
                        prevEl: '#custom-prev-consider',
                        nextEl: '#custom-next-consider',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.custom-swiper-pagination-consider',
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
                    {data.map((product) => {
                        const productReviews = review.filter(r => r.product_id === product.ac_id);
                        const totalReviews = productReviews.length;
                        const avgRating = totalReviews
                            ? (productReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
                            : 0;

                        return (
                            <SwiperSlide key={product.ac_id} className="p-6 border border-gray-200 rounded-md hover:shadow-sm">
                                <div className="flex justify-between ">
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

                                <div className="w-full h-[180px] md:h-[150px] flex justify-center items-center">
                                    <img
                                        src={`https://storage.googleapis.com/rheemcooling/${product.brand}/${product.ac_id}/${product.ac_id}_img1.webp`}
                                        alt={product.name}
                                        className="max-h-full object-contain"
                                    />
                                </div>


                                <Link
                                    to={`/product/${product.ac_id}`}
                                    className="font-bold text-sm line-clamp-3 mt-5 hover:underline min-h-[3.6em] leading-[1.2em]"
                                >
                                    {product.name}
                                </Link>


                                <div className="flex items-center gap-1 mt-1 mb-3">
                                    <StarSolid className="w-4 h-4 text-yellow-500" />
                                    <span className="text-sm text-gray-500">{avgRating}</span>
                                    <span className="text-sm text-gray-500">| Sold {product.sale_quantity}</span>
                                </div>

                                <div className="flex gap-2 items-center mb-5">
                                    <p className="font-bold">${product.price}</p>
                                    <p className="text-sm text-gray-500 line-through">${product.old_price}</p>
                                </div>
                                <div className="flex justify-center">
                                    <SaveButton product={product} width={"w-4/5 md:w-full py-2"} />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <div className="custom-swiper-pagination-consider flex justify-center mt-6"></div>
            </div>
        </div>
    );
}

export default Consider;
