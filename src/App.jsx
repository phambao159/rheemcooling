
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import Contact from './pages/contact/Contact';
import CustomerSupport from './pages/customersupport/CustomerSupport';
import AboutUs from './pages/aboutus/AboutUs';
import YourLocation from './components/YourLocation';
import VisitorCount from './components/VisitorCount';
import ProductDetail from './pages/productdetail/ProductDetail';
import product from "../src/data/product.json";
import review from "../src/data/review.json";
import RecentView from './components/RecentView';
import SavedProduct from './pages/savedproduct/SavedProduct';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <VisitorCount />

      <div className="container mx-auto px-4">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<RecentView />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
          <Route path="/customersupport" element={<CustomerSupport />} ></Route>
          <Route path="/aboutus" element={<AboutUs />} ></Route>
          <Route path="/topsellingAC" element={<div>Top Selling AC</div>} ></Route>
          <Route path="/windowAC" element={<div>Window AC</div>} ></Route>
          <Route path="/splitAC" element={<div>Split AC</div>} ></Route>
          <Route path="/cassetteAC" element={<div>Cassette AC</div>} ></Route>
          <Route path="/savedproduct" element={<SavedProduct review={review} />} ></Route>
          <Route path="/product/:id" element={<ProductDetail product={product} review={review} />} ></Route>
        </Routes>

      </div>
      <YourLocation />
      <Footer />

    </div>
  );

}

export default App;
