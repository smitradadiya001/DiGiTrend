"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "BlackBox",
    category: "WORDPRESS",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "RxGStudios",
    category: "FRAMER",
    image:
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "MyPlayful",
    category: "SHOPIFY",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "HoonNaturals",
    category: "WORDPRESS",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Probize",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "HoonNaturals",
    category: "WORDPRESS",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1000&auto=format&fit=crop",
  },
];

function getLayout(width) {
  if (width < 640) {
    const card = 200;
    return {
      cardSize: card,
      radius: card * 1.7,
      perspective: 900,
    };
  }

  if (width < 1024) {
    const card = 200;
    return {
      cardSize: card,
      radius: card * 1.7,
      perspective: 1200,
    };
  }

  const card = 240;
  return {
    cardSize: card,
    radius: card * 1.7,
    perspective: 1400,
  };
}

export default function OurWork({ id }) {
  const sectionRef = useRef(null);
  const rotationRaw = useMotionValue(0);
  const rotateY = useSpring(rotationRaw, {
    stiffness: 70,
    damping: 20,
  });

  const [layout, setLayout] = useState(() =>
    typeof window !== "undefined"
      ? getLayout(window.innerWidth)
      : getLayout(1200)
  );

  useEffect(() => {
    const handleResize = () => {
      setLayout(getLayout(window.innerWidth));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    const onWheel = (e) => {
      const rect = section.getBoundingClientRect();

      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) -
        Math.max(rect.top, 0);

      const visibilityRatio = visibleHeight / window.innerHeight;
      const inView = visibilityRatio >= 0.8;

      if (!inView) return;

      const current = rotationRaw.get();
      const next = clamp(current - e.deltaY * 0.4, -360, 0);

      const canRotate =
        (e.deltaY > 0 && current > -360) ||
        (e.deltaY < 0 && current < 0);

      if (canRotate) {
        e.preventDefault(); // 🔥 LOCK SCROLL
        rotationRaw.set(next);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [rotationRaw]);

  return (
    <>
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-center mt-10">
        Our Work
      </h1>

      <section
        ref={sectionRef}
        id={id}
        className="relative bg-white overflow-hidden flex items-center justify-center"
        style={{ height: "100vh" }}
      >
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ perspective: `${layout.perspective}px` }}
        >
          <motion.div
            style={{
              rotateY,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            className="relative w-0 h-0"
          >
            {PROJECTS.map((project, index) => {
              const angle = (360 / PROJECTS.length) * index;

              return (
                <div
                  key={project.id}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${layout.radius}px)`,
                  }}
                >
                  <div
                    className="relative overflow-hidden bg-white rounded-3xl shadow-xl border border-black/10"
                    style={{
                      width: layout.cardSize,
                      height: layout.cardSize,
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition duration-300 flex flex-col items-center justify-center text-white text-center p-4">
                      <p className="text-xs font-bold tracking-widest uppercase">
                        {project.category}
                      </p>
                      <h3 className="text-lg md:text-2xl font-bold mt-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}