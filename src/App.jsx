import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Anxiety from "./pages/Anxiety";
import Admin from "./pages/Admin";

function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: 56,
      background: "#fff",
      borderBottom: "1px solid #eee",
      display: "flex",
      alignItems: "center",
      zIndex: 1000,
      padding: "0 24px",
      boxSizing: "border-box"
    }}>
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#333", fontWeight: 600, fontSize: 20 }}>
          Miao & Zhi 主页
        </Link>
      </div>
      <Link to="/admin" style={{ marginLeft: 16, display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 20, background: "#f5f5f7", textDecoration: "none" }} title="管理员入口">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="7.5" cy="15.5" r="2.5" />
          <path d="M21 2l-9.6 9.6a5 5 0 1 0 2.1 2.1L22 4z" />
        </svg>
      </Link>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ paddingTop: 56 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anxiety" element={<Anxiety />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 