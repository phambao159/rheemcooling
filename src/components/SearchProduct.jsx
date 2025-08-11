//components/SearchProduct.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchProduct() {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && keyword.trim()) {
            navigate(`/search?query=${encodeURIComponent(keyword.trim())}`);
        }
    };

    return (
        <div className="searchproduct">
            <div className=" w-full md:w-[200px] ms-0 md:ms-5">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={handleKeyDown}
                    required
                />
            </div>
        </div>
    );
}

export default SearchProduct;
