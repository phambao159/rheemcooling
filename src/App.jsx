import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import CustomerSupport from "./pages/customersupport/CustomerSupport";
import AboutUs from "./pages/aboutus/AboutUs";
import YourLocation from "./components/YourLocation";
import VisitorCount from "./components/VisitorCount";
import ProductDetail from "./pages/productdetail/ProductDetail";
import product from "../src/data/product.json";
import review from "../src/data/review.json";
import SavedProduct from "./pages/savedproduct/SavedProduct";
import ScrollToTop from "./components/ScrollToTop";
import SearchPage from "./pages/SearchPage";

import Home from "./pages/home/Home";
import Product from "./pages/product/Product";

function App() {
  return (
    <>
      <Header />
      <VisitorCount />

      <div className="app">
        <div className="container mx-auto px-4">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route
              path="/customersupport"
              element={<CustomerSupport />}
            ></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/topsellingAC" element={<Product />}></Route>
            <Route path="/windowAC" element={<div>Window AC</div>}></Route>
            <Route path="/splitAC" element={<div>Split AC</div>}></Route>
            <Route path="/cassetteAC" element={<div>Cassette AC</div>}></Route>
            <Route
              path="/savedproduct"
              element={<SavedProduct review={review} />}
            ></Route>
            <Route
              path="/product/:id"
              element={<ProductDetail product={product} review={review} />}
            ></Route>
          </Routes>
        </div>
      </div>


      <df-messenger
        chat-icon="https://png.pngtree.com/png-vector/20230225/ourmid/pngtree-smart-chatbot-cartoon-clipart-png-image_6620453.png"
        intent="WELCOME"
        chat-title="AI_RheemCooling"
        agent-id="2a60cb34-4f0f-4760-9520-c2a91ac713fb"
        language-code="en"
      ></df-messenger>


      <YourLocation />
      <Footer />
    </>
  );
}

export default App;
