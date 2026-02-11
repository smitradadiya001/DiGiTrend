"use client";

import React from "react";
import {motion} from "framer-motion";
import { ArrowUpRight} from "lucide-react";


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
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const dotPattern = {
    backgroundImage: "radial-gradient(circle, rgba(0,0,0,1), 0.5px, transparent 0.5px)",
    backgroundSize: "15px 15px",
  };

  return (
    <div className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden font-sans selection:bg-teal-500/30">
      <div className="absolute inset-0 z-0 opacity-40" style={dotPattern} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full z-0" />
      
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-black-700 bg-black/5 backdrop-blur-md mb-12">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-black-300 font-medium tracking-tight">Get ready to level up your digital presence 🚀</span>
        </motion.div>

         <motion.h1
  variants={itemVariants}
  className="text-1xl md:text-4xl lg:text-6xl font-bold text-black tracking-tight leading-[1.1] mb-8"
>
  We Create <span className="text-blue-900">Websites</span> <br/>that
 
  Sells & <span className="text-blue-900">Ads</span> that Convert
</motion.h1>



        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 font-light leading-relaxed">
          Top-Tier Web Design & Digital Experiences for <br className="hidden md:block" /> High-Impact Brands
        </motion.p>

        <motion.button variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group relative flex items-center gap-2 px-8 py-4 bg-transparent border border-black/20 rounded-xl text-black font-medium overflow-hidden transition-all hover:border-blue/90">
          <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10">Let's Talk</span>
          <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.button>
      </motion.div>
    </div>
  );
}