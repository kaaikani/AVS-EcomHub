import { Button } from "@/components/ui/button"
import RotatingText from "./RotatingText"

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const Play = () => (
  <svg
    className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>
)

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="w-full text-center relative z-10 animate-fade-in-hero mt-5 px-5 sm:px-7 md:px-9 lg:px-12">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8  animate-fade-in-badge">
          <span className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></span>
          End-to-End Digital Commerce        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-heading">
          <span className="text-foreground">Elevate your</span>
          <br />
          <span className="inline-flex items-center justify-center flex-wrap gap-2 mt-4 sm:mt-6 md:mt-8">
            <span className="text-foreground">Business</span>
            <RotatingText
              texts={["Growth", "Innovation", "Efficiency", "Success", "Performance"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-white text-black overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg shadow-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-xl md:text-2xl text-white text-balance w-full mb-8 sm:mb-12 leading-relaxed animate-fade-in-subheading font-light">
        We design, build, and scale high-performing digital storefronts. Our expertise in platform architecture, conversion rate optimization (CRO), and channel management ensures your business captures more sales and delivers exceptional customer experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-16 animate-fade-in-buttons">
          <Button
            size="lg"
            className="bg-white text-black rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg group cursor-pointer relative overflow-hidden"
          >
Start Scaling Your Store            <ArrowRight />
          </Button>

          {/* <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-4 text-lg font-medium border-border hover:bg-accent transition-all duration-200 hover:scale-105 group bg-transparent cursor-pointer"
          >
            <Play />
            Watch Demo
          </Button> */}
        </div>

        {/* Trust Indicators */}
        <div className="text-center hidden sm:block overflow-hidden animate-fade-in-trust w-full">
          <p className="text-sm text-white mb-6">Expertise Across E-commerce Services and Platforms</p>
          <div className="relative overflow-hidden w-full">
            <div className="flex items-center gap-8 opacity-60 hover:opacity-80 transition-all duration-500 animate-slide-left">
              <div className="flex items-center gap-8 whitespace-nowrap">
                {/* Core Services - Main List */}
                <div className="text-base sm:text-lg font-semibold">Headless Architecture</div>
                <div className="text-base sm:text-lg font-semibold">PWA/Mobile Apps</div>
                <div className="text-base sm:text-lg font-semibold">Multi-Channel Sales</div>
                <div className="text-base sm:text-lg font-semibold">ERP/Billing Integration</div>
                <div className="text-base sm:text-lg font-semibold">Conversion Optimization</div>
                <div className="text-base sm:text-lg font-semibold">Shipping & Logistics</div>
                <div className="text-base sm:text-lg font-semibold">Custom Marketplaces</div>
                <div className="text-base sm:text-lg font-semibold">Data Analytics</div>
              </div>
              {/* Duplicate for seamless loop - repeat the service list */}
              <div className="flex items-center gap-8 whitespace-nowrap">
                <div className="text-base sm:text-lg font-semibold">Headless Architecture</div>
                <div className="text-base sm:text-lg font-semibold">PWA/Mobile Apps</div>
                <div className="text-base sm:text-lg font-semibold">Multi-Channel Sales</div>
                <div className="text-base sm:text-lg font-semibold">ERP/Billing Integration</div>
                <div className="text-base sm:text-lg font-semibold">Conversion Optimization</div>
                <div className="text-base sm:text-lg font-semibold">Shipping & Logistics</div>
                <div className="text-base sm:text-lg font-semibold">Custom Marketplaces</div>
                <div className="text-base sm:text-lg font-semibold">Data Analytics</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Trust Indicators */}
        <div className="text-center mb-8 sm:hidden overflow-hidden animate-fade-in-trust w-full">
          <p className="text-sm text-white mb-6">Expertise Across E-commerce Services and Platforms</p>
          <div className="relative overflow-hidden w-full">
            {/* Left blur fade */}
            <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            {/* Right blur fade */}
            <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            <div className="flex items-center gap-6 opacity-60 animate-slide-left-mobile">
              <div className="flex items-center gap-6 whitespace-nowrap">
                {/* Mobile List - Shorter for better flow */}
                <div className="text-sm font-semibold">Headless Architecture</div>
                <div className="text-sm font-semibold">Multi-Channel Sales</div>
                <div className="text-sm font-semibold">PWA/Mobile Apps</div>
                <div className="text-sm font-semibold">Conversion Optimization</div>
                <div className="text-sm font-semibold">ERP/Billing Sync</div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-6 whitespace-nowrap">
                <div className="text-sm font-semibold">Headless Architecture</div>
                <div className="text-sm font-semibold">Multi-Channel Sales</div>
                <div className="text-sm font-semibold">PWA/Mobile Apps</div>
                <div className="text-sm font-semibold">Conversion Optimization</div>
                <div className="text-sm font-semibold">ERP/Billing Sync</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
