import { useEffect, useRef, useState } from "react";

const BRANDS = [
  { id: "inkspire", label: "Inkspire\nTattoo", emoji: "🌹", textColor: "black" },
  { id: "ancestral", label: "Ancestral\nHouse", emoji: "🏠", textColor: "#5c3d11" },
  { id: "greenden", label: "Greenden\nGym", emoji: "💪", textColor: "#1b5e20" },
  { id: "kinography", label: "Kinography", emoji: "🎥", textColor: "#888" },
  { id: "beast", label: "Beast\nMode", emoji: "🐉", textColor: "#4c1d95" },
  { id: "studio", label: "Studio\nBloom", emoji: "🌸", textColor: "#9b1a52" },
  { id: "apexlabs", label: "Apex\nLabs", emoji: "⚡", textColor: "#1e3a8a" },
  { id: "terra", label: "Terra\nRoots", emoji: "🌿", textColor: "#78350f" },
  { id: "nova", label: "Nova\nWorks", emoji: "🚀", textColor: "#f97316" },
];

const SPEED = 1;

function getResponsiveDims(width) {
  if (width < 480) {
    return {
      cardW: 92,
      cardH: 56,
      amplitude: 26,
      wavelength: 340,
      stepX: 98,
    };
  }

  if (width < 640) {
    return {
      cardW: 106,
      cardH: 62,
      amplitude: 32,
      wavelength: 400,
      stepX: 114,
    };
  }

  if (width < 1024) {
    return {
      cardW: 140,
      cardH: 80,
      amplitude: 45,
      wavelength: 520,
      stepX: 148,
    };
  }

  return {
    cardW: 160,
    cardH: 90,
    amplitude: 60,
    wavelength: 600,
    stepX: 168,
  };
}

export default function SpiralBrands({ id }) {
  const containerRef = useRef(null);
  const offsetRef = useRef(0);
  const rafRef = useRef(null);

  const [dims, setDims] = useState(() => {
    const base = getResponsiveDims(window.innerWidth);
    return { ...base, containerH: base.cardH + base.amplitude * 2 + 24 };
  });

  useEffect(() => {
    const update = () => {
      const base = getResponsiveDims(window.innerWidth);
      setDims({ ...base, containerH: base.cardH + base.amplitude * 2 + 24 });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const totalItems = BRANDS.length * 3;
    const totalW = totalItems * dims.stepX;
    const centerY = dims.containerH / 2;

    const tick = () => {
      offsetRef.current += SPEED;

      const el = containerRef.current;
      if (!el) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const items = el.querySelectorAll(".sarpakar-item");
      items.forEach((node) => {
        const index = Number(node.dataset.index ?? 0);
        let x = index * dims.stepX - offsetRef.current;

        while (x < -dims.stepX) x += totalW;
        while (x >= totalW - dims.stepX) x -= totalW;

        const rad = (x / dims.wavelength) * Math.PI * 2;
        const y = centerY + Math.sin(rad) * dims.amplitude;
        const slope = (Math.cos(rad) * dims.amplitude * (Math.PI * 2)) / dims.wavelength;
        const angle = Math.atan(slope) * (180 / Math.PI);

        node.style.transform = `translate3d(${x}px, ${y - dims.cardH / 2}px, 0) rotate(${angle}deg)`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [dims]);

  return (
    <div
      id={id}
      className="relative w-full overflow-hidden py-16 select-none"
      style={{ backgroundColor: "white" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage: `
            radial-gradient(circle, #e8e1d5 1.5px, transparent 1.5px),
            radial-gradient(circle, #e8e1d5 1.5px, transparent 1.5px)
          `,
          backgroundPosition: "0 0, 10px 10px",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 mb-10 px-4 text-center">
        <p className="text-[24px] md:text-[30px] tracking-[0.4em] uppercase text-gray-400 mb-2">
          Trusted Partners
        </p>
      </div>

      <div ref={containerRef} className="relative w-full" style={{ height: dims.containerH }}>
        {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
          <BrandCard key={`${brand.id}-${i}`} brand={brand} index={i} dims={dims} />
        ))}
      </div>
    </div>
  );
}

function BrandCard({ brand, index, dims }) {
  return (
    <div
      className="sarpakar-item absolute top-0 left-0 flex items-center justify-center bg-white shadow-sm"
      data-index={index}
      style={{
        width: dims.cardW,
        height: dims.cardH,
        borderRadius: dims.cardH,
        boxSizing: "border-box",
        willChange: "transform",
      }}
    >
      <div className="flex items-center gap-1.5 px-2">
        {brand.emoji && <span className="text-sm md:text-2xl">{brand.emoji}</span>}
        <span
          className="whitespace-pre-line text-center text-[8px] md:text-[11px] font-bold uppercase tracking-[0.16em] leading-[1.1]"
          style={{ color: brand.textColor }}
        >
          {brand.label}
        </span>
      </div>
    </div>
  );
}
