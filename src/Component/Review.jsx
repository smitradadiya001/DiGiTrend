import { useEffect, useState } from "react";

const reviews = [
  {
    gradient: "grad1",
    name: "@Olivia",
    text: "Absolutely amazing experience. The team delivered beyond expectations!",
  },
  {
    gradient: "grad2",
    name: "@Liam",
    text: "Professional service and great communication throughout the project.",
  },
  {
    gradient: "grad3",
    name: "@Sophia",
    text: "Highly satisfied with the results. Would definitely recommend!",
  },
  {
    gradient: "grad4",
    name: "@Noah",
    text: "Outstanding quality and fast delivery. Truly impressive work.",
  },
  {
    gradient: "grad5",
    name: "@Emma",
    text: "Fantastic support and attention to detail. Loved working with them!",
  },
  {
    gradient: "grad6",
    name: "@James",
    text: "Top-notch service with excellent creativity and execution.",
  },
];

export default function HangingImages({ id }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardW = isMobile ? 260 : 180;
  const cardH = isMobile ? 250 : 180;
  const activeReviews = isMobile ? reviews.slice(0, 4) : reviews;

  const ROPE_PATH = isMobile
    ? "M -120,90 Q 250,200 500,200 Q 750,200 1120,90"
    : "M -120,60 Q 250,140 500,140 Q 750,140 1120,60";

  const stringLen = isMobile ? 55 : 25;
  const animationDuration = isMobile ? 10 : 18;
  const delayGap = animationDuration / activeReviews.length;

  return (
    <section id={id} className="py-8 sm:py-10 md:py-0 md:mt-29">
      <div className="text-center mb-[-5] px-4">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mt-3">
          Trusted by businesses worldwide
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <svg
          viewBox={isMobile ? "0 0 1000 620" : "0 0 1000 460"}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto"
        >
          <defs>
            {activeReviews.map((rev, i) => (
              <linearGradient key={i} id={rev.gradient} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a18cd1" />
                <stop offset="100%" stopColor="#fbc2eb" />
              </linearGradient>
            ))}
          </defs>

          <path
            id="ropePath"
            d={ROPE_PATH}
            stroke="#8B6914"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {activeReviews.map((rev, i) => (
            <g key={i}>
              <g>
                <line x1="0" y1="0" x2="0" y2={stringLen} stroke="#8B6914" strokeWidth="2" />

                <circle cx="0" cy="0" r="6" fill="#22a553" />
                <circle cx="0" cy="0" r="2.5" fill="#fff" />

                <g transform={`translate(${-cardW / 2}, ${stringLen})`}>
                  <rect width={cardW} height={cardH} rx="16" fill="white" stroke="#ddd" />

                  <rect
                    x="10"
                    y="10"
                    width={cardW - 20}
                    height={cardH - 50}
                    rx="10"
                    fill="#FFFFCF"
                    opacity="0.9"
                  />

                  {/* ⭐⭐⭐⭐⭐ Stars */}
                  <text
                    x={cardW / 2}
                    y="30"
                    textAnchor="middle"
                    fontSize={isMobile ? "20" : "16"}
                    fill="#FFBF00"
                  >
                    ★★★★★
                  </text>

                  {/* Review Text */}
                  <foreignObject
                    x="15"
                    y="45"
                    width={cardW - 30}
                    height={cardH - 110}
                  >
                    <div
                     
                      style={{
                        fontSize: isMobile ? "20px" : "13px",
                        fontWeight: "600",
                        color: "#222",
                        textAlign: "center",
                        lineHeight: isMobile ? "1.4" : "1.3",
                      }}
                    >
                      {rev.text}
                    </div>
                  </foreignObject>

                  {/* Client Name */}
                  <text
                    x={cardW / 2}
                    y={cardH - 18}
                    textAnchor="middle"
                    fontSize={isMobile ? "15" : "13"}
                    fontWeight="bold"
                    fill="#222"
                  >
                    {rev.name}
                  </text>
                </g>

                <animateMotion
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                  begin={`${-((i + 1) * delayGap)}s`}
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
