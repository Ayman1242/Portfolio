import { useState } from "react";
import { Github, Linkedin, Copy, Check } from "lucide-react";
import Sheet from "./Sheet.jsx";
import { PROFILE, CONTACT_TEXT } from "../content.js";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Sheet id="contact" label="Sheet 05 / Contact">
      <div className="contact-wrap">
        <p className="pf-lede" style={{ marginBottom: 0 }}>
          {CONTACT_TEXT}
        </p>
        <div className="contact-links">
          <button className="pf-btn primary" onClick={copyEmail}>
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? "Copied!" : PROFILE.email}
          </button>
          <a className="pf-btn" href={PROFILE.github} target="_blank" rel="noreferrer">
            <Github size={15} /> GitHub
          </a>
          <a className="pf-btn" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={15} /> LinkedIn
          </a>
        </div>
      </div>
    </Sheet>
  );
}