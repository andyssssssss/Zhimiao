import React from "react";
import AnniversaryCounter from "../components/AnniversaryCounter";
import { Link } from "react-router-dom";

export default function Home() {
  console.log("Home loaded");

  return (
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <AnniversaryCounter />
      <Link to="/anxiety">
        <button style={{ marginTop: 40, fontSize: 20 }}>焦虑抑制剂</button>
      </Link>
    </div>
  );
} 