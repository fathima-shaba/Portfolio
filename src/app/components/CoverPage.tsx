"use client";

import { motion } from "framer-motion";
import { FaReact, FaMobile, FaCode } from "react-icons/fa";

export default function CoverPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="page bg-gradient from-blue-600 via-purple-600 to-pink-600 text-zinc-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block uppercase tracking-widest text-sm font-bold text-zinc-900 dark:text-white/80 mb-4"
          >
            Digital Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Hi, I&apos;m Fathima shaba  — building modern frontend experiences with React.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-zinc-900 dark:text-white/90 max-w-2xl leading-relaxed"
          >
            I create polished, responsive user interfaces that help brands and projects feel confident, clear, and impactful.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { icon: FaReact, label: "React", desc: "Fast, interactive UIs" },
            { icon: FaMobile, label: "Responsive", desc: "Mobile-first design" },
            { icon: FaCode, label: "Clean Code", desc: "Maintainable components" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5"
            >
              <item.icon className="text-3xl mb-3" />
              <strong className="block text-lg mb-1">{item.label}</strong>
              <p className="text-sm text-zinc-900 dark:text-white/80">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
