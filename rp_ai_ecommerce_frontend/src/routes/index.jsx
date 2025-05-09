import { createBrowserRouter, RouterProvider } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);
export default router;
