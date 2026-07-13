import Sheet from "./Sheet.jsx";
import { STACK, ABOUT_TEXT } from "../content.js";

export default function About() {
  return (
    <Sheet id="about" label="Sheet 02 / About">
      <p className="pf-lede">{ABOUT_TEXT}</p>
      <div className="stack-grid">
        {STACK.map((g) => (
          <div key={g.group}>
            <div className="stack-group-title">{g.group}</div>
            <div className="stack-items">
              {g.items.map((i) => (
                <span key={i} className="stack-chip">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Sheet>
  );
}
