import { PROFILE } from "../content.js";

export default function Footer() {
  return (
    <footer className="pf-footer">
      <span>
        © {new Date().getFullYear()} {PROFILE.name}. Built with React.
      </span>
      <span>{PROFILE.location}</span>
    </footer>
  );
}
