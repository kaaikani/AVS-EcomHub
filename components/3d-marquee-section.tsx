"use client"

import { ThreeDMarquee } from "@/components/ui/3d-marquee"

export function ThreeDMarqueeSection() {
  const baseImages = [
    "https://s3.ap-south-1.amazonaws.com/cdn.kaaikani.co.in/avsecomhub/Frame+290.jpg",
    "https://s3.ap-south-1.amazonaws.com/cdn.kaaikani.co.in/avsecomhub/Frame+289.jpg",
    "https://s3.ap-south-1.amazonaws.com/cdn.kaaikani.co.in/avsecomhub/Frame+288.jpg",
    "https://s3.ap-south-1.amazonaws.com/cdn.kaaikani.co.in/avsecomhub/Frame+287.jpg",
    "https://s3.ap-south-1.amazonaws.com/cdn.kaaikani.co.in/avsecomhub/Frame+301.jpg",
    "https://s3.ap-south-1.amazonaws.com/cdn.kaaikani.co.in/avsecomhub/Frame+304.jpg",
    "https://s3.ap-south-1.amazonaws.com/cdn.kaaikani.co.in/avsecomhub/Frame+303.jpg",
    "https://s3.ap-south-1.amazonaws.com/cdn.kaaikani.co.in/avsecomhub/Frame+302.jpg",
    "https://s3.ap-south-1.amazonaws.com/cdn.kaaikani.co.in/avsecomhub/Frame+305.jpg",
    "https://s3.ap-south-1.amazonaws.com/cdn.kaaikani.co.in/avsecomhub/Frame+306.jpg",
    "https://s3.ap-south-1.amazonaws.com/cdn.kaaikani.co.in/avsecomhub/Frame+307.jpg",
    "https://s3.ap-south-1.amazonaws.com/cdn.kaaikani.co.in/avsecomhub/Frame+308.jpg",
    "https://s3.ap-south-1.amazonaws.com/cdn.kaaikani.co.in/avsecomhub/Frame+309.jpg",
    "https://s3.ap-south-1.amazonaws.com/cdn.kaaikani.co.in/avsecomhub/Frame+310.jpg",
  ]
  
  // Duplicate images to create seamless marquee effect
  const marqueeImages = [...baseImages, ...baseImages, ...baseImages]

  return (
    <section className="py-10 bg-black relative z-10 min-h-[600px]">
      {/* <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-6 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block text-white">HIGH-IMPACT</span>
          <span className="block text-orange-400 drop-shadow-[0_0_20px_rgba(251,146,60,0.35)]">E-COMMERCE</span>
          <span className="block text-white">SOLUTIONS</span>
        </h1>
      </div> */}
      <div className="mx-auto max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
        <ThreeDMarquee images={marqueeImages} />
      </div>
    </section>
  )
}

