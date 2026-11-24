import { FaqList } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { FramedPhoto } from "@/components/FramedPhoto";
import { ContactForm } from "@/components/Forms";
import { GalleryGrid } from "@/components/GalleryGrid";
import { HomeHero } from "@/components/HomeHero";
import { Float, DrawLine, Reveal, ScrollProgress, Stagger, StaggerItem } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { PropertyCard, ServiceCard } from "@/components/Cards";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { contactHref, FONTS_HREF, HOME, IMG, LAYOUT } from "@/data/data";
import { NamedIcon, QuestionBubblesIcon } from "@/lib/icons";

const { about, properties, services, gallery, testimonials, contact, faqs } = HOME;

const SECTION = LAYOUT.section;
const CONTAINER = LAYOUT.container;

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_HREF} precedence="default" />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pt-[76px] xl:pt-[88px]">
        <HomeHero />

      {/* About */}
      <section id="about" className={`${SECTION} overflow-hidden bg-white`}>
        <div className={CONTAINER}>
          <div className="grid items-center gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-6 xl:gap-8">
            <FramedPhoto src={IMG[about.image]} alt={about.imageAlt} aspect="aspect-[4/2.95]" priority />

            <div className="flex flex-col justify-center">
              <Reveal>
                <div className="flex items-center gap-2.5">
                  <span className="text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-[0.3em] text-[#6b1b35]">
                    {about.eyebrow}
                  </span>
                  <span className="inline-block h-px w-10 bg-[#c0925f] sm:w-14" aria-hidden="true" />
                </div>

                <h2 className="mt-3 font-['Playfair_Display',Georgia,serif] text-[28px] font-medium leading-[1.12] tracking-[-0.015em] text-[#1d2330] sm:mt-4 sm:text-[34px] xl:text-[42px]">
                  <span className="block">{about.titleLine1}</span>
                  <span className="block italic text-[#6b1b35]">{about.titleLine2}</span>
                </h2>

                <p className="mt-4 text-[14.5px] leading-[1.72] text-[#5b6270] sm:mt-5 sm:text-[15.5px]">
                  {about.text}
                </p>
              </Reveal>

              {/* Features */}
              <Stagger className="mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0">
                {about.features.map((feature, i) => (
                  <StaggerItem
                    key={feature.title}
                    className={`group flex min-w-0 flex-col items-center px-1.5 text-center sm:px-1.5 xl:px-2 ${i > 0 ? "sm:border-l sm:border-[#ebe2da]" : ""}`}
                  >
                    <span className="grid size-[60px] place-items-center rounded-full bg-[#faf2ee] text-[#6b1b35] shadow-[0_3px_14px_-3px_rgba(107,27,53,0.18)] transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#6b1b35] group-hover:text-white [@media(hover:none)]:bg-[#6b1b35] [@media(hover:none)]:text-white sm:size-[68px] xl:size-[74px]">
                      <NamedIcon name={feature.icon} size={30} strokeWidth={1.4} />
                    </span>
                    <p className="mt-2.5 text-[12px] font-bold leading-tight text-[#1d2330] sm:text-[12.5px] lg:whitespace-nowrap xl:text-[13px]">
                      {feature.title}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-[#7a828f] lg:whitespace-nowrap xl:text-[11.5px]">
                      {feature.text}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* ── Properties ── */}
      <section id="properties" className={SECTION}>
        <div className={CONTAINER}>
          <SectionHeading eyebrow={properties.eyebrow} plain={properties.titlePlain} accent={properties.titleAccent} text={properties.text} />
          <Stagger className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:mt-8">
            {properties.items.map((item) => (
              <StaggerItem key={item.title}>
                <PropertyCard {...item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className={SECTION}>
        <div className={CONTAINER}>
          <SectionHeading eyebrow={services.eyebrow} plain={services.titlePlain} accent={services.titleAccent} text={services.text} />
          <Stagger className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:mt-8">
            {services.items.map((item) => (
              <StaggerItem key={item.title}>
                <ServiceCard {...item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className={SECTION}>
        <div className={CONTAINER}>
          <SectionHeading eyebrow={gallery.eyebrow} plain={gallery.titlePlain} accent={gallery.titleAccent} text={gallery.text} />
          <div className="mt-7 xl:mt-8">
            <GalleryGrid />
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className={SECTION}>
        <div className={CONTAINER}>
          <SectionHeading eyebrow={testimonials.eyebrow} plain={testimonials.titlePlain} accent={testimonials.titleAccent} text={testimonials.text} />
          <div className="mt-7 xl:mt-8">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className={SECTION}>
        <div className={CONTAINER}>
          <SectionHeading eyebrow={contact.eyebrow} plain={contact.titlePlain} accent={contact.titleAccent} text={contact.text} />

          <div className="mt-7 grid items-stretch gap-10 lg:grid-cols-[0.9fr_0.8fr_1.15fr] lg:gap-8 xl:mt-8">
            <Reveal x={-40} y={0} className="h-full">
              <FramedPhoto src={IMG[contact.image]} alt={contact.imageAlt} sizes="(min-width: 1024px) 30vw, 100vw" fillHeight />
            </Reveal>

            <Reveal delay={0.1} className="flex h-full gap-6 lg:pr-2">
              <ul className="flex flex-1 flex-col justify-center divide-y divide-[#eadfd7]">
                {contact.cards.map((card) => (
                  <li key={card.title} className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="grid size-[56px] shrink-0 place-items-center rounded-xl bg-[#f8efe8] text-[#6b1b35] transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#6b1b35] group-hover:text-white [@media(hover:none)]:bg-[#6b1b35] [@media(hover:none)]:text-white">
                      <NamedIcon name={card.icon} size={24} strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-[22px] font-bold leading-tight text-[#1d2330]">
                        {card.title}
                      </h3>
                      <a
                        href={contactHref(card.icon, card.value)}
                        {...(card.icon === "pin" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-[15.5px] leading-snug text-[#5b6270] transition-colors hover:text-[#6b1b35]"
                      >
                        {card.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <DrawLine vertical className="hidden w-px self-stretch bg-[#c0925f] lg:block" />
            </Reveal>

            <Reveal delay={0.2} x={40} y={0} className="h-full">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section id="faqs" className={SECTION}>
        <div className={CONTAINER}>
          <SectionHeading eyebrow={faqs.eyebrow} plain={faqs.titlePlain} accent={faqs.titleAccent} text={faqs.text} tone="maroon" />

          <div className="mt-7 grid items-stretch gap-8 lg:min-h-[372px] lg:grid-cols-[0.72fr_1.78fr] lg:gap-10 xl:mt-8 xl:min-h-[356px]">
            <Reveal x={-40} y={0} className="relative h-full lg:border-r lg:border-[#c0925f]">
              <div className="relative flex flex-col items-center justify-start px-6 pb-2 pt-3 text-center sm:px-8 lg:items-start lg:text-left">
                {/* Corner accent */}
                <span
                  className="pointer-events-none absolute left-0 top-0 h-[210px] w-[38%] rounded-tl-xl border-l border-t border-[#c0925f]"
                  aria-hidden="true"
                />
                <div className="flex w-full justify-center">
                  <Float amount={5} duration={5}>
                    <QuestionBubblesIcon size={168} className="text-[#6b1b35] transition-transform duration-300 hover:scale-105" />
                  </Float>
                </div>
                <h3 className="mt-3 font-['Playfair_Display',Georgia,serif] text-[36px] font-bold leading-[1.06] text-[#6b1b35] sm:text-[40px] xl:text-[44px]">
                  {faqs.sideTitle}
                  <span className="block text-[#c0925f]">{faqs.sideAccent}</span>
                </h3>
                <span className="mt-3 block h-[3px] w-[80px] rounded-full bg-[#6b1b35]" />
                <p className="mt-3 max-w-[310px] text-[15px] leading-[1.55] text-[#3f4654] sm:text-[15.5px]">{faqs.sideText}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="h-full">
              <FaqList />
            </Reveal>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
