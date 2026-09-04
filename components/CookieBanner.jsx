"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  CONSENT_COOKIE,
  clearCookie,
  decodeCookie,
  encodeCookie,
  getCookie,
  setCookie,
} from "@utils";

const applyAnalyticsConsent = (granted) => {
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  });
};

const CookieBanner = () => {
  const [consent, setConsent] = useState(undefined);

  useEffect(() => {
    const stored = getCookie(CONSENT_COOKIE);
    if (!stored) {
      setConsent(null);
      return;
    }

    try {
      const value = decodeCookie(stored);
      setConsent(Boolean(value));
      applyAnalyticsConsent(Boolean(value));
    } catch {
      clearCookie(CONSENT_COOKIE);
      setConsent(null);
    }
  }, []);

  const saveConsent = (value) => {
    setConsent(value);
    setCookie(CONSENT_COOKIE, encodeCookie(value), 182);
    applyAnalyticsConsent(value);
  };

  return (
    <AnimatePresence>
      {consent === null && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          className="fixed inset-x-0 bottom-0 z-[99] border-t border-[#0f3d2e]/10 bg-white/95 shadow-[0_-8px_32px_rgba(15,61,46,0.12)] backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-[5vw] py-6 tab-s:flex-col tab-s:items-stretch">
            <div className="max-w-2xl">
              <h2 className="text-lg font-semibold text-[#0f3d2e]">
                Cookies
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We use essential cookies to make this site work. Optional cookies
                help us understand how the site is used, and we only set those if
                you accept. Read more in our{" "}
                <Link
                  href="/cookie-policy"
                  className="font-medium text-primary underline underline-offset-2"
                >
                  cookie policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-primary underline underline-offset-2"
                >
                  privacy policy
                </Link>
                .
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3 phone:flex-col phone:items-stretch">
              <button
                type="button"
                onClick={() => saveConsent(false)}
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-[#0f3d2e]"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => saveConsent(true)}
                className="rounded-full bg-[#0f3d2e] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary"
              >
                Accept cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
