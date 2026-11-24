"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { HOME, IMG } from "@/data/data";
import { ArrowLeftIcon, ArrowRightIcon, QuoteIcon } from "@/lib/icons";
import { FramedPhoto } from "./FramedPhoto";
import { Photo } from "./Photo";
import { Reveal } from "./Motion";

const { items } = HOME.testimonials;
const COUNT = items.length;
const pad = (n: number) => String(n).padStart(2, "0");

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

const QuoteMark = () => <QuoteIcon size={38} className="text-[#6b1b35]" />;

export function TestimonialSlider() {
  const [[index, direction], setState] = useState<[number, 1 | -1]>([0, 1]);
  const [paused, setPaused] = useState(false);

  const go = useCallback((delta: 1 | -1) => setState(([i]) => [(i + delta + COUNT) % COUNT, delta]), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => go(1), 6500);
    return () => clearInterval(timer);
  }, [paused, go]);

  const item = items[index];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Reveal x={-40} y={0}>
        <FramedPhoto src={IMG[item.image]} alt={item.imageAlt} direction={direction} sizes="(min-width: 1024px) 45vw, 100vw" />
      </Reveal>

      <div className="min-w-0">
        <div className="relative min-h-[220px] overflow-x-clip sm:min-h-[240px] lg:min-h-[260px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <QuoteMark />
              <blockquote className="mt-3 font-['Cormorant_Garamond',Georgia,serif] text-[24px] font-medium leading-[1.3] text-[#1d2330] sm:text-[30px] xl:text-[34px] xl:leading-[40px]">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <span className="relative grid size-[66px] shrink-0 place-items-center overflow-hidden rounded-full bg-[#f8efe8] text-[22px] font-bold text-[#6b1b35] ring-2 ring-[#c0925f]/50">
                  {item.avatar ? <Photo src={IMG[item.avatar]} alt={item.name} sizes="66px" className="object-top" /> : initialsOf(item.name)}
                </span>
                <span className="h-12 w-px bg-[#c0925f]" aria-hidden="true" />
                <span>
                  <span className="block font-['Cormorant_Garamond',Georgia,serif] text-[24px] font-bold leading-tight text-[#6b1b35]">
                    {item.name}
                  </span>
                  <span className="block text-[15px] text-[#5b6270]">{item.role}</span>
                </span>
              </figcaption>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center gap-5">
          <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)} className="grid size-[46px] place-items-center rounded-full border border-[#c0925f] bg-[#f8ece8] text-[#6b1b35] transition duration-300 hover:scale-110 hover:bg-[#6b1b35] hover:text-white active:scale-95 [@media(hover:none)]:bg-[#6b1b35] [@media(hover:none)]:text-white">
            <ArrowLeftIcon size={20} />
          </button>
          <span className="min-w-[64px] text-center text-[17px] font-medium tabular-nums text-[#6b1b35]">
            {pad(index + 1)} / {pad(COUNT)}
          </span>
          <button type="button" aria-label="Next testimonial" onClick={() => go(1)} className="grid size-[46px] place-items-center rounded-full border border-[#c0925f] bg-[#f8ece8] text-[#6b1b35] transition duration-300 hover:scale-110 hover:bg-[#6b1b35] hover:text-white active:scale-95 [@media(hover:none)]:bg-[#6b1b35] [@media(hover:none)]:text-white">
            <ArrowRightIcon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
