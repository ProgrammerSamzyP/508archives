// src/components/ShopPage.jsx

import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { COLORS, FONTS } from "../styles/tokens";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

/* =========================================================
   IMAGE HELPERS
========================================================= */

function getImageSource(image) {
  if (!image) return null;

  if (typeof image === "string") {
    return image;
  }

  return (
    image.url ||
    image.src ||
    image.image ||
    image.path ||
    image.imageUrl ||
    null
  );
}

function getImageColor(image) {
  if (!image || typeof image !== "object") return "#151515";

  return image.color || "#151515";
}

/* =========================================================
   SHOP PAGE
========================================================= */

export default function ShopPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { products = [] } = useProducts();
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        products
          .map((product) => product.category)
          .filter(Boolean)
      ),
    ];
  }, [products]);

  /* =========================================================
     SEARCH PARAM
  ========================================================= */

  useEffect(() => {
    const search = searchParams.get("search");

    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  /* =========================================================
     BODY SCROLL LOCK FOR QUICK VIEW
  ========================================================= */

  useEffect(() => {
    if (quickViewProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [quickViewProduct]);

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setQuickViewProduct(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =========================================================
     FILTER + SORT
  ========================================================= */

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();

      filtered = filtered.filter((product) => {
        return (
          product.name?.toLowerCase().includes(query) ||
          product.category?.toLowerCase().includes(query)
        );
      });
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    switch (sortBy) {
      case "price-low":
        filtered.sort(
          (a, b) => Number(a.priceValue || 0) - Number(b.priceValue || 0)
        );
        break;

      case "price-high":
        filtered.sort(
          (a, b) => Number(b.priceValue || 0) - Number(a.priceValue || 0)
        );
        break;

      case "newest":
        filtered.sort(
          (a, b) => Number(b.id || 0) - Number(a.id || 0)
        );
        break;

      default:
        break;
    }

    return filtered;
  }, [products, searchQuery, selectedCategory, sortBy]);

  /* =========================================================
     HANDLERS
  ========================================================= */

  const handleViewDetails = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <main
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* =====================================================
          SHOP HEADER
      ===================================================== */}

      <section
        style={{
          padding:
            "clamp(100px, 12vw, 150px) clamp(18px, 4vw, 60px) 55px",
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div>
            

            <h1
              style={{
                margin: 0,
                fontFamily: FONTS.display,
                fontSize: "clamp(48px, 9vw, 110px)",
                lineHeight: "0.88",
                letterSpacing: "-0.055em",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              SHOP ALL
            </h1>
          </div>

          <div
            style={{
              maxWidth: "330px",
            }}
          >
            
          </div>
        </div>
      </section>

      {/* =====================================================
          SHOP CONTROLS
      ===================================================== */}

      <section
        style={{
          position: "sticky",
          top: "60px",
          zIndex: 30,
          background: "rgba(10,10,10,0.94)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderTop: `1px solid ${COLORS.line}`,
          borderBottom: `1px solid ${COLORS.line}`,
        }}
      >
        <div
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
            padding: "0 clamp(18px, 4vw, 60px)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              minHeight: "64px",
            }}
          >
            {/* Categories */}

            <div
              className="shop-category-scroll"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(18px, 3vw, 34px)",
                overflowX: "auto",
                flex: 1,
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {categories.map((category) => {
                const active = selectedCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      position: "relative",
                      flexShrink: 0,
                      border: "none",
                      background: "transparent",
                      color: active ? "#fff" : COLORS.ash,
                      padding: "23px 0",
                      fontFamily: FONTS.mono,
                      fontSize: "10px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {category}

                    {active && (
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: 0,
                          height: "2px",
                          background: "#fff",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Controls */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "9px",
                  color: COLORS.ash,
                  letterSpacing: "0.1em",
                  display: "none",
                }}
                className="desktop-product-count"
              >
                {filteredProducts.length} PIECES
              </span>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "none",
                  outline: "none",
                  fontFamily: FONTS.mono,
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  appearance: "none",
                  padding: "8px 0",
                }}
              >
                <option
                  value="featured"
                  style={{
                    background: "#111",
                    color: "#fff",
                  }}
                >
                  FEATURED
                </option>

                <option
                  value="newest"
                  style={{
                    background: "#111",
                    color: "#fff",
                  }}
                >
                  NEWEST
                </option>

                <option
                  value="price-low"
                  style={{
                    background: "#111",
                    color: "#fff",
                  }}
                >
                  PRICE LOW
                </option>

                <option
                  value="price-high"
                  style={{
                    background: "#111",
                    color: "#fff",
                  }}
                >
                  PRICE HIGH
                </option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH RESULT
      ===================================================== */}

      {searchQuery && (
        <div
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
            padding:
              "25px clamp(18px, 4vw, 60px) 0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: FONTS.mono,
                fontSize: "10px",
                color: COLORS.ash,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              SEARCH RESULTS FOR "{searchQuery}"
            </p>

            <button
              onClick={() => setSearchQuery("")}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontFamily: FONTS.mono,
                fontSize: "9px",
                letterSpacing: "0.1em",
                cursor: "pointer",
              }}
            >
              CLEAR ×
            </button>
          </div>
        </div>
      )}

      {/* =====================================================
          PRODUCT GRID
      ===================================================== */}

      <section
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          padding:
            "clamp(30px, 5vw, 65px) clamp(14px, 3vw, 60px) 100px",
        }}
      >
        {filteredProducts.length > 0 ? (
          <div
            className="archive-product-grid"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(4, minmax(0, 1fr))",
              columnGap: "clamp(12px, 2vw, 28px)",
              rowGap: "clamp(45px, 5vw, 75px)",
            }}
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onViewDetails={handleViewDetails}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            onReset={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
          />
        )}
      </section>

      {/* =====================================================
          QUICK VIEW
      ===================================================== */}

      {quickViewProduct && (
        <QuickView
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onViewDetails={handleViewDetails}
          onAddToCart={addToCart}
        />
      )}

      {/* =====================================================
          RESPONSIVE CSS
      ===================================================== */}

      <style>{`
        .shop-category-scroll::-webkit-scrollbar {
          display: none;
        }

        .archive-product-grid {
          animation: archiveShopFade 0.7s ease both;
        }

        @keyframes archiveShopFade {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1000px) {
          .archive-product-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 767px) {
          .archive-product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            column-gap: 10px !important;
            row-gap: 42px !important;
          }

          .desktop-product-count {
            display: none !important;
          }
        }

        @media (max-width: 500px) {
          .archive-product-grid {
            column-gap: 8px !important;
          }
        }
      `}</style>
    </main>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({
  product,
  index,
  onViewDetails,
  onQuickView,
}) {
  const [hover, setHover] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const images =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : [];

  /* =======================================================
     HOVER IMAGE ROTATION
  ======================================================= */

  useEffect(() => {
    if (!hover || images.length <= 1) {
      setImageIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setImageIndex((current) => {
        return (current + 1) % images.length;
      });
    }, 850);

    return () => clearInterval(interval);
  }, [hover, images.length]);

  const currentImage = images[imageIndex];
  const imageSource = getImageSource(currentImage);
  const imageColor = getImageColor(currentImage);

  return (
    <article
      style={{
        minWidth: 0,
        opacity: 0,
        animation: `productReveal 0.65s ease ${index * 0.07}s forwards`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* ===================================================
          IMAGE
      =================================================== */}

      <div
        style={{
          position: "relative",
          aspectRatio: "3 / 4",
          overflow: "hidden",
          background: imageColor,
          cursor: "pointer",
        }}
        onClick={() => onViewDetails(product)}
      >
        {/* Product Image */}

        {imageSource ? (
          <img
            src={imageSource}
            alt={product.name || "Product"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transform: hover
                ? "scale(1.035)"
                : "scale(1)",
              transition:
                "transform 0.8s cubic-bezier(.2,.65,.25,1)",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: imageColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: FONTS.display,
                fontSize: "clamp(30px, 5vw, 70px)",
                fontWeight: 700,
                color: "rgba(255,255,255,0.07)",
                letterSpacing: "-0.04em",
              }}
            >
              {product.name?.charAt(0) || "A"}
            </span>
          </div>
        )}

        {/* Dark hover gradient */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0.5) 100%)",
            opacity: hover ? 1 : 0,
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
          }}
        />

        {/* Badge */}

        {product.badge && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              padding: "6px 9px",
              background: "#fff",
              color: "#000",
              fontFamily: FONTS.mono,
              fontSize: "8px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            {product.badge}
          </div>
        )}

        {/* Image progress */}

        {images.length > 1 && hover && (
          <div
            style={{
              position: "absolute",
              left: "12px",
              right: "12px",
              bottom: "54px",
              display: "flex",
              gap: "3px",
            }}
          >
            {images.map((_, i) => (
              <span
                key={i}
                style={{
                  flex: 1,
                  height: "2px",
                  background:
                    i === imageIndex
                      ? "#fff"
                      : "rgba(255,255,255,0.35)",
                  transition: "background 0.25s ease",
                }}
              />
            ))}
          </div>
        )}

        {/* =================================================
            QUICK VIEW
        ================================================= */}

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onQuickView(product);
          }}
          style={{
            position: "absolute",
            left: "10px",
            right: "10px",
            bottom: "10px",
            height: "42px",
            border: "none",
            background: "#fff",
            color: "#000",
            fontFamily: FONTS.mono,
            fontSize: "9px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 700,
            cursor: "pointer",
            opacity: hover ? 1 : 0,
            transform: hover
              ? "translateY(0)"
              : "translateY(15px)",
            transition:
              "opacity .3s ease, transform .3s ease",
            zIndex: 3,
          }}
        >
          Quick View
        </button>
      </div>

      {/* ===================================================
          PRODUCT INFORMATION
      =================================================== */}

      <div
        style={{
          paddingTop: "13px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <div
            style={{
              minWidth: 0,
              flex: 1,
            }}
          >
            <h3
              style={{
                margin: 0,
                fontFamily: FONTS.body,
                fontSize: "13px",
                fontWeight: 500,
                color: "#fff",
                lineHeight: 1.35,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {product.name}
            </h3>

            <p
              style={{
                margin: "5px 0 0",
                fontFamily: FONTS.mono,
                fontSize: "8px",
                color: COLORS.ash,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
              }}
            >
              {product.category || "COLLECTION"}
            </p>
          </div>

          <p
            style={{
              margin: 0,
              flexShrink: 0,
              fontFamily: FONTS.mono,
              fontSize: "11px",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            {product.price}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes productReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (hover: none) {
          article button {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        }
      `}</style>
    </article>
  );
}

/* =========================================================
   QUICK VIEW
========================================================= */

function QuickView({
  product,
  onClose,
  onViewDetails,
  onAddToCart,
}) {
  const images =
    Array.isArray(product.images) && product.images.length
      ? product.images
      : [];

  const sizes =
    Array.isArray(product.sizes) && product.sizes.length
      ? product.sizes
      : ["S", "M", "L", "XL"];

  const colors =
    Array.isArray(product.colors) && product.colors.length
      ? product.colors
      : [];

  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(
    colors[0]
  );
  const [imageIndex, setImageIndex] = useState(0);

  const currentImage = images[imageIndex];
  const imageSource = getImageSource(currentImage);
  const imageColor = getImageColor(currentImage);

  const handleAdd = () => {
    onAddToCart(
      product,
      selectedSize,
      selectedColor,
      1
    );

    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        animation: "quickViewFade .25s ease",
      }}
      onClick={onClose}
    >
      <div
        className="quick-view-panel"
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "1100px",
          maxHeight: "92vh",
          overflow: "hidden",
          background: "#111",
          border: `1px solid ${COLORS.line}`,
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          position: "relative",
          animation: "quickViewUp .35s ease",
        }}
      >
        {/* =================================================
            CLOSE
        ================================================= */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close quick view"
          style={{
            position: "absolute",
            right: "16px",
            top: "16px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(0,0,0,0.5)",
            color: "#fff",
            fontSize: "22px",
            lineHeight: 1,
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          ×
        </button>

        {/* =================================================
            IMAGE SIDE
        ================================================= */}

        <div
          style={{
            position: "relative",
            background: imageColor,
            minHeight: "600px",
          }}
        >
          {imageSource ? (
            <img
              src={imageSource}
              alt={product.name || "Product"}
              style={{
                width: "100%",
                height: "100%",
                minHeight: "600px",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                minHeight: "600px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.display,
                  fontSize: "100px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.08)",
                }}
              >
                {product.name?.charAt(0) || "A"}
              </span>
            </div>
          )}

          {/* Image thumbnails */}

          {images.length > 1 && (
            <div
              style={{
                position: "absolute",
                left: "18px",
                right: "18px",
                bottom: "18px",
                display: "flex",
                gap: "7px",
                overflowX: "auto",
              }}
            >
              {images.map((image, index) => {
                const source = getImageSource(image);
                const color = getImageColor(image);

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setImageIndex(index)}
                    style={{
                      flexShrink: 0,
                      width: "55px",
                      height: "70px",
                      padding: 0,
                      overflow: "hidden",
                      border:
                        imageIndex === index
                          ? "2px solid #fff"
                          : "1px solid rgba(255,255,255,0.4)",
                      background: color,
                      cursor: "pointer",
                    }}
                  >
                    {source && (
                      <img
                        src={source}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* =================================================
            DETAILS SIDE
        ================================================= */}

        <div
          className="quick-view-content"
          style={{
            padding: "clamp(28px, 5vw, 55px)",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              margin: "0 0 15px",
              fontFamily: FONTS.mono,
              fontSize: "9px",
              color: COLORS.ash,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {product.category || "COLLECTION"}
          </p>

          <h2
            style={{
              margin: "0 0 15px",
              fontFamily: FONTS.display,
              fontSize: "clamp(30px, 4vw, 54px)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#fff",
            }}
          >
            {product.name}
          </h2>

          <p
            style={{
              margin: "0 0 35px",
              fontFamily: FONTS.mono,
              fontSize: "15px",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            {product.price}
          </p>

          <div
            style={{
              height: "1px",
              background: COLORS.line,
              marginBottom: "28px",
            }}
          />

          {/* SIZE */}

          {sizes.length > 0 && (
            <div style={{ marginBottom: "28px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: FONTS.mono,
                    fontSize: "9px",
                    color: "#fff",
                    letterSpacing: "0.15em",
                  }}
                >
                  SIZE
                </p>

                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "8px",
                    color: COLORS.ash,
                  }}
                >
                  SELECT SIZE
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "7px",
                }}
              >
                {sizes.map((size) => {
                  const active =
                    selectedSize === size;

                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() =>
                        setSelectedSize(size)
                      }
                      style={{
                        minWidth: "50px",
                        padding: "12px 15px",
                        background: active
                          ? "#fff"
                          : "transparent",
                        color: active
                          ? "#000"
                          : "#fff",
                        border: active
                          ? "1px solid #fff"
                          : "1px solid rgba(255,255,255,0.25)",
                        fontFamily: FONTS.mono,
                        fontSize: "9px",
                        cursor: "pointer",
                        transition:
                          "all .2s ease",
                      }}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* COLORS */}

          {colors.length > 0 && (
            <div style={{ marginBottom: "32px" }}>
              <p
                style={{
                  margin: "0 0 12px",
                  fontFamily: FONTS.mono,
                  fontSize: "9px",
                  color: "#fff",
                  letterSpacing: "0.15em",
                }}
              >
                COLOR
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                {colors.map((color, index) => {
                  const active =
                    selectedColor === color;

                  return (
                    <button
                      key={`${color}-${index}`}
                      type="button"
                      onClick={() =>
                        setSelectedColor(color)
                      }
                      title={color}
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        border: active
                          ? "2px solid #fff"
                          : "1px solid rgba(255,255,255,0.3)",
                        outline: active
                          ? "2px solid #111"
                          : "none",
                        outlineOffset: "2px",
                        background: color,
                        cursor: "pointer",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {/* DESCRIPTION */}

          {product.description && (
            <p
              style={{
                margin: "0 0 30px",
                fontFamily: FONTS.body,
                fontSize: "13px",
                color: COLORS.ash,
                lineHeight: 1.7,
              }}
            >
              {product.description}
            </p>
          )}

          {/* ACTIONS */}

          <div
            style={{
              marginTop: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <button
              type="button"
              onClick={handleAdd}
              style={{
                width: "100%",
                padding: "16px",
                border: "1px solid #fff",
                background: "#fff",
                color: "#000",
                fontFamily: FONTS.mono,
                fontSize: "10px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onViewDetails(product);
              }}
              style={{
                width: "100%",
                padding: "16px",
                border:
                  "1px solid rgba(255,255,255,0.3)",
                background: "transparent",
                color: "#fff",
                fontFamily: FONTS.mono,
                fontSize: "10px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              View Full Details →
            </button>
          </div>
        </div>
      </div>

      {/* ===================================================
          QUICK VIEW RESPONSIVE CSS
      =================================================== */}

      <style>{`
        @keyframes quickViewFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes quickViewUp {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 800px) {
          .quick-view-panel {
            grid-template-columns: 1fr !important;
            max-height: 94vh !important;
            overflow-y: auto !important;
          }

          .quick-view-panel > div:first-of-type {
            min-height: 55vh !important;
          }

          .quick-view-panel > div:first-of-type img {
            min-height: 55vh !important;
          }

          .quick-view-content {
            padding: 25px !important;
          }
        }

        @media (max-width: 500px) {
          .quick-view-panel {
            width: 100% !important;
            max-height: 96vh !important;
          }

          .quick-view-panel > div:first-of-type {
            min-height: 52vh !important;
          }

          .quick-view-panel > div:first-of-type img {
            min-height: 52vh !important;
          }
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyState({
  searchQuery,
  selectedCategory,
  onReset,
}) {
  return (
    <div
      style={{
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderTop: `1px solid ${COLORS.line}`,
        borderBottom: `1px solid ${COLORS.line}`,
      }}
    >
      <div>
        <p
          style={{
            margin: "0 0 12px",
            fontFamily: FONTS.mono,
            fontSize: "9px",
            color: COLORS.ash,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Nothing here
        </p>

        <h2
          style={{
            margin: "0 0 18px",
            fontFamily: FONTS.display,
            fontSize: "clamp(32px, 6vw, 55px)",
            color: "#fff",
            letterSpacing: "-0.04em",
          }}
        >
          NO PRODUCTS FOUND
        </h2>

        <p
          style={{
            margin: "0 0 25px",
            fontFamily: FONTS.body,
            fontSize: "13px",
            color: COLORS.ash,
          }}
        >
          {searchQuery
            ? `No results for "${searchQuery}".`
            : `There are no products in ${selectedCategory}.`}
        </p>

        <button
          type="button"
          onClick={onReset}
          style={{
            padding: "13px 22px",
            border: "1px solid rgba(255,255,255,0.3)",
            background: "transparent",
            color: "#fff",
            fontFamily: FONTS.mono,
            fontSize: "9px",
            letterSpacing: "0.15em",
            cursor: "pointer",
            textTransform: "uppercase",
          }}
        >
          View All Products
        </button>
      </div>
    </div>
  );
}