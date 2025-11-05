import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroServices() {
  const cta = (
    <Button asChild className="rounded-full bg-orange-500 px-6 text-black hover:bg-orange-400">
      <a href="#contact" target="_blank" rel="noopener noreferrer">
        Get Started
      </a>
    </Button>
  )

  return (
    <section className="relative mt-5 isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image src="/AVS-logo2.png" alt="AVS logo" width={32} height={32} className="h-8 w-8" />
            <p className="text-sm uppercase tracking-[0.25em] text-orange-400/80">services</p>
          </div>

          {/* H1 */}
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">COMPREHENSIVE</span>
            <span className="block text-orange-400 drop-shadow-[0_0_20px_rgba(251,146,60,0.35)]">E-COMMERCE</span>
            <span className="block">SOLUTIONS</span>
          </h1>

          {/* H2 */}
          <p className="mt-4 max-w-2xl text-center text-sm text-white/80 sm:text-base">
            Complete e-commerce platform with unlimited features, advanced customization, and powerful tools for modern businesses.
          </p>

          <div className="mt-6">{cta}</div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: string
}) {
  return (
    <div className="relative rounded-2xl glass-border bg-neutral-900/50 p-6 hover:glass-border-enhanced transition-all duration-300">
      <div className="space-y-3">
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="text-xl font-bold leading-snug text-white/90">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
        <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-orange-400">
          Learn More
        </div>
      </div>
    </div>
  )
}


