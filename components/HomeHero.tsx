"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HOME, IMG } from "@/data/data";

const { hero } = HOME;

/* Decorative bottom-left skyline */
const Skyline3D = () => (
  <svg
    viewBox="0 0 460 170"
    className="h-full w-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="frontGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#eedfd5" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#eedfd5" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="sideGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#d8c2b4" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#d8c2b4" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="topGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#faf2ec" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#e5d0c2" stopOpacity="0.7" />
      </linearGradient>
    </defs>

    {/* Building 1 (Far left low tower) */}
    <g>
      <polygon points="12,110 38,98 38,170 12,170" fill="url(#frontGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.35" />
      <polygon points="38,98 62,110 62,170 38,170" fill="url(#sideGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.35" />
      <polygon points="12,110 38,98 62,110 38,120" fill="url(#topGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.45" />
    </g>

    {/* Building 2 (Mid-tall tower with sloped roof) */}
    <g>
      <polygon points="56,72 96,88 96,170 56,170" fill="url(#frontGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.35" />
      <polygon points="96,88 126,72 126,170 96,170" fill="url(#sideGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.35" />
      <polygon points="56,72 96,50 126,72 96,88" fill="url(#topGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.5" />
    </g>

    {/* Building 3 (Tallest skyscraper with faceted architectural slope) */}
    <g>
      <polygon points="120,54 158,68 158,170 120,170" fill="url(#frontGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.4" />
      <polygon points="158,68 196,48 196,170 158,170" fill="url(#sideGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.4" />
      <polygon points="120,54 158,22 196,48 158,68" fill="url(#topGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.6" />
    </g>

    {/* Building 4 (Center tower) */}
    <g>
      <polygon points="190,82 226,98 226,170 190,170" fill="url(#frontGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.35" />
      <polygon points="226,98 258,82 258,170 226,170" fill="url(#sideGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.35" />
      <polygon points="190,82 226,62 258,82 226,98" fill="url(#topGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.5" />
    </g>

    {/* Building 5 (Medium-tall tower with pitched roof) */}
    <g>
      <polygon points="252,68 290,82 290,170 252,170" fill="url(#frontGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.4" />
      <polygon points="290,82 328,64 328,170 290,170" fill="url(#sideGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.4" />
      <polygon points="252,68 290,38 328,64 290,82" fill="url(#topGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.6" />
    </g>

    {/* Building 6 (Right angled tower tapering into trees) */}
    <g>
      <polygon points="322,102 356,116 356,170 322,170" fill="url(#frontGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.35" />
      <polygon points="356,116 386,100 386,170 356,170" fill="url(#sideGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.35" />
      <polygon points="322,102 356,86 386,100 356,116" fill="url(#topGrad)" stroke="#cbb2a2" strokeWidth="0.8" strokeOpacity="0.5" />
    </g>
  </svg>
);

export function HomeHero() {
  return (
    <section
      id="home"
      className="relative isolate flex h-[300px] w-full items-center overflow-hidden bg-[#fbf2ec] sm:h-[360px] md:h-[460px] lg:h-[calc(100dvh-76px)] lg:min-h-[360px] lg:max-h-[680px] xl:h-[calc(100dvh-88px)] xl:max-h-[780px]"
    >
      {/* Hero banner */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <Image
          src={IMG[hero.image]}
          alt={hero.imageAlt}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="scale-[1.02] object-cover object-right blur-[1.5px] md:scale-100 md:blur-none"
        />

        {/* Mobile fade */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,242,236,0.78)_0%,rgba(251,242,236,0.48)_52%,rgba(251,242,236,0.08)_100%)] md:hidden"
        />

        {/* Tablet fade */}
        <div
          aria-hidden="true"
          className="hidden md:block lg:hidden absolute inset-0 bg-[linear-gradient(90deg,rgba(251,242,236,0.96)_0%,rgba(251,242,236,0.82)_34%,rgba(251,242,236,0)_54%)]"
        />

        {/* Laptop fade */}
        <div
          aria-hidden="true"
          className="hidden lg:block xl:hidden absolute inset-0 bg-[linear-gradient(90deg,rgba(251,242,236,0.75)_0%,rgba(251,242,236,0.35)_28%,rgba(251,242,236,0)_46%)]"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-center px-4 sm:px-6 lg:px-8">
        {/* Skyline */}
        <div
          className="pointer-events-none absolute bottom-0 left-4 z-0 hidden h-[120px] w-[320px] opacity-70 sm:left-6 sm:block sm:h-[140px] sm:w-[380px] lg:left-8 xl:h-[170px] xl:w-[440px]"
          aria-hidden="true"
        >
          <Skyline3D />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-[520px] sm:max-w-[560px] lg:max-w-[590px] xl:max-w-[620px]"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 sm:gap-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#202022] sm:text-[13px] xl:text-[14px]">
              {hero.eyebrow}
            </p>
            <span
              className="inline-block h-[2px] w-12 rounded-full bg-[#a4737f] sm:w-16 xl:w-20"
              aria-hidden="true"
            />
          </div>

          {/* Heading */}
          <h1 className="mt-2.5 font-['Playfair_Display',Georgia,serif] text-[2rem] leading-[1.06] tracking-[-0.015em] sm:mt-4 sm:text-[2.6rem] md:text-[3.3rem] lg:text-[3.9rem] xl:mt-5 xl:text-[4.6rem] 2xl:text-[76px] 2xl:leading-[80px]">
            <span className="block font-medium text-[#13100f]">{hero.titleLine1}</span>
            <span className="block font-bold text-[#6b1b35]">{hero.titleLine2}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-2.5 max-w-[420px] text-[13.5px] leading-[1.6] text-[#3c3b3e] sm:mt-4 sm:text-[15.5px] xl:mt-5 xl:max-w-[490px] xl:text-[17.5px] xl:leading-[1.7]">
            {hero.textBefore} <strong className="font-bold text-[#13100f]">{hero.textBrand}</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
