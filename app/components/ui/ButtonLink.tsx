import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "accent" | "outline" | "outline-light";
};

export default function ButtonLink({ href, children, variant = "accent" }: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center min-h-[52px] px-6 py-3 rounded-full font-extrabold transition-all duration-200 hover:-translate-y-0.5";
  const variants = {
    accent:
      "bg-secondary text-primary shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:shadow-[0_18px_40px_rgba(244,196,0,0.35)]",
    outline: "border border-white/50 text-white bg-white/10 backdrop-blur-sm",
    "outline-light": "border border-primary/30 text-primary bg-white/80",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
