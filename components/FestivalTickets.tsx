"use client";
import { motion } from "framer-motion";
import { Ticket, Star, Calendar, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

// Pre-defined star positions to avoid hydration mismatch
const starPositions = [
  { top: "10%", left: "15%", delay: "0.5s" },
  { top: "25%", left: "85%", delay: "1.2s" },
  { top: "40%", left: "25%", delay: "0.8s" },
  { top: "55%", left: "75%", delay: "1.5s" },
  { top: "70%", left: "10%", delay: "0.3s" },
  { top: "85%", left: "90%", delay: "1.8s" },
  { top: "15%", left: "50%", delay: "1.0s" },
  { top: "35%", left: "60%", delay: "0.7s" },
  { top: "65%", left: "40%", delay: "1.3s" },
  { top: "90%", left: "30%", delay: "0.9s" },
  { top: "5%", left: "70%", delay: "1.1s" },
  { top: "45%", left: "5%", delay: "0.6s" },
  { top: "75%", left: "95%", delay: "1.4s" },
  { top: "20%", left: "35%", delay: "0.4s" },
  { top: "50%", left: "85%", delay: "1.6s" },
  { top: "80%", left: "65%", delay: "1.7s" },
  { top: "30%", left: "20%", delay: "0.2s" },
  { top: "60%", left: "45%", delay: "1.9s" },
  { top: "95%", left: "55%", delay: "0.1s" },
  { top: "12%", left: "80%", delay: "2.0s" }
];

export default function FestivalTickets() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Stars - Only render on client to avoid hydration issues */}
      {mounted &&
        <div className="absolute inset-0">
          {starPositions.map((star, i) =>
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: star.top,
                left: star.left,
                animationDelay: star.delay
              }}
            />
          )}
        </div>}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-semibold">
                Presented by Zamsafari
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Festival of{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Stars
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Join us for an unforgettable night of music, entertainment, and
              starlit memories. Zambia&apos;s premier music festival featuring
              international artists and local talent.
            </p>

            <div className="grid grid-cols-2 gap-6 py-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-yellow-400" />
                <div>
                  <p className="font-semibold">December 20, 2025</p>
                  <p className="text-gray-400 text-sm">4:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-yellow-400" />
                <div>
                  <p className="font-semibold">Show Grounds</p>
                  <p className="text-gray-400 text-sm">Lusaka, Zambia</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
            >
              <Ticket className="w-5 h-5" />
              <span>Buy Tickets Now</span>
            </motion.button>
          </motion.div>

          {/* Right Content - Ticket Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {[
              {
                type: "VIP Experience",
                price: "K6,500",
                features: [
                  "Front row seating",
                  "Meet & greet",
                  "VIP lounge access",
                  "Complimentary drinks"
                ],
                color: "from-yellow-500 to-orange-500"
              },
              {
                type: "General Admission",
                price: "K350",
                features: [
                  "Standard seating",
                  "Food vendors access",
                  "Main stage view"
                ],
                color: "from-blue-500 to-purple-500"
              },
              {
                type: "Early Bird",
                price: "K200",
                features: [
                  "Limited availability",
                  "Standard seating",
                  "Early entry"
                ],
                color: "from-green-500 to-teal-500"
              }
            ].map((ticket, index) =>
              <motion.div
                key={ticket.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">
                    {ticket.type}
                  </h3>
                  <span
                    className={`text-2xl font-bold bg-gradient-to-r ${ticket.color} bg-clip-text text-transparent`}
                  >
                    {ticket.price}
                  </span>
                </div>
                <ul className="space-y-2">
                  {ticket.features.map((feature, i) =>
                    <li
                      key={i}
                      className="flex items-center space-x-2 text-gray-300"
                    >
                      <div className="w-1 h-1 bg-yellow-400 rounded-full" />
                      <span className="text-sm">
                        {feature}
                      </span>
                    </li>
                  )}
                </ul>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            Secure your spot with our digital QR code tickets
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Instant delivery</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Mobile-friendly</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Secure QR codes</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Easy entry</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
