import React from "react";
import dayjs from "dayjs";

const START_DATE = "2022-05-19";

export default function AnniversaryCounter() {
  const today = dayjs();
  const start = dayjs(START_DATE);
  const days = today.diff(start, "day") + 1;

  return (
    <div>
      <h1>我们已经在一起</h1>
      <h2 style={{ fontSize: 60, color: "#ff69b4" }}>{days} 天</h2>
      <div style={{ color: "#888" }}>（自 {START_DATE} 起）</div>
    </div>
  );
} 