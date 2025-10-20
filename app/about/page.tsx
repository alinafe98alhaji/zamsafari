"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedImage from "@/components/AnimatedImage";
import {
  FaTrophy,
  FaRulerCombined,
  FaBriefcase,
  FaChartLine,
  FaHome,
  FaGlobeAmericas
} from "react-icons/fa";

// Simplified variants without transition objects in the variant definitions
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  const highlights = [
    {
      icon: <FaTrophy className="text-2xl" />,
      title: "17 Guinness World Records",
      desc:
        "From dome size to water rides, ZamSafari will place Zambia in the global record books.",
      gradient: "from-amber-500 to-yellow-400"
    },
    {
      icon: <FaRulerCombined className="text-2xl" />,
      title: "Scale",
      desc:
        "306 acres combining tourism, entertainment, and residential living — larger than 230 football fields.",
      gradient: "from-emerald-500 to-green-400"
    },
    {
      icon: <FaBriefcase className="text-2xl" />,
      title: "Jobs",
      desc: "Over 25,000 jobs (construction + permanent).",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Economy",
      desc:
        "Billions of dollars in projected GDP contribution through tourism, real estate, and retail.",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: <FaHome className="text-2xl" />,
      title: "Housing",
      desc:
        "Thousands of smart homes designed for Zambians and diaspora professionals.",
      gradient: "from-orange-500 to-red-400"
    },
    {
      icon: <FaGlobeAmericas className="text-2xl" />,
      title: "Tourism Impact",
      desc:
        "Designed to attract millions of international visitors annually, making Zambia a new African leisure capital.",
      gradient: "from-indigo-500 to-purple-400"
    }
  ];

  const boardQuotes = [
    {
      quote:
        "ZamSafari is a once-in-a-generation project. It will not only put Zambia into the Guinness World Records but will also redefine Africa's place in global tourism and smart city development.",
      author: "Jonette .H. Coetzee, Chief Executive Officer",
      role: "Visionary Leadership"
    },
    {
      quote:
        "With secured land, international SPV structures, and banking in Zambia and the U.S., this project is designed for transparency and global participation.",
      author: "Dr. R.D. White, Chairman",
      role: "Strategic Oversight"
    },
    {
      quote:
        "A world-class city within a city — a place where families, entrepreneurs, and international visitors will all find opportunity.",
      author: "Steven R. Fisher, Group Managing Director",
      role: "Operational Excellence"
    },
    {
      quote:
        "ZamSafari is more than real estate; it is Zambia's chance to create a tourism anchor comparable to Dubai's IMG Worlds of Adventure or Abu Dhabi's Warner Bros World.",
      author: "Ms. Casey M.C. Corquodale, Chief Strategy Officer",
      role: "Strategic Innovation"
    },
    {
      quote:
        "Every record claimable, every smart living feature, and every innovative design is a statement to the world that Zambia can lead Africa in global-scale development.",
      author: "Dr. Eddie Mutale, Chief Innovation Officer",
      role: "Technical Vision"
    }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white via-green-50 to-amber-50 text-gray-800 pt-24 px-6 md:px-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Hero Section */}
      <motion.section
        className="text-center mb-20 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-700 font-semibold text-sm uppercase tracking-wide">
            The Future of African Tourism
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-amber-500 to-green-700 leading-tight">
          ZamSafari Dome &<br />Tale Green City
        </h1>

        <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-green-500 mx-auto mb-8 rounded-full" />

        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
          A{" "}
          <span className="font-bold text-green-600">
            306-acre mega-development
          </span>{" "}
          reshaping Zambia&apos;s future in tourism, real estate, and
          innovation.
        </p>
      </motion.section>

      {/* Hero Visual + Intro Text */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 relative z-10">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <AnimatedImage
              src="/logo44.jpg"
              alt="ZamSafari Dome"
              direction="up"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Zambia is set to make history with the unveiling of the{" "}
              <strong className="text-green-700">
                ZamSafari Dome & Tale Green City
              </strong>, featuring Africa&apos;s first indoor safari dome,
              waterpark, luxury residential estates, international retail, and a
              fully integrated smart city.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Designed to achieve{" "}
              <strong className="text-amber-600">
                17 Guinness World Record claimables
              </strong>, including the largest indoor amusement dome in Africa
              and one of the world&apos;s longest indoor water roller coasters,
              this is Africa&apos;s first integrated safari-themed dome city.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Highlights Cards */}
      <motion.section
        className="max-w-7xl mx-auto mb-28 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-green-900"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Project{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-green-600">
            Highlights
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map(item =>
            <motion.div
              key={item.title}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-green-100/50 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Icon */}
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 text-white shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>

              <h3 className="font-bold text-green-900 text-xl mb-4 group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4 transition-all">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Board Quotes */}
      <motion.section
        className="max-w-6xl mx-auto mb-28 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-green-900"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          The Board&apos;s{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-green-600">
            Vision
          </span>
        </motion.h2>

        <div className="space-y-6">
          {boardQuotes.map((item, idx) =>
            <motion.div
              key={idx}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border-l-4 border-green-500 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <blockquote className="text-xl text-gray-700 leading-relaxed italic mb-6 relative z-10">
                &quot;{item.quote}&quot;
              </blockquote>

              <div className="flex items-center justify-between relative z-10">
                <div>
                  <span className="block font-bold text-green-900 text-lg">
                    {item.author}
                  </span>
                  <span className="text-green-600 text-sm font-medium">
                    {item.role}
                  </span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-amber-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {idx + 1}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Accessible Yet Ambitious */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-28 relative z-10">
        <motion.div
          className="space-y-6 order-2 lg:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Accessible Yet{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-green-600">
              Ambitious
            </span>
          </h2>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span>
                  Serviced plots (600 sqm) from just{" "}
                  <strong className="text-green-600">US$306</strong>, payable
                  over 12–60 months with 0% downpayment.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span>
                  Founding Members join with{" "}
                  <strong className="text-amber-600">US$99</strong>, gaining:
                </span>
              </li>
              <ul className="ml-9 space-y-2 text-gray-600">
                <li>• 22 Zampreneurs Masterclasses</li>
                <li>• 1-year consultancy with EUZAM Consulting</li>
                <li>• Vendorship opportunities inside the Dome & Smart City</li>
              </ul>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="relative order-1 lg:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <AnimatedImage
              src="/photo.jpg"
              alt="Accessible Yet Ambitious"
              direction="up"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Launch Event */}
      <motion.section
        className="max-w-4xl mx-auto mb-28 text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-green-100">
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <AnimatedImage src="/2023.webp" alt="Launch Event" direction="up" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
              October 31, 2025
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            Launch at{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-green-600">
              Radisson Blu
            </span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Official launch at Radisson Blu Hotel, Lusaka. Governance documents,
            architectural renders, proof of land, and investor partnerships will
            be presented.
          </p>

          <motion.button
            className="mt-8 px-8 py-4 bg-gradient-to-r from-green-600 to-amber-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register for Launch Event
          </motion.button>
        </div>
      </motion.section>

      {/* About ZamSafari */}
      <motion.section
        className="max-w-4xl mx-auto mb-20 text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="bg-gradient-to-br from-green-500 to-amber-400 rounded-3xl p-1 shadow-2xl">
          <div className="bg-white rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-green-900 mb-6">
              About{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-green-600">
                ZamSafari
              </span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              ZamSafari Dome & Tale Green City Holdings Company (Zambia & USA)
              is delivering Africa&apos;s first integrated indoor safari dome
              and smart city. Co-owned by EUZAM Consulting Zambia and the
              Lunda&apos;s Empire Trust Zambia, with global investor oversight
              from the Global Angel Investors Network (GAIN).
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {["Innovation", "Sustainability", "Excellence"].map(value =>
                <motion.div
                  key={value}
                  className="bg-green-50 rounded-xl p-4 border border-green-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-green-600 font-bold text-lg">
                    {value}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
