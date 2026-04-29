"use client";

import { useState } from "react";
import Link from "next/link";

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

const services = [
  {
    title: "Brand identity",
    description: "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
    image: "https://themewagon.github.io/Studiova/assets/images/portfolio/portfolio-img-1.jpg"
  },
  {
    title: "Web development",
    description: "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
    image: "https://themewagon.github.io/Studiova/assets/images/portfolio/portfolio-img-2.jpg"
  },
  {
    title: "Content creation",
    description: "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
    image: "https://themewagon.github.io/Studiova/assets/images/portfolio/portfolio-img-3.jpg"
  },
  {
    title: "Motion & 3d modeling",
    description: "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
    image: "https://themewagon.github.io/Studiova/assets/images/portfolio/portfolio-img-4.jpg"
  }
];

export default function WhatSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="w-full bg-[#1F2A2E] text-white py-24 lg:py-32">
      <div className="max-w-[1710px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24">
        
        <div className="flex flex-col">
          <div className="flex items-center gap-3 lg:gap-4 mb-16 lg:mb-32">
            <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#C1FE72] flex items-center justify-center text-[12px] lg:text-sm font-semibold text-[#1D1D24]">
              03
            </div>
            <div className="w-8 lg:w-16 h-[1px] bg-white text-white"></div>
            <div className="bg-white text-[#1D1D24] text-[12px] lg:text-[15px] px-3 py-1.5 lg:px-5 lg:py-1.5 rounded-[30px] font-medium">
              Services
            </div>
          </div>
          
          <div className="relative w-full aspect-[4/2.8] md:w-[400px] md:aspect-[4/2.8] lg:w-full overflow-hidden shadow-2xl">
            {services.map((service, i) => (
              <img 
                key={i}
                src={service.image} 
                alt={service.title} 
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${activeService === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                onError={(e) => {
                   e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-12">
            <h2 className="text-[40px] md:text-[56px] lg:text-[58px] font-bold leading-[1.05] tracking-tight mb-5 text-white" data-aos="fade-up">
              What we do
            </h2>
            <p className="text-gray-400 text-[16px] lg:text-[16px] leading-relaxed max-w-[550px]" data-aos="fade-up" data-aos-delay="100">
              A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences.
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/10 mb-2"></div>

          <div className="flex flex-col">
            {services.map((service, i) => {
              const isActive = activeService === i;
              return (
                <div 
                  key={i} 
                  className="group flex flex-col md:flex-row md:items-center py-8 md:py-10 border-b border-white/10 cursor-pointer transition-colors"
                  onMouseEnter={() => setActiveService(i)}
                >
                  <h3 className={`text-[32px] md:text-[40px] font-bold md:w-[50%] lg:w-[45%] xl:w-[50%] transition-colors duration-300 tracking-tight ${isActive ? 'text-[#C1FE72]' : 'text-white'}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed md:flex-1 mt-4 md:mt-0 max-w-[450px]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 flex justify-start">
             <Link
                href="#"
                className="w-[180px] h-[60px] rounded-[30px] bg-[#C1FE72] flex items-center justify-between p-1.5 pl-6 group transition-colors duration-300 hover:bg-[#aee63a]"
              >
                <span className="font-semibold text-[#1D1D24] text-[15px]">See our Work</span>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-95">
                  <ArrowUpRight className="w-5 h-5 text-[#1D1D24] group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
