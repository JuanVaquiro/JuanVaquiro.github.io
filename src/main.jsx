import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Proyect from "./pages/proyect";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="proyecto" element={<Proyect />} />
        <Route path="experiencia" element={<Experience />} />
        <Route path="contacto" element={<Contact />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
