"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function LogoMarqueeServices() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)

  // Top row logos
  const topRowLogos = [
    { 
      name: "React", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB"
    },
    { 
      name: "Next.js", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "#000000"
    },
    { 
      name: "TypeScript", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6"
    },
    { 
      name: "Node.js", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      color: "#339933"
    },
    { 
      name: "Tailwind CSS", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      color: "#06B6D4"
    },
    { 
      name: "JavaScript", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E"
    },
    { 
      name: "MongoDB", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
      color: "#47A248"
    },
    { 
      name: "PostgreSQL", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "#4169E1"
    },
  ]

  // Bottom row logos
  const bottomRowLogos = [
    { 
      name: "MySQL", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      color: "#4479A1"
    },
    { 
      name: "Remix", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/remix/remix-original.svg",
      color: "#000000"
    },
    { 
      name: "CSS3", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
      color: "#1572B6"
    },
    { 
      name: "Bootstrap", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      color: "#7952B3"
    },
    { 
      name: ".NET", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
      color: "#512BD4"
    },
    { 
      name: "AWS", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      color: "#FF9900"
    },
    { 
      name: "Docker", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
      color: "#2496ED"
    },
    { 
      name: "Git", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
      color: "#F05032"
    },
  ]

  const Row = ({ dir, id, logos }: { dir: "left" | "right"; id: string; logos: typeof topRowLogos }) => (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex ${dir === "left" ? "animate-scroll-left" : "animate-scroll-right"} whitespace-nowrap`}
        style={{ animationPlayState: pausedRow === id ? "paused" : "running", width: "max-content" }}
      >
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div
            key={`${id}-${i}`}
            className="flex-shrink-0 mx-3"
            onMouseEnter={() => setPausedRow(id)}
            onMouseLeave={() => setPausedRow(null)}
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-xl flex items-center justify-center overflow-hidden group/logo hover:border-orange-400/40 transition-all duration-300">
                <div className="relative w-full h-full">
                  <Image 
                    src={logo.image || "/placeholder.svg"} 
                    alt={logo.name} 
                    fill 
                    className="object-contain p-3 group-hover/logo:scale-110 transition-transform duration-300" 
                    unoptimized
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-white/70 font-medium opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {logo.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
            Built with <span className="text-orange-400">modern frameworks</span>
          </h2>
          {/* <Button variant="outline" className="mt-4 sm:mt-0 liquid-glass text-white border-white/20 bg-transparent">
            Learn More
          </Button> */}
        </div>
        <div className="relative">
          <Row dir="right" id="first" logos={topRowLogos} />
          <div className="mt-6" />
          <Row dir="left" id="second" logos={bottomRowLogos} />
        </div>
      </div>
    </section>
  )
}

