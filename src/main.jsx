import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// Theme for testing: ?theme=light (dark is the default). Set before the first
// render so the WebGL effects pick the matching look.
const requestedTheme = new URLSearchParams(window.location.search).get("theme");
if (requestedTheme === "light" || requestedTheme === "dark") {
  document.documentElement.dataset.theme = requestedTheme;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
