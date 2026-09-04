export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const CONSENT_COOKIE = "__client_consent";

export const setCookie = (name, value, days) => {
  if (typeof document === "undefined") return;
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/; SameSite=Lax`;
};

export const getCookie = (name) => {
  if (typeof document === "undefined") return null;
  const cookies = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return cookies ? cookies.split("=").slice(1).join("=") : null;
};

export const clearCookie = (name) => {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
};

export const encodeCookie = (val) => encodeURIComponent(JSON.stringify(val));

export const decodeCookie = (val) => JSON.parse(decodeURIComponent(val));

