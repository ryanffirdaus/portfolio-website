"use client";

import { useRef } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import type { GalleryImage } from "@/types";

interface Props {
  images: GalleryImage[];
}

export default function Gallery({ images }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { offsetWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: direction === "right" ? offsetWidth : -offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <Reveal className="mb-section-gap">
      <div className="relative group">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 hide-scrollbar pb-4 scroll-smooth"
        >
          {images.map(({ src, alt }) => (
            <div
              key={alt}
              className="snap-center shrink-0 w-full md:w-[85%] lg:w-[70%] overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt={alt}
                width={1400}
                height={500}
                className="w-full h-[300px] md:h-[500px] rounded-xl border border-outline-variant/30 object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>

        {/* Prev */}
        <button
          aria-label="Previous image"
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-surface/90 hover:bg-primary hover:text-on-primary text-on-surface p-3 rounded-full shadow-lg backdrop-blur transition-all duration-300 z-10 border border-outline-variant/20 hover:scale-110 active:scale-95 opacity-0 md:opacity-100 group-hover:opacity-100"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>

        {/* Next */}
        <button
          aria-label="Next image"
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-surface/90 hover:bg-primary hover:text-on-primary text-on-surface p-3 rounded-full shadow-lg backdrop-blur transition-all duration-300 z-10 border border-outline-variant/20 hover:scale-110 active:scale-95 opacity-0 md:opacity-100 group-hover:opacity-100"
        >
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </Reveal>
  );
}
