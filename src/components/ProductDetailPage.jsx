// src/components/ProductDetailPage.jsx

import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FONTS } from "../styles/tokens";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

/* ============================================================
   DARK / EDITORIAL PALETTE
   (black ground, off-white ink, warm dark neutral image mattes)
============================================================ */

const PALETTE = {
  bg: "#0a0a0a",
  ink: "#f5f3ef",
  subtle: "#8a8a8a",
  line: "rgba(245,243,239,0.12)",
  lineSoft: "rgba(245,243,239,0.06)",
  matte: "#161513", // the "letterbox" behind contained product images
  matteHover: "#1e1c19",
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getProductById, products } = useProducts();
  const { addToCart } = useCart();

  const product = getProductById(id);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeSection, setActiveSection] = useState("details");
  const [added, setAdded] = useState(false);
  const [showMobileInfo, setShowMobileInfo] = useState(false);
  const [zoomOpen, setZoomOpen] = useState(false);

  const touchStartX = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    if (product) {
      setSelectedSize(product.sizes?.[0] || "");
      setSelectedColor(product.colors?.[0] || "");
      setCurrentImage(0);
      setQuantity(1);
      setAdded(false);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: PALETTE.bg,
          color: PALETTE.ink,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <p
          style={{
            fontFamily: FONTS.mono,
            fontSize: "10px",
            letterSpacing: "0.25em",
            color: PALETTE.subtle,
            marginBottom: "18px",
          }}
        >
          404
        </p>

        <h1
          style={{
            fontFamily: FONTS.display,
            fontSize: "clamp(32px, 6vw, 64px)",
            margin: "0 0 20px",
            letterSpacing: "-0.03em",
          }}
        >
          PRODUCT NOT FOUND
        </h1>

        <button
          onClick={() => navigate("/shop")}
          style={{
            background: PALETTE.ink,
            color: PALETTE.bg,
            border: "none",
            padding: "15px 28px",
            fontFamily: FONTS.mono,
            fontSize: "10px",
            letterSpacing: "0.15em",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          BACK TO SHOP
        </button>
      </div>
    );
  }

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [{ color: PALETTE.matte }];

  const sizes = product.sizes || [];
  const colors = product.colors || [];
  const details = product.details || [];

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category && item.id !== product.id
    )
    .slice(0, 4);

  const currentImageData = images[currentImage] || images[0];

  const goPrev = () =>
    setCurrentImage((i) => (i === 0 ? images.length - 1 : i - 1));

  const goNext = () =>
    setCurrentImage((i) => (i === images.length - 1 ? 0 : i + 1));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || images.length <= 1) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40;

    if (deltaX > threshold) {
      goPrev();
    } else if (deltaX < -threshold) {
      goNext();
    }

    touchStartX.current = null;
  };

  const handleAddToCart = () => {
    addToCart(
      product,
      selectedSize,
      selectedColor,
      quantity
    );

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2500);
  };

  const decreaseQuantity = () => {
    setQuantity((value) => Math.max(1, value - 1));
  };

  const increaseQuantity = () => {
    setQuantity((value) => value + 1);
  };

  return (
    <div className="product-page">
      {/* --------------------------------------------------
          PAGE
      -------------------------------------------------- */}

      <div className="product-wrapper">

        {/* --------------------------------------------------
            BREADCRUMB
        -------------------------------------------------- */}

        <div className="breadcrumb">
          <Link to="/">HOME</Link>

          <span>/</span>

          <Link to="/shop">SHOP</Link>

          <span>/</span>

          <span className="breadcrumb-current">
            {product.name?.toUpperCase()}
          </span>
        </div>

        {/* --------------------------------------------------
            PRODUCT LAYOUT
        -------------------------------------------------- */}

        <main className="product-layout">

          {/* =================================================
              LEFT — IMAGE EDITORIAL
          ================================================= */}

          <section className="gallery">

            <div className="gallery-body">

              {/* Vertical thumbnail rail (desktop) */}

              {images.length > 1 && (
                <div className="thumbnail-rail">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      className={`thumbnail ${
                        currentImage === index
                          ? "thumbnail-active"
                          : ""
                      }`}
                      onClick={() => setCurrentImage(index)}
                      style={{
                        background: PALETTE.matte,
                      }}
                      aria-label={`View image ${index + 1}`}
                    >
                      {image.url ? (
                        <img
                          src={image.url}
                          alt=""
                          draggable="false"
                        />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Main Image — CONTAINED, never cropped/stretched, swipeable */}

              <div
                className="main-image"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{
                  background:
                    currentImageData?.url
                      ? PALETTE.matte
                      : currentImageData?.color || PALETTE.matte,
                }}
              >
                {currentImageData?.url ? (
                  <img
                    className="main-image-img"
                    src={currentImageData.url}
                    alt={product.name}
                    draggable="false"
                  />
                ) : (
                  <div className="image-placeholder">
                    <span>{product.name?.charAt(0)}</span>
                  </div>
                )}

                {/* Badge */}

                {product.badge && (
                  <div className="product-badge">
                    {product.badge}
                  </div>
                )}

                {/* Zoom trigger — opens full-size inspection view */}

                <button
                  className="zoom-trigger"
                  onClick={() => setZoomOpen(true)}
                  aria-label="Zoom image"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="21"
                      y1="21"
                      x2="16.65"
                      y2="16.65"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                {/* Image count */}

                {images.length > 1 && (
                  <div className="image-counter">
                    {String(currentImage + 1).padStart(2, "0")}{" "}
                    /{" "}
                    {String(images.length).padStart(2, "0")}
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnails — mobile horizontal row */}

            {images.length > 1 && (
              <div className="thumbnail-row">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${
                      currentImage === index
                        ? "thumbnail-active"
                        : ""
                    }`}
                    onClick={() => setCurrentImage(index)}
                    style={{
                      background: PALETTE.matte,
                    }}
                    aria-label={`View image ${index + 1}`}
                  >
                    {image.url ? (
                      <img
                        src={image.url}
                        alt=""
                        draggable="false"
                      />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Mobile product info trigger */}

            <button
              className="mobile-info-trigger"
              onClick={() =>
                setShowMobileInfo(!showMobileInfo)
              }
            >
              <span>PRODUCT INFORMATION</span>

              <span
                className={
                  showMobileInfo
                    ? "rotate-icon"
                    : ""
                }
              >
                +
              </span>
            </button>

            {/* Mobile information */}

            {showMobileInfo && (
              <div className="mobile-product-information">
                <ProductInformation
                  product={product}
                  sizes={sizes}
                  colors={colors}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                  quantity={quantity}
                  decreaseQuantity={decreaseQuantity}
                  increaseQuantity={increaseQuantity}
                  handleAddToCart={handleAddToCart}
                  added={added}
                />
              </div>
            )}
          </section>

          {/* =================================================
              RIGHT — PRODUCT INFORMATION
          ================================================= */}

          <aside className="product-information-desktop">
            <div className="sticky-information">
              <ProductInformation
                product={product}
                sizes={sizes}
                colors={colors}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                quantity={quantity}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                handleAddToCart={handleAddToCart}
                added={added}
              />
            </div>
          </aside>
        </main>

        {/* --------------------------------------------------
            DETAILS
        -------------------------------------------------- */}

        <section className="details-section">

          <div className="details-heading">
            <span>THE DETAILS</span>
          </div>

          <div className="details-content">

            <div className="details-tabs">

              <button
                className={
                  activeSection === "details"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveSection("details")
                }
              >
                DETAILS
              </button>

              <button
                className={
                  activeSection === "shipping"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveSection("shipping")
                }
              >
                SHIPPING
              </button>

              <button
                className={
                  activeSection === "care"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveSection("care")
                }
              >
                CARE
              </button>
            </div>

            <div className="details-panel">

              {activeSection === "details" && (
                <>
                  {product.description && (
                    <p className="description">
                      {product.description}
                    </p>
                  )}

                  {details.length > 0 && (
                    <ul className="detail-list">
                      {details.map(
                        (detail, index) => (
                          <li key={index}>
                            <span>—</span>
                            {detail}
                          </li>
                        )
                      )}
                    </ul>
                  )}

                  {details.length === 0 &&
                    !product.description && (
                      <p className="description">
                        Designed as part of the
                        508 Archives collection.
                      </p>
                    )}
                </>
              )}

              {activeSection === "shipping" && (
                <div className="shipping-content">
                  <p>
                    Orders are processed within
                    2–3 business days.
                  </p>

                  <p>
                    Free worldwide shipping on
                    orders over ₦100,000.
                  </p>

                  <p>
                    Delivery times vary depending
                    on destination.
                  </p>
                </div>
              )}

              {activeSection === "care" && (
                <div className="shipping-content">
                  <p>
                    Follow the care instructions
                    provided with your garment.
                  </p>

                  <p>
                    We recommend washing garments
                    according to their individual
                    care labels.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            RELATED PRODUCTS
        -------------------------------------------------- */}

        {relatedProducts.length > 0 && (
          <section className="related-section">

            <div className="related-header">
              <div>
                <span className="eyebrow">
                  FROM THE ARCHIVE
                </span>

                <h2>
                  YOU MAY ALSO LIKE
                </h2>
              </div>

              <Link to="/shop">
                VIEW ALL →
              </Link>
            </div>

            <div className="related-grid">
              {relatedProducts.map((related) => (
                <RelatedProductCard
                  key={related.id}
                  product={related}
                  onClick={() =>
                    navigate(
                      `/product/${related.id}`
                    )
                  }
                />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* --------------------------------------------------
          ZOOM OVERLAY — full-size inspection view
      -------------------------------------------------- */}

      {zoomOpen && (
        <div
          className="zoom-overlay"
          onClick={() => setZoomOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="zoom-close"
            onClick={() => setZoomOpen(false)}
            aria-label="Close zoom"
          >
            ✕
          </button>

          {currentImageData?.url ? (
            <img
              className="zoom-image"
              src={currentImageData.url}
              alt={product.name}
              draggable="false"
            />
          ) : (
            <div className="image-placeholder">
              <span>{product.name?.charAt(0)}</span>
            </div>
          )}

          {images.length > 1 && (
            <div className="zoom-counter">
              {String(currentImage + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </div>
          )}
        </div>
      )}

      {/* --------------------------------------------------
          STYLES
      -------------------------------------------------- */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .product-page {
          min-height: 100vh;
          background: ${PALETTE.bg};
          color: ${PALETTE.ink};
          padding-top: 80px;
        }

        .product-wrapper {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }

        /* ==========================================
           BREADCRUMB
        ========================================== */

        .breadcrumb {
          height: 60px;
          padding: 0 40px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid ${PALETTE.line};

          font-family: ${FONTS.mono};
          font-size: 9px;
          letter-spacing: 0.16em;
          color: ${PALETTE.subtle};
        }

        .breadcrumb a {
          color: ${PALETTE.subtle};
          text-decoration: none;
          transition: color .25s ease;
        }

        .breadcrumb a:hover {
          color: ${PALETTE.ink};
        }

        .breadcrumb-current {
          color: ${PALETTE.ink};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 250px;
        }

        /* ==========================================
           MAIN LAYOUT
        ========================================== */

        .product-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(360px, .7fr);
          gap: 80px;
          padding: 48px 40px;
        }

        /* ==========================================
           GALLERY
           — images are CONTAINED (object-fit: contain)
             on a soft dark matte, so nothing gets
             cropped, stretched, or looks "wide"/distorted
        ========================================== */

        .gallery {
          min-width: 0;
        }

        .gallery-body {
          display: flex;
          gap: 14px;
        }

        .thumbnail-rail {
          display: flex;
          flex-direction: column;
          gap: 10px;

          width: 76px;
          flex: 0 0 auto;
        }

        .main-image {
          flex: 1;
          min-width: 0;

          width: 100%;
          aspect-ratio: 4 / 5;
          max-height: 760px;

          position: relative;
          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          touch-action: pan-y;
        }

        .main-image-img {
          width: 100%;
          height: 100%;
          display: block;

          /* KEY FIX: contain, not cover — the full garment is
             always visible, centered, at correct proportions */
          object-fit: contain;
          object-position: center;

          padding: 22px;

          user-select: none;
          transition: transform .6s cubic-bezier(.2,.6,.2,1);
        }

        .main-image:hover .main-image-img {
          transform: scale(1.02);
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-placeholder span {
          font-family: ${FONTS.display};
          font-size: clamp(80px, 12vw, 180px);
          font-weight: 800;
          color: rgba(245,243,239,.06);
        }

        .product-badge {
          position: absolute;
          top: 20px;
          left: 20px;

          background: ${PALETTE.ink};
          color: ${PALETTE.bg};

          padding: 7px 12px;

          font-family: ${FONTS.mono};
          font-size: 8px;
          font-weight: 700;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        /* Zoom/magnify trigger — replaces arrow nav */

        .zoom-trigger {
          position: absolute;
          top: 20px;
          right: 20px;

          width: 38px;
          height: 38px;

          border-radius: 50%;

          border: 1px solid ${PALETTE.line};
          background: rgba(10,10,10,.55);
          backdrop-filter: blur(8px);

          color: ${PALETTE.ink};

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          opacity: 0;
          transition: all .25s ease;
        }

        .main-image:hover .zoom-trigger {
          opacity: 1;
        }

        .zoom-trigger:hover {
          background: ${PALETTE.ink};
          color: ${PALETTE.bg};
        }

        .image-counter {
          position: absolute;
          right: 20px;
          bottom: 20px;

          padding: 8px 11px;

          background: rgba(10,10,10,.6);
          backdrop-filter: blur(8px);
          border: 1px solid ${PALETTE.line};

          font-family: ${FONTS.mono};
          font-size: 9px;
          letter-spacing: .1em;
          color: ${PALETTE.ink};
        }

        /* ==========================================
           ZOOM OVERLAY
        ========================================== */

        .zoom-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;

          background: rgba(5,5,5,.97);

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 40px;

          touch-action: pan-y;
        }

        .zoom-image {
          max-width: 100%;
          max-height: 100%;

          object-fit: contain;

          user-select: none;
        }

        .zoom-close {
          position: fixed;
          top: 24px;
          right: 24px;

          width: 40px;
          height: 40px;

          border-radius: 50%;

          border: 1px solid ${PALETTE.line};
          background: rgba(245,243,239,.08);

          color: ${PALETTE.ink};

          font-size: 16px;

          cursor: pointer;
        }

        .zoom-counter {
          position: fixed;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);

          font-family: ${FONTS.mono};
          font-size: 10px;
          letter-spacing: .2em;
          color: ${PALETTE.subtle};
        }

        /* ==========================================
           THUMBNAILS
           (rail on desktop, row on mobile — same
           contained image treatment as main image)
        ========================================== */

        .thumbnail-row {
          display: none;
        }

        .thumbnail {
          width: 76px;
          height: 96px;

          flex: 0 0 auto;

          border: 1px solid ${PALETTE.line};

          padding: 6px;

          color: rgba(245,243,239,.35);

          cursor: pointer;

          overflow: hidden;

          position: relative;

          transition: border-color .25s ease, background .25s ease;
        }

        .thumbnail:hover {
          border-color: rgba(245,243,239,.4);
          background: ${PALETTE.matteHover};
        }

        .thumbnail-active {
          border: 1.5px solid ${PALETTE.ink};
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .thumbnail span {
          font-family: ${FONTS.mono};
          font-size: 11px;
        }

        /* ==========================================
           PRODUCT INFORMATION
        ========================================== */

        .product-information-desktop {
          min-width: 0;
        }

        .sticky-information {
          position: sticky;
          top: 110px;
        }

        .product-info {
          display: flex;
          flex-direction: column;
        }

        .product-category {
          margin: 0 0 14px;

          font-family: ${FONTS.mono};
          font-size: 9px;
          letter-spacing: .2em;
          color: ${PALETTE.subtle};
          text-transform: uppercase;
        }

        .product-title {
          margin: 0 0 16px;

          font-family: ${FONTS.display};
          font-size: clamp(32px, 3.4vw, 52px);
          line-height: 1;
          letter-spacing: -.03em;
          font-weight: 700;
        }

        .product-price {
          margin: 0;

          font-family: ${FONTS.mono};
          font-size: 16px;
          letter-spacing: .04em;
          color: ${PALETTE.ink};
        }

        .product-divider {
          width: 100%;
          height: 1px;
          background: ${PALETTE.line};
          margin: 28px 0;
        }

        .product-description {
          margin: 0;

          font-family: ${FONTS.body};
          font-size: 13px;
          line-height: 1.9;
          color: #aaa;
          max-width: 480px;
        }

        /* ==========================================
           OPTIONS
        ========================================== */

        .option-block {
          margin-top: 28px;
        }

        .option-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;

          margin-bottom: 12px;
        }

        .option-label {
          margin: 0;

          font-family: ${FONTS.mono};
          font-size: 9px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: ${PALETTE.ink};
        }

        .selected-option {
          color: ${PALETTE.subtle};
          font-family: ${FONTS.mono};
          font-size: 9px;
        }

        .size-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .size-button {
          min-width: 50px;
          height: 44px;

          padding: 0 14px;

          background: transparent;
          border: 1px solid rgba(245,243,239,.22);

          color: ${PALETTE.ink};

          font-family: ${FONTS.mono};
          font-size: 10px;
          letter-spacing: .08em;

          cursor: pointer;

          transition: all .25s ease;
        }

        .size-button:hover {
          border-color: ${PALETTE.ink};
        }

        .size-button.selected {
          background: ${PALETTE.ink};
          border-color: ${PALETTE.ink};
          color: ${PALETTE.bg};
        }

        /* ==========================================
           COLORS
        ========================================== */

        .color-grid {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .color-button {
          width: 28px;
          height: 28px;

          border-radius: 50%;

          cursor: pointer;

          position: relative;

          border: 1px solid rgba(245,243,239,.18);

          transition: transform .25s ease;
        }

        .color-button:hover {
          transform: scale(1.08);
        }

        .color-button.selected {
          outline: 1px solid ${PALETTE.ink};
          outline-offset: 3px;
        }

        /* ==========================================
           QUANTITY
        ========================================== */

        .purchase-row {
          display: flex;
          gap: 10px;
          margin-top: 30px;
        }

        .quantity-control {
          width: 120px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          border: 1px solid rgba(245,243,239,.2);
        }

        .quantity-control button {
          width: 38px;
          height: 100%;

          border: none;
          background: transparent;

          color: ${PALETTE.ink};

          cursor: pointer;

          font-size: 16px;
        }

        .quantity-control button:hover {
          background: ${PALETTE.matte};
        }

        .quantity-value {
          font-family: ${FONTS.mono};
          font-size: 11px;
        }

        .add-button {
          flex: 1;

          min-height: 52px;

          border: 1px solid ${PALETTE.ink};
          background: ${PALETTE.ink};
          color: ${PALETTE.bg};

          font-family: ${FONTS.mono};
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .15em;
          text-transform: uppercase;

          cursor: pointer;

          transition: all .3s ease;
        }

        .add-button:hover {
          background: transparent;
          color: ${PALETTE.ink};
        }

        .add-button.added {
          background: ${PALETTE.matte};
          color: ${PALETTE.ink};
          border-color: rgba(245,243,239,.2);
        }

        /* ==========================================
           MOBILE INFO
        ========================================== */

        .mobile-info-trigger,
        .mobile-product-information {
          display: none;
        }

        /* ==========================================
           DETAILS
        ========================================== */

        .details-section {
          margin-top: 20px;

          padding: 70px 40px;

          border-top: 1px solid ${PALETTE.line};
          border-bottom: 1px solid ${PALETTE.line};

          display: grid;
          grid-template-columns: .7fr 1.3fr;
          gap: 80px;
        }

        .details-heading span {
          font-family: ${FONTS.mono};
          font-size: 10px;
          letter-spacing: .2em;
          color: ${PALETTE.subtle};
        }

        .details-content {
          max-width: 700px;
        }

        .details-tabs {
          display: flex;
          gap: 30px;

          border-bottom: 1px solid ${PALETTE.line};
        }

        .details-tabs button {
          position: relative;

          background: transparent;
          border: none;

          padding: 0 0 14px;

          color: ${PALETTE.subtle};

          font-family: ${FONTS.mono};
          font-size: 9px;
          letter-spacing: .15em;

          cursor: pointer;
        }

        .details-tabs button.active {
          color: ${PALETTE.ink};
        }

        .details-tabs button.active::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: -1px;

          width: 100%;
          height: 1px;

          background: ${PALETTE.ink};
        }

        .details-panel {
          padding-top: 25px;
        }

        .description,
        .shipping-content p {
          margin: 0 0 18px;

          color: #aaa;

          font-family: ${FONTS.body};
          font-size: 13px;
          line-height: 1.9;
        }

        .detail-list {
          list-style: none;
          padding: 0;
          margin: 25px 0 0;
        }

        .detail-list li {
          display: flex;
          gap: 12px;

          margin-bottom: 13px;

          color: #aaa;

          font-family: ${FONTS.body};
          font-size: 13px;
          line-height: 1.7;
        }

        .detail-list li span {
          color: ${PALETTE.ink};
        }

        /* ==========================================
           RELATED
        ========================================== */

        .related-section {
          padding: 90px 40px;
        }

        .related-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          margin-bottom: 35px;
        }

        .eyebrow {
          display: block;

          margin-bottom: 12px;

          color: ${PALETTE.subtle};

          font-family: ${FONTS.mono};
          font-size: 9px;
          letter-spacing: .2em;
        }

        .related-header h2 {
          margin: 0;

          font-family: ${FONTS.display};
          font-size: clamp(28px, 3.4vw, 42px);
          line-height: 1;
          letter-spacing: -.03em;
        }

        .related-header a {
          color: ${PALETTE.ink};

          font-family: ${FONTS.mono};
          font-size: 9px;
          letter-spacing: .14em;

          text-decoration: none;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .related-card {
          cursor: pointer;
        }

        .related-image {
          aspect-ratio: 3 / 4;

          position: relative;
          overflow: hidden;

          background: ${PALETTE.matte};

          margin-bottom: 14px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .related-image img {
          width: 100%;
          height: 100%;
          display: block;

          /* contained, same as PDP — related cards never
             show stretched/cropped-wide product photos */
          object-fit: contain;
          padding: 16px;

          transition: transform .5s cubic-bezier(.2,.6,.2,1);
        }

        .related-card:hover .related-image img {
          transform: scale(1.03);
        }

        .related-placeholder {
          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          font-family: ${FONTS.display};
          font-size: 46px;

          color: rgba(245,243,239,.08);
        }

        .related-name {
          margin: 0 0 6px;

          color: ${PALETTE.ink};

          font-family: ${FONTS.body};
          font-size: 13px;
        }

        .related-price {
          margin: 0;

          color: ${PALETTE.subtle};

          font-family: ${FONTS.mono};
          font-size: 10px;
        }

        /* ==========================================
           RESPONSIVE — TABLET
        ========================================== */

        @media (max-width: 1100px) {

          .product-layout {
            grid-template-columns: minmax(0, 1.15fr) minmax(320px, .85fr);
            gap: 40px;
            padding: 30px;
          }

          .details-section {
            padding: 60px 30px;
            gap: 40px;
          }

          .related-section {
            padding: 70px 30px;
          }

          .related-grid {
            grid-template-columns: repeat(3, 1fr);
          }

        }

        /* ==========================================
           RESPONSIVE — MOBILE
        ========================================== */

        @media (max-width: 768px) {

          .product-page {
            padding-top: 64px;
          }

          .breadcrumb {
            height: 50px;
            padding: 0 16px;

            gap: 8px;

            font-size: 8px;
          }

          .breadcrumb-current {
            max-width: 150px;
          }

          .product-layout {
            display: block;
            padding: 0;
          }

          .gallery {
            width: 100%;
          }

          .gallery-body {
            display: block;
          }

          .thumbnail-rail {
            display: none;
          }

          .main-image {
            aspect-ratio: 4 / 5;
            max-height: none;
          }

          .main-image-img {
            padding: 14px;
          }

          .product-badge {
            top: 14px;
            left: 14px;

            padding: 6px 9px;

            font-size: 7px;
          }

          .zoom-trigger {
            opacity: 1;

            top: 14px;
            right: 14px;

            width: 34px;
            height: 34px;
          }

          .image-counter {
            right: 14px;
            bottom: 14px;
          }

          .zoom-overlay {
            padding: 20px;
          }

          .thumbnail-row {
            display: flex;
            gap: 10px;

            padding: 0 16px;
            margin-top: 10px;

            overflow-x: auto;
            scrollbar-width: none;
          }

          .thumbnail-row::-webkit-scrollbar {
            display: none;
          }

          .thumbnail {
            width: 64px;
            height: 80px;
          }

          .product-information-desktop {
            display: none;
          }

          .mobile-info-trigger {
            width: 100%;

            margin-top: 22px;
            padding: 19px 16px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            background: transparent;

            border-top: 1px solid ${PALETTE.line};
            border-bottom: 1px solid ${PALETTE.line};

            color: ${PALETTE.ink};

            font-family: ${FONTS.mono};
            font-size: 9px;
            letter-spacing: .16em;

            cursor: pointer;
          }

          .mobile-info-trigger span:last-child {
            font-size: 18px;
            transition: transform .25s ease;
          }

          .rotate-icon {
            transform: rotate(45deg);
          }

          .mobile-product-information {
            display: block;
            padding: 30px 16px 40px;
          }

          .product-title {
            font-size: clamp(30px, 9vw, 44px);
          }

          .product-description {
            font-size: 13px;
          }

          .product-divider {
            margin: 24px 0;
          }

          .option-block {
            margin-top: 24px;
          }

          .purchase-row {
            position: sticky;
            bottom: 0;

            z-index: 20;

            margin-left: -16px;
            margin-right: -16px;

            padding: 12px 16px;

            background: rgba(10,10,10,.9);
            backdrop-filter: blur(14px);

            border-top: 1px solid ${PALETTE.line};
          }

          .quantity-control {
            width: 100px;
          }

          .add-button {
            min-height: 48px;
          }

          .details-section {
            display: block;

            padding: 50px 16px;
            margin-top: 0;
          }

          .details-heading {
            margin-bottom: 28px;
          }

          .details-tabs {
            gap: 22px;
            overflow-x: auto;
          }

          .details-panel {
            padding-top: 22px;
          }

          .related-section {
            padding: 55px 16px;
          }

          .related-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
          }

          .related-header h2 {
            font-size: 30px;
          }

          .related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px 10px;
          }

          .related-name {
            font-size: 12px;
          }

        }

        /* ==========================================
           SMALL PHONES
        ========================================== */

        @media (max-width: 420px) {

          .product-page {
            padding-top: 58px;
          }

          .purchase-row {
            gap: 7px;
          }

          .quantity-control {
            width: 88px;
          }

          .quantity-control button {
            width: 28px;
          }

          .add-button {
            font-size: 9px;
            letter-spacing: .1em;
          }

          .related-grid {
            gap: 16px 8px;
          }

          .related-header h2 {
            font-size: 26px;
          }

        }

      `}</style>
    </div>
  );
}


/* ============================================================
   PRODUCT INFORMATION COMPONENT
============================================================ */

function ProductInformation({
  product,
  sizes,
  colors,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  quantity,
  decreaseQuantity,
  increaseQuantity,
  handleAddToCart,
  added,
}) {
  return (
    <div className="product-info">

      {/* Category */}

      <p className="product-category">
        {product.category || "THE ARCHIVE"}
      </p>

      {/* Name */}

      <h1 className="product-title">
        {product.name}
      </h1>

      {/* Price */}

      <p className="product-price">
        {product.price}
      </p>

      <div className="product-divider" />

      {/* Description */}

      {product.description && (
        <p className="product-description">
          {product.description}
        </p>
      )}

      {/* Sizes */}

      {sizes.length > 0 && (
        <div className="option-block">

          <div className="option-label-row">
            <p className="option-label">
              SIZE
            </p>

            {selectedSize && (
              <span className="selected-option">
                {selectedSize}
              </span>
            )}
          </div>

          <div className="size-grid">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-button ${
                  selectedSize === size
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedSize(size)
                }
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Colors */}

      {colors.length > 0 && (
        <div className="option-block">

          <div className="option-label-row">
            <p className="option-label">
              COLOR
            </p>

            {selectedColor && (
              <span className="selected-option">
                {selectedColor}
              </span>
            )}
          </div>

          <div className="color-grid">
            {colors.map((color) => (
              <button
                key={color}
                className={`color-button ${
                  selectedColor === color
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedColor(color)
                }
                style={{
                  background: color,
                }}
                aria-label={`Select ${color}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Purchase */}

      <div className="purchase-row">

        <div className="quantity-control">

          <button
            onClick={decreaseQuantity}
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span className="quantity-value">
            {String(quantity).padStart(2, "0")}
          </span>

          <button
            onClick={increaseQuantity}
            aria-label="Increase quantity"
          >
            +
          </button>

        </div>

        <button
          className={`add-button ${
            added ? "added" : ""
          }`}
          onClick={handleAddToCart}
        >
          {added
            ? "ADDED TO CART ✓"
            : `ADD TO CART — ${product.price}`}
        </button>

      </div>

    </div>
  );
}


/* ============================================================
   RELATED PRODUCT CARD
============================================================ */

function RelatedProductCard({
  product,
  onClick,
}) {
  const [hover, setHover] = useState(false);

  const images =
    product.images && product.images.length
      ? product.images
      : [{ color: "#161513" }];

  const image =
    images[
      hover && images.length > 1
        ? 1
        : 0
    ];

  return (
    <div
      className="related-card"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      <div
        className="related-image"
        style={{
          background:
            image?.url
              ? "#161513"
              : image?.color || "#161513",
        }}
      >

        {image?.url ? (
          <img
            src={image.url}
            alt={product.name}
            draggable="false"
          />
        ) : (
          <div className="related-placeholder">
            {product.name?.charAt(0)}
          </div>
        )}

      </div>

      <p className="related-name">
        {product.name}
      </p>

      <p className="related-price">
        {product.price}
      </p>

    </div>
  );
}