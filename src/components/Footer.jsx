import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../images/header/logo.png";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="footer bg-gray-100">
            <div className="container mx-auto">
                <footer className=" text-gray-700 pt-10">
                    {/* Main content */}
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-9 lg:grid-cols-8 gap-8 pb-10 border-b border-gray-300">
                        {/* Column 1: Logo + Description */}
                        <div className="flex flex-col items-center col-span-8 md:col-span-3 lg:col-span-2">
                            <Link to="/rheemcooling" className="block w-[300px] h-[100px] overflow-hidden">
                                <img src={logo} alt="Logo" className="w-full h-full object-cover object-center" />
                            </Link>
                            <p className="text-sm text-center">
                                We provide genuine air conditioning products with competitive prices and dedicated customer service.
                            </p>
                        </div>


                        {/* Column 2: Menus */}
                        <div className="col-span-8 md:col-span-3 px-4 md:px-1 lg:px-0 lg:col-span-4 grid grid-cols-4 lg:grid-cols-3 gap-4 md:border-e border-b md:border-b-0 pb-3 md:pb-0 border-gray-300">
                            <div className="mb-3 col-span-4 md:col-span-4 lg:col-span-1">
                                <h4 className="font-semibold text-gray-900 mb-3">About Us</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link to="/rheemcooling/aboutus" className="hover:text-blue-600">Company Information</Link></li>
                                    <li><Link href="/rheemcooling/aboutus" className="hover:text-blue-600">Vision - Mission - Core Values</Link></li>
                                    <li><Link href="/rheemcooling/aboutus" className="hover:text-blue-600">Partners</Link></li>
                                </ul>
                            </div>
                            <div className="mb-3 col-span-4 md:col-span-4 lg:col-span-1">
                                <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link to="/rheemcooling/topsellingAC" className="hover:text-blue-600">Selling AC</Link></li>
                                    <li><Link to="/rheemcooling/windowAC" className="hover:text-blue-600">Window AC</Link></li>
                                    <li><Link to="/rheemcooling/splitAC" className="hover:text-blue-600">Split AC</Link></li>
                                    <li><Link to="/rheemcooling/cassetteAC" className="hover:text-blue-600">Cassette AC</Link></li>
                                </ul>
                            </div>
                            <div className="mb-3 col-span-4 md:col-span-4 lg:col-span-1">
                                <h4 className="font-semibold text-gray-900 mb-3">Customer Support</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link to="/rheemcooling/customersupport" className="hover:text-blue-600">FAQs</Link></li>
                                    <li><Link to="/rheemcooling/customersupport" className="hover:text-blue-600">Sitemap</Link></li>
                                </ul>
                            </div>


                            <div className="mb-3 col-span-4 md:col-span-4 lg:col-span-1">
                                <h4 className="font-semibold text-gray-900 mb-3">Hotline</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <p>
                                            Call to buy: <a href="tel:1900232461" className="text-[#DC143C]">1900 232 461</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Complaint: <a href="tel:18001063" className="text-[#DC143C]">1800 1063</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Warranty: <a href="tel:1900232465" className="text-[#DC143C]">1900 232 465</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        {/* Column 3: Contact */}
                        <div className="col-span-8 md:col-span-3 lg:col-span-2 ps-3">
                            <div className="mb-4">
                                <h4 className="font-semibold text-gray-900 mb-3">Connect with Us</h4>
                                <div className="flex space-x-4 mt-2">
                                    <a href="https://www.facebook.com/" className="text-gray-600 hover:text-blue-600 text-xl" target="_blank"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/" className="text-gray-600 hover:text-pink-500 text-xl" target="_blank"><FaInstagram /></a>
                                    <a href="https://www.twitter.com/" className="text-gray-600 hover :text-sky-500 text-xl" target="_blank"><FaTwitter /></a>
                                    <a href="https://www.youtube.com/" className="text-gray-600 hover:text-red-500 text-xl" target="_blank"><FaYoutube /></a>
                                </div>
                                <p className="text-sm mt-4">Email: support@rheemcooling.com</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Subscribe to our newsletter</h4>
                                <p className="text-gray-400 text-sm mb-4">
                                    Get the latest updates and exclusive offers.
                                </p>
                                <form className="flex  sm:flex-row gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-1 text-sm border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                    <button className=" w-40 bg-[#DC143C] hover:bg-[#c01236] text-white px-4 py-2 rounded-md transition">
                                        Sign Up
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>


                    {/* Copyright */}
                    <div className="text-center text-sm text-gray-500 py-4">
                        © {new Date().getFullYear()} Rheem Cooling Company. All rights reserved.
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
