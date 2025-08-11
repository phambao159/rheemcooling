// components/SavedProduct.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { StarIcon as StarSolid } from "@heroicons/react/20/solid";

function SavedProduct({ review = [] }) {
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
        <div className="my-10">
            <h2 className="text-2xl font-bold ">Saved Product</h2>
            <div className="noproduct h-100 flex justify-center items-center">
                <h2 className="font-bold text-4xl text-[#DC143C]">No Product Here !</h2>
            </div>
        </div>

    );

    return (
        <div className="px-4 md:px-0 my-10">
            <h2 className="text-2xl font-bold mb-4">Saved Product</h2>
            <div className="w-full grid grid-cols-8 gap-5 ">
                {saved.map((product) => {
                    const productReviews = review.filter(r => r.product_id === product.ac_id);
                    const totalReviews = productReviews.length;
                    const avgRating = totalReviews
                        ? (productReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
                        : 0;
                    return (
                        <div key={product.ac_id} className="col-span-8 md:col-span-4 lg:col-span-2  p-6 border border-gray-200 rounded-md hover:shadow-sm ">
                            <div className="flex justify-end">
                                <button onClick={() => handleDelete(product.ac_id)}><X /></button>
                            </div>
                            <img
                                src={`https://storage.googleapis.com/rheemcooling/${product.brand}/${product.ac_id}/${product.ac_id}_img1.webp`}

                                alt={product.name}
                                className="w-full h-50 my-5 md:mb-0 object-contain"
                            />
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
                            <div className="flex gap-2 items-center mt-5">
                                <p className="font-bold text-[#DC143C]">${product.price}</p>
                                <p className="text-sm text-gray-500 line-through">${product.old_price}</p>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SavedProduct;