import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/* Responsive cover photo */
export function Photo({ src, alt, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", priority = false }: PhotoProps) {
  return <Image src={src} alt={alt} fill unoptimized priority={priority} sizes={sizes} className={`object-cover ${className}`} />;
}
