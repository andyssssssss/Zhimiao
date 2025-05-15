import React from "react";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import DiaryCard from "./DiaryCard";

export default function Timeline({ role }) {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const q = query(collection(db, "diary", role, "entries"), orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
      setDiaries(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
    fetchData();
  }, [role]);

  return (
    <div style={{ display: "flex", margin: 40 }}>
      <div style={{ minWidth: 120, borderRight: "1px solid #eee", paddingRight: 20 }}>
        <h3>时间轴</h3>
        {diaries.map(d => (
          <div key={d.id} style={{ margin: "20px 0", color: "#888" }}>{d.date}</div>
        ))}
      </div>
      <div style={{ flex: 1, paddingLeft: 40 }}>
        {diaries.map(d => (
          <DiaryCard key={d.id} date={d.date} content={d.content} from={d.from} />
        ))}
      </div>
    </div>
  );
} 