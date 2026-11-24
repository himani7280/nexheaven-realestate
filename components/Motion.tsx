"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = { children: ReactNode; delay?: number; className?: string; x?: number; y?: number };

/* Fade-in reveal on scroll */
export function Reveal({ children, delay = 0, className, x = 0, y = 36 }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, x, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* Clip-path image reveal on scroll */
export function ImageReveal({ children, className, from = "left", delay = 0 }: { children: ReactNode; className?: string; from?: "left" | "right" | "bottom"; delay?: number }) {
  const reduce = useReducedMotion();
  const hidden = { left: "inset(0% 100% 0% 0%)", right: "inset(0% 0% 0% 100%)", bottom: "inset(100% 0% 0% 0%)" }[from];
  const variants: Variants = {
    hidden: { clipPath: hidden, scale: 1.08 },
    show: { clipPath: "inset(0% 0% 0% 0%)", scale: 1, transition: { duration: 1.2, delay, ease: EASE } },
  };
  return (
    <motion.div className={className} initial={reduce ? "show" : "hidden"} whileInView="show" viewport={{ once: true, margin: "-80px" }}>
      <motion.div className="relative size-full" variants={variants}>
        {children}
      </motion.div>
    </motion.div>
  );
}

const staggerParent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const staggerChild: Variants = {
  hidden: { opacity: 0, y: 44, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE } },
};

/* Stagger container */
export function Stagger({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div id={id} className={className} variants={staggerParent} initial={reduce ? "show" : "hidden"} whileInView="show" viewport={{ once: true, margin: "-70px" }}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <motion.div className={`h-full ${className ?? ""}`} style={style} variants={staggerChild}>
      {children}
    </motion.div>
  );
}

/* Word-by-word reveal (plays on load) */
export function WordReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.14em] align-bottom" aria-hidden="true">
          <motion.span className="inline-block" initial={reduce ? false : { y: "115%", rotate: 4 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.9, delay: delay + i * 0.09, ease: EASE }}>
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Slow zoom-out (Ken Burns) */
export function ZoomIn({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 14, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

/* Slide-in on load */
export function SlideIn({ children, className, delay = 0, x = -60, y = 0 }: { children: ReactNode; className?: string; delay?: number; x?: number; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, x, y, filter: "blur(10px)" }} animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.1, delay, ease: EASE }}>
      {children}
    </motion.div>
  );
}

/* Block that drifts slower than the page while scrolling */
export function Parallax({ children, className, distance = 70 }: { children: ReactNode; className?: string; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-distance / 2, distance / 2]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="size-full">
        {children}
      </motion.div>
    </div>
  );
}

/* Floating animation */
export function Float({ children, className, amount = 12, duration = 6, delay = 0 }: { children: ReactNode; className?: string; amount?: number; duration?: number; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} animate={reduce ? undefined : { y: [0, -amount, 0] }} transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );
}

/* A line that draws itself in on scroll */
export function DrawLine({ className, delay = 0, vertical = false }: { className?: string; delay?: number; vertical?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden="true"
      className={`block ${vertical ? "origin-top" : "origin-left"} ${className ?? ""}`}
      initial={reduce ? false : vertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1, delay, ease: EASE }}
    />
  );
}

/* Scroll progress bar */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.3 });
  return <motion.div aria-hidden="true" style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[linear-gradient(90deg,#6b1b35,#c0925f)]" />;
}

/* Count-up number */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.8, ease: EASE, onUpdate: (v) => setShown(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}

const SPARKS = [
  { left: 8, size: 5, duration: 11, delay: 0 },
  { left: 22, size: 3, duration: 14, delay: 3 },
  { left: 37, size: 6, duration: 12, delay: 6 },
  { left: 52, size: 4, duration: 15, delay: 1.5 },
  { left: 66, size: 5, duration: 13, delay: 8 },
  { left: 80, size: 3, duration: 16, delay: 4 },
  { left: 92, size: 6, duration: 12, delay: 9 },
] as const;

/* Golden light specks rising across the hero */
export function GoldenDust({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div className={`pointer-events-none overflow-hidden ${className ?? ""}`} aria-hidden="true">
      {SPARKS.map((p, i) => (
        <motion.span
          key={i}
          className="absolute block rounded-full bg-[#f2c48a] opacity-0 blur-[1px]"
          style={{ left: `${p.left}%`, width: p.size, height: p.size }}
          animate={{ top: ["105%", "-5%"], x: [0, 24, -24, 0], opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

/* Pointer tilt springs */
export function usePointerTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 90, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 90, damping: 18, mass: 0.6 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      x.set((e.clientX / window.innerWidth - 0.5) * 2);
      y.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return { x: sx, y: sy };
}

type Tilt3DProps = { children: ReactNode; className?: string; rotate?: number; shift?: number; idle?: boolean };

/* 3D pointer tilt wrapper */
export function Tilt3D({ children, className, rotate = 6, shift = 0, idle = true }: Tilt3DProps) {
  const reduce = useReducedMotion();
  const { x, y } = usePointerTilt();
  const rotateY = useTransform(x, [-1, 1], [-rotate, rotate]);
  const rotateX = useTransform(y, [-1, 1], [rotate, -rotate]);
  const moveX = useTransform(x, [-1, 1], [-shift, shift]);
  const moveY = useTransform(y, [-1, 1], [-shift, shift]);

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <div className={`[perspective:1300px] ${className ?? ""}`}>
      <motion.div
        animate={idle ? { rotateY: [-2.5, 2.5, -2.5], rotateX: [1.2, -1.2, 1.2] } : undefined}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="size-full [transform-style:preserve-3d]"
      >
        <motion.div style={{ rotateX, rotateY, x: moveX, y: moveY }} className="size-full [transform-style:preserve-3d]">
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
