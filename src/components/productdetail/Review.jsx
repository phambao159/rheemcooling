import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarSolid } from "@heroicons/react/20/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import anony from "../../images/product_details/anonymous.jpg";
import { useState } from "react";




function Review() {

    const review = [
        {
            review_id: "RW_001",
            reviewer_name: "Emily Tran",
            product_id: "Brand_AC001",
            review_title: "Powerful and Quiet",
            image: "https://thispersondoesnotexist.com/",
            comment: "This air conditioner cools my room in minutes and runs almost silently. Worth every penny!",
            rating: 5,
            review_date: "2025-07-20",
            likes: 24,
            anonymized: false
        },
        {
            review_id: "RW_002",
            reviewer_name: "Jacob Nguyen",
            product_id: "Brand_AC001",
            review_title: "Great for Small Rooms",
            image: "https://thispersondoesnotexist.com/",
            comment: "Perfect for my small bedroom. Cools fast and energy efficient.",
            rating: 4,
            review_date: "2025-07-22",
            likes: 15,
            anonymized: false
        },
        {
            review_id: "RW_003",
            reviewer_name: "Anonymous",
            product_id: "Brand_AC001",
            review_title: "Decent but Noisy",
            image: "https://example.com/reviews/anon-ac.jpg",
            comment: "It does the job but gets a bit noisy at night.",
            rating: 3,
            review_date: "2025-07-25",
            likes: 8,
            anonymized: true
        },
        {
            review_id: "RW_004",
            reviewer_name: "Linh Pham",
            product_id: "Brand_AC001",
            review_title: "Easy to Install",
            image: "https://thispersondoesnotexist.com/",
            comment: "Installation was quick and easy. Been running smoothly for a week now.",
            rating: 4,
            review_date: "2025-07-26",
            likes: 12,
            anonymized: false
        },
        {
            review_id: "RW_005",
            reviewer_name: "Anonymous",
            product_id: "Brand_AC001",
            review_title: "Love the Design",
            image: "https://thispersondoesnotexist.com/",
            comment: "Looks sleek and modern. Matches my room perfectly. Works well too.",
            rating: 5,
            review_date: "2025-07-28",
            likes: 19,
            anonymized: true
        }, {
            review_id: "RW_006",
            reviewer_name: "Thanh Le",
            product_id: "Brand_AC001",
            review_title: "Fast Cooling",
            image: "https://thispersondoesnotexist.com/",
            comment: "Within 5 minutes, my room feels like winter. Very satisfied.",
            rating: 5,
            review_date: "2025-07-29",
            likes: 21,
            anonymized: false
        },
        {
            review_id: "RW_007",
            reviewer_name: "Anonymous",
            product_id: "Brand_AC001",
            review_title: "Installation was a hassle",
            image: "https://example.com/reviews/anon-install.jpg",
            comment: "Took longer than expected to install. But works fine now.",
            rating: 3,
            review_date: "2025-07-29",
            likes: 5,
            anonymized: true
        },
        {
            review_id: "RW_008",
            reviewer_name: "David Phan",
            product_id: "Brand_AC001",
            review_title: "Great features",
            image: "https://thispersondoesnotexist.com/",
            comment: "Remote control and timer functions are very convenient.",
            rating: 4,
            review_date: "2025-07-30",
            likes: 17,
            anonymized: false
        },
        {
            review_id: "RW_009",
            reviewer_name: "Mai Nguyen",
            product_id: "Brand_AC001",
            review_title: "Energy Efficient",
            image: "https://thispersondoesnotexist.com/",
            comment: "Lower electricity bills since I switched. Impressive!",
            rating: 5,
            review_date: "2025-07-30",
            likes: 23,
            anonymized: false
        },
        {
            review_id: "RW_010",
            reviewer_name: "Anonymous",
            product_id: "Brand_AC001",
            review_title: "Bit bulky",
            image: "https://example.com/reviews/anon-bulky.jpg",
            comment: "Performs well but takes up a lot of space.",
            rating: 3,
            review_date: "2025-07-31",
            likes: 6,
            anonymized: true
        },
        {
            review_id: "RW_011",
            reviewer_name: "Minh Chau",
            product_id: "Brand_AC001",
            review_title: "Quiet mode is amazing",
            image: "https://thispersondoesnotexist.com/",
            comment: "I can finally sleep without noise disturbance. Highly recommend.",
            rating: 5,
            review_date: "2025-07-31",
            likes: 20,
            anonymized: false
        },
        {
            review_id: "RW_012",
            reviewer_name: "Anonymous",
            product_id: "Brand_AC001",
            review_title: "Could be better",
            image: "https://example.com/reviews/anon-average.jpg",
            comment: "It's okay but not as strong as expected for large rooms.",
            rating: 2,
            review_date: "2025-08-01",
            likes: 4,
            anonymized: true
        },
        {
            review_id: "RW_013",
            reviewer_name: "Tuan Hoang",
            product_id: "Brand_AC001",
            review_title: "Solid build quality",
            image: "https://thispersondoesnotexist.com/",
            comment: "Feels premium and durable. Worth the investment.",
            rating: 4,
            review_date: "2025-08-01",
            likes: 11,
            anonymized: false
        },
        {
            review_id: "RW_014",
            reviewer_name: "Hanh Vo",
            product_id: "Brand_AC001",
            review_title: "Auto clean function is a plus",
            image: "https://thispersondoesnotexist.com/",
            comment: "Saves me time on maintenance. Very smart feature.",
            rating: 5,
            review_date: "2025-08-01",
            likes: 16,
            anonymized: false
        },
        {
            review_id: "RW_015",
            reviewer_name: "Anonymous",
            product_id: "Brand_AC001",
            review_title: "Remote was missing",
            image: "https://example.com/reviews/anon-remote.jpg",
            comment: "Had to contact support to get the remote. Frustrating.",
            rating: 1,
            review_date: "2025-08-02",
            likes: 2,
            anonymized: true
        }
    ];
    const [showAll, setShowAll] = useState(false);
    const visibleReviews = showAll ? review : review.slice(0, 5);
    const ratings = [5, 4, 3, 2, 1];
    const ratingCounts = ratings.map(r => review.filter(re => re.rating === r).length);
    const totalReviews = review.length;
    const averageRating = (review.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1);

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

            <div className="space-y-6 col-span-3 md:col-span-2">
                {visibleReviews.map((re) => (
                    <div key={re.review_id} className="bg-white shadow-sm p-4 rounded-md border border-gray-200 hover:shadow-md transition">
                        <div className="flex items-center gap-4 mb-2">
                            <img
                                src={re.anonymized ? anony : re.image}
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
                {review.length > 5 && (
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
