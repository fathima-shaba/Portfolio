"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/app/constants";

export default function SkillsSection() {
  return (
    <section className="bg-transparent py-24" id="skills">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          
          <div className="w-full md:w-1/3 sticky top-32">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">Technical<br/>Skills</h2>
            <div className="w-12 h-1 bg-cyan-500 mt-6 mb-6"></div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I leverage a diverse set of modern technologies to build fast, scalable, and responsive digital products.
            </p>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col items-center justify-center text-center hover:bg-zinc-100 dark:bg-zinc-800 hover:shadow-cyan-500/10 transition-colors cursor-pointer"
              >
                <skill.icon className={`text-4xl mb-4 ${skill.color} grayscale hover:grayscale-0 transition-all`} />
                <span className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wide">{skill.name}</span>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
