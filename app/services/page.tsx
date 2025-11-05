'use client';

import { useState, useEffect } from 'react';
import Aurora from '@/components/Aurora';
import { GlassmorphismNav } from '@/components/glassmorphism-nav';
import { Footer } from '@/components/footer';
import { HeroServices } from './_components/hero-services';
import { ThreeDMarqueeSection } from '@/components/3d-marquee-section';
import { FeaturesServices } from './_components/features-services';
import { LogoMarqueeServices } from './_components/logo-marquee-services';
import { Hero } from '@/components/hero';

function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPage = () => {
      try {
        if (typeof window !== 'undefined') {
          if (document.readyState === 'complete') {
            setTimeout(() => {
              setIsLoading(false);
            }, 400);
          } else {
            const handleLoad = () => {
              setIsLoading(false);
            };
            window.addEventListener('load', handleLoad, { once: true });
            setTimeout(() => {
              setIsLoading(false);
            }, 2000);
          }
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error loading page:', error);
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
          <p className="text-white font-medium">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-5 bg-black overflow-hidden">
      <div className="fixed inset-0 w-full h-full">
        <Aurora colorStops={["#1a0a00", "#FF6600", "#1a0a00"]} amplitude={1.2} blend={0.6} speed={0.8} />
      </div>
      <div className="relative z-10">
        <GlassmorphismNav />
        <main className="min-h-screen relative overflow-hidden">
          <HeroServices />
          <ThreeDMarqueeSection />
          <FeaturesServices />
          <Hero/>
          <LogoMarqueeServices />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default ServicesPage;
