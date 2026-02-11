"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

/*
  Dependencies:
    npm install framer-motion lucide-react

  Font:
    Add this to your index.html <head> or CSS:
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />

  Tailwind:
    Make sure Tailwind CSS is set up in your project.
    Add to tailwind.config.js → theme.extend.fontFamily:
      caveat: ['"Caveat"', 'cursive'],
*/

export default function Logo() {
  const magicText = "DiGi".split("");
  const tealText = "Trend".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const sparkleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0],
      transition: {
        delay: (magicText.length + tealText.length) * 0.1 + 0.5,
        duration: 1.5,
        repeat: 1,
        repeatDelay: 2,
      },
    },
  };

  return (
    <div className="flex items-center justify-center  p-20 rounded-lg">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative flex items-center font-caveat text-6xl md:text-8xl select-none"
      >
        {/* Magic Part */}
        <div className="flex">
          {magicText.map((char, index) => (
            <motion.span
              key={`magic-${index}`}
              variants={letterVariants}
              className="text-black-200 font-magic drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Teal Part */}
        <div className="flex">
          {tealText.map((char, index) => (
            <motion.span
              key={`teal-${index}`}
              variants={letterVariants}
              className="text-blue-900 font-magic drop-shadow-[0_0_15px_rgba(0,242,234,0.5)]"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Magic Sparkle Effect */}
        <motion.div
          variants={sparkleVariants}
          className="absolute -right-8 -top-4 text-blue-900"
        >
          <Sparkles className="size-8" />
        </motion.div>

        <motion.div
          variants={sparkleVariants}
          className="absolute -left-8 bottom-0 text-white"
          style={{ animationDelay: "0.5s" }}
        >
          <Sparkles className="size-6" />
        </motion.div>
      </motion.div>
    </div>
  );
}