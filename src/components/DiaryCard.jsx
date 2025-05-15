import React from "react";
export default function DiaryCard({ date, content, from }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: 10,
      marginBottom: 30,
      padding: 20,
      background: "#fff"
    }}>
      <div style={{ color: "#aaa", marginBottom: 10 }}>{date} {from && <span>by {from}</span>}</div>
      <div style={{ fontSize: 18 }}>{content}</div>
    </div>
  );
} 