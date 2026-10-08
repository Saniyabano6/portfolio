"use client";
import { useState } from "react";
import { PROJECTS } from "@/data/site";

const CATS = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.cat)))];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<string | null>(PROJECTS[0].name);
  const shown = PROJECTS.filter((p) => active === "All" || p.cat === active);

  return (
    <>
      <div className="chips">
        {CATS.map((c) => (
          <button key={c} className={"chip" + (c === active ? " on" : "")} onClick={() => setActive(c)}>{c}</button>
        ))}
      </div>
      <div>
        {shown.map((p) => {
          const isOpen = open === p.name;
          return (
            <div key={p.name} className={"proj" + (isOpen ? " open" : "")}>
              <button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : p.name)}>
                <div>
                  <h3>{p.name}{p.wip && <span className="tag">in progress</span>}</h3>
                  <div className="stack">{p.stack}</div>
                </div>
                <span className="plus" aria-hidden="true">+</span>
              </button>
              <div className="detail">
                <div>
                  <ul>{p.pts.map((x) => <li key={x}>{x}</li>)}</ul>
                  <div className="links">
                    {p.gh
                      ? <a href={p.gh} target="_blank" rel="noopener noreferrer">View code</a>
                      : <span>Code will be added soon</span>}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
