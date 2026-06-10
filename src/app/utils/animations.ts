/**
 * Animation utilities for consistent motion design
 */
export const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleHoverVariants = {
  hover: { scale: 1.02 },
};

export const getTransitionConfig = (delay: number = 0) => ({
  transition: { delay, duration: 0.6 },
});
