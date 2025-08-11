import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../css/style.css"


function ImageGallery({ data }) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="image-gallery w-full grid grid-cols-10 ">
            {/* Thumbnail - cột bên trái */}
            <Swiper
                onSwiper={setThumbsSwiper}
                direction="vertical"
                spaceBetween={10}
                slidesPerView={7}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="hidden md:block thumbSwiper md:col-span-1 h-[300px] md:h-[500px]"
            >
                {data.map((item) => (
                    <SwiperSlide key={`thumb-${item.id}`}>
                        <img
                            src={item.url}
                            alt={`Thumbnail ${item.id}`}
                            className="hidden md:block w-[50px] h-[50px] object-cover border border-gray-300 rounded"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Ảnh chính - bên phải */}
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="mainSwiper w-full h-[300px] md:h-[500px] col-span-8 md:col-span-8 rounded-lg overflow-hidden"
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.url}
                            alt={`Product ${item.id}`}
                            className="w-3/5 h-full  mx-auto object-contain "
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ImageGallery;
