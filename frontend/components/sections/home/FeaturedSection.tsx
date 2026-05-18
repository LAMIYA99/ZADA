"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronLeft = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

import { Link } from '@/i18n/routing';
import { projects } from '@/lib/data';

export default function FeaturedSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full bg-[#f4f5f6] dark:bg-[#121212] text-[#1D1D24] dark:text-white py-24 lg:py-32 transition-colors duration-300">
      <div className="max-w-[1710px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10 lg:gap-0">
          
          <div className="flex-1">
            <div className="flex items-center gap-3 lg:gap-4 mb-8">
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#C1FE72] flex items-center justify-center text-[12px] lg:text-sm font-semibold text-[#1D1D24]">
                02
              </div>
              <div className="w-8 lg:w-12 h-[1px] bg-gray-300 dark:bg-gray-700"></div>
              <div className="bg-[#1D1D24] dark:bg-white text-white dark:text-[#1D1D24] text-[12px] lg:text-[16px] px-3 py-1.5 lg:px-4 lg:py-1.5 rounded-[30px] font-medium">
                Portfolio
              </div>
            </div>

            <div className="max-w-2xl">
              <h2 className="text-[40px] md:text-[48px] lg:text-[58px] font-bold leading-[1.05] tracking-tight mb-5 text-[#1D1D24] dark:text-white">
                Featured projects
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-[16px] lg:text-[16px] leading-relaxed max-w-[600px]">
                A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="relative group w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6 touch-pan-y cursor-grab active:cursor-grabbing pb-4 select-none">
              {projects.map((project, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]">
                  <Link href={`/projects/${project.slug}`} className="group/card cursor-pointer block">
                    <div className="relative w-full h-[286px] overflow-hidden mb-6 bg-gray-200 dark:bg-gray-800 rounded-xl">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                        onError={(e) => {
                           e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";
                        }}
                        draggable={false}
                      />
                      
                      <div className="absolute top-0 left-0 w-full h-0 bg-black/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden group-hover/card:h-full flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#C1FE72] flex items-center justify-center translate-y-12 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75">
                          <ArrowUpRight className="w-6 h-6 text-[#1D1D24]" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start px-2">
                      <h3 className="text-[28px] lg:text-[32px] font-bold mb-4 text-[#1D1D24] dark:text-white tracking-tight leading-tight">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.categories.map((cat, i) => (
                          <span key={i} className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded-[30px] text-[14px] font-medium text-gray-800 dark:text-gray-300 bg-transparent">
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-[143px] -translate-y-1/2 left-0 right-0 pointer-events-none z-20">
            <div className="flex justify-between w-full">
              <button 
                onClick={scrollPrev}
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/90 dark:bg-[#1D1D24]/90 backdrop-blur-md shadow-xl border border-gray-200/50 dark:border-white/10 flex items-center justify-center hover:bg-[#1D1D24] dark:hover:bg-white hover:text-white dark:hover:text-[#1D1D24] transition-all duration-300 pointer-events-auto -ml-4 lg:-ml-7"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={scrollNext}
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/90 dark:bg-[#1D1D24]/90 backdrop-blur-md shadow-xl border border-gray-200/50 dark:border-white/10 flex items-center justify-center hover:bg-[#1D1D24] dark:hover:bg-white hover:text-white dark:hover:text-[#1D1D24] transition-all duration-300 pointer-events-auto -mr-4 lg:-mr-7"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
