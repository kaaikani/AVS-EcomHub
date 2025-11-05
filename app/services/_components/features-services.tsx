"use client"

import { Star, ExternalLink, Smartphone, Globe } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export function FeaturesServices() {
  return (
    <section id="services" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Why choose our platform.
      </h2>
      <p className="mb-10 text-center text-white/70">Powerful features, unlimited scalability, and exceptional support</p>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="liquid-glass border border-white/20 overflow-hidden">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/KaaiKani White.png"
                  alt="KaaiKani Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-[11px] tracking-widest text-white/80">KAAIKANI</p>
                <h3 className="mt-0.5 text-xl text-white font-semibold">Watch Our Shorts</h3>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              {/* YouTube Shorts Embeds - Side by Side */}
              <div className="grid grid-cols-2 gap-3 max-w-md">
                <div className="relative group">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-lg border-2 border-white/20 shadow-lg shadow-orange-500/10 group-hover:border-orange-400/40 transition-all duration-300 max-h-[280px]">
                    <iframe
                      src="https://www.youtube.com/embed/RmJTTufqopk"
                      title="KaaiKani YouTube Short 1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    /> 
                  </div>
                  <div className="absolute -top-1 -right-1 bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-lg">
                    SHORTS
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-lg border-2 border-white/20 shadow-lg shadow-orange-500/10 group-hover:border-orange-400/40 transition-all duration-300 max-h-[280px]">
                    <iframe
                      src="https://www.youtube.com/embed/-GlMt-T_0IM"
                      title="KaaiKani YouTube Short 2"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-lg">
                    SHORTS
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="liquid-glass border border-white/20 overflow-hidden">
          <CardHeader className="pb-4">
            <p className="text-[11px] tracking-widest text-white/80 mb-2">CLIENT LOVE</p>
            <h3 className="text-lg sm:text-xl text-white font-semibold leading-relaxed">
              "Fresh fruits & vegetables delivered to your doorstep."
            </h3>
          </CardHeader>
          <CardContent>
            {/* Rating Section */}
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-end gap-3 sm:gap-4 pb-4 border-b border-white/10">
              <div className="flex items-baseline gap-2">
                <div className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  4.0
                </div>
                <span className="text-sm text-white/60 font-medium">/5.0</span>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 sm:h-6 sm:w-6 drop-shadow-lg ${
                      i < 4 ? 'fill-orange-400 text-orange-400' : 'fill-white/20 text-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* App & Website Links */}
            <div className="mb-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="https://play.google.com/store/apps/details?id=com.kaaikani.kaaikani&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center gap-3 p-3 rounded-xl border-2 border-white/20 bg-gradient-to-br from-orange-500/10 to-orange-600/10 hover:from-orange-500/20 hover:to-orange-600/20 hover:border-orange-400/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/80 font-medium">Download App</p>
                  <p className="text-[10px] text-white/60 truncate">Google Play Store</p>
                </div>
                <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-orange-400 transition-colors flex-shrink-0" />
              </Link>

              <Link
                href="https://kaaikanistore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center gap-3 p-3 rounded-xl border-2 border-white/20 bg-gradient-to-br from-orange-500/10 to-orange-600/10 hover:from-orange-500/20 hover:to-orange-600/20 hover:border-orange-400/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/80 font-medium">Visit Website</p>
                  <p className="text-[10px] text-white/60 truncate">kaaikanistore.com</p>
                </div>
                <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-orange-400 transition-colors flex-shrink-0" />
              </Link>
            </div>
            
            {/* Stats Grid */}
            {/* <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-white/20 bg-gradient-to-br from-orange-500/20 via-orange-500/15 to-orange-600/20 hover:from-orange-500/30 hover:to-orange-600/30 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 hover:border-orange-400/40 transition-all duration-300 flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center p-3">
                  <div className="text-3xl sm:text-4xl mb-2 drop-shadow-lg">👥</div>
                  <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-orange-300 transition-colors">
                    30K+ Customers
                  </p>
                  <p className="text-[10px] text-white/60 mt-1">Happy Users</p>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </div>
              
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-white/20 bg-gradient-to-br from-orange-500/20 via-orange-500/15 to-orange-600/20 hover:from-orange-500/30 hover:to-orange-600/30 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 hover:border-orange-400/40 transition-all duration-300 flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center p-3">
                  <div className="text-3xl sm:text-4xl mb-2 drop-shadow-lg">📦</div>
                  <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-orange-300 transition-colors">
                    1.2M+ Items
                  </p>
                  <p className="text-[10px] text-white/60 mt-1">Delivered Fresh</p>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </div>
            </div> */}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

