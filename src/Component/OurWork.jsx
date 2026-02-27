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
  if (width < 480) {
    return {
      isMobile: true,
      cardW: 140,
      cardH: 140,
      radius: 195,
      perspective: 850,
      sectionHeight: "68vh",
    };
  }

  if (width < 768) {
    return {
      isMobile: true,
      cardW: 160,
      cardH: 160,
      radius: 230,
      perspective: 950,
      sectionHeight: "72vh",
    };
  }

  if (width < 1024) {
    return {
      isMobile: false,
      cardW: 190,
      cardH: 190,
      radius: 320,
      perspective: 1200,
      sectionHeight: "78vh",
    };
  }

  return {
    isMobile: false,
    cardW: 240,
    cardH: 240,
    radius: 400,
    perspective: 1400,
    sectionHeight: "80vh",
  };
}

export default function OurWork({ id }) {
  const sectionRef = useRef(null);
  const rotationRaw = useMotionValue(0);
  const MotionDiv = motion.div;
  const [layout, setLayout] = useState(() => getLayout(window.innerWidth));

  const rotateY = useSpring(rotationRaw, {
    stiffness: 65,
    damping: 24,
  });

  useEffect(() => {
    const onResize = () => setLayout(getLayout(window.innerWidth));
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const onWheel = (event) => {
      if (layout.isMobile) return;

      const rect = section.getBoundingClientRect();
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const visibilityRatio = visibleHeight / window.innerHeight;
      const inView = visibilityRatio > 0.55;
      if (!inView) return;

      const current = rotationRaw.get();
      const step = event.deltaY * -0.35;
      const next = clamp(current + step, -540, 0);

      const canRotate =
        (event.deltaY > 0 && current > -540) ||
        (event.deltaY < 0 && current < 0);

      if (canRotate) {
        event.preventDefault();
        rotationRaw.set(next);
      }
    };

    const onScroll = () => {
      if (!layout.isMobile) return;

      const rect = section.getBoundingClientRect();
      const progress = clamp(
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        0,
        1
      );
      rotationRaw.set(-progress * 540);
    };

    onScroll();
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
    };
  }, [layout.isMobile, rotationRaw]);

  return (
    <>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-gray-900 text-center px-4">
        Our Work
      </h1>
      <section
        ref={sectionRef}
        id={id}
        className="relative bg-white overflow-hidden"
        style={{ height: layout.sectionHeight }}
      >
        <div
          className="relative w-full h-full flex items-center justify-center px-2 md:px-4"
          style={{ perspective: `${layout.perspective}px` }}
        >
          <MotionDiv
            style={{ rotateY, transformStyle: "preserve-3d" }}
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
                    className="relative overflow-hidden bg-white rounded-2xl md:rounded-3xl shadow-xl border border-black/10"
                    style={{ width: layout.cardW, height: layout.cardH }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/25 hover:bg-black/45 transition duration-300 flex flex-col items-center justify-center text-white text-center p-3 md:p-6">
                      <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                        {project.category}
                      </p>
                      <h3 className="text-base sm:text-lg md:text-2xl font-bold mt-1 md:mt-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
