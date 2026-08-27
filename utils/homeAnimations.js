export const springSoft = {
  type: "spring",
  stiffness: 70,
  damping: 18,
};

export const springSnappy = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springSoft,
  },
};

export const chipReveal = {
  hidden: { opacity: 0, y: 14, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springSnappy,
  },
};

export const revealUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 48, scale: 0.94, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { ...springSoft, delay },
  },
});

export const cardReveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 36, scale: 0.92, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { ...springSoft, delay },
  },
});

export const lineGrow = (delay = 0) => ({
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

export const viewportOnce = { once: true, amount: 0.2 };
