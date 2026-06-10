"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/app/constants";
import { ANIMATION_CONFIG } from "@/app/constants";

export default function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_CONFIG.pageTransition.duration }}
      viewport={{ once: true }}
      className="page skills"
      id="skills"
    >
      <div className="section-header">
        <span className="section-label">Expertise</span>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Key Skills</h2>
      </div>
      <div className="skill-group flex flex-wrap gap-4">
        <span className="skill-tag">JavaScript</span>
        <span className="skill-tag">React</span>
        <span className="skill-tag">HTML & CSS</span>
        <span className="skill-tag">Responsive Design</span>
        <span className="skill-tag">Git</span>
        <span className="skill-tag">UI/UX</span>
        <span className="skill-tag">Vite</span>
        <span className="skill-tag">Accessibility</span>
      </div>
    </motion.section>
  );
}
