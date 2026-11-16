
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS, FONTS } from "../styles/tokens";
import { Tag } from "./Shared";
import { useCart } from "../context/CartContext";

export default function Hero({ videoSrc, posterSrc }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const navigate = useNavigate();
  const { toggleCart, cartCount } = useCart();

  useEffect(() => {
    // Attempt to play video on mount (muted for autoplay)
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, handle silently
        });
      }
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        background: COLORS.ink,
      }}
    >
      {/* Background Video */}
      {videoSrc ? (
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          poster={posterSrc}
          preload="auto"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        /* Fallback pattern background */
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            background:
              "repeating-linear-gradient(135deg, #141412 0px, #141412 2px, #0A0A0A 2px, #0A0A0A 40px)",
            zIndex: 0,
          }}
        />
      )}

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.25) 40%, rgba(10,10,10,0.75) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          gap: "24px",
          zIndex: 2,
        }}
      >
        
        <h1
          style={{
            fontFamily: FONTS.display,
            fontSize: "clamp(40px, 8vw, 96px)",
            color: COLORS.bone,
            margin: 0,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          508ARCHIVES
        </h1>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "14px",
            color: COLORS.ash,
            margin: 0,
            maxWidth: "380px",
            letterSpacing: "0.02em",
            textShadow: "0 1px 10px rgba(0,0,0,0.5)",
          }}
        >
        </p>
        
        {/* Buttons */}
        <div style={{ 
          marginTop: "12px", 
          display: "flex", 
          gap: "12px", 
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {/* Shop Collection Button */}
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
              transition: "all 0.3s ease",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = COLORS.stamp;
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = COLORS.bone;
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Shop Collection
          </button>

          
            
        </div>
      </div>

      {/* Music Toggle Button */}
      {videoSrc && (
        <button
          onClick={toggleSound}
          style={{
            position: "absolute",
            bottom: "24px",
            right: "24px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.9)",
            border: "none",
            color: "#000000",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            transition: "all 0.2s ease",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(4px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 1)";
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.2)";
          }}
          aria-label={isMuted ? "Play music" : "Pause music"}
          title={isMuted ? "Play music" : "Pause music"}
        >
          {isMuted ? (
            // Music note with slash (music off)
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
              <line x1="3" y1="3" x2="21" y2="21" />
            </svg>
          ) : (
            // Music note (music playing)
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          )}
        </button>
      )}

     
    </div>
  );
}