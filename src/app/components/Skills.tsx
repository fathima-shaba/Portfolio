"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPalette,
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";

export default function Skills() {
  const skills = [
    { name: "React", icon: FaReact, color: "text-blue-500" },
    { name: "Next.js", icon: TbBrandNextjs, color: "text-slate-900" },
    { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-500" },
    { name: "TypeScript", icon: FaJsSquare, color: "text-blue-600" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
    { name: "Tailwind", icon: TbBrandTailwind, color: "text-cyan-500" },
    { name: "Git", icon: FaGitAlt, color: "text-red-600" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="page"
      id="skills"
    >
      <div className="section-header">
        <span className="section-label">Expertise</span>
        <h2 className="text-3xl font-bold text-slate-900">Key Skills</h2>
      </div>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="skill-tag"
          >
            <skill.icon className={`text-lg mr-2 ${skill.color}`} />
            {skill.name}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
