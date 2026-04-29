"use client";

import { useEffect } from "react";
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

const projects = [
  {
    title: "Magazine",
    categories: ["Web development"],
    image: "https://themewagon.github.io/Studiova/assets/images/portfolio/portfolio-img-2.jpg", 
  },
  {
    title: "Snapclear",
    categories: ["UX Strategy", "UI Design"],
    image: "https://themewagon.github.io/Studiova/assets/images/portfolio/portfolio-img-1.jpg",
  },
  {
    title: "Amber Bottle",
    categories: ["Web development", "Digital design"],
    image: "https://themewagon.github.io/Studiova/assets/images/portfolio/portfolio-img-2.jpg",
  },
  {
    title: "Pixelforge",
    categories: ["UI/UX design", "Web development"],
    image: "https://themewagon.github.io/Studiova/assets/images/portfolio/portfolio-img-3.jpg",
  },
  {
    title: "BioTrack Ll",
    categories: ["Web development", "App design"],
    image: "https://themewagon.github.io/Studiova/assets/images/portfolio/portfolio-img-4.jpg",
  }
];

export default function FeaturedSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="w-full bg-[#f4f5f6] text-[#1D1D24] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1710px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row relative mb-20 gap-10 lg:gap-0">
          
          <div className="flex items-center gap-3 lg:gap-4 relative z-10 w-max md:absolute left-0 top-0">
            <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#C1FE72] flex items-center justify-center text-[12px] lg:text-sm font-semibold">
              02
            </div>
            <div className="w-8 lg:w-12 h-[1px] bg-gray-300"></div>
            <div className="bg-[#1D1D24] text-white text-[12px] lg:text-[16px] px-3 py-1.5 lg:px-4 lg:py-1.5 rounded-[30px]">
              Portfolio
            </div>
          </div>
          
          <div className="md:w-full flex justify-center" data-aos="fade-up">
            <div className="max-w-2xl text-left md:pl-32 lg:pl-0 pt-2 md:pt-0">
              <h2 className="text-[40px] md:text-[48px] lg:text-[58px] font-bold leading-[1.05] tracking-tight mb-5 text-[#1D1D24]">
                Featured projects
              </h2>
              <p className="text-gray-500 text-[16px] lg:text-[16px] leading-relaxed mx-auto max-w-[600px]">
                A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      <div className="w-full relative overflow-visible pl-6 md:pl-12 xl:pl-[calc((100vw-1710px)/2+48px)]" ref={emblaRef}>
        <div className="flex touch-pan-y cursor-grab active:cursor-grabbing pb-4 select-none">
          {projects.map((project, idx) => (
            <div key={idx} className="flex-[0_0_auto] w-[397px] min-w-0 mr-8 last:mr-0 group">
              <div className="relative w-full h-[286px] overflow-hidden mb-6 bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                     e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";
                  }}
                  draggable={false}
                />
                
                <div className="absolute top-0 left-0 w-full h-0 bg-black/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden group-hover:h-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#C1FE72] flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75">
                    <ArrowUpRight className="w-6 h-6 text-[#1D1D24]" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <h3 className="text-[36px] font-bold mb-4 text-[#1D1D24] tracking-tight">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((cat, i) => (
                    <span key={i} className="px-4 py-1.5 border border-gray-200 rounded-[30px] text-[16px] font-medium text-gray-800 bg-transparent">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
