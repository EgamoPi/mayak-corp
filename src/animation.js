export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      when: 'beforeChildren',
      staggerChildren: 0.33,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.43,
    },
  },
};

export const titleAnimation = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.75,
    },
  },
};

export const photoAnimation = {
  hidden: {
    opacity: 0,
    scale: 1.4,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.69,
    },
  },
};

export const waveAnimation = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
  },
  show: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 1,
      delay: 0.53,
    },
  },
};

export const lineAnimation = {
  hidden: {
    width: '0%',
  },
  show: {
    width: '100%',
    transition: {
      duration: 0.7,
    },
  },
};

export const slider = {
  hidden: {
    x: '-130%',
    skew: '45deg',
  },
  show: {
    x: '100%',
    skew: '0deg',
    transition: {
      ease: 'easeOut',
      duration: 1,
    },
  },
};

export const sliderContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: 'easeOut',
    },
  },
};
