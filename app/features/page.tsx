'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Aurora from '@/components/Aurora';
import { GlassmorphismNav } from '@/components/glassmorphism-nav';
import { Footer } from '@/components/footer';

interface FeatureCategory {
  id: string;
  title: string;
  features: string[];
}

interface FeaturesData {
  categories: FeatureCategory[];
}

export default function FeaturesPage() {
  const router = useRouter();
  const [features, setFeatures] = useState<FeatureCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFeatures = async () => {
      try {
        const response = await fetch('/data/features.json');
        const data: FeaturesData = await response.json();
        setFeatures(data.categories);
      } catch (error) {
        console.error('Error loading features:', error);
        setFeatures([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadFeatures();
  }, []);

  const getColumnCategories = (startIndex: number) => {
    return features.filter((_, index) => index % 3 === startIndex);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black overflow-hidden flex items-center justify-center">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#1a0a00", "#FF6600", "#1a0a00"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white/30 border-t-white"></div>
          <p className="text-white font-medium">Loading features...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="fixed inset-0 w-full h-full">
        <Aurora colorStops={["#1a0a00", "#FF6600", "#1a0a00"]} amplitude={1.2} blend={0.6} speed={0.8} />
      </div>
      <div className="relative z-10">
        {/* Navigation - Same as Home Page */}
        <GlassmorphismNav />
        
        {/* Page Header Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Plan Features
            </h1>
            <p className="text-base sm:text-lg text-white/70">
              Explore all our comprehensive features
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Features Grid - Responsive Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Column 1 */}
            <div className="space-y-6 sm:space-y-8">
              {getColumnCategories(0).map((category, catIndex) => (
                <div
                  key={category.id}
                  className="
                    group
                    bg-white/10 backdrop-blur-md
                    rounded-2xl
                    p-6 sm:p-8
                    border border-white/20
                    shadow-lg hover:shadow-2xl
                    transition-all duration-300
                    hover:scale-[1.02]
                    hover:border-white/30
                  "
                >
                  {/* Category Header */}
                  <div className="mb-6 pb-4 border-b border-white/20">
                    <h2 className="
                      text-lg sm:text-xl lg:text-2xl
                      font-bold
                      text-white
                      leading-tight
                      group-hover:text-orange-400
                      transition-colors duration-300
                    ">
                      {category.title}
                    </h2>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 sm:space-y-4">
                    {category.features.map((feature, index) => (
                      <li
                        key={index}
                        className="
                          flex items-start
                          group/item
                          opacity-0
                          animate-fade-in
                        "
                        style={{ animationDelay: `${catIndex * 50 + index * 20}ms` }}
                      >
                        {/* Checkmark Icon */}
                        <div className="
                          flex-shrink-0
                          w-5 h-5 sm:w-6 sm:h-6
                          mt-0.5 sm:mt-1
                          mr-3 sm:mr-4
                          rounded-full
                          bg-gradient-to-br from-orange-400 to-orange-600
                          flex items-center justify-center
                          shadow-md
                          group-hover/item:scale-110
                          transition-transform duration-300
                        ">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>

                        {/* Feature Text */}
                        <span className="
                          text-sm sm:text-base
                          text-white/90
                          leading-relaxed
                          group-hover/item:text-white
                          transition-colors duration-300
                          flex-1
                        ">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-6 sm:space-y-8">
              {getColumnCategories(1).map((category, catIndex) => (
                <div
                  key={category.id}
                  className="
                    group
                    bg-white/10 backdrop-blur-md
                    rounded-2xl
                    p-6 sm:p-8
                    border border-white/20
                    shadow-lg hover:shadow-2xl
                    transition-all duration-300
                    hover:scale-[1.02]
                    hover:border-white/30
                  "
                >
                  <div className="mb-6 pb-4 border-b border-white/20">
                    <h2 className="
                      text-lg sm:text-xl lg:text-2xl
                      font-bold
                      text-white
                      leading-tight
                      group-hover:text-orange-400
                      transition-colors duration-300
                    ">
                      {category.title}
                    </h2>
                  </div>

                  <ul className="space-y-3 sm:space-y-4">
                    {category.features.map((feature, index) => (
                      <li
                        key={index}
                        className="
                          flex items-start
                          group/item
                          opacity-0
                          animate-fade-in
                        "
                        style={{ animationDelay: `${catIndex * 50 + index * 20}ms` }}
                      >
                        <div className="
                          flex-shrink-0
                          w-5 h-5 sm:w-6 sm:h-6
                          mt-0.5 sm:mt-1
                          mr-3 sm:mr-4
                          rounded-full
                          bg-gradient-to-br from-orange-400 to-orange-600
                          flex items-center justify-center
                          shadow-md
                          group-hover/item:scale-110
                          transition-transform duration-300
                        ">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>

                        <span className="
                          text-sm sm:text-base
                          text-white/90
                          leading-relaxed
                          group-hover/item:text-white
                          transition-colors duration-300
                          flex-1
                        ">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Column 3 */}
            <div className="space-y-6 sm:space-y-8">
              {getColumnCategories(2).map((category, catIndex) => (
                <div
                  key={category.id}
                  className="
                    group
                    bg-white/10 backdrop-blur-md
                    rounded-2xl
                    p-6 sm:p-8
                    border border-white/20
                    shadow-lg hover:shadow-2xl
                    transition-all duration-300
                    hover:scale-[1.02]
                    hover:border-white/30
                  "
                >
                  <div className="mb-6 pb-4 border-b border-white/20">
                    <h2 className="
                      text-lg sm:text-xl lg:text-2xl
                      font-bold
                      text-white
                      leading-tight
                      group-hover:text-orange-400
                      transition-colors duration-300
                    ">
                      {category.title}
                    </h2>
                  </div>

                  <ul className="space-y-3 sm:space-y-4">
                    {category.features.map((feature, index) => (
                      <li
                        key={index}
                        className="
                          flex items-start
                          group/item
                          opacity-0
                          animate-fade-in
                        "
                        style={{ animationDelay: `${catIndex * 50 + index * 20}ms` }}
                      >
                        <div className="
                          flex-shrink-0
                          w-5 h-5 sm:w-6 sm:h-6
                          mt-0.5 sm:mt-1
                          mr-3 sm:mr-4
                          rounded-full
                          bg-gradient-to-br from-orange-400 to-orange-600
                          flex items-center justify-center
                          shadow-md
                          group-hover/item:scale-110
                          transition-transform duration-300
                        ">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>

                        <span className="
                          text-sm sm:text-base
                          text-white/90
                          leading-relaxed
                          group-hover/item:text-white
                          transition-colors duration-300
                          flex-1
                        ">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
        
        {/* Footer - Same as Home Page */}
        <Footer />
      </div>
    </div>
  );
}
