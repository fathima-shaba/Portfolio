"use client";

import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="page"
      id="introduction"
    >
      <div className="section-header">
        <span className="section-label">Profile</span>
        <h2 className="text-3xl font-bold text-slate-900">Introduction</h2>
      </div>
      <p className="text-lg text-slate-700 leading-relaxed">
        I am a Computer Science student at Calicut University with a clear focus on frontend development, UX, and building accessible web applications using modern tools like React, Next.js, and Tailwind CSS.
      </p>
    </motion.section>
  );
}
