import React, { useState } from "react";
import { COLORS, FONTS } from "../styles/tokens";

export function Tag({ children, style }) {
  return (
    <span
      style={{
        fontFamily: FONTS.mono,
        fontSize: "11px",
        letterSpacing: "0.08em",
        color: COLORS.stamp,
        border: `1px solid ${COLORS.stamp}`,
        padding: "3px 8px",
        display: "inline-block",
        textTransform: "uppercase",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export function PrimaryButton({ children, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: FONTS.body,
        fontWeight: 600,
        fontSize: "13px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        background: hover ? COLORS.bone : COLORS.stamp,
        color: hover ? COLORS.stamp : COLORS.bone,
        border: `1px solid ${COLORS.stamp}`,
        padding: "14px 30px",
        cursor: "pointer",
        transition: "all 150ms ease",
      }}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: FONTS.body,
        fontWeight: 600,
        fontSize: "13px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        background: "transparent",
        color: COLORS.bone,
        border: `1px solid ${hover ? COLORS.bone : COLORS.ash}`,
        padding: "14px 30px",
        cursor: "pointer",
        transition: "all 150ms ease",
      }}
    >
      {children}
    </button>
  );
}

export function GhostButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: FONTS.mono,
        fontSize: "12px",
        letterSpacing: "0.04em",
        background: "transparent",
        color: COLORS.ash,
        border: "none",
        borderBottom: `1px solid ${COLORS.ash}`,
        padding: "4px 0",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
