// src/animations/matchAnimation.js

import { motion } from 'framer-motion';

// Match success animation (scale with a burst of color)
export const matchSuccess = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: [1, 1.3, 1],
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      scale: { type: 'spring', stiffness: 100, damping: 10 },
      backgroundColor: { duration: 0.8 },
    },
    backgroundColor: ['#ff4d6d', '#ff80a1', '#ffb3cc', '#ff4d6d'], // Gradient burst effect
  },
};

// Match sparkle effect (small sparkles around the match)
export const matchSparkle = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
  },
};

// Confetti burst effect (for a celebratory match)
export const confettiBurst = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: [0, 15, -15, 30, -30, 0],
    transition: {
      duration: 2,
      ease: 'easeOut',
      repeat: 3,
      repeatType: 'mirror',
      delay: 0.3,
    },
    backgroundColor: ['#f5a623', '#f8e71c', '#7ed321', '#4a90e2', '#50e3c2', '#ff4d6d'],
  },
};

// Fireworks animation for the background when a match is made
export const fireworks = {
  hidden: { scale: 0 },
  visible: {
    scale: [1, 1.5, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      repeat: 2,
    },
  },
};
