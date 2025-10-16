"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaHandshake,
  FaArrowRight
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ContactSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    { left: "90%", top: "50%" }
  ];

  const contactMethods = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "USA Headquarters",
      details:
        "ZamSafari Holdings Group USA\n1200 Pennsylvania Avenue NW\nWashington D.C., USA",
      gradient: "from-amber-500 to-yellow-400"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Zambia Office",
      details:
        "Euzam Projects Ltd\nGoldman Insurance House, ground floor\nLusaka, Zambia",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      details: "info@zamsafari.com\npartnerships@zamsafari.com",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      details: "USA: +1 (555) 123-4567\nZAM: +260 572 365 313",
      gradient: "from-purple-500 to-pink-400"
    }
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-20 py-28 overflow-hidden"
    >
      {/* Background with optimized image display */}
      <div className="absolute inset-0">
        {/* Main background image - optimized for logo visibility */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/logo44.jpg')",
            backgroundSize: "contain", // Changed from cover to contain to show full logo
            backgroundPosition: "center center",
            backgroundAttachment: "fixed"
          }}
        />

        {/* Gradient overlays - adjusted for better logo visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/80 to-gray-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/15 via-transparent to-emerald-900/15" />

        {/* Additional center overlay to enhance logo visibility */}
        <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 30%, rgba(17, 24, 39, 0.8) 70%)" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles - only render on client */}
        {isMounted &&
          PARTICLE_POSITIONS.map((position, i) =>
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-amber-400/30 rounded-full"
              style={position}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + i % 4,
                repeat: Infinity,
                delay: i % 3 * 0.5
              }}
            />
          )}

        {/* Animated glows - positioned to not interfere with logo */}
        <motion.div
          aria-hidden
          className="absolute left-0 top-1/4 w-72 h-72 rounded-full blur-3xl bg-amber-400/15 pointer-events-none"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute right-0 bottom-1/4 w-96 h-96 rounded-full blur-3xl bg-emerald-500/10 pointer-events-none"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl bg-blue-400/5 pointer-events-none"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
            <FaHandshake className="text-amber-300 text-lg" />
            <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
            Contact Us
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-green-400 mx-auto mb-8 rounded-full" />

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to partner with us or learn more about our groundbreaking
            projects? We&apos;d love to hear from you and explore opportunities
            together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {contactMethods.map((method, index) =>
              <motion.div
                key={index}
                className="group bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-2xl border border-gray-700/50 transition-all duration-500 hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} mb-4 text-white shadow-lg`}
                >
                  {method.icon}
                </div>

                <h3 className="text-lg font-bold text-amber-300 mb-3">
                  {method.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                  {method.details}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-amber-300 mb-2">
              Send us a message
            </h3>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/70 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/70 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-700/70 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-700/70 border border-gray-600 text-white focus:outline-none focus:border-amber-400 transition-colors duration-300">
                  <option value="">Select a subject</option>
                  <option value="investment">Investment Opportunity</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="career">Career Opportunity</option>
                  <option value="media">Media Inquiry</option>
                  <option value="general">General Information</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-700/70 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-bold text-lg shadow-lg hover:shadow-amber-400/25 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
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
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-amber-500 to-yellow-400 rounded-3xl p-1 shadow-2xl inline-block">
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl px-12 py-8">
              <FaGlobe className="text-amber-300 text-4xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Global Partnerships
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Interested in international collaboration opportunities?
                Let&apos;s discuss how we can work together.
              </p>
              <motion.a
                href="mailto:partnerships@zamsafari.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-bold shadow-lg hover:shadow-amber-400/25 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Discuss Partnerships</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced gradient overlays for better logo visibility */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent" />
      </div>
    </section>
  );
}
