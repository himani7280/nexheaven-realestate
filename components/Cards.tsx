import { IMG } from "@/data/data";
import { NamedIcon, PinFilledIcon } from "@/lib/icons";
import { Photo } from "./Photo";

type PropertyCardProps = {
  badge: string;
  title: string;
  location: string;
  image: string;
  meta: { icon: string; label: string }[];
};

/* Property card */
export function PropertyCard({ badge, title, location, image, meta }: PropertyCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8ddd5] bg-white shadow-[0_8px_28px_-16px_rgba(60,10,30,0.28)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_48px_-20px_rgba(60,10,30,0.38)]">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Photo
          src={IMG[image]}
          alt={title}
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute left-3 top-3 rounded-md bg-[#6b1b35] px-3 py-1.5 text-[12.5px] font-semibold tracking-wide text-white shadow-lg">
          {badge}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-[22px] font-bold leading-snug text-[#1d2330] sm:text-[24px]">
          {title}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-[14px] text-[#5b6270]">
          <PinFilledIcon size={15} className="shrink-0 text-[#6b1b35] transition-transform duration-300 group-hover:scale-110" />
          {location}
        </p>

        <span className="mt-4 block h-px w-full bg-[#e8ddd5]" />

        {/* Meta */}
        <ul className="mt-4 flex items-stretch divide-x divide-[#e8ddd5]">
          {meta.map((item) => (
            <li key={item.label} className="group/meta flex flex-1 flex-col items-center gap-1.5 px-1.5 text-center">
              <span className="grid size-9 place-items-center rounded-lg bg-[#f8ece8] text-[#6b1b35] transition duration-300 group-hover/meta:-translate-y-0.5 group-hover/meta:scale-105 group-hover/meta:bg-[#6b1b35] group-hover/meta:text-white [@media(hover:none)]:bg-[#6b1b35] [@media(hover:none)]:text-white">
                <NamedIcon name={item.icon} size={18} strokeWidth={1.6} />
              </span>
              <span className="whitespace-nowrap text-[12px] font-medium leading-tight text-[#3b4252]">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

type ServiceCardProps = { icon: string; title: string; text: string };

/* Service card */
export function ServiceCard({ icon, title, text }: ServiceCardProps) {
  return (
    <article className="group relative flex h-full items-center gap-3 overflow-hidden rounded-xl border border-[#e8ddd5] bg-white px-3 pb-8 pt-5 shadow-[0_10px_28px_-24px_rgba(60,10,30,0.4)] transition duration-500 hover:-translate-y-1.5 hover:border-[#c0925f]/70 hover:shadow-[0_24px_40px_-26px_rgba(60,10,30,0.45)]">
      <span className="grid size-[68px] shrink-0 place-items-center rounded-xl bg-[#f8ece8] text-[#6b1b35] transition duration-500 group-hover:scale-105 group-hover:rotate-[-6deg] group-hover:bg-[#6b1b35] group-hover:text-white [@media(hover:none)]:bg-[#6b1b35] [@media(hover:none)]:text-white">
        <NamedIcon name={icon} size={36} strokeWidth={1.4} />
      </span>
      <span className="h-[88px] w-px shrink-0 bg-[#e3d3c8]" aria-hidden="true" />
      <div className="min-w-0">
        <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-[17px] font-extrabold leading-snug text-[#1d2330]">
          {title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-[1.55] text-[#5b6270]">{text}</p>
      </div>
      <span className="absolute inset-x-0 bottom-3 mx-auto h-[3px] w-[32%] rounded bg-[#6b1b35] transition-all duration-500 group-hover:w-[60%]" />
    </article>
  );
}
