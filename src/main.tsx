import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import ComicContextProvider from "./context/comicContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <ComicContextProvider>
        <App />
      </ComicContextProvider>
    </Router>
  </StrictMode>
);
