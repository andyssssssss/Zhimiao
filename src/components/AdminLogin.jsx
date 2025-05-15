import { useState } from "react";
import React from "react";

const USERS = [
  { username: "zz", password: "ssy", role: "zz" },
  { username: "miao", password: "mitang", role: "mm" }
];

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    const user = USERS.find(
      u => u.username === username && u.password === password
    );
    if (user) {
      onLogin({ username: user.username, role: user.role });
    } else {
      setError("用户名或密码错误");
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f7f8fa"
    }}>
      <form
        onSubmit={handleLogin}
        style={{
          width: "100%",
          maxWidth: 340,
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          padding: 32,
          boxSizing: "border-box"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 32, fontWeight: 700, color: "#222" }}>管理员登录</h2>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="用户名"
          autoComplete="username"
          style={{
            width: "100%",
            padding: "14px 16px",
            marginBottom: 18,
            border: "1px solid #e0e0e0",
            borderRadius: 8,
            fontSize: 16,
            outline: "none",
            background: "#fafbfc",
            boxSizing: "border-box",
            transition: "border 0.2s"
          }}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="密码"
          autoComplete="current-password"
          style={{
            width: "100%",
            padding: "14px 16px",
            marginBottom: 18,
            border: "1px solid #e0e0e0",
            borderRadius: 8,
            fontSize: 16,
            outline: "none",
            background: "#fafbfc",
            boxSizing: "border-box",
            transition: "border 0.2s"
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px 0",
            background: "linear-gradient(90deg,#6a82fb,#fc5c7d)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: 18,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(250,92,125,0.08)",
            marginBottom: 8,
            transition: "background 0.2s"
          }}
        >
          登录
        </button>
        {error && <div style={{ color: "#e74c3c", marginTop: 8, textAlign: "center", fontWeight: 500 }}>{error}</div>}
      </form>
    </div>
  );
} 