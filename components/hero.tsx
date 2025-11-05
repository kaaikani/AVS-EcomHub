"use client"

import React, { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring, useTransform, motion } from "framer-motion"

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, {
    damping: 40,
    stiffness: 300,
  })
  const display = useTransform(spring, (latest) => {
    return Math.floor(latest).toLocaleString()
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  return (
    <motion.div ref={ref} className="text-3xl md:text-4xl lg:text-5xl font-bold">
      {display}
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="relative text-white py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        {/* Main Heading */}
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
          Delivering Freshness, One Order at a Time
        </h1>

        {/* Descriptive Paragraph */}
        <p className="text-center text-base md:text-md max-w-2xl mx-auto mb-10 md:mb-12 opacity-90">
         At Kaaikani, we take pride in bringing fresh fruits and vegetables straight from farms to homes. Here's a glimpse of what we've achieved with your trust.
        </p>

        {/* Statistical Counters Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Counter 1 */}
          <div className="text-center">
            <AnimatedCounter value={10} />
            <p className="mt-3 text-xs md:text-sm opacity-80 leading-relaxed">
            <span className="font-semibold text-yellow-400">Years in the business</span> Trying to build this business from the ground up.
            </p>
          </div>

          {/* Counter 2 */}
          <div className="text-center">
            <AnimatedCounter value={40000} />
            <p className="mt-3 text-xs md:text-sm opacity-80 leading-relaxed">
            <span className="font-semibold text-yellow-400">Orders Fulfilled</span> Every order we deliver supports local farmers and brings nutrition to your table.
            </p>
          </div>

          {/* Counter 3 */}
          <div className="text-center">
            <AnimatedCounter value={30000} />
            <p className="mt-3 text-xs md:text-sm opacity-80 leading-relaxed">
            <span className="font-semibold text-yellow-400">Happy Customers</span> People trying to get access but guess what? they can't.
            </p>
          </div>

          {/* Counter 4 */}
          <div className="text-center">
            <AnimatedCounter value={120000} />
            <p className="mt-3 text-xs md:text-sm opacity-80 leading-relaxed">
              <span className="font-semibold text-yellow-400">Fresh Items Delivered</span> From seasonal fruits to everyday vegetables, we've delivered over a million items — fresh and on time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
