import React from "react";
import { COLORS, FONTS } from "../styles/tokens";

export default function BrandStatement() {
  const statements = [
    "NOT FOR EVERYONE",
    "BUILT FOR THE FEW",
    "WE DON'T FOLLOW",
    "WE CREATE IT",
    "NOT JUST WORN",
    "ARCHIVED",
    "MOVE DIFFERENT",
  ];

  return (
    <div
      style={{
        background: COLORS.ink,
        padding: "40px 0",
        borderTop: `1px solid ${COLORS.line}`,
        borderBottom: `1px solid ${COLORS.line}`,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Marquee Row */}
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marquee 15s linear infinite",
          width: "max-content",
        }}
      >
        {/* Duplicate content for seamless loop */}
        {[...statements, ...statements, ...statements, ...statements].map((statement, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              padding: "0 20px",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: FONTS.display,
                fontSize: "clamp(24px, 3vw, 36px)",
                color: index % 2 === 0 ? COLORS.bone : "transparent",
                WebkitTextStroke: index % 2 === 0 ? "none" : `1px ${COLORS.bone}`,
                letterSpacing: "-0.01em",
                fontWeight: "700",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {statement}
            </span>
            
            {/* Separator Dot */}
            <span
              style={{
                width: "6px",
                height: "6px",
                background: COLORS.stamp,
                borderRadius: "50%",
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}