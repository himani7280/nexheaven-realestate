"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NAV_CTA, NAV_LINKS, NAVBAR } from "@/data/data";
import { CloseIcon, MenuIcon, PhoneFilledIcon } from "@/lib/icons";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(NAVBAR.homeHref);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(`#${entry.target.id}`)), { rootMargin: "-45% 0px -50% 0px" });
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300 ${scrolled || open ? "shadow-[0_10px_30px_-14px_rgba(60,10,30,0.28)]" : "shadow-[0_6px_24px_-16px_rgba(60,10,30,0.15)]"}`}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:h-[88px] xl:gap-6">
        <div className="flex items-center">
          <motion.a href={NAVBAR.homeHref} aria-label={NAVBAR.homeAriaLabel} onClick={() => setOpen(false)} whileHover={{ scale: 1.04 }} className="block shrink-0">
            <Logo priority className="w-[88px] xl:w-[108px]" />
          </motion.a>
          <span className="mx-4 hidden h-10 w-px bg-[#6b1b35]/40 xl:mx-5 xl:block" aria-hidden="true" />
        </div>

        <nav className="hidden items-center xl:flex xl:gap-1" aria-label={NAVBAR.mainNavAriaLabel}>
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <a key={link.href} href={link.href} className={`group relative whitespace-nowrap rounded-md px-[18px] py-2.5 text-[16px] font-semibold transition-colors duration-300 ${isActive ? "text-white" : "text-[#6b1b35] hover:text-[#561529]"}`}>
                {isActive && (
                  <motion.span layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 -z-0 rounded-lg bg-[#6b1b35] shadow-[0_8px_18px_-8px_rgba(107,27,53,0.7)]">
                    <span className="absolute -bottom-[5px] left-1/2 size-[10px] -translate-x-1/2 rotate-45 rounded-[2px] bg-[#6b1b35]" />
                  </motion.span>
                )}
                <span className="relative z-10">{link.label}</span>
                {!isActive && <span className="absolute inset-x-[18px] bottom-1.5 h-[2px] origin-left scale-x-0 rounded bg-[#c0925f] transition-transform duration-300 group-hover:scale-x-100" />}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a href={NAV_CTA.href} className="group hidden h-[46px] items-center gap-2.5 rounded-lg bg-[#c0925f] px-6 text-[16px] font-semibold text-white shadow-[0_10px_20px_-10px_rgba(169,122,73,0.9)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#a97a49] sm:inline-flex">
            <PhoneFilledIcon size={18} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            {NAV_CTA.label}
          </a>
          <button
            type="button"
            aria-label={open ? NAVBAR.closeMenuLabel : NAVBAR.openMenuLabel}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`grid size-11 place-items-center rounded-lg border border-[#6b1b35]/25 transition duration-300 active:scale-95 xl:hidden ${
              open
                ? "bg-[#6b1b35] text-white"
                : "bg-[#f8ece8] text-[#6b1b35] hover:scale-105 hover:bg-[#6b1b35] hover:text-white [@media(hover:none)]:bg-[#6b1b35] [@media(hover:none)]:text-white"
            }`}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <button
          type="button"
          aria-label={NAVBAR.closeMenuLabel}
          onClick={() => setOpen(false)}
          className="fixed inset-0 top-[76px] z-40 bg-black/20 backdrop-blur-[1px] xl:hidden"
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed right-4 top-[84px] z-50 w-[250px] origin-top-right rounded-2xl border border-[#e8ddd5] bg-white shadow-[0_20px_48px_-14px_rgba(60,10,30,0.35)] transition-all duration-300 sm:right-6 sm:w-[270px] xl:hidden ${
          open ? "pointer-events-auto translate-x-0 scale-100 opacity-100" : "pointer-events-none translate-x-4 scale-95 opacity-0"
        }`}
      >
        <nav aria-label={NAVBAR.mobileNavAriaLabel}>
          <ul className="flex flex-col gap-1 p-3">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-2.5 text-[15px] font-semibold transition-colors duration-200 ${
                      isActive ? "bg-[#6b1b35] text-white" : "text-[#6b1b35] hover:bg-[#f8ece8]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2 sm:hidden">
              <a
                href={NAV_CTA.href}
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#c0925f] text-[15px] font-semibold text-white transition hover:bg-[#a97a49]"
              >
                <PhoneFilledIcon size={16} />
                {NAV_CTA.label}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
