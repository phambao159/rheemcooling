import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-red-500 px-6 py-5">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-300">RHEEM COOLING</div>
        <nav>
          <ul className="flex justify-between">
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/products">Sản phẩm</Link>
            </li>
            <li className="px-4">
              <Link to="/about-us">Về chúng tôi</Link>
            </li>
          </ul>
        </nav>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="px-3 py-1 rounded border border-gray-300"
        />
      </div>
    </header>
  );
}
