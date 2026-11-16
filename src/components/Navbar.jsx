import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { COLORS, FONTS } from "../styles/tokens";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const { cartCount, toggleCart } = useCart();
  const { products } = useProducts();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setSearchQuery("");
    setShowResults(false);
  }, [location.pathname]);

  // Search products
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const results = products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.id.includes(searchQuery)
      ).slice(0, 5);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery, products]);

  const solid = scrolled || menuOpen || searchOpen;
  
  const navLinkStyle = {
    fontFamily: FONTS.mono,
    fontSize: "11px",
    color: COLORS.bone,
    letterSpacing: "0.08em",
    cursor: "pointer",
    transition: "opacity 0.2s ease",
    textDecoration: "none",
  };

  const iconStyle = {
    cursor: "pointer",
    transition: "opacity 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery("");
      setShowResults(false);
    }
  };

  const handleSearchResultClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearchOpen(false);
    setSearchQuery("");
    setShowResults(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: solid ? COLORS.ink : "transparent",
        borderBottom: solid ? `1px solid ${COLORS.line}` : "1px solid transparent",
        transition: "background 250ms ease, border-color 250ms ease",
      }}
    >
      {/* Desktop Navigation */}
      <div
        className="nav-desktop"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 40px",
          gap: "20px",
        }}
      >
        {/* Left: Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flex: "0 0 auto",
            cursor: "pointer",
          }}
        >
          <img
            src="/images/logo.png"
            alt="508 Archives"
            style={{
              height: "40px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Center: Navigation Links */}
        <div style={{ display: "flex", gap: "32px", alignItems: "center", flex: 1, justifyContent: "center" }}>
          <Link to="/shop" style={navLinkStyle}>SHOP</Link>
          <Link to="/collections" style={navLinkStyle}>COLLECTIONS</Link>
          <Link to="/lookbook" style={navLinkStyle}>LOOKBOOK</Link>
        </div>

        {/* Right: Icons */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center", flex: "0 0 auto", justifyContent: "flex-end" }}>
          {/* Search Icon */}
          <span 
            style={iconStyle}
            onClick={() => setSearchOpen(!searchOpen)}
            title="Search"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.bone} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>

          {/* Account Icon */}
          <Link to="/account" style={iconStyle} title="Account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.bone} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          {/* Shopping Bag Icon */}
          <span 
            style={{ ...iconStyle, position: "relative" }}
            onClick={toggleCart}
            title={`Bag (${cartCount} items)`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.bone} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span style={{
                position: "absolute",
                top: "-6px",
                right: "-8px",
                background: COLORS.bone,
                color: COLORS.ink,
                fontSize: "9px",
                fontFamily: FONTS.mono,
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}>
                {cartCount}
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Search Bar - Desktop */}
      {searchOpen && !window.innerWidth <= 720 && (
        <form
          onSubmit={handleSearchSubmit}
          style={{
            padding: "12px 40px",
            background: COLORS.ink,
            borderTop: `1px solid ${COLORS.line}`,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            position: "relative",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLORS.ash} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              color: COLORS.bone,
              fontFamily: FONTS.body,
              fontSize: "14px",
              outline: "none",
            }}
          />
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            style={{
              background: "none",
              border: "none",
              color: COLORS.ash,
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            ×
          </button>

          {/* Search Results Dropdown */}
          {showResults && searchResults.length > 0 && (
            <div style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: COLORS.ink,
              borderBottom: `1px solid ${COLORS.line}`,
              zIndex: 60,
            }}>
              {searchResults.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleSearchResultClick(product.id)}
                  style={{
                    width: "100%",
                    padding: "12px 40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: COLORS.bone,
                    borderBottom: `1px solid ${COLORS.line}`,
                  }}
                >
                  <span style={{ fontFamily: FONTS.body, fontSize: "13px" }}>
                    {product.name}
                  </span>
                  <span style={{ fontFamily: FONTS.mono, fontSize: "11px", color: COLORS.ash }}>
                    {product.price}
                  </span>
                </button>
              ))}
            </div>
          )}
        </form>
      )}

      {/* Mobile Navigation */}
      <div
        className="nav-mobile"
        style={{
          display: "none",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 20px",
          position: "relative",
        }}
      >
        {/* Mobile: Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img
            src="/images/logo.png"
            alt="508 Archives"
            style={{
              height: "40px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Mobile: Right Icons */}
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <span style={iconStyle} onClick={() => setSearchOpen(!searchOpen)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.bone} strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>

          <span style={{ ...iconStyle, position: "relative" }} onClick={toggleCart}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.bone} strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span style={{
                position: "absolute",
                top: "-6px",
                right: "-8px",
                background: COLORS.bone,
                color: COLORS.ink,
                fontSize: "8px",
                fontFamily: FONTS.mono,
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}>
                {cartCount}
              </span>
            )}
          </span>

          {/* Hamburger Menu */}
          <span
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ 
              fontFamily: FONTS.mono, 
              fontSize: "20px", 
              color: COLORS.bone, 
              cursor: "pointer",
              width: "24px",
              zIndex: 2,
            }}
          >
            {menuOpen ? "×" : "☰"}
          </span>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {searchOpen && (
        <div
          className="nav-mobile"
          style={{
            display: "none",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: COLORS.ink,
            zIndex: 100,
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <form
            onSubmit={handleSearchSubmit}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              borderBottom: `1px solid ${COLORS.line}`,
              paddingBottom: "16px",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.ash} strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                color: COLORS.bone,
                fontFamily: FONTS.body,
                fontSize: "16px",
                outline: "none",
              }}
            />
            <button
              type="button"
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery("");
                setShowResults(false);
              }}
              style={{
                background: "none",
                border: "none",
                color: COLORS.ash,
                cursor: "pointer",
                fontSize: "24px",
              }}
            >
              ×
            </button>
          </form>

          {/* Mobile Search Results */}
          {showResults && searchResults.length > 0 && (
            <div style={{ marginTop: "20px", overflowY: "auto" }}>
              {searchResults.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleSearchResultClick(product.id)}
                  style={{
                    width: "100%",
                    padding: "16px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: COLORS.bone,
                    borderBottom: `1px solid ${COLORS.line}`,
                  }}
                >
                  <div>
                    <span style={{ fontFamily: FONTS.body, fontSize: "14px", display: "block", marginBottom: "4px" }}>
                      {product.name}
                    </span>
                    <span style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.ash }}>
                      {product.category}
                    </span>
                  </div>
                  <span style={{ fontFamily: FONTS.mono, fontSize: "12px", color: COLORS.ash }}>
                    {product.price}
                  </span>
                </button>
              ))}
            </div>
          )}

          {showResults && searchResults.length === 0 && searchQuery.trim() && (
            <p style={{ 
              fontFamily: FONTS.body, 
              fontSize: "14px", 
              color: COLORS.ash, 
              textAlign: "center",
              marginTop: "40px",
            }}>
              No products found for "{searchQuery}"
            </p>
          )}
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {menuOpen && !searchOpen && (
        <div
          className="nav-mobile"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "24px 20px 32px",
            background: COLORS.ink,
            borderTop: `1px solid ${COLORS.line}`,
          }}
        >
          <Link to="/shop" style={navLinkStyle}>SHOP</Link>
          <Link to="/collections" style={navLinkStyle}>COLLECTIONS</Link>
          <Link to="/lookbook" style={navLinkStyle}>LOOKBOOK</Link>
          <Link to="/account" style={navLinkStyle}>ACCOUNT</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 720px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </div>
  );
}