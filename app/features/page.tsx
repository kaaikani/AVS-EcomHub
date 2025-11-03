'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Loading features...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header Section */}
      <div className="sticky top-0 z-10 backdrop-blur-lg bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Plan Features
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
                Explore all our comprehensive features
              </p>
            </div>
            <button
              onClick={() => router.push('/')}
              className="
                group
                px-4 sm:px-6 py-2 sm:py-3
                bg-white dark:bg-slate-800
                text-slate-700 dark:text-slate-200
                rounded-xl
                font-medium
                text-sm sm:text-base
                hover:bg-slate-50 dark:hover:bg-slate-700
                transition-all duration-300
                shadow-md hover:shadow-lg
                border border-slate-200 dark:border-slate-700
                hover:border-blue-300 dark:hover:border-blue-600
                flex items-center gap-2
              "
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="hidden sm:inline">Back Home</span>
              <span className="sm:hidden">Back</span>
            </button>
          </div>
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
                  bg-white/80 dark:bg-slate-800/80
                  backdrop-blur-sm
                  rounded-2xl
                  p-6 sm:p-8
                  border border-slate-200/50 dark:border-slate-700/50
                  shadow-lg hover:shadow-2xl
                  transition-all duration-300
                  hover:scale-[1.02]
                  hover:border-blue-300 dark:hover:border-blue-600
                "
              >
                {/* Category Header */}
                <div className="mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
                  <h2 className="
                    text-lg sm:text-xl lg:text-2xl
                    font-bold
                    text-slate-800 dark:text-slate-100
                    leading-tight
                    group-hover:text-blue-600 dark:group-hover:text-blue-400
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
                        bg-gradient-to-br from-emerald-400 to-green-500
                        dark:from-emerald-500 dark:to-green-600
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
                        text-slate-700 dark:text-slate-300
                        leading-relaxed
                        group-hover/item:text-slate-900 dark:group-hover/item:text-slate-100
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
                  bg-white/80 dark:bg-slate-800/80
                  backdrop-blur-sm
                  rounded-2xl
                  p-6 sm:p-8
                  border border-slate-200/50 dark:border-slate-700/50
                  shadow-lg hover:shadow-2xl
                  transition-all duration-300
                  hover:scale-[1.02]
                  hover:border-blue-300 dark:hover:border-blue-600
                "
              >
                <div className="mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
                  <h2 className="
                    text-lg sm:text-xl lg:text-2xl
                    font-bold
                    text-slate-800 dark:text-slate-100
                    leading-tight
                    group-hover:text-blue-600 dark:group-hover:text-blue-400
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
                        bg-gradient-to-br from-emerald-400 to-green-500
                        dark:from-emerald-500 dark:to-green-600
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
                        text-slate-700 dark:text-slate-300
                        leading-relaxed
                        group-hover/item:text-slate-900 dark:group-hover/item:text-slate-100
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
                  bg-white/80 dark:bg-slate-800/80
                  backdrop-blur-sm
                  rounded-2xl
                  p-6 sm:p-8
                  border border-slate-200/50 dark:border-slate-700/50
                  shadow-lg hover:shadow-2xl
                  transition-all duration-300
                  hover:scale-[1.02]
                  hover:border-blue-300 dark:hover:border-blue-600
                "
              >
                <div className="mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
                  <h2 className="
                    text-lg sm:text-xl lg:text-2xl
                    font-bold
                    text-slate-800 dark:text-slate-100
                    leading-tight
                    group-hover:text-blue-600 dark:group-hover:text-blue-400
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
                        bg-gradient-to-br from-emerald-400 to-green-500
                        dark:from-emerald-500 dark:to-green-600
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
                        text-slate-700 dark:text-slate-300
                        leading-relaxed
                        group-hover/item:text-slate-900 dark:group-hover/item:text-slate-100
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

        {/* Footer CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-xl">
            <button
              onClick={() => router.push('/')}
              className="
                px-8 sm:px-12 py-3 sm:py-4
                bg-white dark:bg-slate-800
                text-slate-800 dark:text-slate-100
                rounded-xl
                font-semibold
                text-base sm:text-lg
                hover:shadow-lg
                transition-all duration-300
                transform hover:scale-105
                flex items-center gap-2 mx-auto
              "
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
