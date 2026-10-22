import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// Light is the default (set on <html> in index.html, which also applies a
// saved choice from the theme toggle). ?theme=dark or ?theme=light overrides
// it for this visit. Set before the first render so the WebGL effects pick
// the matching look.
const requestedTheme = new URLSearchParams(window.location.search).get("theme");
if (requestedTheme === "light" || requestedTheme === "dark") {
  document.documentElement.dataset.theme = requestedTheme;
}

// The hero spans the full window; CSS needs the real scrollbar width to do
// that without causing a sideways scroll (100vw includes the scrollbar).
const syncScrollbarWidth = () => {
  const width = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty("--scrollbar-width", `${width}px`);
};
syncScrollbarWidth();
if (typeof ResizeObserver !== "undefined") {
  new ResizeObserver(syncScrollbarWidth).observe(document.documentElement);
} else {
  window.addEventListener("resize", syncScrollbarWidth);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
