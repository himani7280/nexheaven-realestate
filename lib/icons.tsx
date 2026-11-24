import type { ComponentType, SVGProps } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  Briefcase,
  Building2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleParking,
  Compass,
  Fence,
  FileCheck,
  Handshake,
  Home,
  HousePlus,
  KeyRound,
  LandPlot,
  Leaf,
  Mail,
  MapPin,
  Maximize2,
  Menu,
  Phone,
  Plus,
  Send,
  ShieldCheck,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaQuoteLeft,
  FaYoutube,
} from "react-icons/fa6";

type IconProps = Omit<SVGProps<SVGSVGElement>, "size" | "strokeWidth"> & {
  size?: number;
  strokeWidth?: number;
};

type LucideComp = ComponentType<{ size?: number | string; strokeWidth?: number | string; className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
type ReactIconComp = ComponentType<{ size?: number | string; className?: string; "aria-hidden"?: boolean | "true" | "false" }>;

const wrapLucide = (Icon: LucideComp, defaultStrokeWidth = 1.6) =>
  function WrappedLucideIcon({ size = 20, strokeWidth = defaultStrokeWidth, className, ...rest }: IconProps) {
    return <Icon size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" {...rest} />;
  };

const wrapReactIcon = (Icon: ReactIconComp) =>
  function WrappedReactIcon({ size = 20, className, strokeWidth: _strokeWidth, ...rest }: IconProps) {
    void _strokeWidth;
    return <Icon size={size} className={className} aria-hidden="true" {...rest} />;
  };

/* ── Real estate (lucide-react) ── */
export const HomeIcon = wrapLucide(Home);
export const ShieldCheckIcon = wrapLucide(ShieldCheck);
export const LeafIcon = wrapLucide(Leaf);
export const UsersIcon = wrapLucide(Users);
export const KeyIcon = wrapLucide(KeyRound);
export const HandshakeIcon = wrapLucide(Handshake);
export const ChartIcon = wrapLucide(TrendingUp);
export const BuildingIcon = wrapLucide(Building2);
export const BlueprintIcon = wrapLucide(Compass);
export const ManagementIcon = wrapLucide(HousePlus);
export const LegalIcon = wrapLucide(FileCheck);
export const BedIcon = wrapLucide(BedDouble);
export const BathIcon = wrapLucide(Bath);
export const AreaIcon = wrapLucide(Maximize2);
export const BriefcaseIcon = wrapLucide(Briefcase);
export const ParkingIcon = wrapLucide(CircleParking);
export const PlotIcon = wrapLucide(LandPlot);
export const GatedIcon = wrapLucide(Fence);

/* ── General (lucide-react & react-icons/fa6) ── */
export const PinIcon = wrapLucide(MapPin);
export const PinFilledIcon = wrapReactIcon(FaLocationDot);
export const PhoneIcon = wrapLucide(Phone);
export const PhoneFilledIcon = wrapReactIcon(FaPhone);
export const MailIcon = wrapLucide(Mail);
export const ArrowRightIcon = wrapLucide(ArrowRight);
export const ArrowLeftIcon = wrapLucide(ArrowLeft);
export const ChevronRightIcon = wrapLucide(ChevronRight);
export const ChevronUpIcon = wrapLucide(ChevronUp);
export const ChevronDownIcon = wrapLucide(ChevronDown);
export const PlusIcon = wrapLucide(Plus);
export const MenuIcon = wrapLucide(Menu);
export const CloseIcon = wrapLucide(X);
export const SendIcon = wrapLucide(Send);
export const QuestionBubblesIcon = ({ size = 168, className, strokeWidth = 5.2, ...rest }: IconProps) => (
  <svg
    width={size}
    height={Math.round(size * 0.86)}
    viewBox="0 0 120 104"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...rest}
  >
    {/* Back bubble */}
    <path d="M81.4 36 A27 25 0 0 1 96.9 73.2 L101 89 L86.7 82.1 A27 25 0 0 1 53.9 76.7" />
    {/* Front bubble */}
    <path d="M32.5 67 A30 27.5 0 1 0 19.5 56.5 L15 75 Z" />
    {/* Question mark */}
    <path d="M38 35 C38 29 41.6 25.5 46.2 25.5 C51.2 25.5 54.5 28.6 54.5 33 C54.5 37.6 49.8 39.2 47.2 41.6 C45.8 43 45.4 44.5 45.4 47.2" />
    <circle cx="45.4" cy="55.5" r="3.1" fill="currentColor" stroke="none" />
  </svg>
);
export const QuoteIcon = wrapReactIcon(FaQuoteLeft);

/* ── Social (react-icons/fa6) ── */
export const FacebookIcon = wrapReactIcon(FaFacebookF);
export const InstagramIcon = wrapReactIcon(FaInstagram);
export const LinkedinIcon = wrapReactIcon(FaLinkedinIn);
export const YoutubeIcon = wrapReactIcon(FaYoutube);

const ICONS = {
  home: HomeIcon,
  shield: ShieldCheckIcon,
  leaf: LeafIcon,
  users: UsersIcon,
  key: KeyIcon,
  handshake: HandshakeIcon,
  chart: ChartIcon,
  building: BuildingIcon,
  blueprint: BlueprintIcon,
  management: ManagementIcon,
  legal: LegalIcon,
  bed: BedIcon,
  bath: BathIcon,
  area: AreaIcon,
  briefcase: BriefcaseIcon,
  parking: ParkingIcon,
  plot: PlotIcon,
  gated: GatedIcon,
  pin: PinIcon,
  phone: PhoneFilledIcon,
  mail: MailIcon,
} as const;

type IconName = keyof typeof ICONS;
export function NamedIcon({ name, ...props }: IconProps & { name: string }) {
  const Icon = ICONS[name as IconName] ?? HomeIcon;
  return <Icon {...props} />;
}
