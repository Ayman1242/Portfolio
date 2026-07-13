import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PROFILE, SECTIONS } from "../content.js";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="pf-nav">
      <div
        className="pf-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="pf-logo-mark" />
        <span className="pf-logo-text">{PROFILE.name}</span>
      </div>

      <div className={`pf-nav-links ${menuOpen ? "open" : ""}`}>
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            className="pf-nav-link"
            onClick={() => scrollTo(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <button
        className="pf-menu-btn"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
    </nav>
  );
}
