import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarSolid } from "@heroicons/react/20/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { useState } from "react";




function Review({ data }) {

    const [showAll, setShowAll] = useState(false);
    const visibleReviews = showAll ? data : data.slice(0, 5);
    const ratings = [5, 4, 3, 2, 1];
    const ratingCounts = ratings.map(r => data.filter(re => re.rating === r).length);
    const totalReviews = data.length;
    const averageRating = (data.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1);

    return (
        <div className="review px-4 md:px-0 my-10 grid grid-cols-3 gap-5">
            <h2 className="font-bold text-2xl mb-6 col-span-4 pb-4 border-b border-gray-200">Review / Rating</h2>
            <div className="flex flex-col md:flex-row gap-8 col-span-3 md:col-span-1 mb-3 md:mb-0">
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-2">
                        <StarSolid className="w-6 h-6 text-yellow-400" />
                        <p className="text-4xl font-bold">{averageRating}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{totalReviews} reviews</p>
                    <p className="text-sm text-gray-800 font-semibold mt-4">
                        ✓ 100% would recommend to a friend
                    </p>
                </div>

                <div className="w-full md:w-2/3 space-y-2">
                    {ratings.map((r, i) => (
                        <div key={r} className="flex items-center gap-2">
                            <p className="w-4 text-sm">{r}</p>
                            <StarSolid className="w-4 h-4 text-yellow-400" />
                            <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-[#DC143C]"
                                    style={{ width: `${(ratingCounts[i] / totalReviews) * 100}%` }}
                                ></div>
                            </div>
                            <p className="w-4 text-sm text-gray-700">{ratingCounts[i]}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-6 col-span-3 md:col-span-2 ">
                {visibleReviews.map((re) => (
                    <div key={re.review_id} className="bg-white shadow-sm p-4 rounded-md border border-gray-200 hover:shadow-md transition">
                        <div className="flex items-center gap-4 mb-2">
                            <img
                                src={re.anonymized ? `${process.env.PUBLIC_URL}/images/anonymous.jpg` : re.image}
                                alt="Reviewer"
                                className="w-12 h-12 rounded-full object-cover border"
                            />
                            <div>
                                <p className="font-medium">
                                    {re.anonymized ? "Anonymous" : re.reviewer_name}
                                </p>
                                <p className="text-xs text-gray-500">{re.review_date}</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <p className="text-base text-[#DC143C] font-semibold">{re.review_title}</p>
                            <div className="flex items-center gap-1 mt-1">
                                {[...Array(re.rating)].map((_, i) => (
                                    <StarSolid key={i} className="w-4 h-4 text-yellow-500" />
                                ))}
                                {[...Array(5 - re.rating)].map((_, i) => (
                                    <StarOutline key={i} className="w-4 h-4 text-gray-300" />
                                ))}
                            </div>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">{re.comment}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                                <HandThumbUpIcon className="w-5 h-5 text-gray-500" />
                                <span>{re.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <HandThumbDownIcon className="w-5 h-5 text-gray-400" />
                            </div>
                        </div>


                    </div>
                ))}
                {data.length > 5 && (
                    <div className="text-center mt-4">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-[#DC143C] font-medium hover:underline hover:cursor-pointer"
                        >
                            {showAll ? "Compact reviews" : "View more reviews"}
                        </button>
                    </div>
                )}

            </div>
        </div >
    );
}

export default Review;
