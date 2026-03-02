'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const images = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop",
  //"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
]

export default function OurWork() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const [screenWidth, setScreenWidth] = useState(1200)

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const sequence = async () => {
    await controls.start("enter")
    await new Promise(res => setTimeout(res, 300))
    await controls.start("spread")
  }

  useEffect(() => {
    if (isInView) sequence()
  }, [isInView])

  return (
    <>
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center ">
        Our Work
      </h2>
      <p className="text-gray-500 ">
      Real projects. Real impact. Designed to elevate brands in the digital world. 
        </p>

      <section
        ref={ref}
        className="relative min-h-[40vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        <div className="relative flex items-center justify-center w-full">

          {images.map((src, index) => {

            const center = (images.length - 1) / 2
            const offset = index - center

            // 🔥 Responsive Spread Based On Screen Width
            let spreadMultiplier

            if (screenWidth < 640) {
              spreadMultiplier = 85   // mobile
            } else if (screenWidth < 1024) {
              spreadMultiplier = 160  // tablet
            } else {
              spreadMultiplier = 220  // laptop / desktop
            }

            const spreadX = offset * spreadMultiplier
            const spreadY = (offset * offset) * (spreadMultiplier / 40)
            const spreadRotate = offset * 6

            return (
              <motion.div
                key={index}
                initial={{
                  y: "120vh",
                  rotate: -40,
                  opacity: 0,
                  scale: 0.95
                }}
                animate={controls}
                variants={{
                  enter: {
                    y: 0,
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 1.4,
                      ease: [0.25, 1, 0.5, 1],
                    },
                  },
                  spread: {
                    x: spreadX,
                    y: spreadY,
                    rotate: spreadRotate,
                    transition: {
                      duration: 1.3,
                      ease: [0.25, 1, 0.5, 1],
                    },
                  },
                }}
                className="
                  absolute
                  w-24
                  sm:w-36
                  md:w-56
                  lg:w-64
                  aspect-[4/3]
                  rounded-xl
                  overflow-hidden
                  
                "
                style={{
                  zIndex: images.length - index,
                  transformOrigin: "bottom center",
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )
          })}

        </div>
      </section>
    </>
  )
}