"use client";
import { useEffect, useState } from "react";

const STAGES = ["Load URLs", "Split chunks", "Embed", "FAISS search", "Groq answer"];
const DATA: Record<string, string[]> = {
  "What did the RBI decide?": [
    "Fetching 3 article URLs... <i>3 pages loaded</i>",
    "RecursiveCharacterTextSplitter -> <i>42 chunks</i>",
    "all-MiniLM-L6-v2 turns each chunk into a 384-dim vector",
    "Top matches by similarity:<br><em>chunk 7</em> repo rate unchanged<br><em>chunk 19</em> inflation outlook",
    "<i>Answer:</i> The RBI kept the repo rate unchanged and flagged inflation as the main watch point.<br><i>Sources:</i> article 1, article 3",
  ],
  "Which stocks moved today?": [
    "Fetching 2 article URLs... <i>2 pages loaded</i>",
    "RecursiveCharacterTextSplitter -> <i>28 chunks</i>",
    "all-MiniLM-L6-v2 turns each chunk into a 384-dim vector",
    "Top matches by similarity:<br><em>chunk 4</em> banking stocks rally<br><em>chunk 11</em> IT sector dips",
    "<i>Answer:</i> Banking stocks gained while IT names slipped.<br><i>Sources:</i> article 2",
  ],
};
const QUESTIONS = Object.keys(DATA);

export default function RagDemo() {
  const [q, setQ] = useState<string | null>(null);
  const [i, setI] = useState(-1);
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    if (!auto || i >= STAGES.length - 1) return;
    const t = setTimeout(() => setI((x) => x + 1), 1300);
    return () => clearTimeout(t);
  }, [auto, i]);

  const ask = (question: string) => { setQ(question); setI(0); setAuto(true); };
  const jump = (idx: number) => { setQ((cur) => cur ?? QUESTIONS[0]); setAuto(false); setI(idx); };

  return (
    <div className="rag" aria-label="Interactive RAG demo">
      <h3>How my News Research Tool answers</h3>
      <p className="hint">Pick a question, then watch the pipeline run. You can also click any stage.</p>
      <div className="q">
        {QUESTIONS.map((x) => <button key={x} onClick={() => ask(x)}>{x}</button>)}
      </div>
      <div className="steps">
        {STAGES.map((s, idx) => (
          <button key={s} onClick={() => jump(idx)}
            className={"step" + (idx === i ? " on" : idx < i ? " done" : "")}>{s}</button>
        ))}
      </div>
      <div className="out" aria-live="polite"
        dangerouslySetInnerHTML={{ __html: q && i >= 0 ? DATA[q][i] : "Waiting for a question..." }} />
    </div>
  );
}
