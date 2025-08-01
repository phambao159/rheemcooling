import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
    {
        question: "Are Rheem air conditioners energy-efficient?",
        answer: "Yes, Rheem units feature inverter technology to maximize energy savings."
    },
    {
        question: "What AC capacity is suitable for a 20m² room?",
        answer: "For a 20m² room, you should consider a unit with 1.0 to 1.5 HP capacity."
    },
    {
        question: "How long is the warranty period?",
        answer: "Our products come with a manufacturer warranty ranging from 2 to 5 years depending on the model."
    },
    {
        question: "Do you offer installation services?",
        answer: "Yes, we provide nationwide professional installation services."
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept credit/debit cards, e-wallets, and cash on delivery (COD)."
    },
    {
        question: "Do the air conditioners have air purification features?",
        answer: "Some models include antibacterial filters and PM2.5 air purification systems."
    },
    {
        question: "How often should I service my AC?",
        answer: "We recommend servicing every 3 to 6 months to maintain peak performance."
    },
    {
        question: "Can I return or exchange a product?",
        answer: "Yes, you can return or exchange within 7 days for products with manufacturer defects."
    },
    {
        question: "How do I know if a product is in stock?",
        answer: "Each product page shows availability status, such as 'In Stock' or 'Out of Stock'."
    },
    {
        question: "Can I place an order via phone?",
        answer: "Absolutely. Feel free to call our hotline for quick phone orders and support."
    }
];

function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 max-w-3xl mx-auto my-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
            <p className="text-center text-gray-800 mb-6">
                Have a different question and can’t find the answer you’re looking for? Reach out to our support team <Link to="/contact" className="text-[#DC143C] font-medium underline">by sending us an email</Link> and we’ll get back to you as soon as we can.
            </p>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-700 hover:bg-gray-50 transition"
                        >
                            <span>{faq.question}</span>
                            <ChevronDown
                                className={`w-5 h-5 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
                            />
                        </button>
                        <div
                            ref={(el) => (contentRefs.current[index] = el)}
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                            style={{
                                maxHeight: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0px"
                            }}
                        >
                            <div className="p-4 text-sm text-gray-600">
                                {faq.answer}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faqs;
