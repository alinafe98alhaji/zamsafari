"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Projects",
      href: "/projects",
      dropdown: [
        { label: "ZamSafari Dome", href: "/projects#dome" },
        { label: "Tale Green City", href: "/projects#city" },
        { label: "Hilton Resort", href: "/projects#resort" }
      ]
    },
    {
      label: "News",
      href: "/blog"
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${scrolled
        ? "backdrop-blur-xl bg-gray-900/80 shadow-2xl border-b border-gray-700/50"
        : "backdrop-blur-md bg-gray-900/60"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Image
              src="/logo44.jpg"
              alt="ZamSafari Logo"
              width={80}
              height={60}
              className="rounded-full object-contain border-2 border-amber-400/30 group-hover:border-amber-400/60 transition-colors duration-300"
            />
          </motion.div>
          <div className="hidden md:block">
            <motion.span
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-200"
              whileHover={{ scale: 1.02 }}
            >
              ZamSafari
            </motion.span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map(item =>
            <li key={item.href} className="relative">
              {item.dropdown
                ? <div
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="relative"
                  >
                    <motion.div
                      className={`flex items-center gap-1 px-4 py-3 transition-colors duration-300 cursor-pointer group ${isActiveLink(
                        item.href
                      )
                        ? "text-amber-300"
                        : "text-gray-200 hover:text-amber-300"}`}
                      whileHover={{ y: -1 }}
                    >
                      <span>
                        {item.label}
                      </span>
                      <motion.div
                        animate={{
                          rotate: activeDropdown === item.label ? 180 : 0
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </motion.div>

                    {/* Active underline for dropdown parent */}
                    {isActiveLink(item.href) &&
                      <motion.div
                        className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />}

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.label &&
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden"
                        >
                          {item.dropdown.map(dropdownItem =>
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-gray-200 hover:text-amber-300 hover:bg-gray-700/50 transition-all duration-300 border-b border-gray-700/30 last:border-b-0"
                            >
                              {dropdownItem.label}
                            </Link>
                          )}
                        </motion.div>}
                    </AnimatePresence>
                  </div>
                : <Link href={item.href}>
                    <motion.div
                      className="relative px-4 py-3 transition-colors duration-300 group"
                      whileHover={{ y: -1 }}
                    >
                      <span
                        className={`${isActiveLink(item.href)
                          ? "text-amber-300"
                          : "text-gray-200 hover:text-amber-300"}`}
                      >
                        {item.label}
                      </span>

                      {/* Animated underline - always show for active, show on hover for others */}
                      <motion.div
                        className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full"
                        initial={{ scaleX: isActiveLink(item.href) ? 1 : 0 }}
                        animate={{ scaleX: isActiveLink(item.href) ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>}
            </li>
          )}
        </ul>

        {/* CTA Button */}
        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-bold text-sm shadow-lg hover:shadow-amber-400/25 transition-all duration-300"
          >
            Buy Tickets
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-amber-300 hover:text-amber-200 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen &&
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-800/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden"
          >
            <ul className="flex flex-col py-4">
              {navItems.map((item, index) =>
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.dropdown
                    ? <div className="border-b border-gray-700/30 last:border-b-0">
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.label ? null : item.label
                            )}
                          className={`w-full flex items-center justify-between px-6 py-4 transition-colors duration-300 ${isActiveLink(
                            item.href
                          )
                            ? "text-amber-300"
                            : "text-gray-200 hover:text-amber-300"}`}
                        >
                          <span>
                            {item.label}
                          </span>
                          <motion.div
                            animate={{
                              rotate: activeDropdown === item.label ? 180 : 0
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={16} />
                          </motion.div>
                        </button>

                        {/* Active indicator for mobile dropdown */}
                        {isActiveLink(item.href) &&
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-amber-400 to-yellow-300 rounded-r-full" />}

                        {/* Mobile Dropdown */}
                        <AnimatePresence>
                          {activeDropdown === item.label &&
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-gray-700/50"
                            >
                              {item.dropdown.map(dropdownItem =>
                                <Link
                                  key={dropdownItem.href}
                                  href={dropdownItem.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="block px-10 py-3 text-gray-300 hover:text-amber-300 hover:bg-gray-600/50 transition-all duration-300 border-t border-gray-600/30"
                                >
                                  {dropdownItem.label}
                                </Link>
                              )}
                            </motion.div>}
                        </AnimatePresence>
                      </div>
                    : <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block px-6 py-4 transition-all duration-300 border-b border-gray-700/30 last:border-b-0 relative ${isActiveLink(
                          item.href
                        )
                          ? "text-amber-300 bg-gray-700/30"
                          : "text-gray-200 hover:text-amber-300 hover:bg-gray-700/50"}`}
                      >
                        {item.label}
                        {/* Active indicator for mobile */}
                        {isActiveLink(item.href) &&
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-amber-400 to-yellow-300 rounded-r-full" />}
                      </Link>}
                </motion.li>
              )}

              {/* Mobile CTA */}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="px-6 py-4 border-t border-gray-700/30"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-bold shadow-lg transition-all duration-300"
                >
                  Get Started
                </Link>
              </motion.li>
            </ul>
          </motion.div>}
      </AnimatePresence>
    </motion.nav>
  );
}
