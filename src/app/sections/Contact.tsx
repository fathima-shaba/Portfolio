"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ANIMATION_CONFIG, CONTACT_INFO } from "@/app/constants";

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_CONFIG.pageTransition.duration }}
      viewport={{ once: true }}
      className="page"
      id="contact"
    >
      <div className="section-header">
        <span className="section-label">Connect</span>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Let&apos;s Talk</h2>
      </div>
      <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
        If you&apos;re looking for a fullstack developer who crafts modern, polished web apps, let&apos;s connect.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {CONTACT_INFO.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            whileHover={{ scale: ANIMATION_CONFIG.hoverScale }}
            className="card flex items-start gap-4 cursor-pointer hover:bg-blue-50 dark:hover:bg-slate-700 transition"
          >
            <item.icon className="mt-1 text-2xl text-blue-600 dark:text-blue-400" />
            <div className="min-w-0">
              <p className="text-xs text-slate-600 dark:text-slate-400 uppercase font-semibold">{item.label}</p>
              <p className="text-slate-900 dark:text-white font-semibold break-words">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
      <div className="flex gap-6 mt-8 justify-center">
        <motion.a
          href="#"
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="text-3xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="text-3xl text-slate-900 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white"
        >
          <FaGithub />
        </motion.a>
      </div>
    </motion.section>
  );
}
