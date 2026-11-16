// src/context/ProductContext.jsx
import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products] = useState([
    { 
      id: "001", 
      name: "Archive Tee — 01", 
      price: "₦25,000",
      priceValue: 25000,
      category: "Tee",
      badge: "NEW",
      description: "Premium heavyweight cotton tee with archival graphics.",
      sizes: ["S", "M", "L", "XL"],
      // colors: ["#000000", "#FFFFFF", "#808080"]
      images: [
        { id: 1, url: "/images/Drop1.jpg", color: "#1a1a1a", label: "Front View" },
        { id: 2, url: "/images/Drop2.jpg", color: "#2a2a2a", label: "Back View" }
      ],
      details: [
        "100% Heavyweight Cotton",
        "Oversized Fit",
        "Screen Printed Graphics",
        "Made in Portugal"
      ]
    },
    { 
      id: "002", 
      name: "Archive Cargo", 
      price: "₦48,000",
      priceValue: 48000,
      category: "TrackSuit",
      badge: "HOT",
      description: "Tactical cargo pants with adjustable straps.",
      sizes: ["30", "32", "34", "36"],
      // colors: ["#1a1a1a", "#4a4a4a", "#8B7355"],
      images: [
        { id: 1, url: "/images/Drop2i.jpg", color: "#2a2a2a", label: "Front View" },
        { id: 2, url: "/images/Drop2ii (1).jpg", color: "#2a2a", label: "Back View" },
        { id: 3, url: "/images/Drop2ii (2).jpg", color: "#2a2a2a", label: "Side View" }
      ],
      details: [
        "Cotton-Nylon Blend",
        "Relaxed Fit",
        "8 Pocket Design"
      ]
    },
    { 
      id: "003", 
      name: "Field Jacket 01", 
      price: "₦72,000",
      priceValue: 72000,
      category: "Sweatjort",
      badge: "LIMITED",
      description: "Weather-resistant field jacket with quilted lining.",
      sizes: ["S", "M", "L", "XL"],
      // colors: ["#2a2a2a", "#3d3d3d"],
      images: [
        { id: 1, url: "/images/jort1.jpg", color: "#3a3a3a", label: "side View" },
        { id: 2, url: "/images/jort2.jpg", color: "#3a3a3a", label: "side View" },
        { id: 3, url: "/images/jort3.jpg", color: "#3a3a3a", label: "Front View" }
      ],
      details: [
        "Water-Resistant Shell",
        "Quilted Lining",
        "Multiple Pockets"
      ]
    },
    { 
      id: "004", 
      name: "Archive Cap", 
      price: "₦18,000",
      priceValue: 18000,
      category: "TrackSuit",
      badge: "NEW",
      description: "Embroidered cap with adjustable strap.",
      sizes: ["One Size"],
      colors: ["#000000", "#2a2a2a"],
      images: [
        { id: 1, url: "/images/track1.jpg", color: "#4a4a4a", label: "Front View" },
        { id: 2, url: "/images/track2.jpg", color: "#4a4a4a", label: "Back View" },
        { id: 3, url: "/images/track3.jpg", color: "#4a4a4a", label: "Side View" }
      ],
      details: [
        "100% Cotton",
        "Embroidered Logo",
        "Adjustable Strap"
      ]
    },
  ]);

  const getProductById = (id) => {
    return products.find(p => p.id === id);
  };

  return (
    <ProductContext.Provider value={{ products, getProductById }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
}