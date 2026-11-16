// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import { COLORS, FONTS } from "../styles/tokens";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0A0A0A",
        borderTop: `1px solid ${COLORS.line}`,
        color: COLORS.bone,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 40px 32px",
        }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr 0.8fr 0.8fr",
            gap: "40px",
            paddingBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: "inline-block", marginBottom: "16px" }}>
              <img
                src="/images/logo.png"
                alt="508 Archives"
                style={{ height: "28px", width: "auto", objectFit: "contain" }}
              />
            </Link>
            <p
              style={{
                fontFamily: FONTS.body,
                fontSize: "13px",
                lineHeight: "1.6",
                color: COLORS.ash,
                margin: "0 0 20px",
                maxWidth: "200px",
              }}
            >
              Not just worn. Archived.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <SocialLink label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </SocialLink>
              <SocialLink label="Twitter">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 3h3l-6.5 7.4L22 21h-5.9l-4.6-6-5.3 6H3l6.9-7.9L2.5 3h6l4.2 5.5L18 3z" />
                </svg>
              </SocialLink>
              <SocialLink label="TikTok">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </SocialLink>
            </div>
          </div>

          <FooterColumn
            heading="Shop"
            links={[
              { to: "/shop", label: "All Products" },
              { to: "/collections", label: "Collections" },
              { to: "/lookbook", label: "Lookbook" },
            ]}
          />

          <FooterColumn
            heading="Help"
            links={[
              { to: "/shipping", label: "Shipping" },
              { to: "/returns", label: "Returns" },
              { to: "/contact", label: "Contact" },
            ]}
          />

          <FooterColumn
            heading="Company"
            links={[
              { to: "/about", label: "About" },
              { to: "/faq", label: "FAQ" },
              { to: "/privacy", label: "Privacy" },
            ]}
          />
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: `1px solid ${COLORS.line}`,
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <p
            style={{
              fontFamily: FONTS.mono,
              fontSize: "9px",
              color: COLORS.ash,
              margin: 0,
              letterSpacing: "0.1em",
            }}
          >
            © 2026 508 ARCHIVES
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <FooterLink to="/terms">Terms</FooterLink>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}

function FooterColumn({ heading, links }) {
  return (
    <div>
      <h4
        style={{
          fontFamily: FONTS.mono,
          fontSize: "9px",
          color: COLORS.ash,
          letterSpacing: "0.18em",
          margin: "0 0 14px",
          textTransform: "uppercase",
        }}
      >
        {heading}
      </h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {links.map((link) => (
          <FooterLink key={link.to} to={link.to}>
            {link.label}
          </FooterLink>
        ))}
      </div>
    </div>
  );
}

function SocialLink({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      onClick={(e) => e.preventDefault()}
      style={{
        color: COLORS.ash,
        display: "flex",
        transition: "color 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = COLORS.bone;
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = COLORS.ash;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {children}
    </a>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      style={{
        fontFamily: FONTS.body,
        fontSize: "12px",
        color: COLORS.ash,
        textDecoration: "none",
        transition: "color 0.3s ease",
        width: "fit-content",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.bone)}
      onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.ash)}
    >
      {children}
    </Link>
  );
}