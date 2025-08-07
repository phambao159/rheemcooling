import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import CustomerSupport from "./pages/customersupport/CustomerSupport";
import AboutUs from "./pages/aboutus/AboutUs";

import Products from "./data/product.json";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";

function App() {
  return (
    <>
      <Header />
      <div className="bg-gray-50">
        <div className="container mx-auto gap-4 px-4">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route
              path="/customersupport"
              element={<CustomerSupport />}
            ></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/topsellingAC" element={<Product />}></Route>
            <Route path="/windowAC" element={<div>Window AC</div>}></Route>
            <Route path="/splitAC" element={<div>Split AC</div>}></Route>
            <Route path="/cassetteAC" element={<div>Cassette AC</div>}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
