"use client";
import { useState } from "react";
import { EMAIL } from "@/data/site";

export default function CopyEmail() {
  const [msg, setMsg] = useState("");
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setMsg("Email copied: " + EMAIL); }
    catch { window.location.href = "mailto:" + EMAIL; }
  };
  return (
    <>
      <button className="btn fill" onClick={copy}>Copy my email</button>
      <p className="toast" role="status">{msg}</p>
    </>
  );
}
