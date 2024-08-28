// src/animations/swipingAnimation.js

import { motion } from 'framer-motion';

// Swipe left animation (for rejecting a profile)
export const swipeLeft = {
  hidden: { x: 0, opacity: 1 },
  visible: { x: '-150%', opacity: 0, transition: { type: 'spring', stiffness: 70, damping: 15 } },
};

// Swipe right animation (for liking a profile)
export const swipeRight = {
  hidden: { x: 0, opacity: 1 },
  visible: { x: '150%', opacity: 0, transition: { type: 'spring', stiffness: 70, damping: 15 } },
};

// Swipe up animation (for super liking a profile)
export const swipeUp = {
  hidden: { y: 0, opacity: 1 },
  visible: { y: '-150%', opacity: 0, transition: { type: 'spring', stiffness: 70, damping: 15 } },
};

// Swipe down animation (for dismissing a profile)
export const swipeDown = {
  hidden: { y: 0, opacity: 1 },
  visible: { y: '150%', opacity: 0, transition: { type: 'spring', stiffness: 70, damping: 15 } },
};

// Hover effect for profile cards
export const profileHover = {
  hidden: { scale: 1 },
  visible: { scale: 1.05, transition: { duration: 0.2 } },
};
