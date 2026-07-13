import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

/**
 * Wraps a page section in the "drawing sheet" treatment:
 * a labeled header with corner brackets, and a fade/slide-in
 * reveal when the section scrolls into view.
 */
export default function Sheet({ id, label, children, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <section id={id} className={`sheet ${className}`}>
      <div className="sheet-label">
        <span className="sheet-label-text">{label}</span>
      </div>
      <div ref={ref} className={`sheet-body ${visible ? "in" : ""}`}>
        {children}
      </div>
    </section>
  );
}
