"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import type { GalleryImage } from "@/types";

interface Props {
  images: GalleryImage[];
}

export default function Gallery({ images }: Props) {
  const [active, setActive] = useState(0);
  const thumbRef = useRef<HTMLDivElement>(null);

  const go = (index: number) => {
    setActive(index);
    // scroll the clicked thumbnail into view
    const container = thumbRef.current;
    if (!container) return;
    const thumb = container.children[index] as HTMLElement;
    thumb?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const prev = () => go((active - 1 + images.length) % images.length);
  const next = () => go((active + 1) % images.length);

  return (
    <Reveal className="mb-section-gap space-y-3">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-dim">
        <Image
          key={images[active].src}
          src={images[active].src}
          alt={images[active].alt}
          width={1400}
          height={500}
          className="w-full h-75 md:h-125 object-cover transition-opacity duration-300"
          priority
        />
      </div>

      {/* Thumbnail strip */}
      <div className="relative group flex items-center gap-2">
        {/* Prev */}
        <button
          aria-label="Previous image"
          onClick={prev}
          className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg border border-outline-variant/30 bg-surface text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-200 active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]">
            arrow_back
          </span>
        </button>

        {/* Scrollable thumbnails */}
        <div className="relative flex-1 overflow-hidden">
          <div
            ref={thumbRef}
            className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth"
          >
            {images.map(({ src, alt }, idx) => (
              <button
                key={alt}
                onClick={() => go(idx)}
                aria-label={alt}
                className={`shrink-0 w-20 h-14 md:w-28 md:h-18 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
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
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Scroll fade hints */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-linear-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-linear-to-l from-surface to-transparent" />
        </div>

        {/* Next */}
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
    </Reveal>
  );
}
