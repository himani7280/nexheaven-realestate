"use client";

import { motion } from "framer-motion";
import { Photo } from "./Photo";

type FramedPhotoProps = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  aspect?: string;
  direction?: 1 | -1;
  fillHeight?: boolean;
};

/* Framed photo with maroon and gold accents */
export function FramedPhoto({
  src,
  alt,
  sizes = "(min-width: 1024px) 46vw, 100vw",
  className = "",
  priority = true,
  aspect = "aspect-[4/3.05]",
  fillHeight = false,
}: FramedPhotoProps) {
  return (
    <div
      className={`relative pb-4 pl-5 pt-4 sm:pb-5 sm:pl-7 sm:pt-5 ${fillHeight ? "lg:h-full" : ""} ${className}`}
    >
      {/* Maroon accent */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: -12, y: -12 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-1 top-0 z-[1] h-[64%] w-[42%] bg-[#6b1b35] sm:left-1.5"
      />

      {/* Gold outline */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-0 left-0 right-[18%] top-[24%] z-0 border-[1.5px] border-[#c0925f]"
      />

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`relative z-10 ${aspect} ${fillHeight ? "lg:aspect-auto lg:h-full" : ""} w-full overflow-hidden bg-[#f8efe8] shadow-[0_18px_42px_-18px_rgba(60,10,30,0.28)]`}
      >
        <Photo
          src={src}
          alt={alt}
          sizes={sizes}
          priority={priority}
          className="transition-transform duration-700 hover:scale-[1.03]"
        />
      </motion.div>
    </div>
  );
}
