"use client";
import { useEffect, useState } from "react";

export default function Typed({ words }: { words: string[] }) {
  const [w, setW] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[w];
    let delay = del ? 40 : 75;
    if (!del && n === word.length) delay = 1400;
    const t = setTimeout(() => {
      if (!del && n === word.length) return setDel(true);
      if (del && n === 0) { setDel(false); return setW((w + 1) % words.length); }
      setN(n + (del ? -1 : 1));
    }, delay);
    return () => clearTimeout(t);
  }, [n, del, w, words]);

  return <b className="caret">{words[w].slice(0, n)}</b>;
}
