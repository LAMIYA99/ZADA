"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/features/ThemeToggle";
import { useTheme } from "next-themes";


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
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);


  const isLightPage = ["/blog", "/projects", "/services", "/about", "/contact"].includes(pathname);
  const useDarkStyle = isScrolled || isLightPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    setMounted(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkMode = mounted && resolvedTheme === "dark";


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-9999 px-6 py-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? 'bg-[#C1FE72] dark:bg-black py-4' : (isLightPage ? 'bg-white dark:bg-black backdrop-blur-md border-b border-gray-100 dark:border-gray-800' : 'bg-transparent')
      }`}>
        <Link href="/">
          <Image
            src={(useDarkStyle && !isDarkMode) ? "https://themewagon.github.io/Studiova/assets/images/logos/logo-dark.svg" : "https://themewagon.github.io/Studiova/assets/images/logos/logo-white.svg"}
            alt="Studiova Logo"

            width={196}
            height={54}
            className="h-14 w-auto"
            unoptimized
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-[16px] font-bold transition-colors ${
                useDarkStyle 
                  ? (pathname === item.path ? 'text-[#1D1D24] dark:text-white' : 'text-[#1D1D24]/60 dark:text-white/60 hover:text-[#1D1D24] dark:hover:text-white') 
                  : (pathname === item.path ? 'text-white' : 'text-white/70 hover:text-white')
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-6">
            <ThemeToggle lightContent={!useDarkStyle} isScrolled={isScrolled} />
        
          </div>
        </nav>

        <div className="flex lg:hidden items-center gap-4">
          <ThemeToggle lightContent={!useDarkStyle} isScrolled={isScrolled} />
          <button
            onClick={toggleMenu}
            className={`w-12 h-12 rounded-full flex flex-col items-center justify-center gap-1.5 transition-all duration-300 group ${useDarkStyle ? 'bg-[#1D1D24] dark:bg-white text-white dark:text-[#1D1D24] hover:bg-black' : 'bg-white text-black hover:bg-[#1D1D24] hover:text-white backdrop-blur-md'}`}
            aria-label="Toggle Menu"
          >
            <span className={`block h-[2px] w-5 transition-colors ${useDarkStyle ? 'bg-white dark:bg-[#1D1D24]' : 'bg-[#1D1D24] group-hover:bg-white'}`}></span>
            <span className={`block h-[2px] w-5 transition-colors ${useDarkStyle ? 'bg-white dark:bg-[#1D1D24]' : 'bg-[#1D1D24] group-hover:bg-white'}`}></span>
            <span className={`block h-[2px] w-5 transition-colors ${useDarkStyle ? 'bg-white dark:bg-[#1D1D24]' : 'bg-[#1D1D24] group-hover:bg-white'}`}></span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      <div
        className={`fixed top-4 right-4 bottom-4 w-[380px] sm:w-[400px] h-[576px] bg-white dark:bg-[#1D1D24] rounded-3xl z-50 flex flex-col overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen ? "translate-x-0" : "translate-x-[120%]"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800">
          <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">Menu</span>
          <button
            onClick={toggleMenu}
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
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
                className="text-[24px] font-bold text-[#1D1D24] dark:text-white flex items-center group transition-colors hover:text-gray-600 dark:hover:text-gray-400"
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

      
      </div>
    </>
  );
};

export default Header;
