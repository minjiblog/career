"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={fadeVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`relative w-full max-w-5xl mx-auto px-4 md:px-8 py-16 ${className}`}
    >
      {/* Section background overlay */}
      <div className="absolute inset-0 -mx-4 md:-mx-8 bg-white/5 dark:bg-white/3 backdrop-blur-sm rounded-3xl border border-white/10" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
}
