// src/components/CartPage.jsx
import React from "react";
import { COLORS, FONTS } from "../styles/tokens";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal,
    cartCount,
    navigate 
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{
        background: COLORS.ink,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 20px",
        textAlign: "center",
      }}>
        <h1 style={{ 
          fontFamily: FONTS.display, 
          fontSize: "clamp(32px, 6vw, 48px)", 
          color: COLORS.bone,
          margin: "0 0 16px",
        }}>
          YOUR BAG IS EMPTY
        </h1>
        <p style={{ 
          fontFamily: FONTS.body, 
          fontSize: "14px", 
          color: COLORS.ash,
          margin: "0 0 32px",
        }}>
          Looks like you haven't added anything to your bag yet.
        </p>
        <button
          onClick={() => navigate("shop")}
          style={{
            background: COLORS.bone,
            color: COLORS.ink,
            border: "none",
            padding: "16px 32px",
            fontFamily: FONTS.mono,
            fontSize: "12px",
            letterSpacing: "0.15em",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          CONTINUE SHOPPING
        </button>
      </div>
    );
  }

  return (
    <div style={{
      background: COLORS.ink,
      minHeight: "100vh",
      padding: "100px 40px 40px",
    }}>
      <h1 style={{ 
        fontFamily: FONTS.display, 
        fontSize: "clamp(32px, 5vw, 48px)", 
        color: COLORS.bone,
        margin: "0 0 40px",
      }}>
        SHOPPING BAG ({cartCount})
      </h1>

      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        {/* Cart Items */}
        <div style={{ flex: 2, minWidth: "300px" }}>
          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "20px",
                padding: "24px",
                border: `1px solid ${COLORS.line}`,
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "150px",
                  background: "#1a1a1a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: FONTS.display,
                  fontSize: "32px",
                  color: "rgba(255,255,255,0.1)",
                  flexShrink: 0,
                }}
              >
                {item.id}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <h3 style={{ fontFamily: FONTS.body, fontSize: "16px", color: COLORS.bone, margin: 0 }}>
                    {item.name}
                  </h3>
                  <button
                    onClick={() => removeFromCart(index)}
                    style={{
                      background: "none",
                      border: "none",
                      color: COLORS.ash,
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                  >
                    ×
                  </button>
                </div>
                <p style={{ fontFamily: FONTS.mono, fontSize: "11px", color: COLORS.ash, margin: "0 0 12px" }}>
                  Size: {item.selectedSize}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <button
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      style={{
                        width: "32px",
                        height: "32px",
                        background: "transparent",
                        border: `1px solid ${COLORS.line}`,
                        color: COLORS.bone,
                        cursor: "pointer",
                      }}
                    >
                      -
                    </button>
                    <span style={{ fontFamily: FONTS.mono, color: COLORS.bone, width: "20px", textAlign: "center" }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      style={{
                        width: "32px",
                        height: "32px",
                        background: "transparent",
                        border: `1px solid ${COLORS.line}`,
                        color: COLORS.bone,
                        cursor: "pointer",
                      }}
                    >
                      +
                    </button>
                  </div>
                  <p style={{ fontFamily: FONTS.mono, fontSize: "14px", color: COLORS.bone, margin: 0, fontWeight: "bold" }}>
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <div style={{
            padding: "24px",
            border: `1px solid ${COLORS.line}`,
            position: "sticky",
            top: "100px",
          }}>
            <h2 style={{ fontFamily: FONTS.display, fontSize: "20px", color: COLORS.bone, margin: "0 0 24px" }}>
              ORDER SUMMARY
            </h2>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <span style={{ fontFamily: FONTS.mono, fontSize: "12px", color: COLORS.ash }}>Subtotal</span>
              <span style={{ fontFamily: FONTS.mono, fontSize: "12px", color: COLORS.bone }}>
                ₦{cartTotal.toLocaleString()}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <span style={{ fontFamily: FONTS.mono, fontSize: "12px", color: COLORS.ash }}>Shipping</span>
              <span style={{ fontFamily: FONTS.mono, fontSize: "12px", color: COLORS.bone }}>FREE</span>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "16px",
              borderTop: `1px solid ${COLORS.line}`,
              marginBottom: "24px",
            }}>
              <span style={{ fontFamily: FONTS.mono, fontSize: "14px", color: COLORS.bone, fontWeight: "bold" }}>Total</span>
              <span style={{ fontFamily: FONTS.mono, fontSize: "14px", color: COLORS.bone, fontWeight: "bold" }}>
                ₦{cartTotal.toLocaleString()}
              </span>
            </div>
            <button
              style={{
                width: "100%",
                background: COLORS.bone,
                color: COLORS.ink,
                border: "none",
                padding: "16px",
                fontFamily: FONTS.mono,
                fontSize: "12px",
                letterSpacing: "0.15em",
                cursor: "pointer",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              CHECKOUT
            </button>
            <button
              onClick={() => navigate("shop")}
              style={{
                width: "100%",
                background: "transparent",
                color: COLORS.bone,
                border: `1px solid ${COLORS.line}`,
                padding: "16px",
                fontFamily: FONTS.mono,
                fontSize: "12px",
                letterSpacing: "0.15em",
                cursor: "pointer",
              }}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}