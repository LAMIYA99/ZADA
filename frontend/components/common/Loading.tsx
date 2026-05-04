"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1D1D24]">
      <div className="relative flex flex-col items-center">
        {/* Animated Circle */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-24 h-24 border-2 border-[#C1FE72]/20 border-t-[#C1FE72] rounded-full"
        />
        
        {/* Center Logo/Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-10 h-10 bg-[#C1FE72] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-[#1D1D24] rounded-full animate-pulse" />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <span className="text-[#C1FE72] font-bold text-sm tracking-[0.2em] uppercase">
            Loading
          </span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-1.5 h-1.5 bg-[#C1FE72] rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
