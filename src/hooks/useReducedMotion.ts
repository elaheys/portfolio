import { useEffect, useState } from "react";

/**
 * Returns true when the visitor has asked their OS to reduce motion.
 * Every animation in this project checks this and falls back to a
 * simple, instant appearance — no movement, no distraction.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}
