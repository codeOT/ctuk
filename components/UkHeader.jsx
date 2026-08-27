"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@assets/assets";
import {
  lineGrow,
  revealUp,
  staggerContainer,
} from "@utils/homeAnimations";
import { ukBranchHeadline, ukBranchHeroImages } from "@data/ukBranchData";

const heroImages = {
  primary: assets[ukBranchHeroImages.primary.srcKey],
  top: assets[ukBranchHeroImages.top.srcKey],
  bottom: assets[ukBranchHeroImages.bottom.srcKey],
};

const UkHeader = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f3d2e] pt-28 phone:pt-24">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 15% 20%, rgba(212,175,55,0.35), transparent 45%), radial-gradient(ellipse at 85% 70%, rgba(79,140,102,0.45), transparent 50%)",
        }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1.4, delay: 0.15, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-[1] mx-auto grid max-w-7xl grid-cols-2 items-center gap-12 px-[5vw] pb-20 pt-12 phone:gap-10 phone:pb-14 phone:pt-6 tab-s:grid-cols-1">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          <motion.p
            variants={revealUp()}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary"
          >
            {ukBranchHeadline.kicker}
          </motion.p>

          <motion.h1
            variants={staggerContainer}
            className="mt-5 max-w-xl font-sans text-5xl font-bold leading-[1.05] text-white phone:text-4xl"
          >
            <motion.span variants={revealUp()} className="block">
              {ukBranchHeadline.line1}
            </motion.span>
            <motion.span
              variants={revealUp()}
              className="mt-1 block text-secondary"
            >
              {ukBranchHeadline.accent}
            </motion.span>
          </motion.h1>

          <motion.div
            variants={lineGrow()}
            className="mt-6 h-1 w-20 origin-left bg-secondary"
          />

          <motion.p
            variants={revealUp()}
            className="mt-6 max-w-md text-base leading-relaxed text-white/80 phone:text-sm"
          >
            {ukBranchHeadline.subtitle}
          </motion.p>

          <motion.div variants={revealUp()} className="mt-9">
            <Link
              href={ukBranchHeadline.ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-bold text-[#0f3d2e] transition hover:scale-[1.03] hover:bg-white"
            >
              {ukBranchHeadline.ctaLabel}
              <i className="fi fi-rr-arrow-small-right" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-[1.15fr_0.85fr] gap-4 phone:gap-3"
        >
          <motion.div
            variants={revealUp()}
            className="relative min-h-[440px] overflow-hidden rounded-[2rem] ring-1 ring-white/15 phone:min-h-[300px]"
          >
            <Image
              src={heroImages.primary}
              alt={ukBranchHeroImages.primary.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d2e]/50 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="flex flex-col gap-4 phone:gap-3"
          >
            <motion.div
              variants={revealUp()}
              className="relative min-h-[210px] flex-1 overflow-hidden rounded-[2rem] ring-1 ring-white/15 phone:min-h-[140px]"
            >
              <Image
                src={heroImages.top}
                alt={ukBranchHeroImages.top.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>

            <motion.div
              variants={revealUp()}
              className="relative min-h-[210px] flex-1 overflow-hidden rounded-[2rem] ring-1 ring-white/15 phone:min-h-[140px]"
            >
              <Image
                src={heroImages.bottom}
                alt={ukBranchHeroImages.bottom.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UkHeader;
