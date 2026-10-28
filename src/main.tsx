import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/cormorant-garamond/latin-600.css";
import "@fontsource/cormorant-garamond/latin-700.css";
import "@fontsource/cormorant-garamond/latin-600-italic.css";
import "@fontsource-variable/source-sans-3/wght.css";
import "./index.css";
import App from "./App";
import { IdiomaProvider } from "./lib/idioma";

// Cada HTML (/ y /en/) declara su idioma en <html lang>
const lang = document.documentElement.lang.startsWith("en") ? "en" : "es";

// Con JavaScript activo, los bloques .reveal arrancan ocultos y aparecen al hacer scroll
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IdiomaProvider value={lang}>
      <App />
    </IdiomaProvider>
  </StrictMode>
);
