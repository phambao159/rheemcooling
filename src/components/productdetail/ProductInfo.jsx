import { useState } from "react";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../css/style.css"

function ProductInfo() {
    const [showModal, setShowModal] = useState(false);
    const image = [
        { id: "image1", url: require("../../images/product_details/TCL_img1.jpg") },
        { id: "image2", url: require("../../images/product_details/TCL_img2.jpg") },
        { id: "image3", url: require("../../images/product_details/TCL_img3.jpg") },
        { id: "image4", url: require("../../images/product_details/TCL_img4.jpg") },
        { id: "image5", url: require("../../images/product_details/TCL_img5.jpg") },
        { id: "image6", url: require("../../images/product_details/TCL_img6.jpg") },
        { id: "image7", url: require("../../images/product_details/TCL_img7.jpg") },
        { id: "image8", url: require("../../images/product_details/TCL_img8.jpg") },
        { id: "image9", url: require("../../images/product_details/TCL_img9.jpg") },
        { id: "image10", url: require("../../images/product_details/TCL_img10.jpg") },
    ];
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
            price: 165,
            old_price: 200,
            stock_quantity: 100,
            install_fee: 15,
            color: "White",
            sale: 18
        }
    ];

    const product = data[0];

    const attributes = [
        { label: "Name", value: product.name },
        { label: "Brand", value: product.brand },
        { label: "Type", value: product.type },
        { label: "Power", value: product.power },
        { label: "Size", value: product.size },
        { label: "Weight", value: product.weight },
        { label: "Color", value: product.color },
        { label: "Warranty", value: product.warranty },
        { label: "Made in", value: product.country },
        { label: "Install Fee", value: `$${product.install_fee}` },
        { label: "In Stock", value: product.stock_quantity },
        { label: "Sold", value: product.sale_quantity },
        { label: "Description", value: product.description },
    ];

    const renderTable = (dataList) => (
        <div className="w-full rounded-md overflow-hidden text-sm text-gray-800">
            {dataList.map((attr, index) => (
                <div
                    key={attr.label}
                    className={`grid grid-cols-3 md:grid-cols-4 gap-4 items-start px-4 py-3 
                        ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} 
                        hover:bg-red-50 transition`}
                >
                    <div className="font-medium text-gray-600 col-span-1">{attr.label}</div>
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
                                            className="w-3/5 h-full  mx-auto "
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
