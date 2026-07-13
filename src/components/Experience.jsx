import Sheet from "./Sheet.jsx";
import { EXPERIENCE } from "../content.js";

export default function Experience() {
  return (
    <Sheet id="work" label="Sheet 03 / Experience">
      {EXPERIENCE.map((e) => (
        <div className="exp-card" key={e.org}>
          <span className="corner tl" />
          <span className="corner br" />
          <div className="exp-head">
            <span className="exp-role">
              {e.role} · <span className="exp-org">{e.org}</span>
            </span>
            <span className="exp-period mono">{e.period}</span>
          </div>
          <p className="exp-body">{e.body}</p>
        </div>
      ))}
    </Sheet>
  );
}
