"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUsers,
  FaSchool,
  FaLeaf,
  FaLightbulb,
  FaGlobe,
  FaBuilding,
  FaChartLine,
  FaHandshake,
  FaRocket
} from "react-icons/fa";

export default function ProjectsPage() {
  // Projects data with enhanced visuals
  const projects = [
    {
      title: "ZamSafari Dome & Waterparks",
      description:
        "Africa's largest indoor amusement and waterpark — a world-record-claimable destination set to redefine tourism in Zambia. Featuring luxury hospitality, cable cars, retail zones, and entertainment complexes.",
      badge: "World-record claimable",
      gradient: "from-yellow-400 via-amber-300 to-yellow-500",
      icon: <FaGlobe className="text-4xl" />,
      stats: ["17 Records", "5M Visitors/Yr", "2026 Launch"],
      image: "/dome-concept.jpg"
    },
    {
      title: "Tale Green City – Smart Living",
      description:
        "A 306-acre sustainable smart city combining serviced plots, villas, and condominiums with integrated solar energy, modern infrastructure, and green technology in Chisamba, Central Province.",
      badge: "Sustainable Smart City",
      gradient: "from-green-400 via-emerald-300 to-green-500",
      icon: <FaLeaf className="text-4xl" />,
      stats: ["306 Acres", "10K Homes", "Net Zero"],
      image: "/green-city.jpg"
    },
    {
      title: "ZamSafari Mall & Hilton Resort",
      description:
        "An international hospitality and retail hub featuring world-renowned brands, restaurants, and leisure attractions — connecting Zambia's tourism corridor to the global experience economy.",
      badge: "Luxury Hospitality & Retail",
      gradient: "from-blue-400 via-cyan-300 to-blue-500",
      icon: <FaBuilding className="text-4xl" />,
      stats: ["5-Star", "200+ Stores", "2027 Opening"],
      image: "/resort-concept.jpg"
    }
  ];

  // Investment data
  const investmentAssurances = [
    "Fully compliant with international banking and anti-money-laundering frameworks",
    "Transparent reporting and quarterly financial disclosures",
    "Registered shareholding and equity agreements under dual-jurisdiction law",
    "Tax-efficient remittance options and guaranteed oversight"
  ];

  const investmentModels = [
    { name: "Direct Equity Participation", icon: <FaChartLine /> },
    { name: "Convertible Bonds / Notes", icon: <FaHandshake /> },
    { name: "Strategic Sponsorships", icon: <FaRocket /> },
    { name: "Vendor Equity Partnerships", icon: <FaUsers /> },
    { name: "Real Estate Joint Ventures", icon: <FaBuilding /> }
  ];

  // Impact pillars
  const impactPillars = [
    {
      icon: <FaUsers className="text-2xl" />,
      text: "Over 12,000 jobs projected across all phases",
      number: "12K+",
      suffix: "Jobs"
    },
    {
      icon: <FaCheckCircle className="text-2xl" />,
      text: "Local vendor inclusion and procurement prioritization",
      number: "80%",
      suffix: "Local"
    },
    {
      icon: <FaSchool className="text-2xl" />,
      text: "Youth and women empowerment through training and contracts",
      number: "5K",
      suffix: "Trained"
    },
    {
      icon: <FaLeaf className="text-2xl" />,
      text: "Green construction principles with renewable energy systems",
      number: "100%",
      suffix: "Renewable"
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      text: "Educational reinvestment through Zampreneurs Masterclasses",
      number: "22",
      suffix: "Classes"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400/10 border border-amber-400/20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">
              Transforming Zambia&apos;s Future
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            FLAGSHIP
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-200 to-green-400">
              PROJECTS
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Pioneering Africa&apos;s next generation of{" "}
            <span className="text-amber-300 font-semibold">tourism</span>,
            <span className="text-green-300 font-semibold">
              {" "}sustainable living
            </span>, and
            <span className="text-blue-300 font-semibold">
              {" "}luxury hospitality
            </span>{" "}
            through visionary development.
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-green-400 mx-auto mb-8 rounded-full" />
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-bold text-lg shadow-2xl hover:shadow-amber-400/25 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Projects</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
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
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute bottom-10 left-10 text-amber-300/20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaGlobe className="text-6xl" />
        </motion.div>
        <motion.div
          className="absolute top-10 right-10 text-green-300/20"
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <FaLeaf className="text-6xl" />
        </motion.div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-28 px-6 md:px-20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-6">
              Visionary{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-amber-400">
                Developments
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-green-400 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three iconic projects designed to position Zambia as Africa&apos;s
              next premier destination for tourism, innovation, and sustainable
              living.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) =>
              <motion.div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Badge */}
                  <span className="inline-block bg-black/30 backdrop-blur-md text-amber-300 px-4 py-2 rounded-full mb-6 text-sm font-semibold border border-amber-400/20">
                    {project.badge}
                  </span>

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 text-white shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {project.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4 mb-6">
                    {project.stats.map((stat, statIndex) =>
                      <div key={statIndex} className="text-center">
                        <div className="text-amber-300 font-bold text-lg">
                          {stat}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="w-full py-3 rounded-xl bg-gray-700/50 backdrop-blur-sm border border-gray-600 text-gray-200 font-semibold hover:bg-gray-600/50 transition-all duration-300 group-hover:border-amber-400/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Investment Opportunities */}
      <section className="py-28 px-6 md:px-20 bg-gray-800/30 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-6">
              Investment{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-amber-400">
                Opportunities
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-green-400 mx-auto mb-8 rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Investor Assurances */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-amber-300 mb-6 flex items-center gap-3">
                <FaCheckCircle className="text-amber-300" />
                Investor Assurances
              </h3>
              <ul className="space-y-4">
                {investmentAssurances.map((item, index) =>
                  <motion.li
                    key={index}
                    className="flex items-start gap-4 text-gray-200 p-3 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      {item}
                    </span>
                  </motion.li>
                )}
              </ul>
            </motion.div>

            {/* Investment Models */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-amber-300 mb-6 flex items-center gap-3">
                <FaChartLine className="text-amber-300" />
                Investment Models
              </h3>
              <div className="space-y-4">
                {investmentModels.map((model, index) =>
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-amber-300">
                        {model.icon}
                      </div>
                      <span className="text-gray-200 font-medium">
                        {model.name}
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#request"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-bold text-lg shadow-2xl hover:shadow-amber-400/25 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Request Investor Prospectus</span>
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
          </motion.div>
        </div>
      </section>

      {/* Enhanced Impact & Legacy */}
      <section className="py-28 px-6 md:px-20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-6">
              Impact &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-amber-400">
                Legacy
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-green-400 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every ZamSafari project is built with one guiding belief —
              development must empower. Our initiatives create jobs, skills, and
              shared prosperity while protecting Zambia&apos;s environment and
              heritage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactPillars.map((pillar, index) =>
              <motion.div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-700/50 transition-all duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-xl flex items-center justify-center text-white">
                      {pillar.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-amber-300">
                        {pillar.number}
                      </span>
                      <span className="text-amber-200 font-semibold">
                        {pillar.suffix}
                      </span>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
