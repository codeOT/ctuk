"use client";

import { motion } from "framer-motion";
import { ukBranchContact } from "@data/ukBranchData";
import {
  lineGrow,
  revealUp,
  staggerContainer,
  viewportOnce,
} from "@utils/homeAnimations";

const Footer = () => {
  return (
    <footer className="bg-[#4f8c66] px-[5vw] py-12 text-sm text-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto flex max-w-7xl flex-col gap-8 tab-s:gap-6"
      >
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-3 gap-8 phone:grid-cols-1"
        >
          <motion.div variants={revealUp()}>
            <h2 className="font-extralight uppercase tracking-wide">
              Cardinal Torch UK
            </h2>
            <p className="mt-3 max-w-xs leading-relaxed text-white/90">
              London-based trade intermediary connecting Sub-Saharan African and
              European commodity markets.
            </p>
          </motion.div>
          <motion.div variants={revealUp()}>
            <h2 className="font-extralight uppercase tracking-wide">Contact</h2>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <a
                  href={`mailto:${ukBranchContact.email}`}
                  className="hover:underline"
                >
                  {ukBranchContact.email}
                </a>
              </li>
              <li>
                <a href={ukBranchContact.phoneHref} className="hover:underline">
                  {ukBranchContact.phone}
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={revealUp()}>
            <h2 className="font-extralight uppercase tracking-wide">Address</h2>
            <p className="mt-3 leading-relaxed text-white/90">
              {ukBranchContact.address}
            </p>
          </motion.div>
        </motion.div>

        <motion.hr variants={lineGrow()} className="origin-left border-white/30" />

        <motion.div
          variants={revealUp()}
          className="flex items-center justify-between gap-4 text-xs text-white/85 phone:flex-col phone:items-start"
        >
          <p>
            &copy; {new Date().getFullYear()} Cardinal Torch Company UK Limited —
            All Rights Reserved.
          </p>
          <a
            href="https://www.cardinaltorch.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            www.cardinaltorch.com
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
