"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { assets } from "@assets/assets";
import { fadeDown, staggerContainer } from "@utils/homeAnimations";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        solid
          ? "border-b border-black/5 bg-white/95 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-[5vw]"
      >
        <motion.div variants={fadeDown}>
          <Link href="/" className="relative z-10 shrink-0">
            <Image
              src={solid ? assets.logo_black : assets.logo_white}
              alt="Cardinal Torch UK"
              className="h-12 w-auto select-none phone:h-9"
              priority
            />
          </Link>
        </motion.div>

        <motion.nav variants={fadeDown} className="flex items-center">
          <a
            href="/#contact"
            className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:scale-[1.03] phone:px-4 ${
              solid
                ? "bg-[#0f3d2e] text-white hover:bg-primary"
                : "bg-secondary text-[#0f3d2e] hover:bg-white"
            }`}
          >
            Contact
            <i className="fi fi-rr-arrow-small-right text-xs" />
          </a>
        </motion.nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
