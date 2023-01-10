import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Proyect from "./pages/proyect";
import Experience from "./pages/experience";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/proyecto" element={<Proyect />} />
        <Route path="/experiencia" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
