"use client";

import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "@/app/constants";

export default function IntroductionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_CONFIG.pageTransition.duration }}
      viewport={{ once: true }}
      className="page"
      id="introduction"
    >
      <div className="section-header">
        <span className="section-label">Profile</span>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Introduction</h2>
      </div>
      <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
        I&apos;m Fathima Shaba, a fullstack developer from Perinthalmanna. I build modern, animated portfolios and web applications using React, HTML, CSS, and clean developer tooling in VS Code.
      </p>
    </motion.section>
  );
}
