"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { emailRegex } from "@utils";
import {
  cardReveal,
  chipReveal,
  lineGrow,
  revealUp,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "@utils/homeAnimations";
import {
  ukBranchContact,
  ukBranchGroup,
  ukBranchLegal,
  ukBranchOverview,
  ukBranchRole,
} from "@data/ukBranchData";

const SectionHeading = ({ label, title, align = "left" }) => (
  <>
    <motion.p
      variants={revealUp()}
      className={`text-xs font-semibold uppercase tracking-[0.22em] text-primary ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {label}
    </motion.p>
    <motion.h2
      variants={revealUp()}
      className={`section-header mt-3 text-[#0f3d2e] ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {title}
    </motion.h2>
    <motion.div
      variants={lineGrow()}
      className={`mt-4 h-1 w-16 bg-secondary ${
        align === "center" ? "mx-auto origin-center" : "origin-left"
      }`}
    />
  </>
);

const BodyCopy = ({ paragraphs }) => (
  <>
    {paragraphs.map((paragraph) => (
      <motion.p
        key={paragraph.slice(0, 48)}
        variants={revealUp()}
        className="mt-6 text-base leading-relaxed text-slate-700"
      >
        {paragraph}
      </motion.p>
    ))}
  </>
);

const inputClass =
  "w-full rounded-xl border border-[#0f3d2e]/15 bg-white px-4 py-3 text-sm text-[#0f3d2e] outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20";

const UkContent = () => {
  const [submitting, setSubmitting] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!formData.get("name")) {
      return toast.error("Please enter your name", {
        id: "uk-contact-no-name",
      });
    }

    if (!formData.get("email") || !emailRegex.test(formData.get("email"))) {
      return toast.error("Please provide a valid email", {
        id: "uk-contact-invalid-email",
      });
    }

    if (!formData.get("message")) {
      return toast.error("Please enter a message", {
        id: "uk-contact-no-message",
      });
    }

    setSubmitting(true);
    const loadingToast = toast.loading("Sending...", {
      id: "uk-contact-sending",
    });

    try {
      const response = await axios.post("/api/contact", formData);
      toast.dismiss(loadingToast);
      toast.success(response.data.message, {
        id: "uk-contact-success",
      });
      form.reset();
    } catch (error) {
      toast.dismiss(loadingToast);
      if (error.response?.data?.message) {
        return toast.error(error.response.data.message, {
          id: "uk-contact-api-error",
        });
      }
      return toast.error("Error connecting to server", {
        id: "uk-contact-server-error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden px-[5vw] py-20 phone:py-14">
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#d9e5d1]/50 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-[0.9fr_1.1fr] gap-14 tab-s:grid-cols-1 tab-s:gap-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="tab-s:max-w-xl"
          >
            <SectionHeading
              label="Who we are"
              title={ukBranchOverview.title}
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-2xl"
          >
            <BodyCopy paragraphs={ukBranchOverview.paragraphs} />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f4f7f4] px-[5vw] py-20 phone:py-14">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-2xl"
          >
            <SectionHeading
              label="Governance"
              title={ukBranchLegal.title}
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-[#0f3d2e]/10 phone:grid-cols-1 tab-m:grid-cols-2"
          >
            {ukBranchLegal.facts.map((fact) => (
              <motion.div
                key={fact.label}
                variants={cardReveal()}
                className="bg-white px-6 py-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {fact.label}
                </p>
                <p className="mt-3 text-lg font-semibold leading-snug text-[#0f3d2e]">
                  {fact.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto mt-10 max-w-4xl"
          >
            <BodyCopy paragraphs={ukBranchLegal.paragraphs} />
          </motion.div>
        </div>
      </section>

      <section className="px-[5vw] py-20 phone:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-12 tab-s:grid-cols-1">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <SectionHeading
                label="The group"
                title={ukBranchGroup.title}
              />
              <BodyCopy paragraphs={ukBranchGroup.paragraphs} />
              <motion.a
                variants={revealUp()}
                href={ukBranchGroup.websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#0f3d2e]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#0f3d2e] transition hover:border-primary hover:text-primary"
              >
                {ukBranchGroup.website}
                <i className="fi fi-rr-arrow-up-right text-xs" />
              </motion.a>
              <motion.p
                variants={revealUp()}
                className="mt-3 max-w-md text-sm leading-relaxed text-slate-500"
              >
                {ukBranchGroup.websiteCta}
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col justify-center rounded-[2rem] bg-[#0f3d2e] p-8 phone:p-6"
            >
              <motion.p
                variants={revealUp()}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary"
              >
                Principal commodities
              </motion.p>
              <motion.div
                variants={staggerFast}
                className="mt-6 flex flex-wrap gap-2.5"
              >
                {ukBranchGroup.commodities.map((item) => (
                  <motion.span
                    key={item}
                    variants={chipReveal}
                    className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-white/90"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f3] px-[5vw] py-20 phone:py-14">
        <motion.div
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute left-0 top-0 h-full w-1.5 origin-top bg-secondary"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-4xl"
        >
          <SectionHeading label="What we do" title={ukBranchRole.title} />
          <BodyCopy paragraphs={ukBranchRole.paragraphs} />

          <motion.p
            variants={revealUp()}
            className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
          >
            Cardinal Treats — UK market
          </motion.p>
          <motion.div
            variants={staggerFast}
            className="mt-4 flex flex-wrap gap-2.5"
          >
            {ukBranchRole.treats.map((item) => (
              <motion.span
                key={item}
                variants={chipReveal}
                className="rounded-full bg-[#0f3d2e] px-4 py-2 text-sm font-medium text-white"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section
        id="contact"
        className="scroll-mt-28 border-t border-[#0f3d2e]/10 bg-[#f4f7f4] px-[5vw] py-20 phone:py-14"
      >
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="w-full"
          >
            <SectionHeading
              align="center"
              label={ukBranchContact.title}
              title={ukBranchContact.heading}
            />
            <motion.p
              variants={revealUp()}
              className="mx-auto mt-6 max-w-lg text-center text-base leading-relaxed text-slate-600"
            >
              {ukBranchContact.formDescription}
            </motion.p>
          </motion.div>

          <motion.form
            variants={revealUp(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={submitForm}
            className="mt-10 w-full rounded-[2rem] border border-[#0f3d2e]/10 bg-white p-8 phone:p-5"
          >
            <div className="flex flex-col gap-4">
              <input
                required
                className={inputClass}
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                required
                type="email"
                name="email"
                className={inputClass}
                placeholder="Email"
              />
              <div className="grid grid-cols-2 gap-4 phone:grid-cols-1">
                <input
                  type="text"
                  name="number"
                  className={inputClass}
                  placeholder="Number (optional)"
                />
                <input
                  type="text"
                  name="company"
                  className={inputClass}
                  placeholder="Company (optional)"
                />
              </div>
              <textarea
                rows={5}
                className={inputClass}
                name="message"
                required
                placeholder="Message"
              />
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex items-center justify-center gap-2 self-center rounded-full bg-[#0f3d2e] px-7 py-3 text-sm font-semibold text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
              >
                {submitting ? "Sending..." : "Send message"}
                {!submitting && <i className="fi fi-rr-arrow-small-right" />}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default UkContent;
