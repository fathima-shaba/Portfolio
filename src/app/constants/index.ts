import type { NavItem, SkillItem, ContactItem } from "@/app/types";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiJava, SiCplusplus, SiVisualstudiocode } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision-mission" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: SkillItem[] = [
  { name: "React", icon: FaReact, color: "text-blue-500" },
  { name: "Next.js", icon: TbBrandNextjs, color: "text-slate-900" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
  { name: "Java", icon: SiJava, color: "text-red-600" },
  { name: "C++", icon: SiCplusplus, color: "text-slate-500" },
  { name: "VS Code", icon: SiVisualstudiocode, color: "text-cyan-500" },
  { name: "Tailwind", icon: TbBrandTailwind, color: "text-cyan-500" },
];

export const CONTACT_INFO: ContactItem[] = [
  {
    label: "Email",
    icon: FaEnvelope,
    value: "fathimashaba674@gmail.com",
    href: "mailto:fathimashaba674@gmail.com",
  },
  {
    label: "Phone",
    icon: FaPhone,
    value: "+91 8089888450",
    href: "tel:+918089888450",
  },
  {
    label: "Location",
    icon: FaMapMarkerAlt,
    value: "Perinthalmanna, Kerala",
    href: "#",
  },
];

export const COLORS = {
  primary: "#2563eb",
  accent: "#7c3aed",
  gradient: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
};

export const ANIMATION_CONFIG = {
  pageTransition: { duration: 0.6 },
  elementTransition: { duration: 0.8 },
  hoverScale: 1.05,
  staggerDelay: 0.05,
};
