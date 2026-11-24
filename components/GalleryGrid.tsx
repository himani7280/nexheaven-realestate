"use client";

import { useCallback, useEffect, useState } from "react";
import { HOME, IMG } from "@/data/data";
import { ChevronRightIcon, CloseIcon } from "@/lib/icons";
import { Photo } from "./Photo";
import { Stagger, StaggerItem } from "./Motion";

const { items } = HOME.gallery;

/* Gallery mosaic layout */
const TILE_CLASSES = [
  "col-span-2 aspect-[16/10] lg:col-span-1 lg:row-span-2 lg:aspect-auto",
  "aspect-[4/3] lg:aspect-auto",
  "aspect-[4/3] lg:aspect-auto",
  "aspect-[4/3] lg:aspect-auto",
  "aspect-[4/3] lg:aspect-auto",
] as const;

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback((dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close, step]);

  const current = active === null ? null : items[active];

  return (
    <>
      <Stagger className="grid grid-cols-2 gap-3 sm:gap-4 lg:h-[clamp(400px,34vw,540px)] lg:grid-cols-[1.55fr_1fr_1fr] lg:grid-rows-2">
        {items.map((item, i) => (
          <StaggerItem key={item.image} className={`group relative overflow-hidden rounded-xl shadow-[0_14px_34px_-24px_rgba(60,10,30,0.5)] ${TILE_CLASSES[i] ?? TILE_CLASSES[1]}`}>
            <button type="button" onClick={() => setActive(i)} aria-label={`View image: ${item.alt}`} className="absolute inset-0 z-10 cursor-zoom-in">
              <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(60,10,30,0.55)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-4 right-4 translate-y-3 text-left text-[14px] font-semibold text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">{item.alt}</span>
            </button>
            <Photo src={IMG[item.image]} alt={item.alt} sizes="(min-width: 1024px) 40vw, 50vw" className="transition-transform duration-700 ease-out group-hover:scale-110" />
          </StaggerItem>
        ))}
      </Stagger>

      {current && (
        <div role="dialog" aria-modal="true" aria-label={current.alt} onClick={close} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8">
          <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30">
            <CloseIcon />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous image" className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 rotate-180 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:left-6">
            <ChevronRightIcon />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next image" className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:right-6">
            <ChevronRightIcon />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG[current.image]} alt={current.alt} onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl" />
          <p className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/80">{current.alt}</p>
        </div>
      )}
    </>
  );
}
