"use client";

import { motion } from "framer-motion";

export default function VisionMissionSection() {
  return (
    <section className="bg-transparent py-24" id="vision-mission">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">Vision <br/>& Mission</h2>
            <div className="w-12 h-1 bg-cyan-500 mt-6"></div>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl p-8"
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-wide mb-4">Vision</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                To build elegant digital experiences that help people connect with ideas, products, and careers in a meaningful way. I envision a web that is fast, accessible, and beautifully designed.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl p-8"
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-wide mb-4">Mission</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                To deliver polished interfaces that are accessible, responsive, and thoughtfully coded. I strive to continuously learn new technologies and apply them to solve real-world problems.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
