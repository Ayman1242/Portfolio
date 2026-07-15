import { useEffect, useState } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { PROFILE } from "../content.js";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="pf-hero">
      <div className="pf-eyebrow">Sheet 01 / Overview</div>
      <h1 className="pf-title">
        {PROFILE.name} — <span className="hl">{PROFILE.role}</span>
      </h1>
      <p className="pf-sub">{PROFILE.focus}</p>

      <div className="pf-cta-row">
        <button className="pf-btn primary" onClick={() => scrollTo("work")}>
          My Work <ArrowUpRight size={15} />
        </button>
        <button className="pf-btn" onClick={() => scrollTo("contact")}>
          Get in touch
        </button>
        <a className="pf-btn" href={PROFILE.resume} download>
          Download my Resume!
        </a>
      </div>
    </header>
  );
}
