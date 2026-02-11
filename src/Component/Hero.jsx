"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [stage, setStage] = useState(0);
  const [pillText, setPillText] = useState("");
  const [subText, setSubText] = useState("");

  // Animation sequence from the video
  const stages = [
    { id: "logo", duration: 2000 },
    { id: "empowering", duration: 2000 },
    { id: "with", duration: 600 },
    { id: "pill-1", duration: 1500, pill: "AI platforms", sub: "adapt." },
    { id: "pill-2", duration: 1500, pill: "AI platforms", sub: "accelerate." },
    { id: "pill-3", duration: 1500, pill: "AI platforms", sub: "scale." },
    { id: "pill-4", duration: 1500, pill: "AI solutions", sub: "consulting-led." },
    { id: "pill-5", duration: 1500, pill: "AI solutions", sub: "industry-focused." },
    { id: "pill-6", duration: 1500, pill: "DiGi-Trend: innovation network", sub: "co-innovate." },
    { id: "pill-7", duration: 1500, pill: "DiGi-Trend: innovation network", sub: "reimagine." },
    { id: "transition", duration: 400 },
    { id: "lead", duration: 1800 },
    { id: "trust", duration: 1800 },
    { id: "measure", duration: 1800 },
    { id: "proof", duration: 1800 },
    { id: "beyond", duration: 1800 },
    { id: "capabilities", duration: 1800 },
    { id: "evolving", duration: 1800 },
    { id: "so-are-we", duration: 1800 },
    { id: "final", duration: 3000 }
  ];

  useEffect(() => {
    const currentStage = stages[stage];
    
    if (currentStage.pill) {
      setPillText(currentStage.pill);
      setSubText(currentStage.sub);
    }

    const timer = setTimeout(() => {
      setStage((prev) => (prev + 1) % stages.length);
    }, currentStage.duration);

    return () => clearTimeout(timer);
  }, [stage]);

  const current = stages[stage].id;

  // Colorful dots for logo
  const Dots = ({ size = "w-12 h-12" }) => (
    <div className={`relative ${size}`}>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            backgroundColor: ["#2E1A47", "#5CB85C", "#3498DB", "#2C3E50", "#E91E63", "#FF9800", "#FFC107"][i],
            top: "50%",
            left: "50%",
            transform: `rotate(${i * 51.4}deg) translate(18px) rotate(-${i * 51.4}deg)`,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray overflow-hidden">
      <AnimatePresence mode="wait">
        
        {/* Logo Intro */}
        {current === "logo" && (
          <motion.div
            key="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3"
          >
            <span className="text-6xl md:text-7xl font-bold text-[#2E1A47]">DiGi Trend</span>
            <Dots />
            <span 
              className="text-6xl md:text-7xl font-light bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #5CB85C, #3498DB, #2C3E50, #E91E63, #FF9800, #FFC107)"
              }}
            >
              intelligence
            </span>
            <span className="text-3xl text-gray-400 ml-2">TM</span>
          </motion.div>
        )}

        {/* Empowering Enterprises */}
        {current === "empowering" && (
          <motion.div
            key="empowering"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[20%]"
          >
            <h1 
              className="text-5xl md:text-7xl font-light tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #E91E63, #9C27B0, #3498DB, #5CB85C, #FF9800)"
              }}
            >
              empowering enterprises
            </h1>
          </motion.div>
        )}

        {/* With Text */}
        {current === "with" && (
          <motion.div
            key="with"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-5xl text-gray-400 font-light italic">with</span>
          </motion.div>
        )}

        {/* Pill Stages */}
        {current.startsWith("pill-") && (
          <motion.div
            key="pill-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-8 w-full max-w-4xl px-8"
          >
            <span className="text-4xl text-gray-400 font-light italic">with</span>
            
            <div 
              className="relative px-16 md:px-28 py-12 md:py-16 rounded-full w-full max-w-3xl"
              style={{
                background: "linear-gradient(white, white) padding-box, linear-gradient(90deg, #5CB85C, #3498DB, #E91E63, #FF9800) border-box",
                border: "3px solid transparent"
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={pillText}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl md:text-6xl font-bold text-black text-center"
                >
                  {pillText}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="h-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={subText}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-2xl md:text-3xl text-gray-400 font-light"
                >
                  {subText}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* Transition */}
        {current === "transition" && (
          <motion.div
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-4xl text-gray-300 font-light">to</span>
          </motion.div>
        )}

        {/* Lead */}
        {current === "lead" && (
          <motion.div
            key="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center px-6"
          >
            <h1 className="text-5xl md:text-7xl font-black text-black tracking-tight">
              to lead in an AI-first world.
            </h1>
          </motion.div>
        )}

        {/* Trust */}
        {current === "trust" && (
          <motion.div
            key="trust"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center px-6"
          >
            <h1 className="text-5xl md:text-7xl font-medium text-gray-700 tracking-tight">
              intelligence you can{" "}
              <span 
                className="font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #E91E63, #9C27B0, #3498DB)"
                }}
              >
                trust.
              </span>
            </h1>
          </motion.div>
        )}

        {/* Measure */}
        {current === "measure" && (
          <motion.div
            key="measure"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center px-6"
          >
            <h1 className="text-5xl md:text-7xl font-medium text-gray-700 tracking-tight">
              outcomes you can{" "}
              <span className="relative inline-block font-bold text-black">
                measure.
                <span 
                  className="absolute bottom-0 left-0 w-full h-2 rounded-full"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #E91E63, #9C27B0, #5CB85C)"
                  }}
                />
              </span>
            </h1>
          </motion.div>
        )}

        {/* Proof */}
        {current === "proof" && (
          <motion.div
            key="proof"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-4">
              <span className="text-6xl md:text-7xl font-bold text-[#2E1A47]">DiGi Trend</span>
              <Dots />
              <span className="text-6xl md:text-7xl font-light text-[#2E1A47]">intelligence</span>
            </div>
            <p className="text-3xl md:text-4xl text-gray-500 font-light">proof over promise.</p>
          </motion.div>
        )}

        {/* Beyond */}
        {current === "beyond" && (
          <motion.div
            key="beyond"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-4">
              <span className="text-6xl md:text-7xl font-bold text-[#2E1A47]">DiGi Trend</span>
              <Dots />
              <span className="text-6xl md:text-7xl font-light text-[#2E1A47]">intelligence</span>
            </div>
            <p className="text-3xl md:text-4xl text-gray-500 font-light italic">AI and beyond.</p>
          </motion.div>
        )}

        {/* Capabilities */}
        {current === "capabilities" && (
          <motion.div
            key="capabilities"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex items-center gap-4">
              <span className="text-6xl md:text-7xl font-bold text-[#2E1A47]">DiGi Trend</span>
              <Dots />
            </div>
            <p className="text-2xl text-gray-500 font-light">consulting • technology •</p>
          </motion.div>
        )}

        {/* Evolving */}
        {current === "evolving" && (
          <motion.div
            key="evolving"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center px-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
              evolving faster than ever.
            </h1>
          </motion.div>
        )}

        {/* So are we */}
        {current === "so-are-we" && (
          <motion.div
            key="so-are-we"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center px-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-400 tracking-tight">
              so are we.
            </h1>
          </motion.div>
        )}

        {/* Final Logo */}
        {current === "final" && (
          <motion.div
            key="final"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <span className="text-7xl md:text-9xl font-bold text-[#2E1A47] tracking-tight">DiGi Trend</span>
            <Dots size="w-20 h-20 md:w-28 md:h-28" />
            <span className="text-7xl md:text-9xl font-light text-[#2E1A47] tracking-tight">intelligence</span>
          </motion.div>
        )}

      </AnimatePresence>

      {/* Subtle background gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-50/30 rounded-full blur-[120px] -z-10" />
    </div>
  );
};

export default Hero;
