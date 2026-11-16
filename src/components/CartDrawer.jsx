// src/components/CartDrawer.jsx

import React from "react";
import { COLORS, FONTS } from "../styles/tokens";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    isCartOpen,
    closeCart,
    cartItems,
    removeFromCart,
    cartTotal,
    cartCount,
    navigate,
    updateQuantity,
  } = useCart();

  if (!isCartOpen) return null;

  // Helper function to get product image
  const getProductImage = (item) => {
    // Check if item has images array with url
    if (item.images && item.images.length > 0) {
      const firstImage = item.images[0];
      if (firstImage.url) {
        return firstImage.url;
      }
    }
    // Check if item has direct image url
    if (item.image) {
      return item.image;
    }
    // Return null if no image found
    return null;
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={closeCart}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0, 0, 0, 0.62)",
          backdropFilter: "blur(3px)",
          zIndex: 999,
        }}
      />

      {/* DRAWER */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(470px, 100vw)",
          display: "flex",
          flexDirection: "column",
          background: COLORS.ink,
          color: COLORS.bone,
          zIndex: 1000,
          borderLeft: `1px solid ${COLORS.line}`,
        }}
      >
        {/* HEADER */}
        <header style={{
          height: "78px",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 26px",
          borderBottom: `1px solid ${COLORS.line}`,
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "7px" }}>
            <span style={{
              fontFamily: FONTS.mono,
              fontSize: "10px",
              letterSpacing: "0.13em",
            }}>
              SHOPPING BAG
            </span>
            <span style={{
              fontFamily: FONTS.mono,
              fontSize: "9px",
              color: COLORS.ash,
            }}>
              ({cartCount})
            </span>
          </div>

          <button
            onClick={closeCart}
            aria-label="Close shopping bag"
            style={{
              position: "relative",
              width: "34px",
              height: "34px",
              padding: 0,
              border: 0,
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <span style={{
              position: "absolute",
              left: "8px",
              top: "16px",
              width: "18px",
              height: "1px",
              background: COLORS.bone,
              transform: "rotate(45deg)",
            }} />
            <span style={{
              position: "absolute",
              left: "8px",
              top: "16px",
              width: "18px",
              height: "1px",
              background: COLORS.bone,
              transform: "rotate(-45deg)",
            }} />
          </button>
        </header>

        {/* CONTENT */}
        <div style={{
          flex: 1,
          overflowY: "auto",
          overscrollBehavior: "contain",
        }}>
          {cartItems.length === 0 ? (
            /* EMPTY BAG */
            <div style={{
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "40px",
            }}>
              <div style={{
                width: "58px",
                height: "58px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "25px",
                border: `1px solid ${COLORS.line}`,
                borderRadius: "50%",
                fontFamily: FONTS.display,
                fontSize: "17px",
                color: COLORS.ash,
              }}>
                508
              </div>
              <h2 style={{
                margin: "0 0 10px",
                fontFamily: FONTS.display,
                fontSize: "28px",
                fontWeight: 400,
                letterSpacing: "-0.025em",
              }}>
                Your bag is empty.
              </h2>
              <p style={{
                maxWidth: "250px",
                margin: "0 0 30px",
                fontFamily: FONTS.body,
                fontSize: "12px",
                lineHeight: 1.6,
                color: COLORS.ash,
              }}>
                Discover the latest pieces from the archive.
              </p>
              <button
                onClick={() => {
                  closeCart();
                  navigate("shop");
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  maxWidth: "300px",
                  height: "52px",
                  padding: "0 18px",
                  border: `1px solid ${COLORS.line}`,
                  background: "transparent",
                  color: COLORS.bone,
                  cursor: "pointer",
                  fontFamily: FONTS.mono,
                  fontSize: "9px",
                  letterSpacing: "0.11em",
                }}
              >
                <span>SHOP THE COLLECTION</span>
                <b style={{ fontSize: "17px", fontWeight: 400 }}>→</b>
              </button>
            </div>
          ) : (
            /* ITEMS */
            <div style={{ padding: "0 26px" }}>
              {/* SHIPPING MESSAGE */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                padding: "18px 0",
                borderBottom: `1px solid ${COLORS.line}`,
              }}>
                <span style={{
                  width: "5px",
                  height: "5px",
                  flexShrink: 0,
                  borderRadius: "50%",
                  background: COLORS.stamp,
                }} />
                <p style={{
                  margin: 0,
                  fontFamily: FONTS.mono,
                  fontSize: "8px",
                  lineHeight: 1.5,
                  letterSpacing: "0.06em",
                  color: COLORS.ash,
                }}>
                  Complimentary shipping available on selected orders.
                </p>
              </div>

              {cartItems.map((item, index) => {
                const imageUrl = getProductImage(item);
                
                return (
                  <article
                    key={`${item.id}-${index}`}
                    style={{
                      display: "flex",
                      gap: "16px",
                      padding: "20px 0",
                      borderBottom: `1px solid ${COLORS.line}`,
                    }}
                  >
                    {/* PRODUCT IMAGE */}
                    <div style={{
                      width: "92px",
                      height: "116px",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      background: item.images?.[0]?.color || "#151513",
                      border: `1px solid ${COLORS.line}`,
                    }}>
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={item.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                      ) : (
                        <span style={{
                          fontFamily: FONTS.display,
                          fontSize: "20px",
                          color: "rgba(255,255,255,0.12)",
                        }}>
                          {item.id || "508"}
                        </span>
                      )}
                    </div>

                    {/* PRODUCT INFORMATION */}
                    <div style={{
                      flex: 1,
                      minWidth: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}>
                      <div>
                        <h3 style={{
                          margin: "0 0 7px",
                          fontFamily: FONTS.body,
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: 1.4,
                        }}>
                          {item.name}
                        </h3>
                        {item.selectedSize && (
                          <p style={{
                            margin: "0 0 8px",
                            fontFamily: FONTS.mono,
                            fontSize: "8px",
                            letterSpacing: "0.07em",
                            color: COLORS.ash,
                          }}>
                            SIZE — {item.selectedSize}
                          </p>
                        )}
                        <p style={{
                          margin: 0,
                          fontFamily: FONTS.mono,
                          fontSize: "10px",
                          letterSpacing: "0.04em",
                        }}>
                          {item.price}
                        </p>
                      </div>

                      {/* BOTTOM CONTROLS */}
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "10px",
                        marginTop: "15px",
                      }}>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          border: `1px solid ${COLORS.line}`,
                        }}>
                          <button
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                            style={{
                              width: "27px",
                              height: "27px",
                              padding: 0,
                              border: 0,
                              background: "transparent",
                              color: COLORS.bone,
                              fontFamily: FONTS.mono,
                              cursor: "pointer",
                            }}
                          >
                            −
                          </button>
                          <span style={{
                            minWidth: "24px",
                            textAlign: "center",
                            fontFamily: FONTS.mono,
                            fontSize: "9px",
                          }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                            style={{
                              width: "27px",
                              height: "27px",
                              padding: 0,
                              border: 0,
                              background: "transparent",
                              color: COLORS.bone,
                              fontFamily: FONTS.mono,
                              cursor: "pointer",
                            }}
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(index)}
                          style={{
                            padding: 0,
                            border: 0,
                            background: "transparent",
                            fontFamily: FONTS.mono,
                            fontSize: "7px",
                            letterSpacing: "0.1em",
                            color: COLORS.ash,
                            cursor: "pointer",
                          }}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        {/* FOOTER */}
        {cartItems.length > 0 && (
          <footer style={{
            flexShrink: 0,
            padding: "20px 26px 24px",
            background: COLORS.ink,
            borderTop: `1px solid ${COLORS.line}`,
          }}>
            {/* SUBTOTAL */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "7px",
            }}>
              <span style={{
                fontFamily: FONTS.mono,
                fontSize: "9px",
                letterSpacing: "0.12em",
                color: COLORS.ash,
              }}>
                SUBTOTAL
              </span>
              <strong style={{
                fontFamily: FONTS.mono,
                fontSize: "13px",
                fontWeight: 500,
              }}>
                ₦{cartTotal.toLocaleString()}
              </strong>
            </div>

            <p style={{
              margin: "0 0 18px",
              fontFamily: FONTS.mono,
              fontSize: "7px",
              color: COLORS.ash,
            }}>
              Shipping and taxes calculated at checkout.
            </p>

            {/* CHECKOUT */}
            <button
              onClick={() => {
                closeCart();
                navigate("cart");
              }}
              style={{
                width: "100%",
                height: "54px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 18px",
                border: `1px solid ${COLORS.bone}`,
                background: COLORS.bone,
                color: COLORS.ink,
                fontFamily: FONTS.mono,
                fontSize: "9px",
                letterSpacing: "0.13em",
                cursor: "pointer",
              }}
            >
              <span>CHECKOUT</span>
              <span style={{ fontSize: "17px" }}>→</span>
            </button>

            {/* VIEW CART */}
            <button
              onClick={() => {
                closeCart();
                navigate("cart");
              }}
              style={{
                width: "100%",
                height: "38px",
                marginTop: "7px",
                border: 0,
                background: "transparent",
                color: COLORS.ash,
                fontFamily: FONTS.mono,
                fontSize: "7px",
                letterSpacing: "0.13em",
                cursor: "pointer",
              }}
            >
              VIEW FULL BAG
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}