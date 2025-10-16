"use client";

import { motion, Variants } from "framer-motion";
import { FaGlobe, FaRocket, FaHandshake, FaChartLine } from "react-icons/fa";
import { useEffect, useState } from "react";

// Container animation for staggered children
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// Fade-up animation for text
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Floating animation for elements
const float: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

// Pre-defined particle positions to avoid hydration mismatches
const PARTICLE_POSITIONS = [
  { left: "10%", top: "20%" },
  { left: "25%", top: "60%" },
  { left: "40%", top: "30%" },
  { left: "55%", top: "80%" },
  { left: "70%", top: "40%" },
  { left: "85%", top: "70%" },
  { left: "15%", top: "85%" },
  { left: "35%", top: "15%" },
  { left: "65%", top: "25%" },
  { left: "90%", top: "50%" },
  { left: "5%", top: "45%" },
  { left: "45%", top: "65%" },
  { left: "75%", top: "10%" },
  { left: "20%", top: "35%" },
  { left: "50%", top: "90%" }
];

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex items-center justify-center min-h-screen px-6 md:px-20 pt-24 pb-12 text-center overflow-hidden"
    >
      {/* Background with multiple layers */}
      <div className="absolute inset-0">
        {/* Main background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/logo44.jpg')"
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-emerald-900/10" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles - only render on client to avoid hydration issues */}
        {isMounted &&
          PARTICLE_POSITIONS.map((position, i) =>
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-amber-400/30 rounded-full"
              style={position}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + i % 4,
                repeat: Infinity,
                delay: i % 3 * 0.5
              }}
            />
          )}

        {/* Animated glows */}
        <motion.div
          aria-hidden
          className="absolute -left-20 -top-20 w-72 h-72 rounded-full blur-3xl bg-amber-400/20 pointer-events-none"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-24 bottom-8 w-96 h-96 rounded-full blur-3xl bg-emerald-500/15 pointer-events-none"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl bg-blue-400/10 pointer-events-none"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto w-full"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400/10 border border-amber-400/20 mb-8"
          variants={fadeUp}
        >
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">
            Pioneering African Development
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-heading"
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-white"
          variants={fadeUp}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 block">
            ZamSafari Holdings
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-200 to-green-400 block">
            Group USA
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light mb-8 max-w-4xl mx-auto leading-relaxed"
          variants={fadeUp}
        >
          Building Africa&apos;s Future, From{" "}
          <span className="text-amber-300 font-semibold">Zambia</span> to the{" "}
          <span className="text-green-300 font-semibold">World</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-amber-400 to-green-400 mx-auto mb-8 rounded-full"
          variants={fadeUp}
        />

        {/* Hero paragraph */}
        <motion.div
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto space-y-4"
          variants={fadeUp}
        >
          <p>
            A U.S.-registered investment holding company pioneering secure
            international pathways for funding, partnerships, and development
            across Zambia&apos;s fastest-growing industries.
          </p>
          <p>
            Through our Zambian subsidiaries —{" "}
            <span className="font-semibold text-amber-300">
              Euzam Consulting Ltd
            </span>{" "}
            and{" "}
            <span className="font-semibold text-amber-300">
              Euzam Projects Ltd
            </span>{" "}
            — we are shaping a legacy of innovation, real estate excellence, and
            tourism transformation.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto"
          variants={container}
        >
          {[
            { icon: <FaGlobe />, number: "17", label: "World Records" },
            { icon: <FaRocket />, number: "306", label: "Acres" },
            { icon: <FaHandshake />, number: "25K+", label: "Jobs" },
            { icon: <FaChartLine />, number: "$1B+", label: "Investment" }
          ].map((stat, index) =>
            <motion.div
              key={index}
              className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-all duration-300"
              variants={float}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-amber-300 text-2xl mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Call-to-action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={fadeUp}
        >
          <motion.a
            href="#invest"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-bold text-lg shadow-2xl hover:shadow-amber-400/25 transition-all duration-300 min-w-[200px] justify-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore Investment</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.span>
          </motion.a>

          <motion.a
            href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-transparent border border-amber-300 text-amber-300 font-bold text-lg hover:bg-amber-300 hover:text-gray-900 transition-all duration-300 min-w-[200px] justify-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Projects</span>
            <motion.span
              animate={{ y: [0, 2, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ↓
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-2"
          variants={fadeUp}
        >
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-3 bg-amber-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    </section>
  );
}
