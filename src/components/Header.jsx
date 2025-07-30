import logo from "../images/header/logo.png";
import headbanner from "../images/header/headbanner.jpg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header border-y border-gray-200 shadow-sm">
            <div>
                <img src={headbanner} alt="Banner Logo" />
            </div>
            <div className="container mx-auto">
                <header className="bg-white">
                    <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4  lg:px-8 grid grid-cols-8 gap-10">

                        {/* Logo bên trái */}
                        <div className="flex items-center gap-x-4 col-span-2">
                            <Link to="/" className="block w-[300px] h-[100px] overflow-hidden">
                                <img src={logo} alt="Logo" className="w-full h-full object-cover object-center" />
                            </Link>

                            {/* Thanh tìm kiếm bên phải logo */}

                        </div>
                        <div className="hidden col-span-2 lg:block ">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-xl  focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        {/* Menu chính giữa */}
                        <div className="hidden col-span-4 lg:flex gap-x-10 ">
                            <div className="relative group">
                                <button className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
                                    Product
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-400">
                                        <path d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" />
                                    </svg>
                                </button>

                                <div className="absolute left-0 top-full mt-2 w-72 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                                    <div className="p-4 space-y-4">
                                        <Link to="/topsellingAC" className="block">
                                            <span className="text-sm text-gray-900 font-medium">Top Selling AC</span>
                                            <p className="text-xs text-gray-500">Best-sellers with highest ratings</p>
                                        </Link>
                                        <Link to="/windowAC" className="block">
                                            <span className="text-sm text-gray-900 font-medium">Window AC</span>
                                            <p className="text-xs text-gray-500">Compact cooling for small spaces</p>
                                        </Link>
                                        <Link to="/splitAC" className="block">
                                            <span className="text-sm text-gray-900 font-medium">Split AC</span>
                                            <p className="text-xs text-gray-500">Efficient cooling with quiet operation</p>
                                        </Link>
                                        <Link to="/cassetteAC" className="block">
                                            <span className="text-sm text-gray-900 font-medium">Cassette AC</span>
                                            <p className="text-xs text-gray-500">Ideal for large commercial areas</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Link to="/aboutus" className="text-sm font-semibold text-gray-900">About Us</Link>
                            <Link to="/contact" className="text-sm font-semibold text-gray-900">Contact</Link>
                            <Link to="/customersupport" className="text-sm font-semibold text-gray-900">Customer Support</Link>
                        </div>
                    </nav>
                </header>
            </div>
            {/* key-search */}
            <div className="h-12 bg-[#DC143C]">
                <div className="container mx-auto h-full flex items-center ps-30 ">
                    <ul className="flex space-x-4  justify-between	">
                        <li>
                            <a href="#" className="text-sm text-white hover:underline font-semibold">air conditioner</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-white hover:underline font-semibold">AC unit</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-white hover:underline font-semibold">buy air conditioner</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-white hover:underline font-semibold">window AC</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-white hover:underline font-semibold">portable air conditioner</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-white hover:underline font-semibold">cheap air conditioner</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-white hover:underline font-semibold">smart AC</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Header;
