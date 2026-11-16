import React, { useState } from "react";
import { COLORS, FONTS } from "../styles/tokens";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div style={{
        padding: "80px 20px",
        textAlign: "center",
        borderTop: `1px solid ${COLORS.line}`,
        background: COLORS.ink,
      }}>
        <p style={{
          fontFamily: FONTS.display,
          fontSize: "clamp(24px, 4vw, 32px)",
          color: COLORS.bone,
          margin: "0 0 8px",
        }}>
          You're in.
        </p>
        <p style={{
          fontFamily: FONTS.body,
          fontSize: "13px",
          color: COLORS.ash,
          margin: 0,
        }}>
          Welcome to the archive.
        </p>
      </div>
    );
  }

  return (
    <div style={{
      padding: "100px 20px",
      textAlign: "center",
      borderTop: `1px solid ${COLORS.line}`,
      background: COLORS.ink,
    }}>
      <h2 style={{
        fontFamily: FONTS.display,
        fontSize: "clamp(32px, 5vw, 48px)",
        color: COLORS.bone,
        margin: "0 0 12px",
        letterSpacing: "-0.03em",
        fontWeight: "700",
      }}>
        Join the archive.
      </h2>
      
      <p style={{
        fontFamily: FONTS.body,
        fontSize: "13px",
        color: COLORS.ash,
        margin: "0 0 32px",
        maxWidth: "360px",
        marginLeft: "auto",
        marginRight: "auto",
        lineHeight: "1.6",
      }}>
        New drops, restocks, and stories — sent sparingly.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "8px",
          maxWidth: "420px",
          margin: "0 auto",
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
          style={{
            flex: 1,
            minWidth: 0,
            height: "48px",
            padding: "0 16px",
            background: "transparent",
            border: `1px solid ${COLORS.line}`,
            color: COLORS.bone,
            fontFamily: FONTS.body,
            fontSize: "13px",
            outline: "none",
            transition: "border-color 0.3s ease",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = COLORS.bone;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = COLORS.line;
          }}
        />
        <button
          type="submit"
          style={{
            height: "48px",
            padding: "0 24px",
            background: COLORS.bone,
            color: COLORS.ink,
            border: "none",
            fontFamily: FONTS.mono,
            fontSize: "10px",
            letterSpacing: "0.15em",
            fontWeight: "bold",
            cursor: "pointer",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            transition: "opacity 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.85";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}