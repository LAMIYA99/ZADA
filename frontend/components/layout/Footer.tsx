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
    <footer className="w-full bg-[#1F2427] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-28 pb-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          
          <div className="lg:col-span-6 flex flex-col">
            <h2 className="text-[44px] md:text-[56px] lg:text-[60px] font-bold leading-[1.1] mb-12 max-w-sm">
              Build something<br />together?
            </h2>
            <div className="flex flex-col gap-5">
              <a 
                href="mailto:info@wrappixel.com" 
                className="flex items-center gap-3 text-white hover:text-[#C1FE72] transition-colors text-[16px]"
              >
                <ArrowUpRight className="w-[18px] h-[18px] text-[#C1FE72]" />
                info@wrappixel.com
              </a>
              <a 
                href="#" 
                className="flex items-center gap-3 text-white hover:text-[#C1FE72] transition-colors text-[16px]"
              >
                <LocationPin className="w-[18px] h-[18px] text-[#C1FE72]" />
                info@wrappixel.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 mt-4">
            
            <div className="flex flex-col gap-4">
              {['Home', 'About', 'Services', 'Work', 'Terms', 'Privacy Policy', 'Error 404'].map(link => (
                <Link 
                  key={link} 
                  href="#" 
                  className="text-gray-200 hover:text-white transition-colors text-[15px]"
                >
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {['Facebook', 'Instagram', 'Twitter'].map(link => (
                <Link 
                  key={link} 
                  href="#" 
                  className="text-gray-200 hover:text-white transition-colors text-[15px]"
                >
                  {link}
                </Link>
              ))}
            </div>

            <div className="text-gray-400 text-[14px]">
              © Studiova copyright 2025
            </div>
            
          </div>
        </div>

        <div className="relative flex justify-center items-center w-full">
          <p className="text-gray-400 text-[13px]">
            Distributed by <span className="font-semibold text-white">ThemeWagon</span>
          </p>
          
          <button 
            onClick={scrollToTop}
            className="absolute right-0 bottom-0 translate-y-2 w-12 h-12 bg-[#C1FE72] rounded-full flex items-center justify-center transition-transform hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-black" />
          </button>
        </div>

      </div>
    </footer>
  );
}
