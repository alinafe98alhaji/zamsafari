"use client";

import { motion, Variants } from "framer-motion";

// Container animation for staggering children
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25 // ✅ correct placement
    }
  }
};

// Fade-up animation for text
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-20 bg-gray-900 text-gray-100"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-amber-300 mb-6"
          variants={fadeUp}
        >
          ABOUT ZAMSAFARI HOLDINGS GROUP USA
        </motion.h2>

        <motion.h3
          className="text-xl md:text-2xl font-semibold text-white mb-4"
          variants={fadeUp}
        >
          Who We Are
        </motion.h3>

        <motion.p
          className="text-gray-300 leading-relaxed mb-6 text-left md:text-center"
          variants={fadeUp}
        >
          ZamSafari Holdings Group USA is the parent company of the ZamSafari
          ecosystem — a powerful bridge between international capital and
          Zambian opportunity. Registered and headquartered in the United
          States, we exist to provide global investors, corporate partners, and
          diaspora stakeholders with a trusted, regulated investment platform
          into Zambia’s multi-sector growth story.
          <br />
          <br />
          Our corporate mandate is simple yet transformative:{" "}
          <span className="font-semibold text-amber-300">
            To channel global confidence into Zambia’s progress — responsibly,
            transparently, and profitably.
          </span>
        </motion.p>

        <motion.h3
          className="text-xl md:text-2xl font-semibold text-white mb-4"
          variants={fadeUp}
        >
          Why the USA Base Matters
        </motion.h3>

        <motion.p
          className="text-gray-300 leading-relaxed text-left md:text-center"
          variants={fadeUp}
        >
          Being incorporated in the United States enables ZamSafari Holdings to
          operate under international financial compliance standards (AML,
          FATCA, SEC norms), ensuring every investment is traceable, auditable,
          and protected. For our partners, this means{" "}
          <span className="font-semibold text-amber-300">
            peace of mind, credibility, and assured governance
          </span>{" "}
          in every transaction.
        </motion.p>
      </motion.div>
    </section>
  );
}
