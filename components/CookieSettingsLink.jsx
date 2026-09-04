"use client";

import { CONSENT_COOKIE, clearCookie } from "@utils";

const CookieSettingsLink = () => {
  const resetConsent = () => {
    clearCookie(CONSENT_COOKIE);
    window.location.reload();
  };

  return (
    <button
      type="button"
      onClick={resetConsent}
      className="hover:underline"
    >
      Cookie settings
    </button>
  );
};

export default CookieSettingsLink;
