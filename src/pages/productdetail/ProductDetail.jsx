import Consider from "../../components/productdetail/Consider";
import Description from "../../components/productdetail/Description";
import ImageGallery from "../../components/productdetail/ImageGallary";
import ProductInfo from "../../components/productdetail/ProductInfo";
import Review from "../../components/productdetail/Review";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import RecentView from "../../components/RecentView";

function ProductDetail({ product, review }) {
    const { id } = useParams();

    const data = product.find(p => p.ac_id === id);

    useEffect(() => {
        if (!data) return;

        const viewed = JSON.parse(localStorage.getItem("recently_viewed")) || [];
        const filtered = viewed.filter(item => item.ac_id !== data.ac_id);
        const updated = [data, ...filtered].slice(0, 10);

        localStorage.setItem("recently_viewed", JSON.stringify(updated));


    }, [data]);
    if (!data) {
        return (
            <div className="pagenotfound h-100 flex justify-center items-center">
                <h2 className="font-bold text-4xl text-[#DC143C]">Product Not Found!</h2>
            </div>
        );
    }

    const reviewProduct = review.filter(r => r.product_id === id);
    const considerProduct = product.filter(p => p.brand === data.brand && p.ac_id !== id);
    const considerProductIds = considerProduct.map(p => p.ac_id);
    const reviewConsider = review.filter(r => considerProductIds.includes(r.product_id));

    const imageCount = 5;
    const image = Array.from({ length: imageCount }, (_, index) => ({
        id: `${data.ac_id}_img${index + 1}`,
        url: `https://storage.googleapis.com/rheemcooling/${data.brand}/${data.ac_id}/${data.ac_id}_img${index + 1}.webp`
    }));

    return (
        <div className="productdetail my-10">
            <div className="grid grid-cols-5">
                <div className="col-span-5 md:col-span-3">
                    <ImageGallery data={image} />
                </div>
                <div className="col-span-5 md:col-span-2">
                    <Description data={data} review={reviewProduct} />
                </div>
                <div className="col-span-5 md:col-span-3 mb-5 md:mb-0">
                    <ProductInfo data={data} image={image} />
                </div>
                <div className="col-span-5">
                    <Review data={reviewProduct} />
                </div>
                <div className="col-span-5">
                    <RecentView />
                </div>
                <div className="col-span-5">
                    <Consider data={considerProduct} review={reviewConsider} />
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
