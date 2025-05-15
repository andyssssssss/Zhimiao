import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, setDoc, collection, getDocs, query, orderBy, deleteDoc, updateDoc } from "firebase/firestore";
import dayjs from "dayjs";

export default function AdminEditor({ user }) {
  const [role, setRole] = useState(user.role);
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [content, setContent] = useState("");
  const [msg, setMsg] = useState("");
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editContent, setEditContent] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      const q = query(collection(db, "diary", role, "entries"), orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
      setPosts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
    fetchPosts();
  }, [role]);

  useEffect(() => {
    if (msg) {
      const timer = setTimeout(() => setMsg(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [msg]);

  async function handleSave() {
    if (!content) return;
    const newPost = {
      date,
      content,
      from: user.username,
      to: role,
      createdAt: new Date()
    };
    await setDoc(doc(db, "diary", role, "entries", date), newPost);
    setMsg("保存成功！");
    setContent("");
    setPosts(prev => [{ id: date, ...newPost }, ...prev.filter(p => p.id !== date)]);
  }

  async function handleDelete(post) {
    if (!window.confirm(`确定要删除 ${post.date} 的帖子吗？`)) return;
    await deleteDoc(doc(db, "diary", role, "entries", post.date));
    setMsg("删除成功");
    setPosts(prev => prev.filter(p => p.id !== post.id));
  }

  function startEdit(post) {
    setEditing(post);
    setEditContent(post.content);
  }

  async function handleEditSave() {
    await updateDoc(doc(db, "diary", role, "entries", editing.date), {
      content: editContent
    });
    setEditing(null);
    setMsg("修改成功");
    setPosts(prev => prev.map(p => p.id === editing.id ? { ...p, content: editContent } : p));
  }

  return (
    <div style={{ maxWidth: 600, margin: "60px auto" }}>
      <h2>写入焦虑抑制剂</h2>
      <div>
        <label>写给：</label>
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="zz">吱吱</option>
          <option value="mm">猫猫</option>
        </select>
      </div>
      <div>
        <label>日期：</label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </div>
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="写下你的独白..."
        style={{ width: "100%", height: 120, marginTop: 10 }}
      />
      <button onClick={handleSave} style={{ marginTop: 10 }}>保存</button>
      {msg && <div style={{ color: "green", marginTop: 10, fontWeight: 600, fontSize: 18 }}>{msg}</div>}

      <h3 style={{ marginTop: 40 }}>历史帖子管理</h3>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {posts.map(post => (
          <li key={post.id} style={{ border: "1px solid #eee", borderRadius: 8, margin: "16px 0", padding: 16, background: "#fafbfc" }}>
            <div style={{ color: "#888" }}>{post.date} by {post.from}</div>
            {editing && editing.id === post.id ? (
              <>
                <textarea
                  value={editContent}
                  onChange={e => setEditContent(e.target.value)}
                  style={{ width: "100%", height: 80, marginTop: 8 }}
                />
                <button onClick={handleEditSave} style={{ marginRight: 8 }}>保存修改</button>
                <button onClick={() => setEditing(null)}>取消</button>
              </>
            ) : (
              <>
                <div style={{ fontSize: 16, margin: "8px 0" }}>{post.content}</div>
                <button onClick={() => startEdit(post)} style={{ marginRight: 8 }}>编辑</button>
                <button onClick={() => handleDelete(post)}>删除</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
} 