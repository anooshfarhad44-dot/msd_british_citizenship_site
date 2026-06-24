"use client";

import { useEffect, useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      if (el) {
        el.style.opacity = "1";
        el.style.transform = "none";
      }
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = "1";
            target.style.transform = "none";
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(18px)",
        transition: `opacity 700ms cubic-bezier(.16,.84,.28,1) ${delay}ms, transform 700ms cubic-bezier(.16,.84,.28,1) ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
