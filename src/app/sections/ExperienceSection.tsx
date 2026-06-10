"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { ANIMATION_CONFIG } from "@/app/constants";

export default function ExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_CONFIG.pageTransition.duration }}
      viewport={{ once: true }}
      className="page"
      id="experience"
    >
      <div className="section-header">
        <span className="section-label">Experience</span>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Recent Work</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div whileHover={{ scale: ANIMATION_CONFIG.hoverScale }} className="card">
          <div className="flex items-center gap-3 mb-3">
            <FaBriefcase className="text-2xl text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frontend Project Lead</h3>
          </div>
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            Designed and implemented responsive web interfaces for academic and personal projects using React and modern CSS techniques.
          </p>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>✓ Created reusable component libraries</li>
            <li>✓ Optimized performance for mobile devices</li>
            <li>✓ Implemented accessibility best practices</li>
          </ul>
        </motion.div>
        <motion.div whileHover={{ scale: ANIMATION_CONFIG.hoverScale }} className="card">
          <div className="flex items-center gap-3 mb-3">
            <FaBriefcase className="text-2xl text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">UI Developer</h3>
          </div>
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            Built polished page layouts, visual hierarchy, and intuitive interfaces for modern web applications.
          </p>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>✓ Collaborated on project planning</li>
            <li>✓ Focused on clarity and accessibility</li>
            <li>✓ Delivered pixel-perfect implementations</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
