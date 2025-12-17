"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/Animation.png",
  "/Animation2.png",
  "/Animation3.jpg"
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero height responsive */}
      <div className="h-[50vh] md:h-[70vh] lg:h-[85vh]">
        <AnimatePresence>
          <motion.div
            key={current}
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${images[current]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>

        {/* Optional overlay for contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </div>
  );
}

export default Hero;
