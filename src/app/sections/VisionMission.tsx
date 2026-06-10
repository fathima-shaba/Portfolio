"use client";

import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "@/app/constants";

export default function VisionMissionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_CONFIG.pageTransition.duration }}
      viewport={{ once: true }}
      className="page"
      id="vision-mission"
    >
      <div className="section-header">
        <span className="section-label">Goals</span>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Vision & Mission</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div whileHover={{ scale: ANIMATION_CONFIG.hoverScale }} className="card">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Vision</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            To build elegant digital experiences that help people connect with ideas, products, and careers in a meaningful way.
          </p>
        </motion.div>
        <motion.div whileHover={{ scale: ANIMATION_CONFIG.hoverScale }} className="card">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Mission</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            To deliver polished interfaces that are accessible, responsive, and thoughtfully coded for a better web experience.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
