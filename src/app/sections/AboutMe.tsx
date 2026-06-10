"use client";

import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "@/app/constants";

export default function AboutMeSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_CONFIG.pageTransition.duration }}
      viewport={{ once: true }}
      className="page"
      id="about"
    >
      <div className="section-header">
        <span className="section-label">About</span>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Summary</h2>
      </div>
      <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
        I&apos;m a fullstack developer with a strong computer science foundation from Calicut University. I create modern, responsive web applications using React, HTML, CSS, Java, C, and C++.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div whileHover={{ scale: ANIMATION_CONFIG.hoverScale }} className="card">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Core Expertise</h3>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>• Frontend development with React and responsive design</li>
            <li>• Modern portfolio experiences with dark/light theme support</li>
            <li>• Clean development in VS Code with animation and polish</li>
          </ul>
        </motion.div>
        <motion.div whileHover={{ scale: ANIMATION_CONFIG.hoverScale }} className="card">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Academic Background</h3>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>• Calicut University — Computer Science</li>
            <li>• Strong fundamentals in Java, C, and C++</li>
            <li>• Passion for polished, professional user interfaces</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
