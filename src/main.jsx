import React from "react";
import ReactDOM from "react-dom/client";
import MouseEffect from "./MouseEffect";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <MouseEffect />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
