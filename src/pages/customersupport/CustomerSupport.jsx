import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Faqs from "../../components/customersupport/Faqs";

function CustomerSupport() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <div className="customersupport px-4 py-10 max-w-7xl mx-auto">
            <div data-aos="fade-up">
                <Faqs />
            </div>
        </div>
    );
}

export default CustomerSupport;
