import { useEffect, useRef, useState } from "react";

function VisitorCount() {
    const [count, setCount] = useState(0);
    const hasUpdated = useRef(false); // thêm cờ kiểm tra

    useEffect(() => {
        if (hasUpdated.current) return; // nếu đã tăng thì không tăng nữa
        hasUpdated.current = true;

        const savedCount = parseInt(localStorage.getItem("visitorCount") || "0");
        const newCount = savedCount + 1;
        localStorage.setItem("visitorCount", newCount.toString());
        setCount(newCount);
    }, []);

    return (
        <div className="visitorcount">
            <div className="hidden md:block fixed top-0 right-4 bg-white border border-gray-300 rounded-md shadow-lg text-sm p-2 text-gray-700 z-50">
                <p>Visitor Count: <span className="text-[#DC143C]">{count}</span></p>
            </div>
        </div>
    );
}

export default VisitorCount;
