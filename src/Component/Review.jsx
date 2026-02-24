import { useState, useEffect } from "react";

const reviews = [
  { gradient: "grad1", label: "Animals" },
  { gradient: "grad2", label: "Geography" },
  { gradient: "grad3", label: "History" },
  { gradient: "grad4", label: "Entertainment" },
  { gradient: "grad5", label: "Space" },
  { gradient: "grad6", label: "Tech" },
 
];

export default function HangingImages({ id }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🔥 Smaller cards on mobile
  const cardW = isMobile ? 150 : 160;
  const cardH = isMobile ? 170 : 190;

  // 🔥 More rope curve on mobile
  const ROPE_PATH = isMobile
    ? "M 0,80 Q 250,180 500,180 Q 750,180 1000,80"
    : "M 0,60 Q 250,140 500,140 Q 750,140 1000,60";

  const stringLen = isMobile ? 30 : 25;

  // 🔥 More spacing in animation
  const animationDuration = isMobile ? 25 : 18;
  const delayGap = isMobile ? 4 : 3;

  return (
    <section id={id} >
      <div className="text-center mb-5 px-4">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mt-3">
          Trusted by businesses worldwide
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <svg
          viewBox={isMobile ? "0 0 1000 520" : "0 0 1000 460"}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto"
        >
          <defs>
            {reviews.map((rev, i) => (
              <linearGradient
                key={i}
                id={rev.gradient}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#a18cd1" />
                <stop offset="100%" stopColor="#fbc2eb" />
              </linearGradient>
            ))}
          </defs>

          {/* Rope */}
          <path
            id="ropePath"
            d={ROPE_PATH}
            stroke="#8B6914"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {reviews.map((rev, i) => (
            <g key={i}>
              <g>
                {/* String */}
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2={stringLen}
                  stroke="#8B6914"
                  strokeWidth="2"
                />

                {/* Pin */}
                <circle cx="0" cy="0" r="6" fill="#22a553" />
                <circle cx="0" cy="0" r="2.5" fill="#fff" />

                {/* Card */}
                <g transform={`translate(${-cardW / 2}, ${stringLen})`}>
                  <rect
                    width={cardW}
                    height={cardH}
                    rx="14"
                    fill="white"
                    stroke="#ddd"
                  />

                  <rect
                    x="8"
                    y="8"
                    width={cardW - 16}
                    height={cardH - 45}
                    rx="8"
                    fill={`url(#${rev.gradient})`}
                    opacity="0.8"
                  />

                  <text
                    x={cardW / 2}
                    y={cardH - 12}
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="bold"
                    fill="#222"
                  >
                    {rev.label}
                  </text>
                </g>

                {/* 🔥 Better animation spacing */}
                <animateMotion
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                  begin={`${i * delayGap}s`}
                >
                  <mpath href="#ropePath" />
                </animateMotion>
              </g>
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
}