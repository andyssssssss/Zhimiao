import React, { useState, useEffect } from "react";
import AdminLogin from "../components/AdminLogin";
import AdminEditor from "../components/AdminEditor";

export default function Admin() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("adminUser");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("adminUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("adminUser");
    }
  }, [user]);

  if (!user) {
    return <AdminLogin onLogin={setUser} />;
  }
  return <AdminEditor user={user} />;
} 