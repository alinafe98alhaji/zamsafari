"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedImageProps {
  src: string;
  alt: string;
  direction?: "up" | "left" | "right";
  className?: string;
}

const directions = {
  up: { opacity: 0, y: 40 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 }
};

export default function AnimatedImage({
  src,
  alt,
  direction = "up",
  className = ""
}: AnimatedImageProps) {
  return (
    <motion.div
      initial={directions[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={700}
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
}
