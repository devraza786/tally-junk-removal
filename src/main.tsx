import React from "react";
import ReactDOM from "react-dom/client";
import { router, RouterProvider } from "./router";
import "./styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
