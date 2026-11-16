import React, { useState, useRef, useEffect } from "react";
import { COLORS, FONTS } from "../styles/tokens";

// UPDATE THESE PATHS WITH YOUR ACTUAL MEDIA FILES
const LOOKBOOK_FRAMES = [
  { 
    id: "LB-001", 
    type: "image", 
    src: "/images/look1.jpg",
    color: "#1a1a1a" 
  },
  { 
    id: "LB-002", 
    type: "video", 
    src: "/videos/look2.mp4", 
    poster: "/images/poster2.jpg",
    color: "#2a2a2a" 
  },
  { 
    id: "LB-003", 
    type: "image", 
    src: "/images/look3.jpg",
    color: "#3a3a3a" 
  },
  { 
    id: "LB-004", 
    type: "video", 
    src: "/videos/look4.mp4", 
    poster: "/images/poster2.jpg",
    color: "#5a5a5a" 
  },
  // Add more frames here
];

function Frame({ frame, active, onClick, muted = true, controls = false, autoPlay = true }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active && autoPlay) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [active, autoPlay]);

  // VIDEO FRAME
  if (frame.type === "video" && frame.src) {
    return (
      <video
        ref={videoRef}
        src={frame.src}
        poster={frame.poster || undefined}
        muted={muted}
        loop
        playsInline
        controls={controls}
        onClick={onClick}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          cursor: onClick ? "pointer" : "default",
        }}
      />
    );
  }

  // IMAGE FRAME
  if (frame.type === "image" && frame.src) {
    return (
      <img
        src={frame.src}
        alt=""
        onClick={onClick}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          cursor: onClick ? "pointer" : "default",
        }}
      />
    );
  }

  // FALLBACK SWATCH
  return (
    <div
      onClick={onClick}
      style={{
        width: "100%",
        height: "100%",
        background: frame.color || "#222",
        cursor: onClick ? "pointer" : "default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONTS.mono,
        fontSize: "12px",
        color: "rgba(255,255,255,0.3)",
      }}
    >
      {frame.type === "video" ? "VIDEO" : "IMAGE"}
    </div>
  );
}

export default function Lookbook() {
  const [activeFrame, setActiveFrame] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const nextFrame = () => setActiveFrame((p) => (p + 1) % LOOKBOOK_FRAMES.length);
  const prevFrame = () =>
    setActiveFrame((p) => (p - 1 + LOOKBOOK_FRAMES.length) % LOOKBOOK_FRAMES.length);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextFrame();
      if (e.key === "ArrowLeft") prevFrame();
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const current = LOOKBOOK_FRAMES[activeFrame];

  return (
    <div
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        padding: "100px 0",
        borderTop: `1px solid ${COLORS.line}`,
        position: "relative",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "0 24px 40px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: FONTS.display,
            fontSize: "clamp(36px, 6vw, 64px)",
            color: COLORS.bone,
            margin: 0,
            letterSpacing: "-0.03em",
            lineHeight: "1",
            fontWeight: "700",
          }}
        >
          LOOKBOOK
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          padding: "0 24px",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "4px",
        }}
      >
        {LOOKBOOK_FRAMES.map((frame, index) => (
          <div
            key={frame.id}
            style={{
              position: "relative",
              aspectRatio: "4/5",
              overflow: "hidden",
              background: "#111",
            }}
          >
            <Frame
              frame={frame}
              active={false}
              autoPlay={false}
              onClick={() => {
                setActiveFrame(index);
                setLightbox(true);
              }}
            />
            
            {/* Sequence Number */}
            <span
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                fontFamily: FONTS.mono,
                fontSize: "10px",
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.15em",
                pointerEvents: "none",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            
            {/* Video Indicator */}
            {frame.type === "video" && (
              <span
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "4px solid transparent",
                    borderBottom: "4px solid transparent",
                    borderLeft: "6px solid #fff",
                    marginLeft: "2px",
                  }}
                />
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.95)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(90vw, 900px)",
              aspectRatio: "4/5",
              maxHeight: "85vh",
            }}
          >
            <Frame 
              frame={current} 
              active={true} 
              controls={current.type === "video"} 
              muted={false} 
              autoPlay={true}
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevFrame();
            }}
            aria-label="Previous"
            style={{
              position: "fixed",
              left: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            ←
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextFrame();
            }}
            aria-label="Next"
            style={{
              position: "fixed",
              right: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            →
          </button>

          {/* Close Button */}
          <button
            onClick={() => setLightbox(false)}
            aria-label="Close"
            style={{
              position: "fixed",
              top: "24px",
              right: "24px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            ✕
          </button>

          {/* Counter */}
          <div
            style={{
              position: "fixed",
              bottom: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: FONTS.mono,
              fontSize: "10px",
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.2em",
            }}
          >
            {String(activeFrame + 1).padStart(2, "0")} / {String(LOOKBOOK_FRAMES.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </div>
  );
}