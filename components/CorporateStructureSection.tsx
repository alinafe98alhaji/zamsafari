"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaUsers, FaLightbulb, FaBuilding } from "react-icons/fa";

const cards = [
  {
    id: 1,
    icon: <FaUsers />,
    title: "ZamSafari Holdings Group USA",
    subtitle: "Parent Company & Global Investment Gateway",
    points: [
      "Owns controlling shares in all ZamSafari SPVs and subsidiaries",
      "Provides governance, compliance, and investor relations",
      "Oversees remittance channels, equity structures, and joint ventures"
    ]
  },
  {
    id: 2,
    icon: <FaLightbulb />,
    title: "Euzam Consulting Ltd (Zambia)",
    subtitle: "Innovation & Strategic Management Arm",
    points: [
      "Leads business advisory, project planning, and vendor ecosystem development",
      "Manages strategic partnerships, legal structuring, and corporate advisory",
      "Hosts the Zampreneurs Masterclass, empowering professionals and entrepreneurs"
    ]
  },
  {
    id: 3,
    icon: <FaBuilding />,
    title: "Euzam Projects Ltd (Zambia)",
    subtitle: "Engineering & Development Arm",
    points: [
      "Implements ZamSafari Dome, Tale Green City, and other infrastructures",
      "Coordinates with local and international contractors",
      "Ensures sustainability and quality in every project"
    ]
  }
];

export default function CorporateStructureSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 px-6 md:px-20 text-gray-100 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,200,100,0.15)_0%,_transparent_70%)] animate-pulse-slow -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-20 tracking-wide"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          OUR CORPORATE STRUCTURE
        </motion.h2>

        <div className="relative flex justify-center items-center h-[500px] overflow-hidden">
          {cards.map((card, i) => {
            const offset = (i - activeIndex + cards.length) % cards.length;

            let x = "0%";
            let scale = 0.8;
            let opacity = 0.5;
            let zIndex = 10;
            let borderColor = "border-white/20";

            if (offset === 0) {
              x = "0%";
              scale = 1;
              opacity = 1;
              zIndex = 20;
              borderColor = "border-amber-400";
            } else if (offset === 1) {
              x = "120%";
            } else {
              x = "-120%";
            }

            return (
              <motion.div
                key={card.id}
                className={`absolute rounded-3xl p-8 w-80 md:w-96 border ${borderColor} bg-gray-800/60 backdrop-blur-lg shadow-xl`}
                animate={{ x, scale, opacity }}
                style={{ zIndex }}
                transition={{ type: "spring", stiffness: 120, damping: 25 }}
              >
                <div className="h-1 w-16 bg-amber-300 mb-4 rounded-full mx-auto" />
                <h3
                  className={`text-xl md:text-2xl font-semibold mb-3 flex justify-center items-center gap-2 ${offset ===
                  0
                    ? "text-amber-300"
                    : "text-gray-300"}`}
                >
                  {card.icon} {card.title}
                </h3>
                <p className="text-gray-300 mb-3 font-medium">
                  {card.subtitle}
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm text-left">
                  {card.points.map((point, idx) =>
                    <li key={idx}>
                      {point}
                    </li>
                  )}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {cards.map((_, i) =>
            <div
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer ${i ===
              activeIndex
                ? "bg-amber-400"
                : "bg-gray-600"}`}
              onClick={() => setActiveIndex(i)}
            />
          )}
        </div>
      </div>
    </section>
  );
}
