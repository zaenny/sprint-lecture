"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const SLIDES = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
];

export default function SimpleSlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    // 0 => (0 + 1) % 5 === 1
    // 1 => (1 + 1) % 5 === 2
    // 2 => (2 + 1) % 5 === 3
    // 3 => (3 + 1) % 5 === 4
    // 4 => (4 + 1) % 5 === 0
    // 5 => (5 + 1) % 5 === 1
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length,
    );
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="relative h-64 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ x: -300, opacity: 0 }}
            className={`absolute h-full w-full ${SLIDES[currentIndex]}`}
          ></motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="bg-opacity-50 absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-black p-2 text-white"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="bg-opacity-50 absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-black p-2 text-white"
      >
        →
      </button>
    </div>
  );
}
