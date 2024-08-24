export const logoAnim = {
  hidden: {
    opacity: 0,
    scaleY: 0.5,
  },
  show: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.65,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

export const heroLeftAnim = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 1,
    transition: {
      duration: 0.65,
      delay: 0.5,
    },
  },
};

export const heroRightAnim = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 1,
    transition: {
      duration: 0.65,
      delay: 0.8,
    },
  },
};

export const bmiResultLeftAnim = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.65,
    delay: 0.8,
  },
  viewport: { once: true },
};

export const bmiResultRightAnim = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.65,
    delay: 0.65,
  },
  viewport: { once: true },
};

export const statCardAnim = (idx: number) => {
  return {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: {
      duration: 0.65,
      delay: 0.3 * idx,
    },
    viewport: { once: true },
  };
};

export const statCardIconAnim = (idx: number) => {
  return {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.65,
      delay: 0.4 * idx,
    },
    viewport: { once: true },
  };
};

export const statCardTitleAnim = (idx: number) => {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 1 },
    transition: {
      duration: 0.65,
      delay: 0.5 * idx,
    },
    viewport: { once: true },
  };
};

export const statCardDescAnim = (idx: number) => {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 1 },
    transition: {
      duration: 0.65,
      delay: 0.6 * idx,
    },
    viewport: { once: true },
  };
};

export const limitationLeftAnim = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.65,
  },
  viewport: { once: true },
};

export const limitationCardAnim = (idx: number) => {
  return {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.65,
      delay: 0.3 * idx,
      type: "spring",
    },
    viewport: { once: true },
  };
};

export const limitationCardTitleAnim = (idx: number) => {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.65,
      delay: 0.4 * idx,
    },
    viewport: { once: true },
  };
};

export const limitationCardParaAnim = (idx: number) => {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.65,
      delay: 0.5 * idx,
    },
    viewport: { once: true },
  };
};
