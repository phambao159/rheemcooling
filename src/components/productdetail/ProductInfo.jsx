import { useState } from "react";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../css/style.css"

function ProductInfo({ data, image }) {
    const [showModal, setShowModal] = useState(false);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    const product = data[0];

    const attributes = [
        { label: "Name", value: data.name },
        { label: "Brand", value: data.brand },
        { label: "Type", value: data.type },
        { label: "Power", value: data.power },
        { label: "Size", value: data.size },
        { label: "Weight", value: data.weight },
        { label: "Color", value: data.color },
        { label: "Warranty", value: data.warranty },
        { label: "Made in", value: data.country },
        { label: "Install Fee", value: `$${data.install_fee}` },
        { label: "In Stock", value: data.stock_quantity },
        { label: "Sold", value: data.sale_quantity },
        { label: "Description", value: data.description },
    ];

    const renderTable = (dataList) => (
        <div className="w-full rounded-md overflow-hidden text-sm text-gray-800">
            {dataList.map((attr, index) => (
                <div
                    key={attr.label}
                    className={`grid grid-cols-3 md:grid-cols-4 gap-4 items-start px-4 py-3 
                        ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} 
                        hover:bg-blue-50 transition`}
                >
                    <div className="font-bold text-black col-span-1">{attr.label}</div>
                    <div className="col-span-2 md:col-span-3 text-gray-900">{attr.value}</div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="productinfo px-4 md:px-0 mt-6 relative">
            <h2 className="font-bold text-2xl mb-5">Product Information</h2>

            {renderTable(attributes.slice(0, 4))}


            <button
                onClick={() => setShowModal(true)}
                className="mt-3 text-sm bg-[#DC143C] text-white px-5 py-3 rounded-md font-semibold hover:shadow-md hover:cursor-pointer"
            >
                View more product details →
            </button>


            {showModal && (
                <div className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center px-4">
                    <div className="bg-white max-w-2xl w-full rounded-lg shadow-lg overflow-y-auto max-h-[80vh] relative">
                        <div className="px-6">
                            {/* Sticky Header */}
                            <div className="sticky top-0 z-10 bg-white flex justify-between items-center py-4 border-b border-gray-200">
                                <h2 className="text-xl font-bold text-gray-900">Product Information</h2>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="p-2 rounded hover:bg-gray-100"
                                >
                                    <X />
                                </button>
                            </div>

                            {/* Nội dung bảng */}
                            <Swiper
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                watchSlidesProgress={true}
                                modules={[Navigation, Thumbs]}
                                className="mainSwiper w-full h-[300px] md:h-[500px] col-span-8 md:col-span-8 rounded-lg overflow-hidden mb-5"
                            >
                                {image.map((image) => (
                                    <SwiperSlide key={image.id}>
                                        <img
                                            src={image.url}
                                            alt={`Product ${image.id}`}
                                            className="w-3/5 h-full  mx-auto object-contain "
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            {renderTable(attributes)}
                        </div>
                    </div>
                </div>
            )}

        </div >
    );
}

export default ProductInfo;
