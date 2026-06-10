"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="page"
      id="about"
    >
      <div className="section-header">
        <span className="section-label">About</span>
        <h2 className="text-3xl font-bold text-slate-900">Professional Summary</h2>
      </div>
      <p className="text-lg text-slate-700 leading-relaxed mb-8">
        As a motivated developer, I enjoy translating ideas into intuitive interfaces that feel effortless and modern. I combine strong technical foundations with a user-centered approach to design and development.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div whileHover={{ scale: 1.02 }} className="card">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Career Focus</h3>
          <ul className="space-y-3 text-slate-700">
            <li>• Frontend with React & Next.js</li>
            <li>• Component-driven UI design</li>
            <li>• Performance and accessibility</li>
          </ul>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} className="card">
          <h3 className="text-xl font-bold text-slate-900 mb-4">What I Value</h3>
          <ul className="space-y-3 text-slate-700">
            <li>• Clean, maintainable code</li>
            <li>• Clear communication and teamwork</li>
            <li>• Fast iteration and polished delivery</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
