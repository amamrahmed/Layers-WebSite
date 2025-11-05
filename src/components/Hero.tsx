import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-[#FFE57F]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#FFE57F]/30 rounded-full mb-6"
            >
              <SparklesIcon size={16} className="text-[#FFD700]" />
              <span className="text-sm text-gray-300">
                Award-Winning Creative Studio
              </span>
            </motion.div>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6">
              <span className="text-white">Design.</span>
              <br />
              <span className="text-white">Print.</span>
              <br />
              <span className="bg-gradient-to-r from-[#FFE57F] via-[#FFD700] to-[#FFB800] bg-clip-text text-transparent">
                Advertise.
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-xl">
              We transform brands through bold creativity, strategic thinking,
              and flawless execution. Your vision, amplified.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-[#FFE57F] via-[#FFD700] to-[#FFB800] text-black font-bold text-lg rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255,229,127,0.5)",
                    "0 0 40px rgba(255,184,0,0.6)",
                    "0 0 20px rgba(255,229,127,0.5)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project Now
                  <ArrowRightIcon
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#FFE57F] text-white font-semibold text-lg rounded-full hover:bg-[#FFE57F]/10 hover:shadow-[0_0_20px_rgba(255,229,127,0.3)] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              <motion.div
                className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#FFE57F] to-[#FFB800] rounded-3xl"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-[#FFD700] to-[#FFB800] rounded-3xl"
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
