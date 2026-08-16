import React from "react";
import ReactDOM from "react-dom/client";
// Font Awesome, self-hosted rather than pulled from a CDN — see #3. Only the
// two families actually used are imported: `fab` (18 icons) and `fas` (4).
// Importing `all.css` would additionally ship the regular-weight webfont, which
// nothing references.
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
