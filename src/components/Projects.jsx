import { ArrowUpRight } from "lucide-react";
import Sheet from "./Sheet.jsx";
import { PROJECTS } from "../content.js";

export default function Projects() {
  return (
    <Sheet id="projects" label="Sheet 04 / Projects">
      <div className="proj-grid">
        {PROJECTS.map((p) => (
          <a className="proj-card" href={p.link} key={p.name}>
            <div className="proj-name">
              {p.name} <ArrowUpRight size={16} color="#8a96ac" />
            </div>
            <span className="proj-tag">{p.tag}</span>
            <p className="proj-body">{p.body}</p>
          </a>
        ))}
      </div>
    </Sheet>
  );
}
