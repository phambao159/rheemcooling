import { StarIcon as StarSolid } from "@heroicons/react/20/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { BoltIcon, ClockIcon, TruckIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import SaveButton from "../../components/SaveButton"; // đổi path cho đúng

function Description({ data, review }) {
    const totalReviews = review.length;
    const averageRating = (review.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1);

    function useUserLocation() {
        const [location, setLocation] = useState("Loading...");

        useEffect(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        try {
                            const res = await fetch(
                                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
                            );
                            const data = await res.json();
                            const city =
                                data.address.city ||
                                data.address.town ||
                                data.address.village ||
                                "";
                            const country = data.address.country || "";
                            setLocation(`${city}, ${country}`);
                        } catch (error) {
                            setLocation("Location unavailable");
                        }
                    },
                    () => setLocation("Permission denied")
                );
            } else {
                setLocation("Geolocation not supported");
            }
        }, []);

        return location;
    }

    const location = useUserLocation();

    return (
        <div className="description px-3 md:px-6 md:h-[650px] lg:h-[500px] mx-auto text-gray-800 bg-white rounded-lg">
            {data && (
                <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-3 text-gray-900">{data.name}</h2>

                    {/* Stars */}
                    <p className="text-sm flex items-center gap-1 mb-4">
                        {[...Array(Math.floor(averageRating))].map((_, i) => (
                            <StarSolid key={i} className="w-4 h-4 text-yellow-500" />
                        ))}
                        {[...Array(5 - Math.floor(averageRating))].map((_, i) => (
                            <StarOutline key={i} className="w-4 h-4 text-gray-400" />
                        ))}

                        <span className="font-semibold text-[#DC143C] ml-1">{averageRating}</span>
                        <span className="text-[#DC143C]">({totalReviews} reviews)</span>
                    </p>

                    {/* Price Section */}
                    <p className="text-sm mb-7">
                        Stock: <span className="font-semibold">{data.stock_quantity}</span>
                    </p>
                    <p className="text-4xl font-bold flex items-center text-black">
                        ${data.price}
                        <span className="bg-[#DC143C] text-white text-xs ms-2 rounded-sm p-1">
                            -{data.sale}%
                        </span>
                    </p>
                    <p className="text-gray-400 line-through text-lg mb-4">${data.old_price}</p>

                    {/* Shipping */}
                    <div className="w-full grid grid-cols-3 gap-3 mb-6">
                        <p className="text-sm col-span-3">
                            Shipping to:{" "}
                            <span className="italic font-semibold">{location}</span>
                        </p>
                        {["Fast", "Normal", "Saving"].map((type, idx) => (
                            <div
                                key={type}
                                className="px-5 py-3 border border-gray-300 text-sm rounded-lg hover:shadow hover:border-[#DC143C] transition cursor-pointer bg-gray-50 gap-3 flex md:flex-col lg:flex-row items-center"
                            >
                                {type === "Fast" && (
                                    <BoltIcon className="w-7 h-7 text-[#DC143C]" />
                                )}
                                {type === "Normal" && (
                                    <TruckIcon className="w-7 min-w-[28px] h-7 text-[#DC143C]" />
                                )}
                                {type === "Saving" && (
                                    <ClockIcon className="w-7 h-7 text-[#DC143C]" />
                                )}
                                <div className="flex flex-col items-center">
                                    <p className="font-medium">{type}</p>
                                    <p className="font-bold">${15 - idx * 3}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Save Button */}
                    <SaveButton product={data} width={"w-2/3 md:w-full lg:w-1/2 py-3"} isHeart={true} />

                    <p className="text-sm text-gray-600">
                        Items are covered under{" "}
                        <a
                            href="#"
                            className="text-[#DC143C] font-semibold underline"
                        >
                            Rheem Cooling Promise
                        </a>
                    </p>
                </div>
            )}

            <hr className="my-6 border-gray-200" />

            {/* Protection Plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <h2 className="col-span-1 md:col-span-2 lg:col-span-3 font-bold text-lg mb-2">
                    Standard Geek Squad Protection
                </h2>

                {[
                    { label: "No Plan", price: null },
                    { label: "2-Year", price: "$24.99", desc: "About $1.04/mo" },
                    { label: "4-Year", price: "$49.99", desc: "About $1.04/mo" },
                ].map((plan, index) => (
                    <div
                        key={index}
                        className="py-4 border border-gray-300 rounded-lg flex flex-col justify-center items-center hover:shadow hover:border-[#DC143C] transition bg-gray-50"
                    >
                        <p className="font-bold">{plan.label}</p>
                        {plan.price && (
                            <>
                                <p className="font-bold">{plan.price}</p>
                                <p className="text-xs text-gray-600">{plan.desc}</p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Description;
