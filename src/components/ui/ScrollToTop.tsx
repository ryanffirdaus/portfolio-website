"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-15 right-15 z-50 flex items-center justify-center w-11 h-11 rounded-lg border border-outline-variant/50 bg-surface-container text-on-surface-variant hover:border-primary hover:text-on-primary hover:bg-primary shadow-md transition-all duration-200"
    >
      <span className="material-symbols-outlined text-[20px]">
        arrow_upward
      </span>
    </button>
  );
}
