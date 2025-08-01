import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import CompanyInfo from "../../components/aboutus/CompanyInfo";
import Mission from "../../components/aboutus/Mission";
import Partners from "../../components/aboutus/Partners";

function AboutUs() {
    useEffect(() => {
        AOS.init({
            duration: 800,      // tốc độ animation
            once: true,         // chỉ chạy 1 lần khi scroll tới
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className="aboutus">
            {/* Company Info */}
            <div
                data-aos="zoom-in"
                className="bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"
            >
                <CompanyInfo />
            </div>

            {/* Mission */}
            <div
                data-aos="fade-right"
                className="bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"
            >
                <Mission />
            </div>

            {/* Partners */}
            <div data-aos="fade-left" className="bg-white">
                <Partners />
            </div>
        </div>
    );
}

export default AboutUs;
