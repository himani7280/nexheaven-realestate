import { DrawLine, Reveal } from "./Motion";

/* Shared heading sizes */
export const TITLE_SIZE = "text-[1.8rem] leading-[1.18] sm:text-[2.3rem] xl:text-[46px] xl:leading-[54px]";
export const BODY_SIZE = "text-[15px] leading-[1.7] sm:text-[16px] xl:text-[18px] xl:leading-[28px]";

type EyebrowProps = { children: string; align?: "left" | "center"; className?: string };

/* Eyebrow label */
export function Eyebrow({ children, align = "center", className = "" }: EyebrowProps) {
  const center = align === "center";
  return (
    <p className={`inline-flex items-center gap-3 whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.42em] text-[#1d2330] sm:gap-4 sm:text-[14px] ${className}`}>
      {center && <DrawLine className="h-px w-10 bg-[#c0925f] sm:w-16 xl:w-[70px]" />}
      {children}
      <DrawLine delay={0.1} className="h-px w-10 bg-[#c0925f] sm:w-16 xl:w-[70px]" />
    </p>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  plain: string;
  accent: string;
  text?: string;
  tone?: "ink" | "maroon";
};

/* Section heading */
export function SectionHeading({ eyebrow, plain, accent, text, tone = "ink" }: SectionHeadingProps) {
  return (
    <Reveal className="text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={`mt-3 font-['Playfair_Display',Georgia,serif] tracking-[-0.01em] ${TITLE_SIZE} ${tone === "maroon" ? "font-bold text-[#6b1b35]" : "font-medium text-[#1d2330]"}`}>
        {plain} <span className={tone === "maroon" ? "text-[#c0925f]" : "text-[#6b1b35]"}>{accent}</span>
      </h2>
      {text && <p className={`mx-auto mt-3 max-w-[820px] text-[#5b6270] ${BODY_SIZE}`}>{text}</p>}
    </Reveal>
  );
}
