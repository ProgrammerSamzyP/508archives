import React, { useState } from "react";
import { COLORS, FONTS } from "../styles/tokens";
import { Tag } from "./Shared";

// Swap for whatever categories 508archives actually sells.
const PLACEHOLDER_CATEGORIES = [
  { id: "01", name: "Tops" },
  { id: "02", name: "Bottoms" },
  { id: "03", name: "Outerwear" },
  { id: "04", name: "Accessories" },
];

function CategoryTile({ category }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        aspectRatio: "4 / 5",
        background: hover ? "#17130F" : "#141210",
        border: `1px solid ${COLORS.line}`,
        cursor: "pointer",
        transition: "background 200ms ease",
        overflow: "hidden",
      }}
    >
      {/* Replace with <img src={category.image} style={{width:"100%",height:"100%",objectFit:"cover"}} /> */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: FONTS.mono,
          fontSize: "11px",
          color: COLORS.line,
          letterSpacing: "0.06em",
        }}
      >
        IMAGE
      </div>

      <div style={{ position: "absolute", top: "16px", left: "16px" }}>
        <Tag>N° {category.id}</Tag>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: "16px",
          right: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.display,
            fontSize: "18px",
            color: COLORS.bone,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
          }}
        >
          {category.name}
        </span>
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "12px",
            color: hover ? COLORS.stamp : COLORS.ash,
            transition: "color 150ms ease",
          }}
        >
          →
        </span>
      </div>
    </div>
  );
}

export default function ShopByCategory({ categories = PLACEHOLDER_CATEGORIES }) {
  return (
    <div style={{ background: COLORS.ink, padding: "96px 40px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "16px",
          marginBottom: "40px",
        }}
      >
        <Tag>N° 005 — NAVIGATE</Tag>
        <h2
          style={{
            fontFamily: FONTS.display,
            fontSize: "28px",
            color: COLORS.bone,
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Shop the archive
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {categories.map((c) => (
          <CategoryTile key={c.id} category={c} />
        ))}
      </div>
    </div>
  );
}
