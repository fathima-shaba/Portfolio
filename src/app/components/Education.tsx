"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="page"
      id="education"
    >
      <div className="section-header">
        <span className="section-label">Education</span>
        <h2 className="text-3xl font-bold text-slate-900">Academic Background</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div whileHover={{ scale: 1.02 }} className="card">
          <div className="flex items-center gap-3 mb-3">
            <FaGraduationCap className="text-2xl text-blue-600" />
            <h3 className="text-xl font-bold text-slate-900">Calicut University</h3>
          </div>
          <p className="text-slate-700 font-semibold mb-2">Bachelor of Computer Science</p>
          <p className="text-sm text-slate-600">
            Ongoing coursework in software development, data structures, and web technologies.
          </p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} className="card">
          <div className="flex items-center gap-3 mb-3">
            <FaGraduationCap className="text-2xl text-blue-600" />
            <h3 className="text-xl font-bold text-slate-900">Web Development</h3>
          </div>
          <p className="text-slate-700 font-semibold mb-2">React, JavaScript, HTML, CSS</p>
          <p className="text-sm text-slate-600">
            Practical projects focused on responsive, user-first frontends.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
