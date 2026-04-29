"use client";

import Link from "next/link";

const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const LocationPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ArrowUp = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#21282C] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-28 pb-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-0 mb-32">
          
          {/* Left Side: Title & Contact */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex flex-col">
            <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-tight mb-12">
              Build something<br />together?
            </h2>
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:info@wrappixel.com" 
                className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors text-[15px]"
              >
                <ArrowUpRight className="w-5 h-5 text-[#CFFF70]" />
                info@wrappixel.com
              </a>
              <a 
                href="#" 
                className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors text-[15px]"
              >
                <LocationPin className="w-5 h-5 text-[#CFFF70]" />
                info@wrappixel.com
              </a>
            </div>
          </div>

          {/* Middle Side: Pages */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-3 lg:mt-[10px]">
            {['Home', 'About', 'Services', 'Work', 'Terms', 'Privacy Policy', 'Error 404'].map(link => (
              <a 
                key={link} 
                href="#" 
                className="text-[#DFDFDF] hover:text-white transition-colors text-[15px]"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right-Middle Side: Socials */}
          <div className="lg:col-span-2 flex flex-col gap-3 lg:mt-[10px]">
            {['Facebook', 'Instagram', 'Twitter'].map(link => (
              <a 
                key={link} 
                href="#" 
                className="text-[#DFDFDF] hover:text-white transition-colors text-[15px]"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Far Right Side: Copyright */}
          <div className="lg:col-span-3 lg:text-right lg:mt-[10px]">
            <p className="text-[#DFDFDF] text-[14px]">
              © Studiova copyright 2025
            </p>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="relative flex justify-center items-center w-full mt-24">
          <p className="text-[#DFDFDF] text-[14px]">
            Distributed by <span className="text-white">ThemeWagon</span>
          </p>
          
       
        </div>

      </div>
    </footer>
  );
}
