"use client";

import { motion, Variants } from "framer-motion";
import {
  FaGlobe,
  FaUniversity,
  FaProjectDiagram,
  FaLandmark,
  FaBullhorn,
  FaHandshake
} from "react-icons/fa";

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// const cardHover = {
//   whileHover: {
//     scale: 1.05,
//     y: -8,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 20
//     }
//   }
// };

const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      delay: 0.3
    }
  }
};

export default function StrategicPartnershipsSection() {
  const partnerships = [
    {
      icon: <FaGlobe className="text-2xl" />,
      text: "Global angel investors & diaspora networks",
      gradient: "from-blue-500 to-cyan-400",
      description: "Worldwide investment connections"
    },
    {
      icon: <FaUniversity className="text-2xl" />,
      text: "Development finance institutions & local banks",
      gradient: "from-emerald-500 to-green-400",
      description: "Financial infrastructure partners"
    },
    {
      icon: <FaProjectDiagram className="text-2xl" />,
      text: "Engineering, architectural, and tourism partners",
      gradient: "from-purple-500 to-pink-400",
      description: "Industry expertise alliance"
    },
    {
      icon: <FaLandmark className="text-2xl" />,
      text: "Zambian ministries and municipal authorities",
      gradient: "from-orange-500 to-red-400",
      description: "Government collaboration"
    },
    {
      icon: <FaBullhorn className="text-2xl" />,
      text: "Media, entertainment, and sponsorship partners",
      gradient: "from-amber-500 to-yellow-400",
      description: "Brand amplification network"
    }
  ];

  return (
    <section
      id="partnerships"
      className="relative py-28 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 overflow-hidden"
    >
      {/* Animated background elements - GLOW AT BOTTOM */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header with enhanced styling */}
        <motion.div className="text-center mb-20" variants={fadeUp}>
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 rounded-full bg-amber-400/10 border border-amber-400/20">
            <FaHandshake className="text-amber-300 text-lg" />
            <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">
              Collaborative Excellence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-6 tracking-tight bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
            Strategic Partnerships
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full" />
          <h1 className="mt-2">We collaborate with:</h1>
        </motion.div>

        {/* Enhanced partnership cards grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={container}
        >
          {partnerships.map((item, index) =>
            <motion.div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 cursor-pointer overflow-hidden"
              variants={fadeUp}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Animated border glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-500`}
              />

              <div className="relative z-10">
                {/* Icon with animation */}
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} mb-4 shadow-lg`}
                  variants={iconVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-white">
                    {item.icon}
                  </div>
                </motion.div>

                {/* Content with hover underline effect */}
                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4 transition-all duration-300">
                  {item.text}
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Enhanced mission statement */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12"
          variants={fadeUp}
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-2xl md:text-3xl font-light text-gray-100 leading-relaxed">
              Redefining possibilities where{" "}
              <span className="font-bold bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
                vision
              </span>{" "}
              meets{" "}
              <span className="font-bold bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                structure
              </span>
              , and{" "}
              <span className="font-bold bg-gradient-to-r from-emerald-300 to-green-200 bg-clip-text text-transparent">
                passion
              </span>{" "}
              meets{" "}
              <span className="font-bold bg-gradient-to-r from-purple-300 to-pink-200 bg-clip-text text-transparent">
                performance
              </span>
              .
            </p>
          </div>
        </motion.div>

        {/* Enhanced CTA button */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-bold text-lg shadow-2xl hover:shadow-amber-400/25 transition-all duration-300 group relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000" />

            <span>Partner With Us</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ➜
            </motion.span>
          </motion.a>

          <p className="text-gray-400 mt-4 text-sm">
            Join our network of innovative partners shaping the future
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
