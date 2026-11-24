import raw from "./data.json";

/* Site data loader */
const nexhaven = raw.NexHaven;
const s = nexhaven.sections;

export const fonts = nexhaven.fonts;
export const FONTS_HREF = fonts.googleFontsHref;
export const TEMPLATE_COMPONENTS = nexhaven.templateComponents;
export const LAYOUT = nexhaven.layout;
export const TYPOGRAPHY = nexhaven.typography;
export const BRAND_THEME = nexhaven.brand;

const header = s.SiteChrome.variants.NexHavenHeader1;

export const SITE = header.site;
export const BRAND = header.brand;
export const NAV_LINKS = header.navLinks;
export const NAVBAR = header.navbar;
export const NAV_CTA = header.cta;
export const FOOTER = s.SiteChrome.variants.NexHavenFooter1;
export const IMG: Record<string, string> = s.Media.variants.NexHavenImages1.images;
export const HOME = s.Home.variants.NexHavenHome1;
export const METADATA = HOME.metadata;

/* Font family values */
export const BODY_FONT = `"${fonts.body.family}", ${fonts.body.fallback}`;
export const HEADING_FONT = `"${fonts.heading.family}", ${fonts.heading.fallback}`;
export const ACCENT_FONT = `"${fonts.accent.family}", ${fonts.accent.fallback}`;

/* Build contact href */
export const contactHref = (icon: string, value: string) => {
  if (icon === "phone") return `tel:${value.replace(/[^\d+]/g, "")}`;
  if (icon === "mail") return `mailto:${value}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`;
};
