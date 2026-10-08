import Glow from "@/components/Glow";
import Typed from "@/components/Typed";
import RagDemo from "@/components/RagDemo";
import Projects from "@/components/Projects";
import CopyEmail from "@/components/CopyEmail";
import { SKILLS, JOURNEY, LINKEDIN, GITHUB } from "@/data/site";

export default function Home() {
  return (
    <>
      <Glow />
      <nav>
        <div className="wrap">
          <a className="logo" href="#top">saniya<span>.bano</span></a>
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#journey">Journey</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a className="btn fill" href="/resume.pdf" download>Resume</a>
        </div>
      </nav>

      <header className="wrap hero" id="top">
        <div>
          <h1>Saniya Bano</h1>
          <p className="role">I build <Typed words={["RAG pipelines", "LLM apps", "ML models", "full-stack products"]} /></p>
          <p className="lede">Electronics Engineering student at HBTU Kanpur, focused on LLM apps, RAG pipelines and applied machine learning. I like taking a model out of a notebook and putting it behind a working interface.</p>
          <div className="cta">
            <a className="btn fill" href="#projects">See my projects</a>
            <a className="btn" href="#contact">Get in touch</a>
          </div>
        </div>
        <RagDemo />
      </header>

      <main className="wrap">
        <section id="projects">
          <h2>Projects</h2>
          <p className="sub">Click a project to see what I built and how.</p>
          <Projects />
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <p className="sub">Tools I have actually used in projects.</p>
          <div className="skills">
            {Object.entries(SKILLS).map(([group, items]) => (
              <div className="sk" key={group}>
                <h3>{group}</h3>
                <div>{items.map((s) => <span key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="journey">
          <h2>Journey</h2>
          <p className="sub">Education, training and leadership in order.</p>
          <div className="tl">
            {JOURNEY.map((j) => (
              <div key={j.t}><b>{j.t}</b><small>{j.s}</small></div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Looking for AI/ML and GenAI internships</h2>
          <p className="sub" style={{ margin: "12px auto 26px" }}>If you have a role or a project where I can help, write to me.</p>
          <div className="cta">
            <CopyEmail />
            <a className="btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>
      </main>
      <footer>Saniya Bano, HBTU Kanpur</footer>
    </>
  );
}
