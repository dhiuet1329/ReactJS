import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { TaiSanContext } from "./contexts/TaiSanContext.jsx";

const taisan = [
  {
    id: 1,
    name: "Tivi",
    price: 1000,
  },
  {
    id: 2,
    name: "Laptop",
    price: 2000,
  },
];
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TaiSanContext.Provider value={taisan} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
