import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HeartIcon } from "@heroicons/react/20/solid";
import "../css/style.css";

function SaveButton({ product, width, isHeart = false }) {
    const [isSaved, setIsSaved] = useState(false);
    const [toast, setToast] = useState({ show: false, message: "" });

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("saved_product")) || [];
        const existed = saved.find(s => s.ac_id === product.ac_id);
        setIsSaved(!!existed);
    }, [product]);

    const showToast = (message) => {
        setToast({ show: true, message });
        setTimeout(() => {
            setToast({ show: false, message: "" });
        }, 3000);
    };

    const handleSave = () => {
        const saved = JSON.parse(localStorage.getItem("saved_product")) || [];
        const existed = saved.find(s => s.ac_id === product.ac_id);

        if (existed) {
            const updated = saved.filter(s => s.ac_id !== product.ac_id);
            localStorage.setItem("saved_product", JSON.stringify(updated));
            setIsSaved(false);
            showToast("Removed from Saved successfully");
        } else {
            const updated = [...saved, product];
            localStorage.setItem("saved_product", JSON.stringify(updated));
            setIsSaved(true);
            showToast("Saved successfully");
        }
    };

    return (
        <>
            {isSaved ? (
                <button
                    className={`${width} bg-gray-50 hover:bg-[#DC143C] hover:text-white transition font-bold px-8 rounded-lg text-[#DC143C] border-2 border-[#DC143C] flex items-center justify-center mb-4 hover:cursor-pointer whitespace-nowrap`}
                    onClick={handleSave}
                >
                    Remove Saved
                </button>
            ) : (
                <button
                    className={`${width} bg-[#DC143C] hover:bg-red-700 transition font-bold px-8 rounded-lg text-white flex items-center border-2 border-[#DC143C] justify-center mb-4 hover:cursor-pointer whitespace-nowrap`}
                    onClick={handleSave}
                >
                    {isHeart ? <HeartIcon className="mx-1 w-5 h-5 text-white" /> : ""}
                    Save Product
                </button>
            )}

            {toast.show &&
                createPortal(
                    <div className="fixed bottom-5 left-1/2 bg-black text-white px-6 py-4 text-sm font-bold rounded-lg z-50 popup-slide-up">
                        {toast.message}
                    </div>,
                    document.body
                )}
        </>
    );
}

export default SaveButton;
