// src/App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStatement from "./components/BrandStatement";
import FeaturedDrop from "./components/FeaturedDrop";
import Collections from "./components/Collections";
import ShopByCategory from "./components/ShopByCategory";
import Lookbook from "./components/Lookbook";
import ProductDetailPage from "./components/ProductDetailPage";
import ShopPage from "./components/ShopPage";
import CartPage from "./components/CartPage";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import { COLORS } from "./styles/tokens";

// Home Page Component
function HomePage() {
  return (
    <>
      <Hero videoSrc="/videos/hero.mp4" />
      <BrandStatement />
      <FeaturedDrop />
      <Collections />
      <Lookbook />
      <Newsletter />
    </>
  );
}

export default function App() {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ background: COLORS.ink, minHeight: "100vh" }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/lookbook" element={<Lookbook />} />
      </Routes>

      <CartDrawer />
      <Footer />
    </div>
  );
}