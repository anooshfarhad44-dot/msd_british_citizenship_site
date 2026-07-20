"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

export default function PassportScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring on progress for organic feel
  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // --- Passport: starts top-left, flies into hands ---
  // X: moves from far left (-200px) to resting position (0px)
  const passportX = useTransform(smooth, [0, 0.55], [-220, 0]);
  // Y: drops from above (-100px) to hands position (0px)
  const passportY = useTransform(smooth, [0, 0.55], [-120, 0]);
  // Rotation: tilted when flying, settles at slight angle in hand
  const passportRotate = useTransform(smooth, [0, 0.45, 0.55], [-30, -5, -10]);
  // Scale: small when far, full size when in hands
  const passportScale = useTransform(smooth, [0, 0.55], [0.55, 1]);
  // Opacity: fades in from invisible
  const passportOpacity = useTransform(smooth, [0, 0.2], [0, 1]);

  // --- Man: slides in from right ---
  const manX = useTransform(smooth, [0.15, 0.55], [80, 0]);
  const manOpacity = useTransform(smooth, [0.15, 0.5], [0, 1]);

  // --- Text block: fades up from below ---
  const textY = useTransform(smooth, [0.5, 0.85], [40, 0]);
  const textOpacity = useTransform(smooth, [0.5, 0.85], [0, 1]);

  // --- Glow behind passport ---
  const glowOpacity = useTransform(smooth, [0.3, 0.65], [0, 0.6]);
  const glowScale = useTransform(smooth, [0.3, 0.65], [0.5, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#060010] via-[#160028] to-[#060010] py-28 md:py-36"
    >
      {/* Background ambient blobs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#7a003c]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#f4c400]/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* ── LEFT: Passport flying into man's hands ── */}
          <div className="relative flex items-end justify-center h-[420px] md:h-[520px]">

            {/* Glow ring that appears when passport lands */}
            <motion.div
              className="absolute bottom-[16%] left-[6%] w-[50%] h-[35%] rounded-3xl bg-[#f4c400]/20 blur-2xl pointer-events-none"
              style={{ opacity: glowOpacity, scale: glowScale }}
            />

            {/* Man — slides in from right */}
            <motion.div
              className="absolute bottom-0 right-0 w-[72%] md:w-[62%]"
              style={{ x: manX, opacity: manOpacity }}
            >
              <Image
                src="/images/manWithoutPassport.png"
                alt="Person about to receive British passport"
                width={420}
                height={520}
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Passport — flies in from top-left */}
            <motion.div
              className="absolute bottom-[17%] left-[5%] w-[46%] md:w-[40%] z-10"
              style={{
                x: passportX,
                y: passportY,
                rotate: passportRotate,
                scale: passportScale,
                opacity: passportOpacity,
                filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.7))",
              }}
            >
              <Image
                src="/images/justPassport.png"
                alt="British Passport"
                width={320}
                height={220}
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* ── RIGHT: Text content ── */}
          <motion.div
            className="space-y-6"
            style={{ y: textY, opacity: textOpacity }}
          >
            <div className="inline-flex items-center px-4 py-2 border border-[#f4c400]/40 rounded-full bg-white/5 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm">
              Your British Future Awaits
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Your British{" "}
              <span className="text-[#f4c400]">Passport</span>
              <br />
              is Within Reach
            </h2>

            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-lg">
              After years of building your life in the UK, that iconic burgundy
              passport represents your right to belong. Our expert solicitors
              have helped hundreds of families make it a reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-black bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] shadow-[0_14px_30px_rgba(244,196,0,0.3)] hover:-translate-y-1 transition-all duration-200 text-sm"
              >
                Start Your Application
              </a>
              <a
                href="/eligibility/check"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-200 text-sm"
              >
                Check Eligibility →
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: "✅", text: "99% Success Rate" },
                { icon: "🏆", text: "10+ Years Experience" },
                { icon: "🔒", text: "Regulated Solicitors" },
              ].map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold"
                >
                  <span>{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
