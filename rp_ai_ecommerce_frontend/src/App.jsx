import { useState } from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { SingUp } from "./pages/SingUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
      </Routes>
    </>
  );
}

export default App;
