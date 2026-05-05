"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle({ lightContent = false, isScrolled = false }: { lightContent?: boolean; isScrolled?: boolean }) {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by waiting for mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-14 h-7 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#1D1D24]" /> // Placeholder
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-14 h-7 rounded-full border transition-all duration-500 focus:outline-none overflow-hidden cursor-pointer p-0.5 ${
        lightContent 
          ? 'border-white/20 bg-white/10 hover:bg-white/20' 
          : isScrolled
            ? 'border-[#1D1D24]/20 bg-[#1D1D24]/10 hover:bg-[#1D1D24]/20'
            : 'border-[#1D1D24]/10 bg-[#1D1D24]/5 hover:bg-[#1D1D24]/10 dark:border-white/10 dark:bg-white/5'
      }`}
      aria-label="Toggle theme"
    >
      <motion.div
        layout
        animate={{
          x: isDark ? 28 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25
        }}
        className={`w-5.5 h-5.5 rounded-full shadow-lg flex items-center justify-center relative z-10 transition-colors duration-500 ${
          isDark 
            ? (isScrolled ? 'bg-[#1D1D24] dark:bg-white' : 'bg-[#C1FE72]') 
            : (lightContent ? 'bg-white' : 'bg-[#1D1D24] dark:bg-white')
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Moon className={`h-3 w-3 ${isScrolled ? 'text-white dark:text-[#1D1D24]' : 'text-[#1D1D24]'}`} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Sun className={`h-3 w-3 ${lightContent ? 'text-[#1D1D24]' : 'text-white dark:text-[#1D1D24]'}`} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Decorative stars/dots that appear in dark mode */}
      <AnimatePresence>
        {isDark && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className={`absolute top-1.5 left-2.5 w-0.5 h-0.5 rounded-full opacity-40 ${lightContent ? 'bg-white' : 'bg-[#1D1D24] dark:bg-white'}`} />
            <div className={`absolute top-4 left-4 w-1 h-1 rounded-full opacity-20 ${lightContent ? 'bg-white' : 'bg-[#1D1D24] dark:bg-white'}`} />
            <div className={`absolute top-2.5 left-6 w-0.5 h-0.5 rounded-full opacity-30 ${lightContent ? 'bg-white' : 'bg-[#1D1D24] dark:bg-white'}`} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
