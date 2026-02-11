"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Third() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const dotPattern = {
    backgroundImage:
      "radial-gradient(circle, rgba(0,0,0,1) 0.5px, transparent 0.5px)",
    backgroundSize: "15px 15px",
  };

  return (
    <div className="relative min-h-screen w-full bg-white flex items-center justify-center overflow-hidden font-sans">

      {/* Background */}
      <div className="absolute inset-0 opacity-30" style={dotPattern} />

      {/* =================== BUBBLES =================== */}

      {/* Bubble 1 - Timeless */}
   <motion.div
  animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }}
  className="absolute top-24 left-46 w-38 h-38 bg-gradient-to-br from-indigo-500/60 to-blue-400/40 backdrop-blur-3xl border border-white/40 shadow-2xl flex items-center justify-center text-white font-semibold text-xl"
>
  Timeless
</motion.div>




      {/* Bubble 2 - Creative */}
      <motion.div
        animate={{ y: [0, -40, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-62 right-124 w-38 h-38
        bg-gradient-to-br from-pink-500/60 to-purple-500/40
        backdrop-blur-3xl border border-white/40 shadow-2xl
        flex items-center justify-center text-white font-semibold text-2xl
        rounded-[40%_60%_45%_55%/50%_40%_60%_50%]"
      >
        Creative
      </motion.div>

      {/* Bubble 3 - Edgy */}
     <motion.div
  animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-1/3 right-10 w-52 h-52 flex items-center justify-center"
>
  <svg viewBox="0 0 200 200" className="w-full h-full">

    {/* Spiky Sunburst */}
    <polygon
      points="
        100,5 112,40 145,15 135,50 175,45
        145,75 190,100 145,125 175,155
        135,150 145,185 112,160 100,195
        88,160 55,185 65,150 25,155
        55,125 10,100 55,75 25,45
        65,50 55,15 88,40
       
        
      "
      fill="#F4E6C8"
      stroke="#F2C94C"
      strokeWidth="6"
    />

    {/* Text */}
    <text
      x="50%"
      y="52%"
      textAnchor="middle"
      dominantBaseline="middle"
      transform="rotate(-12 100 100)"
      className="fill-black font-bold text-[22px]"
    >
      Edgy
    </text>

  </svg>
</motion.div>


      {/* =================== CONTENT =================== */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/20 bg-black/5 backdrop-blur-md mb-12"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-black font-medium">
            Get ready to level up your digital presence 🚀
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-4xl lg:text-6xl font-bold text-black leading-[1.1] mb-8"
        >
          We Create <span className="text-blue-900">Websites</span> <br />
          that Sells & <span className="text-blue-900">Ads</span> that Convert
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12"
        >
          Top-Tier Web Design & Digital Experiences for
          High-Impact Brands
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-2 px-8 py-4 border border-black/20 rounded-xl text-black font-medium overflow-hidden transition-all hover:border-blue-500"
        >
          <div className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10">Let's Talk</span>
          <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.button>
      </motion.div>
    </div>
  );
}
