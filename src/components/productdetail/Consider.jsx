// CarouselComponent.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { StarIcon as StarSolid } from "@heroicons/react/20/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/20/solid";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import img1 from '../../images/product_details/TCL_img1.jpg'


function Consider() {
    const data = [
        {
            ac_id: "Brand_AC001",
            name: "TCL - 150 Sq. Ft. 5,000 BTU Window Air Conditioner with Mechanical Controls - white",
            sale_quantity: 1000,
            type: "Window",
            power: "1.0 HP (9000 BTU)",
            size: "770 x 240 x 180 mm",
            weight: "9.5 kg",
            description: "Inverter air conditioner saves electricity, operates smoothly, and filters dust and bacteria.",
            brand: "Panasonic",
            warranty: "2 years on-site warranty",
            country: "Thailand",
            price: 164.99,
            old_price: 200,
            stock_quantity: 100,
            install_fee: 15,
            color: "White",
            sale: 18
        }, {
            ac_id: "Brand_AC001",
            name: "TCL - 150 Sq. Ft. 5,000 BTU Window Air Conditioner with Mechanical Controls - white",
            sale_quantity: 1000,
            type: "Window",
            power: "1.0 HP (9000 BTU)",
            size: "770 x 240 x 180 mm",
            weight: "9.5 kg",
            description: "Inverter air conditioner saves electricity, operates smoothly, and filters dust and bacteria.",
            brand: "Panasonic",
            warranty: "2 years on-site warranty",
            country: "Thailand",
            price: 139.99,
            old_price: 200,
            stock_quantity: 100,
            install_fee: 15,
            color: "White",
            sale: 18
        }, {
            ac_id: "Brand_AC001",
            name: "TCL - 150 Sq. Ft. 5,000 BTU Window Air Conditioner with Mechanical Controls - white",
            sale_quantity: 1000,
            type: "Window",
            power: "1.0 HP (9000 BTU)",
            size: "770 x 240 x 180 mm",
            weight: "9.5 kg",
            description: "Inverter air conditioner saves electricity, operates smoothly, and filters dust and bacteria.",
            brand: "Panasonic",
            warranty: "2 years on-site warranty",
            country: "Thailand",
            price: 184.99,
            old_price: 200,
            stock_quantity: 100,
            install_fee: 15,
            color: "White",
            sale: 18
        }, {
            ac_id: "Brand_AC001",
            name: "TCL - 150 Sq. Ft. 5,000 BTU Window Air Conditioner with Mechanical Controls - white",
            sale_quantity: 1000,
            type: "Window",
            power: "1.0 HP (9000 BTU)",
            size: "770 x 240 x 180 mm",
            weight: "9.5 kg",
            description: "Inverter air conditioner saves electricity, operates smoothly, and filters dust and bacteria.",
            brand: "Panasonic",
            warranty: "2 years on-site warranty",
            country: "Thailand",
            price: 164.99,
            old_price: 200,
            stock_quantity: 100,
            install_fee: 15,
            color: "White",
            sale: 18
        }, {
            ac_id: "Brand_AC001",
            name: "TCL - 150 Sq. Ft. 5,000 BTU Window Air Conditioner with Mechanical Controls - white",
            sale_quantity: 1000,
            type: "Window",
            power: "1.0 HP (9000 BTU)",
            size: "770 x 240 x 180 mm",
            weight: "9.5 kg",
            description: "Inverter air conditioner saves electricity, operates smoothly, and filters dust and bacteria.",
            brand: "Panasonic",
            warranty: "2 years on-site warranty",
            country: "Thailand",
            price: 164.99,
            old_price: 200,
            stock_quantity: 100,
            install_fee: 15,
            color: "White",
            sale: 18
        }, {
            ac_id: "Brand_AC001",
            name: "TCL - 150 Sq. Ft. 5,000 BTU Window Air Conditioner with Mechanical Controls - white",
            sale_quantity: 1000,
            type: "Window",
            power: "1.0 HP (9000 BTU)",
            size: "770 x 240 x 180 mm",
            weight: "9.5 kg",
            description: "Inverter air conditioner saves electricity, operates smoothly, and filters dust and bacteria.",
            brand: "Panasonic",
            warranty: "2 years on-site warranty",
            country: "Thailand",
            price: 164.99,
            old_price: 200,
            stock_quantity: 100,
            install_fee: 15,
            color: "White",
            sale: 18
        }
    ];
    return (
        <div className="partners px-4 md:px-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">More to consider</h2>

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
                            slidesPerView: 1, // sm: 2 slide
                        },
                        768: {
                            slidesPerView: 3, // md: 3 slide
                        },
                        1024: {
                            slidesPerView: 5, // lg: 5 slide
                        },
                    }}
                    className="mySwiper"
                >
                    {data.map((product) => (
                        <SwiperSlide key={product.ac_id} className="p-6 border border-gray-200 rounded-md hover:shadow-sm">
                            <img
                                src={img1}
                                alt={product.name}
                                className="w-full h-50 md:h-30 md:object-cover mb-3 md:mb-0"
                            />
                            <h2 className="font-bold text-sm " style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}>{product.name}</h2>
                            <div className="flex items-center gap-1 mt-1 mb-3">
                                {[...Array(4)].map((_, i) => (
                                    <StarSolid key={i} className="w-4 h-4 text-yellow-500" />
                                ))}
                                {[...Array(1)].map((_, i) => (
                                    <StarOutline key={i} className="w-4 h-4 text-gray-300" />
                                ))} (8)
                            </div>
                            <div className="flex gap-2 items-center mb-3">
                                <p className="font-bold">${product.price}</p>
                                <p className="text-sm text-gray-500 line-through">${product.old_price}</p>
                            </div>

                            <button className="w-full bg-[#DC143C] hover:bg-red-700 transition font-bold py-2 rounded-lg text-white flex items-center justify-center mt-8 hover:cursor-pointer ">
                                Add to Save
                            </button>

                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="custom-swiper-pagination flex justify-center mt-6"></div>
            </div>
        </div>

    )
}

export default Consider;
