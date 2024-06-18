import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
