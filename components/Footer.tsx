import { BRAND, contactHref, FOOTER } from "@/data/data";
import { ChevronRightIcon, FacebookIcon, InstagramIcon, LinkedinIcon, NamedIcon, YoutubeIcon } from "@/lib/icons";
import { Logo } from "./Logo";
import { Reveal } from "./Motion";

const SOCIAL_ICONS = { facebook: FacebookIcon, instagram: InstagramIcon, linkedin: LinkedinIcon, youtube: YoutubeIcon } as const;

const Heading = ({ children }: { children: string }) => (
  <>
    <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-[24px] font-bold leading-none text-[#6b1b35] sm:text-[28px]">
      {children}
    </h3>
    <span className="mx-auto mt-3 block h-[3px] w-[56px] rounded bg-[#c0925f] lg:mx-0" />
  </>
);

const LinkList = ({ links }: { links: { label: string; href: string }[] }) => (
  <ul className="mx-auto mt-4 flex w-fit flex-col items-start space-y-2.5 sm:mt-5 sm:space-y-3 lg:mx-0">
    {links.map((link) => (
      <li key={link.label}>
        <a href={link.href} className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#1d2330] transition-colors hover:text-[#6b1b35] sm:gap-3 sm:text-[17px]">
          <ChevronRightIcon size={18} strokeWidth={2.4} className="text-[#c0925f] transition-transform duration-300 group-hover:translate-x-1" />
          {link.label}
        </a>
      </li>
    ))}
  </ul>
);

const ContactRow = ({ icon, value }: { icon: string; value: string }) => (
  <li className="group flex items-center gap-3.5 text-left sm:gap-4">
    <span className="grid size-[44px] shrink-0 place-items-center rounded-xl bg-[#f8efe8] text-[#6b1b35] transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#6b1b35] group-hover:text-white [@media(hover:none)]:bg-[#6b1b35] [@media(hover:none)]:text-white sm:size-[46px]">
      <NamedIcon name={icon} size={22} strokeWidth={1.6} />
    </span>
    <a
      href={contactHref(icon, value)}
      {...(icon === "pin" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="break-words text-[15px] font-medium leading-[1.4] text-[#1d2330] transition-colors hover:text-[#6b1b35] sm:text-[16px]"
    >
      {value}
    </a>
  </li>
);

export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-[#fdfcfb]">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 sm:py-7 lg:px-8 xl:py-8">
        <Reveal>
          <div className="grid grid-cols-2 items-start gap-x-5 gap-y-8 sm:gap-y-10 lg:grid-cols-[1.15fr_0.8fr_0.9fr_1.15fr] lg:items-center lg:gap-0">
            <div className="col-span-2 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:pr-8 lg:text-left">
              <Logo className="w-[130px] sm:w-[160px] xl:w-[200px]" />
              <p className="mt-3 max-w-[300px] text-[15px] leading-[1.5] text-[#1d2330] sm:mt-4 sm:text-[16px]">{BRAND.tagline}</p>
              <div className="mt-4 flex gap-3 sm:mt-5">
                {FOOTER.socials.map(({ key, label, href }) => {
                  const Icon = SOCIAL_ICONS[key as keyof typeof SOCIAL_ICONS] ?? FacebookIcon;
                  return (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="group grid size-[44px] place-items-center rounded-full border border-[#6b1b35] bg-[#f8ece8] text-[#6b1b35] transition duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[#6b1b35] hover:text-white active:scale-95 [@media(hover:none)]:bg-[#6b1b35] [@media(hover:none)]:text-white">
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col items-center text-center lg:items-start lg:border-l lg:border-[#6b1b35]/40 lg:px-9 lg:text-left">
              <Heading>{FOOTER.quickLinksTitle}</Heading>
              <LinkList links={FOOTER.quickLinks} />
            </div>

            <div className="flex flex-col items-center text-center lg:items-start lg:border-l lg:border-[#6b1b35]/40 lg:px-9 lg:text-left">
              <Heading>{FOOTER.usefulLinksTitle}</Heading>
              <LinkList links={FOOTER.usefulLinks} />
            </div>

            <div className="col-span-2 flex flex-col items-center border-t border-[#6b1b35]/15 pt-7 text-center lg:col-span-1 lg:items-start lg:border-l lg:border-t-0 lg:border-[#6b1b35]/40 lg:pl-9 lg:pt-0 lg:text-left">
              <Heading>{FOOTER.contactTitle}</Heading>
              <ul className="mx-auto mt-5 flex w-fit max-w-full flex-col items-start space-y-4 sm:max-w-[420px] lg:mx-0 lg:w-full">
                <ContactRow icon="pin" value={BRAND.address} />
                <ContactRow icon="phone" value={BRAND.phone} />
                <ContactRow icon="mail" value={BRAND.email} />
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Copyright bar */}
      <div className="relative bg-[#561529]">
        <svg className="pointer-events-none absolute bottom-full right-0 hidden h-[64px] w-[330px] sm:block" viewBox="0 0 330 64" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 64C90 60 220 40 330 0V64z" fill="#c0925f" />
          <path d="M0 64C110 62 230 48 330 14V64z" fill="#6b1b35" />
        </svg>
        <div className="mx-auto w-full max-w-[1440px] px-4 py-5 text-center text-[15px] text-white sm:px-6 lg:px-8">{FOOTER.copyright}</div>
      </div>
    </footer>
  );
}
