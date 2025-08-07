import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import faqs from "../../data/faqs.json";

function Faqs() {
    const categories = ["Product & Features", "Service & Warranty", "Usage & Buying Tips"];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const filteredFaqs = faqs.filter((faq) => faq.category === selectedCategory);

    return (
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 max-w-3xl mx-auto my-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
            <p className="text-center text-gray-800 mb-6">
                Have a different question and can’t find the answer you’re looking for? Reach out to our support team{" "}
                <Link to="/contact" className="text-[#DC143C] font-medium underline">
                    by sending us an email
                </Link>{" "}
                and we’ll get back to you as soon as we can.
            </p>

            {/* Category Tabs */}
            <div className="flex justify-center gap-4 mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            setSelectedCategory(category);
                            setActiveIndex(null); // Reset accordion
                        }}
                        className={`px-4 py-2 rounded-full border text-sm font-medium transition ${selectedCategory === category
                                ? "bg-[#DC143C] text-white border-[#DC143C]"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-700 hover:bg-gray-50 transition"
                        >
                            <span>{faq.question}</span>
                            <ChevronDown
                                className={`w-5 h-5 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        <div
                            ref={(el) => (contentRefs.current[index] = el)}
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                            style={{
                                maxHeight: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0px"
                            }}
                        >
                            <div className="p-4 text-sm text-gray-600">{faq.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faqs;
