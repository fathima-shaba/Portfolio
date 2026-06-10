"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="page bg-gradient-to-r from-slate-100 to-slate-50 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        Thank you for exploring my portfolio.
      </h2>
      <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
        I build thoughtful digital experiences with attention to detail, performance, and a polished visual voice. Let&apos;s create something amazing together.
      </p>
    </motion.section>
  );
}
