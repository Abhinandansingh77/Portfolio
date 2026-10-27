import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// The site is light only: index.html sets data-theme="light" on <html>.

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
