import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS, FONTS } from "../styles/tokens";
import { Tag } from "./Shared";
import { useProducts } from "../context/ProductContext";

/* =========================================================
   QUICK VIEW MODAL
========================================================= */

function QuickView({ product, onClose }) {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const images =
    product?.images?.length > 0
      ? product.images
      : [{ color: "#151515" }];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!product) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const handleTouchStart = (event) => {
    touchStart.current = event.targetTouches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEnd.current = event.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    if (Math.abs(distance) < 50) return;
    if (distance > 0) {
      setActiveImage((current) => (current === images.length - 1 ? 0 : current + 1));
    } else {
      setActiveImage((current) => (current === 0 ? images.length - 1 : current - 1));
    }
    touchStart.current = null;
    touchEnd.current = null;
  };

  if (!product) return null;

  return (
    <div
      className="quick-view-backdrop"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.82)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        display: "flex",
        alignItems: isMobile ? "flex-end" : "center",
        justifyContent: "center",
        padding: isMobile ? 0 : "20px",
      }}
    >
      <div
        className="quick-view-panel"
        onClick={(event) => event.stopPropagation()}
        style={{
          width: isMobile ? "100%" : "min(1050px, 100%)",
          maxHeight: isMobile ? "94vh" : "92vh",
          background: "#0b0b0b",
          position: "relative",
          overflow: "hidden",
          border: isMobile ? "none" : "1px solid rgba(255,255,255,0.12)",
          borderRadius: isMobile ? "20px 20px 0 0" : "0",
          display: isMobile ? "flex" : "grid",
          flexDirection: isMobile ? "column" : undefined,
          gridTemplateColumns: isMobile ? undefined : "1.05fr 0.95fr",
          boxShadow: "0 30px 100px rgba(0,0,0,0.75)",
          animation: isMobile ? "quickViewMobileOpen 0.35s ease" : "quickViewDesktopOpen 0.3s ease",
        }}
      >
        {isMobile && (
          <div
            style={{
              position: "absolute",
              top: "9px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "42px",
              height: "4px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.4)",
              zIndex: 20,
            }}
          />
        )}

        <button
          onClick={onClose}
          aria-label="Close quick view"
          style={{
            position: "absolute",
            top: isMobile ? "18px" : "16px",
            right: isMobile ? "16px" : "16px",
            zIndex: 30,
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(0,0,0,0.55)",
            color: "#fff",
            cursor: "pointer",
            fontSize: "20px",
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ×
        </button>

        {/* IMAGE SECTION */}
        <div
          className="quick-view-image"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "relative",
            background: "#111",
            height: isMobile ? "48vh" : "100%",
            minHeight: isMobile ? "320px" : "620px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                inset: 0,
                background: image?.color || "#151515",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: activeImage === index ? 1 : 0,
                transition: "opacity 0.45s ease",
              }}
            >
              {/* CHECK IF IMAGE URL EXISTS */}
              {image?.url ? (
                <img
                  src={image.url}
                  alt={`${product.name} - ${image.label || `Image ${index + 1}`}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  loading="lazy"
                />
              ) : (
                <span
                  style={{
                    fontFamily: FONTS.display,
                    fontSize: isMobile ? "clamp(55px, 17vw, 90px)" : "clamp(60px, 9vw, 110px)",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.06)",
                    letterSpacing: "-0.05em",
                  }}
                >
                  {product.id}
                </span>
              )}
            </div>
          ))}

          {/* IMAGE COUNTER */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              zIndex: 5,
              fontFamily: FONTS.mono,
              fontSize: "8px",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.15em",
            }}
          >
            {String(activeImage + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>

          {/* DESKTOP THUMBNAILS */}
          {!isMobile && images.length > 1 && (
            <div
              style={{
                position: "absolute",
                right: "16px",
                bottom: "16px",
                display: "flex",
                gap: "5px",
                zIndex: 5,
              }}
            >
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  style={{
                    width: "38px",
                    height: "48px",
                    border: activeImage === index ? "1px solid #fff" : "1px solid rgba(255,255,255,0.25)",
                    background: image?.url ? `url(${image.url}) center/cover` : image?.color || "#181818",
                    cursor: "pointer",
                    padding: 0,
                    overflow: "hidden",
                  }}
                >
                  {!image?.url && (
                    <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.3)" }}>
                      {index + 1}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* MOBILE DOTS */}
          {isMobile && images.length > 1 && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: "16px",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "4px",
                zIndex: 5,
              }}
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  style={{
                    width: "22px",
                    height: "2px",
                    padding: 0,
                    border: "none",
                    background: activeImage === index ? "#fff" : "rgba(255,255,255,0.3)",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* PRODUCT DETAILS */}
        <div
          className="quick-view-details"
          style={{
            padding: isMobile ? "25px 18px 28px" : "clamp(30px, 5vw, 55px)",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: 0,
          }}
        >
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: "8px",
              color: COLORS.ash,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            {product.category}
          </div>

          <h2
            style={{
              fontFamily: FONTS.display,
              fontSize: isMobile ? "clamp(27px, 8vw, 38px)" : "clamp(30px, 4vw, 48px)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: COLORS.bone,
              textTransform: "uppercase",
              margin: "0 0 15px",
              fontWeight: 700,
            }}
          >
            {product.name}
          </h2>

          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: "13px",
              color: COLORS.bone,
              marginBottom: "22px",
            }}
          >
            {product.price}
          </div>

          <div
            style={{
              width: "100%",
              height: "1px",
              background: "rgba(255,255,255,0.1)",
              marginBottom: "22px",
            }}
          />

          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: isMobile ? "12px" : "13px",
              lineHeight: 1.7,
              color: COLORS.ash,
              margin: "0 0 25px",
            }}
          >
            Discover this piece from the 508ARCHIVES collection. Explore the full product page for complete details, sizing and availability.
          </p>

          <button
            onClick={() => {
              onClose();
              navigate(`/product/${product.id}`);
            }}
            style={{
              width: "100%",
              minHeight: "50px",
              padding: "15px 18px",
              background: "#fff",
              color: "#000",
              border: "1px solid #fff",
              fontFamily: FONTS.mono,
              fontSize: "8px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
            }}
          >
            VIEW FULL PRODUCT →
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes quickViewDesktopOpen {
            from { opacity: 0; transform: translateY(15px) scale(0.985); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes quickViewMobileOpen {
            from { opacity: 0; transform: translateY(100%); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({ product, index, onQuickView }) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const intervalRef = useRef(null);

  const images = product.images?.length > 0 ? product.images : [{ color: "#111" }];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (!hover || images.length <= 1) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [hover, images.length]);

  const handleMouseLeave = () => {
    setHover(false);
    clearInterval(intervalRef.current);
    setTimeout(() => {
      setActiveImage(0);
    }, 200);
  };

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        minWidth: 0,
        cursor: "pointer",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(25px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* PRODUCT IMAGE */}
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "3 / 4",
          background: "#111",
          overflow: "hidden",
        }}
      >
        {/* PRODUCT IMAGES */}
        {images.map((image, imageIndex) => (
          <div
            key={imageIndex}
            style={{
              position: "absolute",
              inset: 0,
              background: image?.color || "#111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: activeImage === imageIndex ? 1 : 0,
              transform: activeImage === imageIndex && hover ? "scale(1.025)" : "scale(1)",
              transition: "opacity 0.55s ease, transform 1s cubic-bezier(0.2,0.7,0.2,1)",
            }}
          >
            {/* CHECK IF IMAGE URL EXISTS */}
            {image?.url ? (
              <img
                src={image.url}
                alt={`${product.name} - ${image.label || `Image ${imageIndex + 1}`}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="lazy"
              />
            ) : (
              <span
                style={{
                  fontFamily: FONTS.display,
                  fontSize: "clamp(30px, 5vw, 55px)",
                  color: "rgba(255,255,255,0.07)",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                }}
              >
                {product.id}
              </span>
            )}
          </div>
        ))}

        {/* BADGE */}
        {product.badge && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              zIndex: 5,
              background: "#fff",
              color: "#000",
              padding: "6px 9px",
              fontFamily: FONTS.mono,
              fontSize: "7px",
              letterSpacing: "0.13em",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {product.badge}
          </div>
        )}

        {/* IMAGE PROGRESS */}
        {images.length > 1 && hover && (
          <div
            style={{
              position: "absolute",
              top: "13px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "3px",
              zIndex: 6,
            }}
          >
            {images.map((_, imageIndex) => (
              <span
                key={imageIndex}
                style={{
                  width: "16px",
                  height: "1px",
                  background: activeImage === imageIndex ? "#fff" : "rgba(255,255,255,0.3)",
                  transition: "background 0.25s ease",
                }}
              />
            ))}
          </div>
        )}

        {/* GRADIENT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
            background: "linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.7) 100%)",
            opacity: hover ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* QUICK VIEW BUTTON */}
        <button
          onClick={(event) => {
            event.stopPropagation();
            onQuickView(product);
          }}
          style={{
            position: "absolute",
            zIndex: 10,
            left: "12px",
            right: "12px",
            bottom: "12px",
            background: "#fff",
            color: "#000",
            border: "none",
            minHeight: "44px",
            padding: "12px 10px",
            fontFamily: FONTS.mono,
            fontSize: "8px",
            letterSpacing: "0.15em",
            fontWeight: 700,
            cursor: "pointer",
            textTransform: "uppercase",
            opacity: hover ? 1 : 0,
            transform: hover ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.3s ease",
          }}
        >
          QUICK VIEW →
        </button>
      </div>

      {/* PRODUCT INFORMATION */}
      <div style={{ paddingTop: "13px", paddingBottom: "8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{
              fontFamily: FONTS.body,
              fontSize: "12px",
              color: COLORS.bone,
              margin: "0 0 5px",
              fontWeight: 500,
              letterSpacing: "0.01em",
              textTransform: "uppercase",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}>
              {product.name}
            </p>
            <p style={{
              fontFamily: FONTS.mono,
              fontSize: "7px",
              color: COLORS.ash,
              margin: 0,
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}>
              {product.category}
            </p>
          </div>
          <p style={{
            fontFamily: FONTS.mono,
            fontSize: "10px",
            color: COLORS.bone,
            margin: 0,
            whiteSpace: "nowrap",
          }}>
            {product.price}
          </p>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   FEATURED DROP
========================================================= */

export default function FeaturedDrop() {
  const navigate = useNavigate();
  const { products } = useProducts();
  const [isMobile, setIsMobile] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <section
        style={{
          width: "100%",
          background: "linear-gradient(180deg, #080808 0%, #111 100%)",
          padding: isMobile ? "65px 14px 75px" : "clamp(80px, 10vw, 130px) clamp(18px, 5vw, 60px)",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-end",
            gap: "20px",
            marginBottom: isMobile ? "30px" : "55px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: FONTS.display,
                fontSize: isMobile ? "clamp(31px, 10vw, 45px)" : "clamp(38px, 6vw, 64px)",
                lineHeight: 0.95,
                letterSpacing: "-0.045em",
                fontWeight: 700,
                color: "#fff",
                margin: 0,
              }}
            >
              NEW ARRIVALS
            </h2>
          </div>

          <button
            onClick={() => navigate("/shop")}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.28)",
              color: "#fff",
              padding: isMobile ? "11px 16px" : "12px 20px",
              fontFamily: FONTS.mono,
              fontSize: "8px",
              letterSpacing: "0.15em",
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
            }}
          >
            VIEW ALL
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, minmax(0, 1fr))" : "repeat(4, minmax(0, 1fr))",
            columnGap: isMobile ? "9px" : "clamp(18px, 2.5vw, 30px)",
            rowGap: isMobile ? "30px" : "45px",
            width: "100%",
          }}
        >
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>
      </section>

      {quickViewProduct && (
        <QuickView
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </>
  );
}