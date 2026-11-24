import Image from "next/image";
import { BRAND, IMG } from "@/data/data";

type LogoProps = { className?: string; priority?: boolean };

/* Brand logo */
export function Logo({ className = "w-[110px]", priority = false }: LogoProps) {
  return <Image src={IMG.logo} alt={BRAND.name} width={858} height={550} unoptimized priority={priority} className={`h-auto ${className}`} />;
}
