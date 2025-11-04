'use client';

import { useState, useEffect } from 'react';
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import Aurora from "@/components/Aurora"
import { FeaturesSection } from "@/components/features-section"
import { AITeamSection } from "@/components/ai-team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ROICalculatorSection } from "@/components/roi-calculator-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPage = async () => {
      try {
        // Wait for page and resources to fully load (similar to features page loading data)
        if (typeof window !== 'undefined') {
          // Wait for all resources to load
          if (document.readyState === 'complete') {
            // Page already loaded, add small delay to show loading state
            await new Promise(resolve => setTimeout(resolve, 400));
          } else {
            // Wait for window load event
            await new Promise((resolve) => {
              if (document.readyState === 'complete') {
                resolve(true);
              } else {
                window.addEventListener('load', () => resolve(true), { once: true });
                // Fallback: resolve after max 2 seconds
                setTimeout(() => resolve(true), 2000);
              }
            });
          }
        }
      } catch (error) {
        console.error('Error loading page:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPage();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black overflow-hidden flex items-center justify-center">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#1a0a00", "#FF6600", "#1a0a00"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white/30 border-t-white"></div>
          <p className="text-white font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#1a0a00", "#FF6600", "#1a0a00"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
          <HeroSection />
          <ProblemSolutionSection />
          <FeaturesSection />
          <AITeamSection />
          {/* <TestimonialsSection /> */}
          <ROICalculatorSection />
          <CTASection />
          <Footer />
        </div>
      </main>
    </div>
  )
}
