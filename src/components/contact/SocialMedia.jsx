import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function SocialMedia() {
    return (
        <div className="socialmedia py-10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-center">
                <div className="col-span-3 lg:col-span-2">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Connect with us</h2>
                    <p className="text-gray-600 mt-2 mb-5">
                        Follow us for the latest promotions, product tips, and customer support. We’re always here to help!
                    </p>
                    <div className="mt-4 space-y-2">
                        <a href="https://www.facebook.com/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 text-base" target="_blank">
                            <FaFacebookF />
                            <span>(Support + Sell)</span>
                        </a>
                        <a href="https://www.instagram.com/" className="flex items-center gap-2 text-gray-600 hover:text-pink-500 text-base" target="_blank">
                            <FaInstagram />
                            <span>(Image gallery + feedback)</span>
                        </a>
                        <a href="https://www.x.com/" className="flex items-center gap-2 text-gray-600 hover:text-sky-500 text-base" target="_blank">
                            <FaTwitter />
                            <span>(News)</span>
                        </a>
                        <a href="https://www.youtube.com/" className="flex items-center gap-2 text-gray-600 hover:text-red-500 text-base" target="_blank">
                            <FaYoutube />
                            <span>(Video review + tutorial)</span>
                        </a>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default SocialMedia;
