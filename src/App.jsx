import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./data/product.json";

import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home db={Product} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
