"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SnowflakeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="196"
    height="54"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C12.5523 2 13 2.44772 13 3V10.1L19.1483 6.54974C19.6264 6.27373 20.2381 6.43729 20.5141 6.91535L21.3802 8.41535C21.6562 8.89341 21.4926 9.50508 21.0146 9.78109L14.866 13.3313L21.0146 16.8816C21.4926 17.1576 21.6562 17.7693 21.3802 18.2473L20.5141 19.7473C20.2381 20.2254 19.6264 20.389 19.1483 20.1129L13 16.5627V23.6627C13 24.215 12.5523 24.6627 12 24.6627H10.2679C9.71566 24.6627 9.26795 24.215 9.26795 23.6627V16.5627L3.11961 20.1129C2.64155 20.389 2.02988 20.2254 1.75387 19.7473L0.887851 18.2473C0.61184 17.7693 0.775402 17.1576 1.25346 16.8816L7.40209 13.3313L1.25346 9.78109C0.775402 9.50508 0.61184 8.89341 0.887851 8.41535L1.75387 6.91535C2.02988 6.43729 2.64155 6.27373 3.11961 6.54974L9.26795 10.1V3C9.26795 2.44772 9.71566 2 10.2679 2H12Z" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Docs", path: "/docs" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 flex justify-between items-center transition-colors duration-300 ${isScrolled ? 'bg-[#C1FE72]' : 'bg-transparent'}`}>
        <Link href="/">
          <Image
            src={isScrolled ? "https://themewagon.github.io/Studiova/assets/images/logos/logo-dark.svg" : "https://themewagon.github.io/Studiova/assets/images/logos/logo-white.svg"}
            alt="Studiova Logo"
            width={196}
            height={54}
            className="h-14 w-auto"
            unoptimized
          />
        </Link>
        <button
          onClick={toggleMenu}
          className={`w-12 h-12 rounded-full flex flex-col items-center justify-center gap-1.5 transition-all duration-300 group ${isScrolled ? 'bg-[#1D1D24] text-white hover:bg-black' : 'bg-white text-black hover:bg-[#1D1D24] hover:text-white backdrop-blur-md'}`}
          aria-label="Toggle Menu"
        >
          <span className={`block h-[2px] w-5 transition-colors ${isScrolled ? 'bg-white' : 'bg-[#1D1D24] group-hover:bg-white'}`}></span>
          <span className={`block h-[2px] w-5 transition-colors ${isScrolled ? 'bg-white' : 'bg-[#1D1D24] group-hover:bg-white'}`}></span>
          <span className={`block h-[2px] w-5 transition-colors ${isScrolled ? 'bg-white' : 'bg-[#1D1D24] group-hover:bg-white'}`}></span>
        </button>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Drawer */}
      <div
        className={`fixed top-4 right-4 bottom-4 w-[380px] sm:w-[400px] h-[576px] bg-white rounded-3xl z-50 flex flex-col overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen ? "translate-x-0" : "translate-x-[120%]"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <span className="text-gray-600 font-medium text-sm">Menu</span>
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-black transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-2 flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className="text-[24px] font-bold text-[#1D1D24] flex items-center group transition-colors hover:text-gray-600"
              >
                <SnowflakeIcon
                  className={`w-5 h-5 mr-3 transition-all duration-300 ${
                    isActive
                      ? "opacity-100 ml-0 animate-[spin_1.5s_linear_infinite]"
                      : "opacity-0 -ml-8 group-hover:opacity-100 group-hover:ml-0 group-hover:animate-[spin_1.5s_linear_infinite]"
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="px-8 pb-10 flex flex-col gap-2">
          <div className="flex gap-4">
            <button className="flex-1 px-3 py-2 rounded-full border border-gray-200 text-[20px] font-semibold hover:bg-gray-50 transition-colors">
              Sign In
            </button>
            <button className="flex-1 px-3.5 py-2 rounded-[30px] bg-[#1D1D24] text-white text-[20px] font-semibold hover:bg-black transition-colors">
              Sign Up
            </button>
          </div>
          <div className="text-[16px] text-gray-500 flex flex-col">
            <a
              href="tel:+1-212-456-7890"
              className="hover:text-black transition-colors"
            >
              +1-212-456-7890
            </a>
            <a
              href="mailto:info@wrappixel.com"
              className="hover:text-black font-semibold transition-colors text-[28px] text-[#1D1D24]"
            >
              info@wrappixel.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
