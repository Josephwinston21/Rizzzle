// src/animations/index.js

import { motion } from 'framer-motion';

// General fade-in animation
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

// Slide in from left
export const slideInLeft = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 50 } },
};

// Slide in from right
export const slideInRight = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 50 } },
};

// Bounce animation
export const bounce = {
  hidden: { scale: 0.8 },
  visible: {
    scale: [1, 1.2, 0.9, 1.1, 1],
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

// Rotate animation
export const rotate = {
  hidden: { rotate: 0 },
  visible: {
    rotate: [0, 360],
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

// Pulsating animation
export const pulsate = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.05, 1],
    transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
  },
};

// Scale up animation
export const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};
