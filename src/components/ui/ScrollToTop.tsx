"use client";

import { useState, useEffect } from "react";
import Icon from "@/components/ui/Icon";
import { button } from "@/components/ui/styles";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    const onOpen = () => setLightboxOpen(true);
    const onClose = () => setLightboxOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("lightbox-open", onOpen);
    window.addEventListener("lightbox-close", onClose);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("lightbox-open", onOpen);
      window.removeEventListener("lightbox-close", onClose);
    };
  }, []);

  if (!visible || lightboxOpen) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`${button.tool} fixed right-6 bottom-6 z-40 bg-void`}
    >
      <Icon name="arrow-up" size={18} />
    </button>
  );
}
