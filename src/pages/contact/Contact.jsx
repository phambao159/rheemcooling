import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Branches from "../../components/contact/Branches.jsx";
import ContactForm from "../../components/contact/ContactForm.jsx";
import SocialMedia from "../../components/contact/SocialMedia.jsx";

function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <div className="border rounded-2xl border-gray-200 my-10">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Left Side: Social + Branches */}
                    <div className="md:col-span-6 space-y-8 p-5 border-gray-200">
                        <div data-aos="fade-right">
                            <SocialMedia />
                        </div>
                        <hr className="border-gray-200" />
                        <div data-aos="fade-right" data-aos-delay="200">
                            <Branches />
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div
                        className="md:col-span-6 px-5 py-0 my-5 bg-white rounded-2xl"
                        data-aos="fade-left"
                    >
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
