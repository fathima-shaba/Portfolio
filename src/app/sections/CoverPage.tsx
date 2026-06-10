"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaCode } from "react-icons/fa";

export default function CoverPageSection() {
  const [photoSrc, setPhotoSrc] = useState("/profile.jpg");

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="page bg-gradient from-blue-600 via-purple-600 to-pink-600 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr] items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block uppercase tracking-widest text-sm font-bold text-white/80 mb-4"
            >
              Fullstack Developer
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I&apos;m Fathima Shaba.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/90 max-w-2xl leading-relaxed"
            >
              I build polished, animated web experiences with React, modern CSS, and clean, responsive interfaces for both dark and light mode.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mx-auto max-w-sm"
          >
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="w-full aspect-square overflow-hidden rounded-full border border-white/15 bg-slate-950">
                <img
                  src={photoSrc}
                  alt="Profile"
                  onError={() => setPhotoSrc("/profile-placeholder.svg")}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
        >
          {[
            { icon: FaReact, label: "React", desc: "Interactive frontend apps" },
            { icon: FaHtml5, label: "HTML/CSS", desc: "Responsive layouts" },
            { icon: FaCode, label: "Clean logic", desc: "Java, C, C++ foundations" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5"
            >
              <item.icon className="text-3xl mb-3" />
              <strong className="block text-lg mb-1">{item.label}</strong>
              <p className="text-sm text-white/80">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
