"use client";

import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaCalendar,
  FaChartLine,
  FaRocket,
  FaGraduationCap,
  FaNewspaper,
  FaPlay
} from "react-icons/fa";
import { useState } from "react";

export default function BlogPage() {
  const allPosts = [
    {
      title:
        "Davido Confirmed as Headliner for ZamSafari Festival of Stars 2025",
      category: "Festival",
      excerpt:
        "International Afrobeats superstar Davido joins ZamSafari's inaugural music festival, set to attract over 30,000 attendees to Africa's newest entertainment destination.",
      date: "Dec 15, 2024",
      readTime: "3 min read",
      image: "/photo.jpg",
      icon: <FaPlay className="text-2xl" />,
      gradient: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      title: "Groundbreaking Announced for Tale Green City Phase 1",
      category: "Development",
      excerpt:
        "Construction to begin on Zambia's first fully integrated smart city, featuring sustainable infrastructure and innovative urban planning solutions.",
      date: "Dec 10, 2024",
      readTime: "4 min read",
      image: "/groundbreaking.jpg",
      icon: <FaRocket className="text-2xl" />,
      gradient: "from-green-500 to-emerald-500",
      featured: true
    },
    {
      title: "ZamSafari Holdings USA Opens Funding Window for Global Investors",
      category: "Investment",
      excerpt:
        "New investment round opens with $50M target, offering international investors exclusive access to Zambia's booming tourism and real estate sectors.",
      date: "Dec 5, 2024",
      readTime: "5 min read",
      image: "/investment-meeting.jpg",
      icon: <FaChartLine className="text-2xl" />,
      gradient: "from-blue-500 to-cyan-500",
      featured: false
    },
    {
      title:
        "Zampreneurs Masterclass 2025 Empowers Zambia's New Generation of Leaders",
      category: "Education",
      excerpt:
        "22-week intensive program launches to train 500 young Zambian entrepreneurs in business development and innovation strategies.",
      date: "Nov 28, 2024",
      readTime: "4 min read",
      image: "/masterclass.jpg",
      icon: <FaGraduationCap className="text-2xl" />,
      gradient: "from-orange-500 to-red-500",
      featured: false
    },

    {
      title: "International Media Coverage Reaches 1 Billion Impressions",
      category: "Media",
      excerpt:
        "ZamSafari project featured in Forbes, Bloomberg, and CNN, generating unprecedented global attention for Zambian tourism.",
      date: "Nov 15, 2024",
      readTime: "2 min read",
      image: "/media-coverage.jpg",
      icon: <FaNewspaper className="text-2xl" />,
      gradient: "from-indigo-500 to-purple-500",
      featured: false
    }
  ];

  const categories = [
    "All",
    "Festival",
    "Development",
    "Investment",
    "Education",
    "Media"
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? allPosts
      : allPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = allPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen font-sans overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 px-6 md:px-20 py-28">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
            <FaBullhorn className="text-amber-300 text-lg" />
            <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">
              Latest Updates
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
            News & Media
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-green-400 mx-auto mb-8 rounded-full" />

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest developments, announcements, and
            milestones from ZamSafari Holdings and our groundbreaking projects
            across Zambia.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(cat =>
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm border ${selectedCategory ===
              cat
                ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 shadow-lg border-amber-400"
                : "bg-gray-800/50 text-gray-300 border-gray-600 hover:bg-gray-700/50 hover:border-amber-400/30"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          )}
        </motion.div>

        {/* Featured Posts */}
        {selectedCategory === "All" &&
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-amber-300 mb-8 text-center">
              Featured Stories
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) =>
                <motion.article
                  key={index}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.gradient} flex items-center justify-center text-white`}
                      >
                        {post.icon}
                      </div>
                      <div>
                        <span
                          className={`inline-block px-3 py-1 text-sm font-semibold bg-gradient-to-r ${post.gradient} text-white rounded-full`}
                        >
                          {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                          <FaCalendar className="text-xs" />
                          <span>
                            {post.date}
                          </span>
                          <span>•</span>
                          <span>
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-amber-300 transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* <motion.button
                      className="inline-flex items-center gap-2 text-amber-300 font-semibold group-hover:text-amber-200 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Read Full Story
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button> */}
                  </div>
                </motion.article>
              )}
            </div>
          </motion.div>}

        {/* Regular Posts Grid */}
        <h2 className="text-3xl font-bold text-amber-300 mb-8 text-center">
          More Stories
        </h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {regularPosts.map((post, index) =>
            <motion.article
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-700/50 transition-all duration-500 hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${post.gradient} flex items-center justify-center text-white flex-shrink-0`}
                >
                  {post.icon}
                </div>
                <div className="flex-1">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold bg-gradient-to-r ${post.gradient} text-white rounded-full`}
                  >
                    {post.category}
                  </span>
                  <div className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                    <FaCalendar className="text-xs" />
                    {post.date}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-amber-300 transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <motion.button
                className="w-full py-2 rounded-xl bg-gray-700/50 text-gray-200 text-sm font-semibold hover:bg-gray-600/50 transition-all duration-300 group-hover:border-amber-400/30 border border-transparent"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Read More
              </motion.button>
            </motion.article>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-amber-500 to-yellow-400 rounded-3xl p-1 shadow-2xl inline-block">
            <div className="bg-gray-900 rounded-2xl px-12 py-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Never Miss an Update
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Subscribe to our newsletter and be the first to know about new
                developments and opportunities.
              </p>
              <motion.a
                href="#subscribe"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-bold shadow-lg hover:shadow-amber-400/25 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Subscribe to Newsletter</span>
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
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
