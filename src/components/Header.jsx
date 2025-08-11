import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../images/header/logo.png";
import headbanner from "../images/header/headbanner.png";
import SearchProduct from "./SearchProduct";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header border-y border-gray-200 shadow-sm">
      <div>
        <img src={headbanner} alt="Banner Logo" />
      </div>

      <div className="container mx-auto">
        <header className="bg-white">
          <nav className="relative mx-auto flex items-center justify-between px-4 lg:px-8 py-3">
            {/* Logo */}
            <Link
              to="/"
              className="block w-[250px] lg:w-[300px] h-[80px] lg:h-[50px] overflow-hidden"
            >
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-cover object-center"
              />
            </Link>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Search (ẩn trên sm) */}
            <SearchProduct />

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-x-10">
              <div className="relative group">
                <button className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
                  Product
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" />
                  </svg>
                </button>
                <div className="absolute left-0 top-full  w-72 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                  <div className="p-4 space-y-4">
                    <Link to="/topsellingAC" className="block">
                      <span className="text-sm text-gray-900 font-medium">
                        Top Selling AC
                      </span>
                      <p className="text-xs text-gray-500">
                        Best-sellers with highest ratings
                      </p>
                    </Link>
                    <Link to="/windowAC" className="block">
                      <span className="text-sm text-gray-900 font-medium">
                        Window AC
                      </span>
                      <p className="text-xs text-gray-500">
                        Compact cooling for small spaces
                      </p>
                    </Link>
                    <Link to="/splitAC" className="block">
                      <span className="text-sm text-gray-900 font-medium">
                        Split AC
                      </span>
                      <p className="text-xs text-gray-500">
                        Efficient cooling with quiet operation
                      </p>
                    </Link>
                    <Link to="/cassetteAC" className="block">
                      <span className="text-sm text-gray-900 font-medium">
                        Cassette AC
                      </span>
                      <p className="text-xs text-gray-500">
                        Ideal for large commercial areas
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/aboutus"
                className="text-sm font-semibold text-gray-900"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-sm font-semibold text-gray-900"
              >
                Contact
              </Link>
              <Link
                to="/customersupport"
                className="text-sm font-semibold text-gray-900"
              >
                Customer Support
              </Link>
              <Link
                to="/savedproduct"
                className="text-sm font-semibold text-white bg-[#DC143C] rounded-lg px-3 py-2"
              >
                Saved Product
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Content */}
          {isOpen && (
            <div className="lg:hidden px-4 py-4 space-y-3 bg-gray-50 border-t">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Link
                to="/topsellingAC"
                className="block text-sm font-medium text-gray-700"
              >
                Top Selling AC
              </Link>
              <Link
                to="/windowAC"
                className="block text-sm font-medium text-gray-700"
              >
                Window AC
              </Link>
              <Link
                to="/splitAC"
                className="block text-sm font-medium text-gray-700"
              >
                Split AC
              </Link>
              <Link
                to="/cassetteAC"
                className="block text-sm font-medium text-gray-700"
              >
                Cassette AC
              </Link>
              <Link
                to="/aboutus"
                className="block text-sm font-medium text-gray-700"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block text-sm font-medium text-gray-700"
              >
                Contact
              </Link>
              <Link
                to="/customersupport"
                className="block text-sm font-medium text-gray-700 pb-4"
              >
                Customer Support
              </Link>
              <Link
                to="/savedproduct"
                className="text-sm font-semibold text-white bg-[#DC143C] rounded px-3 py-2 "
              >
                Saved Product
              </Link>
            </div>
          )}
        </header>
      </div>

      {/* Key search */}
      <div className="hidden lg:block h-12 bg-[#DC143C]">
        <div className="flex container mx-auto h-full items-center ps-30">
          <ul className="flex space-x-4 justify-between">
            <li>
              <Link
                to="/"
                className="text-sm text-white hover:underline font-semibold"
              >
                hot deals
              </Link>
            </li>
            <li>
              <Link
                to="/windowAC"
                className="text-sm text-white hover:underline font-semibold"
              >
                window AC
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-sm text-white hover:underline font-semibold"
              >
                super sale
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="text-sm text-white hover:underline font-semibold"
              >
                air conditioner
              </Link>
            </li>
            <li>
              <Link
                to="/topsellingAC"
                className="text-sm text-white hover:underline font-semibold"
              >
                hot selling
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
