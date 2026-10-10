"use client";

import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section className="bg-gray-50 py-24 border-y border-gray-100" id="education">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight">Education</h2>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer"
          >
            <div>
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">2021 - 2024</p>
              <h3 className="text-2xl font-black text-black uppercase tracking-wide mb-2">B.Sc. Computer Science</h3>
              <p className="text-lg text-gray-700 font-medium mb-2">Calicut University</p>
              <p className="text-gray-500">
                Focused on software engineering, databases, data structures, and modern web development technologies.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
