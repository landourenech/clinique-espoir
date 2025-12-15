"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/animation.png",
  "/animation2.png",
  "/animation3.jpg" // ajoute autant que tu veux
];

function Hero() {
  const [current, setCurrent] = useState(0);

  // Change l'image toutes les X secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 secondes par slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-175 overflow-hidden">
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

      {/* Overlay optionnel pour le contraste */}
      <div className="absolute inset-0"></div>
    </div>
  );
}

export default Hero;
