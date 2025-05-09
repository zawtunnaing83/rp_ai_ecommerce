import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Context from "./context";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={{}}>
        <ToastContainer position="top-center" />
        <Header />

        <main className="min-h-[calc(100vh-120px)] pt-16">
          <App />
        </main>

        <Footer />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
