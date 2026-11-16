// 508ARCHIVES — Phase 1 design tokens
// Change a value here and it propagates to every component.

export const COLORS = {
  ink: "#0A0A0A", // primary background
  bone: "#F2F0EA", // off-white / text-on-dark
  ash: "#8C8C86", // soft grey / secondary text
  stamp: "#B8302E", // accent — reserved for CTAs, tags, active states only
  line: "#2A2A28", // hairline dividers on dark
};

export const FONTS = {
  display: "'Archivo Black', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'IBM Plex Mono', monospace",
};

export const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
`;
