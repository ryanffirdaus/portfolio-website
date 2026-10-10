"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { button } from "@/components/ui/styles";
import type { GalleryImage } from "@/types";

interface Props {
  images: GalleryImage[];
}

// Attaches drag-to-scroll imperatively. Call inside useEffect with the element.
function attachDragScroll(el: HTMLDivElement, didDrag: { current: boolean }) {
  el.style.cursor = "grab";
  let dragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const onMouseDown = (e: MouseEvent) => {
    dragging = true;
    didDrag.current = false;
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
    el.style.cursor = "grabbing";
  };
  const onMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    e.preventDefault();
    const walk = e.pageX - el.offsetLeft - startX;
    if (Math.abs(walk) > 3) didDrag.current = true;
    el.scrollLeft = scrollLeft - walk;
  };
  const onStop = () => {
    dragging = false;
    el.style.cursor = "grab";
  };

  el.addEventListener("mousedown", onMouseDown);
  el.addEventListener("mousemove", onMouseMove);
  el.addEventListener("mouseup", onStop);
  el.addEventListener("mouseleave", onStop);

  return () => {
    el.removeEventListener("mousedown", onMouseDown);
    el.removeEventListener("mousemove", onMouseMove);
    el.removeEventListener("mouseup", onStop);
    el.removeEventListener("mouseleave", onStop);
  };
}

function getImageLabel(src: string) {
  const name =
    src
      .split("/")
      .pop()
      ?.replace(/\.[^.]+$/, "") ?? "";
  return name
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function Gallery({ images }: Props) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  // Refs defined directly in the component to satisfy React Compiler
  const thumbRef = useRef<HTMLDivElement>(null);
  const thumbDidDrag = useRef(false);
  const lightboxThumbRef = useRef<HTMLDivElement>(null);
  const lightboxDidDrag = useRef(false);

  useEffect(() => {
    if (!thumbRef.current) return;
    return attachDragScroll(thumbRef.current, thumbDidDrag);
  }, []);

  useEffect(() => {
    if (!lightbox || !lightboxThumbRef.current) return;
    return attachDragScroll(lightboxThumbRef.current, lightboxDidDrag);
  }, [lightbox]);

  const onThumbClickCapture = useCallback((e: React.MouseEvent) => {
    if (thumbDidDrag.current) {
      e.stopPropagation();
      thumbDidDrag.current = false;
    }
  }, []);

  const onLightboxClickCapture = useCallback((e: React.MouseEvent) => {
    if (lightboxDidDrag.current) {
      e.stopPropagation();
      lightboxDidDrag.current = false;
    }
  }, []);

  const scrollIntoView = (
    ref: React.RefObject<HTMLDivElement | null>,
    index: number,
  ) => {
    const el = ref.current;
    if (!el) return;
    (el.children[index] as HTMLElement)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const go = (index: number) => {
    setActive(index);
    scrollIntoView(thumbRef, index);
    if (lightbox) scrollIntoView(lightboxThumbRef, index);
  };

  const prev = () => go((active - 1 + images.length) % images.length);
  const next = () => go((active + 1) % images.length);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Escape") setLightbox(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lightbox, active],
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    window.dispatchEvent(
      new Event(lightbox ? "lightbox-open" : "lightbox-close"),
    );
    if (lightbox) scrollIntoView(lightboxThumbRef, active);
    return () => {
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox]);

  const THUMB_MAX_W = "calc(6 * 6rem + 5 * 0.5rem)";

  return (
    <>
      <section aria-label="Screenshots">
        <button
          type="button"
          aria-label="Open image full screen"
          className="group relative block w-full cursor-zoom-in overflow-hidden rounded-card bg-panel"
          onClick={() => setLightbox(true)}
        >
          <Image
            key={images[active].src}
            src={images[active].src}
            alt={images[active].alt}
            width={1920}
            height={1080}
            sizes="(min-width: 1344px) 1296px, 100vw"
            className="aspect-video w-full object-contain"
            priority
          />
          <span className="absolute top-4 right-4 z-10 rounded-input border border-pewter bg-void p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <Icon name="expand" />
          </span>
        </button>

        <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-body-sm text-fog">
            <span className="text-white tabular-nums">
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="text-muted"> / {String(images.length).padStart(2, "0")}</span>
            <span className="ml-3">{getImageLabel(images[active].src)}</span>
          </p>

          <div className="flex max-w-full items-center gap-2">
            <button aria-label="Previous image" onClick={prev} className={button.tool}>
              <Icon name="arrow-left" />
            </button>
            <div
              ref={thumbRef}
              className="hide-scrollbar flex gap-2 overflow-x-auto select-none"
              style={{ maxWidth: THUMB_MAX_W }}
              onClickCapture={onThumbClickCapture}
            >
              {images.map(({ src, alt }, idx) => (
                <button
                  key={alt}
                  onClick={() => go(idx)}
                  aria-label={alt}
                  aria-current={idx === active}
                  className={`h-14 w-24 shrink-0 overflow-hidden rounded-input border-2 transition-opacity ${
                    idx === active
                      ? "border-signal"
                      : "border-transparent opacity-50 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    width={200}
                    height={120}
                    className="pointer-events-none h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <button aria-label="Next image" onClick={next} className={button.tool}>
              <Icon name="arrow-right" />
            </button>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-void/95 px-4"
          onClick={() => setLightbox(false)}
        >
          <div
            className="absolute inset-x-0 top-0 flex items-center justify-between px-6 py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-body-sm text-fog tabular-nums">
              {active + 1} / {images.length} · {getImageLabel(images[active].src)}
            </span>
            <button
              aria-label="Close"
              onClick={() => setLightbox(false)}
              className={button.tool}
            >
              <Icon name="close" size={18} />
            </button>
          </div>

          <div onClick={(e) => e.stopPropagation()}>
            <Image
              key={images[active].src}
              src={images[active].src}
              alt={images[active].alt}
              width={1920}
              height={1080}
              className="h-auto max-h-[72vh] w-auto max-w-[90vw] rounded-chip object-contain"
              priority
            />
          </div>

          <div
            className="flex max-w-full items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button aria-label="Previous image" onClick={prev} className={button.tool}>
              <Icon name="arrow-left" />
            </button>
            <div
              ref={lightboxThumbRef}
              className="hide-scrollbar flex gap-2 overflow-x-auto select-none"
              style={{ maxWidth: THUMB_MAX_W }}
              onClickCapture={onLightboxClickCapture}
            >
              {images.map(({ src, alt }, idx) => (
                <button
                  key={alt}
                  onClick={() => go(idx)}
                  aria-label={alt}
                  aria-current={idx === active}
                  className={`h-14 w-24 shrink-0 overflow-hidden rounded-input border-2 transition-opacity ${
                    idx === active
                      ? "border-signal"
                      : "border-transparent opacity-50 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    width={200}
                    height={120}
                    className="pointer-events-none h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <button aria-label="Next image" onClick={next} className={button.tool}>
              <Icon name="arrow-right" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
