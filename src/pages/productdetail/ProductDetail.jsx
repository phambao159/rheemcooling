import Consider from "../../components/productdetail/Consider";
import Description from "../../components/productdetail/Description";
import ImageGallery from "../../components/productdetail/ImageGallary";
import ProductInfo from "../../components/productdetail/ProductInfo";
import Review from "../../components/productdetail/Review";

function ProductDetail() {
    return (
        <div className="productdetail my-10">
            <div className="grid grid-cols-5">
                <div className="col-span-5 md:col-span-3">
                    <ImageGallery />
                </div>
                <div className="col-span-5 md:col-span-2">
                    <Description />
                </div>
                <div className="col-span-5 md:col-span-3 mb-5 md:mb-0">
                    <ProductInfo />
                </div>
                <div className="col-span-5">
                    <Review />
                </div>
                <div className="col-span-5">
                    <Consider />
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;