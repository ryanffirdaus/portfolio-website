"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
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

  const THUMB_MAX_W = "calc(5 * 5rem + 4 * 0.5rem)";

  return (
    <>
      <Reveal className="mb-section-gap space-y-3">
        {/* Main image */}
        <div
          className="relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-dim cursor-zoom-in"
          onClick={() => setLightbox(true)}
        >
          <Image
            key={images[active].src}
            src={images[active].src}
            alt={images[active].alt}
            width={1920}
            height={1080}
            className="w-full aspect-video object-contain transition-opacity duration-300"
            priority
          />
          <div className="absolute bottom-3 right-3 flex items-center justify-center w-8 h-8 rounded-lg bg-surface/80 border border-outline-variant/30 text-on-surface backdrop-blur-sm pointer-events-none">
            <span className="material-symbols-outlined text-[16px]">
              zoom_in
            </span>
          </div>
        </div>

        {/* Image caption */}
        <p className="text-center text-sm text-on-surface-variant">
          {getImageLabel(images[active].src)}
        </p>

        {/* Thumbnail strip */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous image"
              onClick={prev}
              className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg border border-outline-variant/30 bg-surface text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>
            </button>

            <div className="relative overflow-hidden">
              <div
                ref={thumbRef}
                className="flex gap-2 overflow-x-auto hide-scrollbar select-none"
                style={{ maxWidth: THUMB_MAX_W }}
                onClickCapture={onThumbClickCapture}
              >
                {images.map(({ src, alt }, idx) => (
                  <button
                    key={alt}
                    onClick={() => go(idx)}
                    aria-label={alt}
                    className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      idx === active
                        ? "border-primary opacity-100 scale-[1.03]"
                        : "border-outline-variant/30 opacity-60 hover:opacity-90 hover:border-outline-variant"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={200}
                      height={120}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </button>
                ))}
              </div>
              <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-linear-to-r from-surface to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-linear-to-l from-surface to-transparent" />
            </div>

            <button
              aria-label="Next image"
              onClick={next}
              className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg border border-outline-variant/30 bg-surface text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </Reveal>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setLightbox(false)}
        >
          {/* Top bar */}
          <div
            className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-white/60 text-sm tabular-nums">
              {active + 1} / {images.length}
            </span>
            <button
              aria-label="Close lightbox"
              onClick={() => setLightbox(false)}
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">
                close
              </span>
            </button>
          </div>

          {/* Image */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              key={images[active].src}
              src={images[active].src}
              alt={images[active].alt}
              width={1920}
              height={1080}
              className="max-w-[85vw] max-h-[70vh] w-auto h-auto object-contain rounded-xl"
              priority
            />
          </div>

          {/* Image caption */}
          <p
            className="text-center text-sm text-white/60"
            onClick={(e) => e.stopPropagation()}
          >
            {getImageLabel(images[active].src)}
          </p>

          {/* Thumbnail strip in lightbox */}
          <div
            className="flex justify-center px-4 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-200 active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">
                  arrow_back
                </span>
              </button>

              <div className="relative overflow-hidden">
                <div
                  ref={lightboxThumbRef}
                  className="flex gap-2 overflow-x-auto hide-scrollbar select-none"
                  style={{ maxWidth: THUMB_MAX_W }}
                  onClickCapture={onLightboxClickCapture}
                >
                  {images.map(({ src, alt }, idx) => (
                    <button
                      key={alt}
                      onClick={() => go(idx)}
                      aria-label={alt}
                      className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        idx === active
                          ? "border-white opacity-100 scale-[1.05]"
                          : "border-white/20 opacity-50 hover:opacity-80 hover:border-white/40"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={alt}
                        width={200}
                        height={120}
                        className="w-full h-full object-cover pointer-events-none"
                      />
                    </button>
                  ))}
                </div>
                <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-linear-to-r from-black/60 to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/60 to-transparent" />
              </div>

              <button
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-200 active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
