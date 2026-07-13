import { Mail, Github, Linkedin } from "lucide-react";
import Sheet from "./Sheet.jsx";
import { PROFILE, CONTACT_TEXT } from "../content.js";

export default function Contact() {
  return (
    <Sheet id="contact" label="Sheet 05 / Contact">
      <div className="contact-wrap">
        <p className="pf-lede" style={{ marginBottom: 0 }}>
          {CONTACT_TEXT}
        </p>
        <div className="contact-links">
          <a className="pf-btn primary" href={`mailto:${PROFILE.email}`}>
            <Mail size={15} /> {PROFILE.email}
          </a>
          <a
            className="pf-btn"
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            className="pf-btn"
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
        </div>
      </div>
    </Sheet>
  );
}
