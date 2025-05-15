import React from "react";
import { useState } from "react";
import Timeline from "../components/Timeline";

export default function Anxiety() {
  const [role, setRole] = useState(null);

  if (!role) {
    return (
      <div style={{ textAlign: "center", marginTop: 60 }}>
        <h2>选择你的界面</h2>
        <button onClick={() => setRole("zz")} style={{ margin: 20, fontSize: 24 }}>吱吱</button>
        <button onClick={() => setRole("mm")} style={{ margin: 20, fontSize: 24 }}>猫猫</button>
      </div>
    );
  }

  return <Timeline role={role} />;
} 